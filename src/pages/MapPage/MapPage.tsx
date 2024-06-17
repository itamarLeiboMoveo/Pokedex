import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import NavBar from '../../components/NavBar/NavBar.tsx';
import { Link } from 'react-router-dom';
import { usePokemonContext } from '../../context/PokemonContext.tsx';
import moveoLogo from "../../../src/assets/moveoLogo.png";


const containerStyle = {
  width: '800px',
  height: '600px'
};

const center = {
  lat: 32.08,
  lng: 34.78
};

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
  const [directions, setDirections] = useState(null); 
  const { pokeArr } = usePokemonContext();
  const [pokePositions, setPokePositions] = useState({});

  useEffect(() => {
    const positions = {};
    pokeArr.forEach(poke => {
      const randomPoint = getRandomPoint();
      positions[poke.id] = randomPoint;
    });
    setPokePositions(positions);
  }, [pokeArr]);

  pokeArr.forEach(poke => {
    const randomPoint = getRandomPoint();
    pokePositions[poke.id] = randomPoint;
  })

  return (
    <div>
      <NavBar />
      <div className='link-div'><Link to="/" className={"home"} >← Home Page</Link></div>
      <LoadScript googleMapsApiKey="AIzaSyDPQZH7Xe_NjFHS8YnzYsX9v6Roo8xBQrM">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        >
          <MarkerF 
          position={{ lat: 32.063928, lng: 34.772902 }} 
          icon={moveoLogo} />
          {pokeArr && pokeArr.map(poke => (
            <MarkerF
              key={poke.id}
              position={{ lat: pokePositions[poke.id].latitude, lng: pokePositions[poke.id].longitude }}
              icon={poke.img}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default MapPage;
