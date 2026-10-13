// StoryKit.js — shared building blocks for the country travel stories.
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./StoryPage.css";

export const asset = (path) => `${process.env.PUBLIC_URL}/images/${path}`;

// Small copy of an image, used for gallery strips and grid tiles:
// "Jordan/1.jpeg" -> "Jordan/thumbs/1.jpeg"
export const thumb = (path) => {
  const i = path.lastIndexOf("/");
  return asset(`${path.slice(0, i)}/thumbs${path.slice(i)}`);
};

// Per-country accents. Everything else (paper, ink, layout) stays shared.
export const themes = {
  egypt: { "--story-accent": "#b8860b", "--story-accent-soft": "#e2c88a", "--story-link": "#1f6f78" },
  belgium: {
    "--story-accent": "#b5651d",
    "--story-accent-soft": "#e6c9a8",
    "--story-link": "#2e5e8c",
    "--story-sand": "#f3ece2",
  },
  france: {
    "--story-accent": "#2e6fa3",
    "--story-accent-soft": "#c3d9e8",
    "--story-link": "#2e6fa3",
    "--story-sand": "#eceef2",
    "--story-divider": "#dde2e8",
  },
  spain: {
    "--story-accent": "#c0563b",
    "--story-accent-soft": "#e9c3a9",
    "--story-link": "#9c5518",
    "--story-sand": "#f5ebe2",
  },
  jordan: {
    "--story-accent": "#a85a3a",
    "--story-accent-soft": "#e3c4ae",
    "--story-link": "#2a7f6f",
    "--story-sand": "#f4ebe3",
  },
  kazakhstan: {
    "--story-accent": "#2a7f78",
    "--story-accent-soft": "#b7d7d3",
    "--story-link": "#2a6f8f",
    "--story-sand": "#ebf0ee",
    "--story-divider": "#d9e3e0",
  },
};

const LightboxContext = createContext(() => {});
export const useLightbox = () => useContext(LightboxContext);

export const StoryPage = ({ theme = "egypt", hero, heroPosition, title, subtitle, chips, children }) => {
  const [zoom, setZoom] = useState(null);
  const close = useCallback(() => setZoom(null), []);
  const open = useCallback((src, caption) => setZoom({ src, caption }), []);

  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, close]);

  return (
    <LightboxContext.Provider value={open}>
      <div className="story" style={themes[theme]}>
        <header
          className="story-hero"
          style={{
            backgroundImage: `url(${hero})`,
            ...(heroPosition ? { backgroundPosition: heroPosition } : {}),
          }}
        >
          <Link to="/" className="story-back">
            ← All travel stories
          </Link>
          <div className="story-hero-inner">
            <h1>{title}</h1>
            {subtitle && <p className="story-hero-sub">{subtitle}</p>}
            {chips && chips.length > 0 && (
              <div className="story-chips">
                {chips.map((c) => (
                  <span key={c} className="story-chip">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <main className="story-wrap">{children}</main>

        {zoom && (
          <div className="story-lightbox" onClick={close} role="presentation">
            <button className="story-lightbox-close" onClick={close} aria-label="Close">
              ×
            </button>
            <img src={zoom.src} alt={zoom.caption || ""} />
            {zoom.caption && <figcaption>{zoom.caption}</figcaption>}
          </div>
        )}
      </div>
    </LightboxContext.Provider>
  );
};

export const Heading = ({ kicker, children }) => (
  <>
    <h2>
      {kicker && <span className="story-kicker">{kicker}</span>}
      {children}
    </h2>
    <div className="story-rule" />
  </>
);

export const Tip = ({ icon = "💡", children }) => (
  <div className="story-tip">
    <span className="story-tip-icon">{icon}</span>
    <div>{children}</div>
  </div>
);

export const Panel = ({ label, children }) => (
  <div className="story-panel">
    {label && <div className="story-panel-label">{label}</div>}
    {children}
  </div>
);

export const Figure = ({ src, caption, alt }) => {
  const open = useLightbox();
  return (
    <figure className="story-figure">
      <img src={src} alt={alt || caption || ""} loading="lazy" onClick={() => open(src, caption)} />
      {caption && <figcaption className="story-cap">{caption}</figcaption>}
    </figure>
  );
};

export const PhotoGrid = ({ photos, wide, contain }) => {
  const open = useLightbox();
  return (
    <div className={wide ? "story-grid two" : "story-grid"}>
      {photos.map(({ src, caption, href }) => {
        const tile = (
          <>
            <img src={src} alt={caption || ""} loading="lazy" />
            {caption && <figcaption>{caption}</figcaption>}
          </>
        );
        if (href) {
          return (
            <figure key={src} className={contain ? "story-tile contain" : "story-tile"}>
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ border: "none" }}>
                {tile}
              </a>
            </figure>
          );
        }
        return (
          <figure
            key={src}
            className={contain ? "story-tile contain" : "story-tile"}
            role="button"
            tabIndex={0}
            onClick={() => open(src, caption)}
            onKeyDown={(e) => e.key === "Enter" && open(src, caption)}
          >
            {tile}
          </figure>
        );
      })}
    </div>
  );
};

export const Gallery = ({ items, showPlayButton = false }) => (
  <div className="story-gallery">
    <ImageGallery
      items={items}
      showThumbnails
      showFullscreenButton
      showPlayButton={showPlayButton}
      lazyLoad
      slideDuration={400}
    />
  </div>
);

// Build gallery items from [path, caption] pairs (paths are relative to /images).
export const galleryItems = (entries) =>
  entries.map((entry) => {
    const [path, caption] = Array.isArray(entry) ? entry : [entry, undefined];
    return {
      original: asset(path),
      thumbnail: thumb(path),
      description: caption,
      originalAlt: caption,
      thumbnailAlt: caption,
    };
  });

export const Timeline = ({ children }) => <div className="story-timeline">{children}</div>;

export const Day = ({ date, title, children }) => (
  <div className="story-day">
    <h4>
      {date && <span className="story-date">{date}</span>}
      {title}
    </h4>
    {children}
  </div>
);

export const Checklist = ({ items }) => (
  <ul className="story-checklist">
    {items.map(({ icon, text }, i) => (
      <li key={i}>
        <span className="ico">{icon}</span>
        <span>{text}</span>
      </li>
    ))}
  </ul>
);
