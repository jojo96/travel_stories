import React from "react";
import { useParams } from "react-router-dom";
import { visitedCities } from "./data";

export default function CountryPage() {
  const { countryName } = useParams();
  const cities = visitedCities[countryName] || [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{countryName}</h1>
      <h2>Visited Cities:</h2>
      <ul>
        {cities.length > 0 ? cities.map((city) => <li key={city}>{city}</li>) : <li>No cities listed</li>}
      </ul>
    </div>
  );
}
