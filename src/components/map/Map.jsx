import React from "react";
import "./Map.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  const position = [52.4712, -1.9026];
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((pin) => (
        <Pin key={pin.id} {...pin} />
      ))}
    </MapContainer>
  );
};

export default Map;
