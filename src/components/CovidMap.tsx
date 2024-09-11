import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountryData } from "../hooks/useCountryData";
import { LatLngExpression } from "leaflet";
import L from "leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const CovidMap: React.FC = () => {
  const { data, isLoading, isError } = useCountryData();

  //skeleton while loading
  if (isLoading)
    return (
      <>
        <div
          role="status"
          className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse "
        >
          <svg
            className="w-10 h-10 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </>
    );
  if (isError) return <p>Error loading map data</p>;

  // Default center position for the map (world view)
  const defaultPosition: LatLngExpression = [20, 0]; // Latitude, Longitude

  return (
    <MapContainer
      center={defaultPosition}
      zoom={2}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {data?.map((country) => (
        <Marker
          key={country.countryInfo._id + country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                <strong>Active Cases:</strong> {country.active}
              </p>
              <p>
                <strong>Recovered:</strong> {country.recovered}
              </p>
              <p>
                <strong>Deaths:</strong> {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
