
export interface Position {
    latitude: number;
    longitude: number;
}

export type CustomTravelMode = 'DRIVING' | 'WALKING';

export const containerStyle = {
    width: '90%',
    height: '78%'
};

export const center = {
    lat: 32.08,
    lng: 34.78
};

export const darkMapStyles = [
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            { color: '#003366' }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            { color: '#333333' }
        ]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            { color: '#444444' }
        ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        { color: '#186318' } // Dark green parks
      ]
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        { color: '#312f2f' } // White road names
      ]
    },
    
];

export const defaultMapStyles = [
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            { color: '#3aa0ff' }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            { color: '#f2f2f2' }
        ]
    }
];

