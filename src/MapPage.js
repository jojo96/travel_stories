import {visitedCountries,visitedCities} from "./data";
import { Marker, Popup } from "react-leaflet";


const countryCoordinates = {
  Belgium: [50.8503, 4.3517], // Brussels
  // Add more countries later
};


  
function onEachCountry(feature, layer) {
    const countryName = feature.properties.name;
    if (visitedCities[countryName]) {
      const cities = visitedCities[countryName].join(", ");
      layer.bindTooltip(`<strong>${countryName}</strong><br/>Cities: ${cities}`, {
        sticky: true
      });
    } else if (visitedCountries.includes(countryName)) {
      layer.bindTooltip(`<strong>${countryName}</strong><br/>No cities listed`, {
        sticky: true
      });
    }
  }
  
  
function onEachCountryComplex(feature, layer) {
  const countryName = feature.properties.name;
  const cities = visitedCities[countryName]?.join(", ") || "No cities listed";

  // Replace spaces with underscores to match image file names like "France.png"
  const imageUrl = `images/countries/${countryName.replace(/ /g, "_")}.jpg`;

  const tooltipContent = `
    <div style="text-align:center;">
      Visited: ${cities}
    </div>
  `;

  layer.bindTooltip(tooltipContent, {
    sticky: true,
    direction: "top",
    className: "custom-tooltip"
  });
}


export { onEachCountryComplex };
