import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, DirectionsService, DirectionsRenderer, InfoWindow, useLoadScript } from '@react-google-maps/api';
import NavBar from '../../components/NavBar/NavBar.tsx';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../../context/PokemonContext.tsx';
import moveoLogo from '../../../src/assets/moveoLogo.png';
import "./MapPage.scss";
import { Position, CustomTravelMode, containerStyle, center, darkMapStyles, defaultMapStyles } from "../../services/mapVariables.tsx";

function getRandomPoint(): { latitude: number, longitude: number } {
  const latMin = 32.020;
  const latMax = 32.130;
  const lonMin = 34.783;
  const lonMax = 34.820;

  const latitude = Math.random() * (latMax - latMin) + latMin;
  const longitude = Math.random() * (lonMax - lonMin) + lonMin;

  return { latitude, longitude };
}

function MapPage() {
  const { pokeArr } = usePokemonContext();
  const [pokePositions, setPokePositions] = useState<{ [key: number]: Position }>({});
  const [selectedMarker, setSelectedMarker] = useState<pokemon | null>();
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>();
  const [travelMode, setTravelMode] = useState<CustomTravelMode>('DRIVING');
  const [mapStyle, setMapStyle] = useState('default');
  const [showMapTypeControl, setShowMapTypeControl] = useState(true);

  const toggleMapStyle = () => {
    setMapStyle(mapStyle === 'default' ? 'dark' : 'default');
  };

  const toggleMapTypeControl = () => {
    setShowMapTypeControl(!showMapTypeControl);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDPQZH7Xe_NjFHS8YnzYsX9v6Roo8xBQrM",
  });

  useEffect(() => {
    const positions: { [key: number]: Position } = {};
    pokeArr.forEach(poke => {
      const randomPoint = getRandomPoint();
      positions[poke.id] = randomPoint;
    });
    setPokePositions(positions);
  }, [pokeArr]);

  const handleMarkerClick = (marker: pokemon) => {
    setSelectedMarker(marker);
    setInfoWindowOpen(true);
  };

  const handleGetDirections = () => {
    setInfoWindowOpen(false)
    if (selectedMarker && pokePositions[selectedMarker.id] && window.google && window.google.maps) {
      const directionsService = new window.google.maps.DirectionsService();

      const destination = {
        lat: pokePositions[selectedMarker.id].latitude,
        lng: pokePositions[selectedMarker.id].longitude
      };

      directionsService.route(
        {
          origin: { lat: 32.063928, lng: 34.772902 },
          destination,
          travelMode: travelMode === 'DRIVING' ? window.google.maps.TravelMode.DRIVING : window.google.maps.TravelMode.WALKING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Directions request failed due to ${status}`);
          }
        }
      );
    }
  };

  const handleTravelModeChange = (mode: CustomTravelMode) => {
    setTravelMode(mode);
  };

  if (loadError) {
    return <div>Error loading Google Maps script</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className='link-div'><Link to="/" className={"home"} >← Home Page</Link></div>
      <div className="body-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          options={{
            mapTypeControl: showMapTypeControl,
            mapTypeControlOptions: {
              style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: window.google.maps.ControlPosition.TOP_LEFT,
            },
            styles: mapStyle === 'dark' ? darkMapStyles : defaultMapStyles
          }}
        >
          <MarkerF
            position={{ lat: 32.063928, lng: 34.772902 }}
            icon={moveoLogo} />
          {pokeArr && pokeArr.map(poke => (
            <MarkerF
              key={poke.id}
              position={{ lat: pokePositions[poke.id]?.latitude, lng: pokePositions[poke.id]?.longitude }}
              icon={poke.img}
              onClick={() => handleMarkerClick(poke)}
            />
          ))}
          {selectedMarker && infoWindowOpen && pokePositions[selectedMarker.id] && (
            <InfoWindow
              position={{ lat: pokePositions[selectedMarker.id].latitude, lng: pokePositions[selectedMarker.id].longitude }}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div className='info'>
                <img className='info-image' src={selectedMarker.img} />
                <h3>{selectedMarker.name}</h3>
                <button className='directions-button' onClick={handleGetDirections}>Get Directions</button>
                <div className='travel-mode'>
                  <label>
                    <input
                      type="checkbox"
                      checked={travelMode === window.google.maps.TravelMode.DRIVING}
                      onChange={() => handleTravelModeChange('DRIVING')}
                    />
                    Driving
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={travelMode === window.google.maps.TravelMode.WALKING}
                      onChange={() => handleTravelModeChange('WALKING')}
                    />
                    Walking
                  </label>
                </div>
              </div>
            </InfoWindow>
          )}
          {directions && <DirectionsRenderer directions={directions} />}

        <div style={{ position: 'absolute',display:'flex',flexDirection:'column',gap:10, bottom: 30, left: 10, zIndex: 1 }}>
          <button onClick={toggleMapStyle}>
            {mapStyle === 'default' ? 'Switch to Dark Style' : 'Switch to Default Style'}
          </button>
          <button onClick={toggleMapTypeControl}>
            {showMapTypeControl ? 'Hide Map Type Control' : 'Show Map Type Control'}
          </button>
        </div>
        </GoogleMap>
      </div>
    </div>
  )
}

export default MapPage;
