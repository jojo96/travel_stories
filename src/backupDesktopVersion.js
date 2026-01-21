import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Routes, Route, useNavigate,createBrowserRouter, RouterProvider } from "react-router-dom";
import { visitedCountries, visitedCities } from "./data";
import { onEachCountryComplex } from "./MapPage";
import L from "leaflet";

import { waffleIcon, churchIcon, franceIcon,switzerlandIcon,
austriaIcon,germanyIcon,italyIcon,
spainIcon,netherlandsIcon,irelandIcon,denmarkIcon,
slovakiaIcon,czechRepublicIcon,polandIcon,hungaryIcon,
greeceIcon,portugalIcon,ukIcon,
norwayIcon,swedenIcon,finlandIcon,icelandIcon,
estoniaIcon,latviaIcon,lithuaniaIcon,
croatiaIcon, sloveniaIcon, bosniaIcon, albaniaIcon, macedoniaIcon, 
bulgariaIcon, serbiaIcon, romaniaIcon, moldovaIcon,
montenegroIcon,kosovoIcon,
indiaIcon, uzbekistanIcon, turkeyIcon, malaysiaIcon,
 thailandIcon, indonesiaIcon,
georgiaIcon, azerbaijanIcon } from "./markerIcons";

import Select from 'react-select';
import apps from "./CountrySelector";
import BelgiumPage from './BelgiumPage';
import ReactDOM from 'react-dom/client';

export default function App() {
	
  const [geoData, setGeoData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

const options = [
    { value: 'belgium', label: 'Belgium' },
    { value: 'spain', label: 'Spain' },
    { value: 'france', label: 'France' },
  ];

  const navigate = useNavigate();
const handleVisit = () => {
    if (selectedOption) {
      navigate(`/${selectedOption.value}`);
    }
  };

  
 


  useEffect(() => {
    fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
      .then(res => {
        if (!res.ok) throw new Error("GeoJSON fetch error");
        return res.json();
      })
      .then(data => setGeoData(data))
      .catch(err => console.error(err));
  }, []);

  function getCountryStyle(feature) {
    const name = feature.properties.name; // name field must match visited list

    if (visitedCountries.includes(name)) {
      return {
        fillColor: "#1E90FF",
        fillOpacity: 0.4,
        color: "#1E90FF",
        weight: 1
      };
    }
    return { fillOpacity: 0, weight: 0 };
  }
  



  return (

    
<div style={{ display: "flex", height: "100vh" }}>
    {/* Left Box */}
    <div style={{
  width: "45%",
  padding: "30px",
  backgroundColor: "#f5f5f5",
  overflowY: "auto",
  fontFamily: "Segoe UI, sans-serif",
  color: "#333"
}}>
  <h1 style={{ color: "#1E90FF", marginBottom: "20px" }}>My travel stories!</h1>

  {/* Europe Statistic */}
  <div style={{
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}>
    <img src="images/countries/europe.png" alt="Europe Map" style={{ width: "80px", marginRight: "20px" }} />
    <div>
      <h3 style={{ margin: 0 }}>Europe</h3>
      <p style={{ margin: 0 }}>40 / 44 countries visited</p>
    </div>
  </div>

  {/* Asia Statistic */}
  <div style={{
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}>
    <img src="images/countries/asia.jpg" alt="Asia Map" style={{ width: "80px", marginRight: "20px" }} />
    <div>
      <h3 style={{ margin: 0 }}>Asia</h3>
      <p style={{ margin: 0 }}>6 / 48 countries visited</p>
    </div>
  </div>
  
 

<div style={{
  marginTop: "30px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
}}>
  <h3 style={{ marginBottom: "10px", color: "#1E90FF" }}>View more</h3>
  
  <Select
    value={selectedOption}
    onChange={setSelectedOption}
    options={options}
    placeholder="Select a country"
    styles={{
      control: (base) => ({
        ...base,
        borderColor: "#1E90FF",
        boxShadow: "none",
        '&:hover': { borderColor: "#1E90FF" }
      })
    }}
  />

  {selectedOption && (
    <button
      onClick={handleVisit}
      style={{
        marginTop: "15px",
        padding: "10px 20px",
        backgroundColor: "#1E90FF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      {selectedOption.label} stories
    </button>
  )}
</div>



 </div>





    {/* Right Map */}
    <div style={{ flex: 1 }}>
      <MapContainer center={[52, 15]} zoom={3} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geoData && (
          <GeoJSON data={geoData} style={getCountryStyle} onEachFeature={onEachCountryComplex} />
        )}
        <Marker position={[50.640168, 4.666682]} icon={waffleIcon}>
        </Marker>
      
	  <Marker position={[64.9631, -19.0208]} icon={churchIcon}>
	           </Marker>

<Marker position={[46.227638, 2.213749]} icon={franceIcon}>
</Marker>

<Marker position={[46.818188, 8.227512]} icon={switzerlandIcon}>
</Marker>

<Marker position={[47.516231, 14.550072]} icon={austriaIcon}>
</Marker>

<Marker position={[51.165691, 10.451526]} icon={germanyIcon}>
</Marker>
<Marker position={[42.3154, 43.3569]} icon={georgiaIcon} /> // Georgia
<Marker position={[40.1431, 47.5769]} icon={azerbaijanIcon} /> // Azerbaijan


<Marker position={[41.87194, 12.56738]} icon={italyIcon}>
</Marker>

<Marker position={[40.463667, -3.74922]} icon={spainIcon}>
</Marker>

<Marker position={[52.132633, 5.291266]} icon={netherlandsIcon}>
</Marker>

<Marker position={[53.41291, -8.24389]} icon={irelandIcon}>
</Marker>

<Marker position={[56.26392, 9.501785]} icon={denmarkIcon}>
</Marker>

<Marker position={[48.669026, 19.699024]} icon={slovakiaIcon}>
</Marker>

<Marker position={[63.99056, 12.30778]} icon={norwayIcon} /> // Norway
<Marker position={[62.3875, 16.3220]} icon={swedenIcon} /> // Sweden
<Marker position={[64.9147, 26.0673]} icon={finlandIcon} /> // Finland
<Marker position={[58.5953, 25.0136]} icon={estoniaIcon} /> // Estonia
<Marker position={[56.8796, 24.6032]} icon={latviaIcon} /> // Latvia
<Marker position={[55.1694, 23.8813]} icon={lithuaniaIcon} /> // Lithuania
<Marker position={[42.6026, 20.9020]} icon={kosovoIcon} /> // Kosovo
<Marker position={[42.7360, 19.2594]} icon={montenegroIcon} />

<Marker position={[45.1667, 15.5000]} icon={croatiaIcon} /> // Croatia
<Marker position={[46.1186, 14.8092]} icon={sloveniaIcon} /> // Slovenia
<Marker position={[43.9159, 17.6791]} icon={bosniaIcon} /> // Bosnia and Herzegovina
<Marker position={[41.1533, 20.1683]} icon={albaniaIcon} /> // Albania
<Marker position={[41.6086, 21.7453]} icon={macedoniaIcon} /> // North Macedonia
<Marker position={[42.7339, 25.4858]} icon={bulgariaIcon} /> // Bulgaria
<Marker position={[44.0165, 21.0059]} icon={serbiaIcon} /> // Serbia
<Marker position={[45.9432, 24.9668]} icon={romaniaIcon} /> // Romania
<Marker position={[47.4116, 28.3699]} icon={moldovaIcon} /> // Moldova


<Marker position={[20.5937, 78.9629]} icon={indiaIcon} /> // India
<Marker position={[41.3775, 64.5853]} icon={uzbekistanIcon} /> // Uzbekistan
<Marker position={[38.9637, 35.2433]} icon={turkeyIcon} /> // Turkey
<Marker position={[4.2105, 101.9758]} icon={malaysiaIcon} /> // Malaysia
<Marker position={[15.8700, 100.9925]} icon={thailandIcon} /> // Thailand
<Marker position={[-0.7893, 113.9213]} icon={indonesiaIcon} />

<Marker position={[54.0022, -2.5420]} icon={ukIcon} />

<Marker position={[49.817492, 15.472962]} icon={czechRepublicIcon}>
</Marker>

<Marker position={[51.919438, 19.145136]} icon={polandIcon}>
</Marker>

<Marker position={[47.162494, 19.503304]} icon={hungaryIcon}>
</Marker>

<Marker position={[39.074208, 21.824312]} icon={greeceIcon}>
</Marker>

<Marker position={[39.399872, -8.224454]} icon={portugalIcon}>
</Marker>


	  </MapContainer>
    </div>
  </div>

  );
}
