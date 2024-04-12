/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

const Mapscrn = (props) => {

const {  isLoaded } = props;

const [selectedMarker, setSelectedMarker] = useState ("");

const containerStyle = {
    width: '100%',
    height: '500px'
  };
  
  const center = {
    lat: 12.971599,
    lng:  77.594566
  };


  const markers = [
  {
    name: 'location-1',
    location: {
        lat: 13.0693,
        lng: 77.7982,
    },
  },
  
    {
      name: 'location-2',
      location: {
          lat: 12.7969,
          lng: 77.3838,
      },
    },

    {
        name: 'location-3',
        location: {
            lat: 12.7409,
            lng: 77.8253,
        },
      },

      {
        name: 'location-4',
        location: {
            lat: 12.971599,
            lng:  77.594566,
        },
      },

  ];
  

return (
 isLoaded && (
    <>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
       
      {markers.map((marker) => {
         return (
            <div key={markers.name}>
                <Marker position ={marker.location}

                    onClick={() =>{
                        setSelectedMarker(marker);
                    }}
                />
            </div>
         )

      })}

      {selectedMarker && (
      
      <InfoWindow position= {selectedMarker.location}>

        <h1>{selectedMarker.name}</h1>

        <button onClick={()=>{
           setSelectedMarker("");

        }}> Close </button>

      </InfoWindow>
      
       )}
     
    </GoogleMap>
    </>
)
); 
};
 export default Mapscrn;






