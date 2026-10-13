import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import { Link, useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "./HomePage.css";

import { visitedCountries } from "./data";
import { onEachCountryComplex } from "./MapPage";
import { visitedCountriesMarkers } from "./visitedCountriesMarkers";
import { cardImage, stories, storySlugByCountry } from "./stories";

const stats = [
  { value: "43", label: "in Europe" },
  { value: "13", label: "in Asia" },
  { value: "1", label: "in Africa" },
  { value: String(stories.length), label: "written up" },
];

export default function App() {
  const [geoData, setGeoData] = useState(null);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
      .then((res) => {
        if (!res.ok) throw new Error("GeoJSON fetch error");
        return res.json();
      })
      .then((data) => setGeoData(data))
      .catch((err) => console.error(err));
  }, []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stories;
    return stories.filter(
      (s) => s.name.toLowerCase().includes(q) || s.places.toLowerCase().includes(q)
    );
  }, [query]);

  function getCountryStyle(feature) {
    const name = feature.properties.name;
    if (visitedCountries.includes(name)) {
      return {
        fillColor: "#b8860b",
        fillOpacity: 0.32,
        color: "#b8860b",
        weight: 1,
      };
    }
    return { fillOpacity: 0, weight: 0 };
  }

  // Enter jumps straight to the only remaining story.
  const onSearchKeyDown = (e) => {
    if (e.key === "Enter" && visible.length === 1) navigate(`/${visible[0].slug}`);
  };

  return (
    <div className="home">
      <div className="home-inner">
        <header className="home-masthead">
          <h1>My travel stories</h1>
          <p className="home-tagline">Photographs and notes from the road.</p>

          <div className="home-stats">
            {stats.map((s) => (
              <span key={s.label}>
                <b>{s.value}</b>
                {s.label}
              </span>
            ))}
          </div>

          <div className="home-divider" />

          <input
            className="home-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onSearchKeyDown}
            placeholder="Search a country or a place…"
            aria-label="Search the stories"
          />
        </header>

        {visible.length > 0 ? (
          <div className="home-cards">
            {visible.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="home-card">
                <div className="home-card-photo">
                  <img src={cardImage(s.slug)} alt={s.name} loading="lazy" />
                  <span className="home-card-name">{s.name}</span>
                </div>
                <div className="home-card-body">
                  <p className="home-card-places">{s.places}</p>
                  <span className="home-card-read">Read the story →</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="home-empty">
            Nothing written up for “{query}” yet — try the map below.
          </p>
        )}

        <section className="home-map-section">
          <div className="home-section-label">Everywhere else</div>
          <h2 className="home-section-title">The map</h2>
          <p className="home-section-note">
            Gold means I have been there. Hover a country for the cities, click a marker for the
            story.
          </p>

          <div className="home-map">
            <MapContainer center={[38, 20]} zoom={3} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {geoData && (
                <GeoJSON data={geoData} style={getCountryStyle} onEachFeature={onEachCountryComplex} />
              )}
              {visitedCountriesMarkers.map((country, index) => {
                const slug = storySlugByCountry[country.name];
                return (
                  <Marker key={index} position={country.coords} icon={country.icon}>
                    <Popup>
                      <span className="home-popup">
                        <span className="name">{country.name}</span>
                        {slug && <Link to={`/${slug}`}>Read the story →</Link>}
                      </span>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </section>

        <p className="home-footer">More countries than stories, for now. Writing them up slowly.</p>
      </div>
    </div>
  );
}
