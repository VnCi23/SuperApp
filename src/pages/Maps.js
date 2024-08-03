import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '750px'
};

const center = {
  lat: 9.745,
  lng: 33.523
};

function Map() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold bg-blue-600 text-center">Chat Page</h1>
      <div className="flex space-x-3 bg-blue-600 p-5 justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         My-area 
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Travel 
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Track
        </button>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyC6U6f6HIJnA3WX9NtQ0n6fPA8cqWMjcbA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  </div>
  )
}

export default React.memo(Map);
