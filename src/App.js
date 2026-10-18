import React, { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from "react-leaflet";
import { Link, useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./HomePage.css";

import { visitedCountries } from "./data";
import { visitedCountriesMarkers } from "./visitedCountriesMarkers";
import { cardImage, stories, storySlugByCountry } from "./stories";

const INITIAL_ZOOM = 3;
// Keep the view on the map itself, so a tall frame never shows grey past the poles.
const MAP_BOUNDS = [
  [-58, -180],
  [84, 200],
];

// Old-fashioned map pushpin: a round head on a short needle. Story countries
// get a red head, everywhere else a smaller brass one.
const makePin = (story) => {
  const head = story ? 6 : 4;
  const needle = story ? 11 : 8;
  const w = head * 2 + 4;
  const h = head * 2 + needle;
  return L.divIcon({
    className: `map-pushpin${story ? " map-pushpin-story" : ""}`,
    html: `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true">
      <line x1="${w / 2}" y1="${head * 2}" x2="${w / 2}" y2="${h}" stroke="#4a3b2a" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="${w / 2}" cy="${head + 1}" r="${head}" class="pin-head"/>
      <circle cx="${w / 2 - head / 3}" cy="${head - head / 3 + 1}" r="${head / 3}" fill="rgba(255,255,255,0.55)"/>
    </svg>`,
    iconSize: [w, h],
    iconAnchor: [w / 2, h],
    popupAnchor: [0, -h],
  });
};

// Each story card hangs at its own slight angle, like photos pinned by hand.
const TILTS = [-7, 5, -3, 8, -5, 3, -8, 6];

function StoryCard({ story, index }) {
  return (
    <Link
      to={`/${story.slug}`}
      className="home-card"
      style={{ "--tilt": `${TILTS[index % TILTS.length]}deg` }}
    >
      <span className="wall-pin home-card-pin" aria-hidden="true" />
      <div className="home-card-photo">
        <img src={cardImage(story.slug)} alt="" loading="lazy" />
      </div>
      <span className="home-card-name">{story.name}</span>
    </Link>
  );
}

// The frame's height comes from the flex layout, which can settle after Leaflet
// has measured it; re-measure whenever the frame changes size, and keep the
// view inside the map so no blank strip shows past the poles.
function FitToFrame() {
  const map = useMap();
  useEffect(() => {
    const observer = new ResizeObserver(() => {
      map.invalidateSize();
      map.panInsideBounds(MAP_BOUNDS, { animate: false });
    });
    observer.observe(map.getContainer());
    return () => observer.disconnect();
  }, [map]);
  return null;
}

// Hovering a visited country shows just its name.
function nameTooltip(feature, layer) {
  const name = feature.properties.name;
  if (visitedCountries.includes(name)) {
    layer.bindTooltip(name, { sticky: true, direction: "top", className: "home-tooltip" });
  }
}

const storyPin = makePin(true);
const plainPin = makePin(false);

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

  // Alternate the stories between the two sides of the map.
  const left = visible.filter((_, i) => i % 2 === 0);
  const right = visible.filter((_, i) => i % 2 === 1);

  const markers = useMemo(
    () =>
      visitedCountriesMarkers.map((country) => ({
        ...country,
        slug: storySlugByCountry[country.name],
      })),
    []
  );

  function getCountryStyle(feature) {
    const name = feature.properties.name;
    if (visitedCountries.includes(name)) {
      return {
        fillColor: "#a0522d",
        fillOpacity: 0.22,
        color: "#7a3b1e",
        weight: 1,
        dashArray: "3 3",
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
          <div className="home-notice">
            <span className="wall-pin home-notice-pin-l" aria-hidden="true" />
            <span className="wall-pin home-notice-pin-r" aria-hidden="true" />
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
          </div>
        </header>

        <div className="home-board">
          <aside className="home-cards home-cards-left" aria-label="Stories">
            {left.map((s) => (
              <StoryCard key={s.slug} story={s} index={stories.indexOf(s)} />
            ))}
          </aside>

          <section className="home-map-section">
            <input
              className="home-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onSearchKeyDown}
              placeholder="Search a country or a place…"
              aria-label="Search the stories"
            />
            {visible.length === 0 && (
              <p className="home-empty">
                <span className="wall-tag">Nothing written up for “{query}” yet — try the map.</span>
              </p>
            )}
            <div className="home-map">
              {/* Corner pins holding the map to the wall. */}
              <span className="wall-pin wall-pin-tl" aria-hidden="true" />
              <span className="wall-pin wall-pin-tr" aria-hidden="true" />
              <span className="wall-pin wall-pin-bl" aria-hidden="true" />
              <span className="wall-pin wall-pin-br" aria-hidden="true" />
              <MapContainer
                center={[44, 30]}
                zoom={INITIAL_ZOOM}
                scrollWheelZoom={false}
                maxBounds={MAP_BOUNDS}
                maxBoundsViscosity={1}
              >
                <FitToFrame />
                <TileLayer
                  url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
                  attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
                  maxZoom={12}
                />
                {geoData && (
                  <GeoJSON data={geoData} style={getCountryStyle} onEachFeature={nameTooltip} />
                )}
                {markers.map((country, index) => (
                  <Marker
                    key={index}
                    position={country.coords}
                    icon={country.slug ? storyPin : plainPin}
                    zIndexOffset={country.slug ? 1000 : 0}
                  >
                    <Popup>
                      <span className="home-popup">
                        <span className="name">{country.name}</span>
                        {country.slug && <Link to={`/${country.slug}`}>Read the story →</Link>}
                      </span>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            <p className="home-map-legend">
              <span className="wall-tag">
                Shaded: been there &nbsp;·&nbsp; Red pins: written up &nbsp;·&nbsp; Brass pins: still to write
              </span>
            </p>
          </section>

          <aside className="home-cards home-cards-right" aria-label="More stories">
            {right.map((s) => (
              <StoryCard key={s.slug} story={s} index={stories.indexOf(s)} />
            ))}
          </aside>
        </div>

        <p className="home-footer">
          <span className="wall-tag">More countries than stories, for now. Writing them up slowly.</span>
        </p>
      </div>
    </div>
  );
}
