import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route, useNavigate,createBrowserRouter, RouterProvider } from "react-router-dom";
import { visitedCountries, visitedCities } from "./data";
import { onEachCountryComplex } from "./MapPage";
import L from "leaflet";

import Select from 'react-select';
import apps from "./CountrySelector";
import BelgiumPage from './BelgiumPage';
import ReactDOM from 'react-dom/client';
import { visitedCountriesMarkers } from './visitedCountriesMarkers';



export default function App() {
  const [geoData, setGeoData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);

  const options = [
    { value: "belgium", label: "Belgium" },
    { value: "spain", label: "Spain" },
    { value: "france", label: "France" },
    { value: "jordan", label: "Jordan" },
  ];

  const navigate = useNavigate();

  const handleVisit = () => {
    if (selectedOption) {
      navigate(`/${selectedOption.value}`);
    }
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("GeoJSON fetch error");
        return res.json();
      })
      .then((data) => setGeoData(data))
      .catch((err) => console.error(err));
  }, []);

  function getCountryStyle(feature) {
    const name = feature.properties.name;
    if (visitedCountries.includes(name)) {
      return {
        fillColor: "#1E90FF",
        fillOpacity: 0.4,
        color: "#1E90FF",
        weight: 1,
      };
    }
    return { fillOpacity: 0, weight: 0 };
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Panel */}
      <div className="w-full md:w-[45%] p-8 bg-gray-100 overflow-y-auto font-sans text-gray-800">
        <h1 className="text-blue-600 text-2xl mb-5">My travel stories!</h1>

        {/* Europe Statistic */}
        <div className="flex items-center mb-2 bg-white p-4 rounded-lg shadow">
          <img src={`${process.env.PUBLIC_URL}/images/countries/europe.png`} alt="Europe Map" className="w-20 mr-5" />
          <div>
            <h3 className="text-lg font-semibold">Europe</h3>
            <p>43 countries visited</p>
          </div>
        </div>

        {/* Asia Statistic */}
        <div className="flex items-center mt-1 mb-2 bg-white p-4 rounded-lg shadow">
          <img src={`${process.env.PUBLIC_URL}/images/countries/asia.jpg`} alt="Asia Map" className="w-20 mr-5" />
          <div>
            <h3 className="text-lg font-semibold">Asia</h3>
            <p>13 countries visited</p>
          </div>
        </div>
		
		{/* Africa Statistic */}
        <div className="flex items-center mt-1 mb-2 bg-white p-4 rounded-lg shadow">
          <img src={`${process.env.PUBLIC_URL}/images/countries/africa.jpg`} alt="Asia Map" className="w-20 mr-5" />
          <div>
            <h3 className="text-lg font-semibold">Africa</h3>
            <p>1 visited</p>
          </div>
        </div>

        {/* Country Selector */}
        <div className="mt-1 p-5 bg-white rounded-lg shadow">
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Type country name to view photo gallery"
            className="mb-4"
          />
          {selectedOption && (
            <button
              onClick={handleVisit}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
            >
              {selectedOption.label} stories
            </button>
          )}
        </div>

        {/* Mobile-only View Map Button */}
        <div className="md:hidden mt-4">
          <button
            onClick={() => setShowMapModal(true)}
            className="w-full py-2 px-4 bg-green-600 text-white rounded font-bold hover:bg-green-700"
          >
            View my travel map
          </button>
        </div>
      </div>

      {/* Desktop-only Map */}
      <div className="flex-1 hidden md:block">
        <MapContainer center={[52, 15]} zoom={3} className="w-full h-full min-h-[300px]">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {geoData && (
            <GeoJSON data={geoData} style={getCountryStyle} onEachFeature={onEachCountryComplex} />
          )}
          {/* Add your markers here */}

{visitedCountriesMarkers.map((country, index) => (
    <Marker key={index} position={country.coords} icon={country.icon}>
      <Popup>{country.name}</Popup>
    </Marker>
  ))}

          {/* ... other markers ... */}
        </MapContainer>
      </div>

      {/* Mobile-only Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 md:hidden">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-[80vh] overflow-hidden flex flex-col">
            <MapContainer center={[52, 15]} zoom={3} className="w-full h-[calc(80vh-3rem)]">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {geoData && (
                <GeoJSON data={geoData} style={getCountryStyle} onEachFeature={onEachCountryComplex} />
              )}
              {/* Add your markers here */}
             {visitedCountriesMarkers.map((country, index) => (
    <Marker key={index} position={country.coords} icon={country.icon}>
      <Popup>{country.name}</Popup>
    </Marker>
  ))}


              {/* ... other markers ... */}
            </MapContainer>

            <div className="w-full text-center p-4">
              <button
                onClick={() => setShowMapModal(false)}
                className="py-2 px-4 bg-red-500 text-white rounded font-bold hover:bg-red-600"
              >
                Close Map
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
