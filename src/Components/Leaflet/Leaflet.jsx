import { map } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Leaflet = () => {
  const position = [40.638043, -73.929457];

  return (

    <div className="p-5 flex justify-center">
        <img className="px-5 md:px-10 lg:w-3/5" src="https://i.ibb.co/YP0qg3q/data-K0-Z58-Yo-SRGSj3ei-TDoa-Rz-B7ibdtj-UU3-V9-Uqrl-Em-Te1-ISVkfvd7-IOft-Yh-K2-84l-L-i-WChzz-Jht-UU5.png" alt="" />
    
    </div>
  );
};

export default Leaflet;
