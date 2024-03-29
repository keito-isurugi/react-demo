import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Box, Text, Button, Input, FormLabel } from "@chakra-ui/react";
import ApiKey from "../../const/api";
import pinHouse from "./pin_house.png"
import MarkersAndInfoWindow from "./MarkersAndInfoWindow"


const containerStyle = {
  height: "500px",
  width: "50%",
};

const markerLabelAkiba = {
  color: "white",
  fontFamily: "sans-serif",
  fontSize: "15px",
  fontWeight: "100",
  text: "5",
  zIndex: "999"
};

const markerLabelIwamotocho = {
  color: "blue",
  fontFamily: "sans-serif",
  fontSize: "30px",
  fontWeight: "100",
  text: "12",
  zIndex: "0"
};

export const Map = () => {
  const [ lat, setLat ] = useState(36.687669847803264)
  const [ lon, setLon ] = useState(137.2187549153436)
  const [address, setAddress] = useState("富山県富山市五番町5-6 河上ビル 4F");


  const center = {
    lat: lat,
    lng: lon,
  };
  
  const positionAkiba = {
    lat: lat,
    lng: lon,
  };
  const positionAkiba2 = {
    lat: 36.687669847803263,
    lng: 137.2187549153435,
  };
  
  const positionIwamotocho = {
    lat: 36.69397,
    lng: 137.7762,
  };

    const geocode = () => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, ( results, status ) => {
        if (status === 'OK') {
          // const center = Object.assign({}, this.state.center);
          // center = {
          //   lat: results[0].geometry.location.lat(),
          //   lng: results[0].geometry.location.lng()
          // };
          setLat(results[0].geometry.location.lat())
          setLon(results[0].geometry.location.lng())
          // this.setState({
          //   center,
          //   isShowMarker: true
          // });
        }
      });
    }

    const divStyle = {
      background: "white",
      fontSize: 7.5,
    };
    
  return (
    <>
      <h1>Google Map</h1>
      <LoadScript googleMapsApiKey={ApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
          <Marker position={positionAkiba2} zIndex={0} icon="https://maps.google.com/mapfiles/ms/micons/blue.png"/>
          <Marker position={positionAkiba} label={markerLabelAkiba} draggable={true} 
          onDragEnd={(e) => markerDragEnd(e)} 
          icon={pinHouse}
          zIndex={999}
          />
          <InfoWindow position={positionAkiba}>
            <div style={divStyle}>
              <h1>秋葉原オフィス</h1>
            </div>
          </InfoWindow>
          {/* <Marker position={positionAkiba} label={markerLabelAkiba} draggable={true} onDragEnd={(e) => console.log(e.latLng.lat())} /> */}
          <Marker position={positionIwamotocho} label={markerLabelIwamotocho} draggable={true}/>
        </GoogleMap>
      </LoadScript>
      <Box w="30%">
        <FormLabel>住所</FormLabel>
        <Input placeholder="住所" onChange={(e) => setAddress(e.target.value)} value={address}/>
        <Button onClick={() => geocode()}>住所検索</Button>
        <FormLabel>緯度</FormLabel>
        <Input placeholder="緯度" onChange={(e) => setLat(Number(e.target.value))} value={lat}/>
        <FormLabel>経度</FormLabel>
        <Input placeholder="経度" onChange={(e) => setLon(Number(e.target.value))} value={lon}/>
      </Box>
      <img src={pinHouse} alt="" />
      <LoadScript googleMapsApiKey={ApiKey}>
        <MarkersAndInfoWindow/>
      </LoadScript>
    </>
  );
};
