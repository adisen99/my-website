"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type TalkLocation = {
  city: string;
  label: string;
  lat: number;
  lng: number;
};

const pinIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function TalkMap({ locations }: { locations: TalkLocation[] }) {
  return (
    <div className="h-[380px] w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
      <MapContainer center={[20, 0]} zoom={1.2} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker key={location.city} position={[location.lat, location.lng]} icon={pinIcon}>
            <Popup>
              <strong>{location.city}</strong>
              <br />
              {location.label}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
