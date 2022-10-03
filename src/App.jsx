import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarket from "./LocationMarket";
import "./App.css";

const App = () => {
  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={12} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarket />
      </MapContainer>
    </div>
  );
};

export default App;
