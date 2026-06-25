import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";

const KazakhstanPage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const ImageCard = ({ imageNum, label }) => {
    const isAlternate = imageNum === "4" || imageNum === "5";
    return (
      <div
        style={{ position: "relative", width: "220px", height: "220px", borderRadius: "10px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", cursor: "pointer" }}
        onMouseEnter={() => setHoveredImage(imageNum)}
        onMouseLeave={() => setHoveredImage(null)}
      >
        <img src={`${process.env.PUBLIC_URL}/images/Kazakhstan/${imageNum}.jpeg`} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        {hoveredImage === imageNum && (
          <div style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            backgroundColor: isAlternate ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
            color: isAlternate ? "#111" : "white",
            padding: "10px",
            textAlign: "center",
            fontSize: "0.95rem",
            fontWeight: "bold"
          }}>
            {label}
          </div>
        )}
      </div>
    );
  };

  const galleryImages = [
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/3.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/3.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/10.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/10.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/11.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/11.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/12.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/12.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/13.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/13.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/14.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/14.jpeg` },
  ];

  const medeuGalleryImages = [
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/15.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/15.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/16.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/16.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/17.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/17.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/18.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/18.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/19.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/19.jpeg` },
    { original: `${process.env.PUBLIC_URL}/images/Kazakhstan/20.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Kazakhstan/20.jpeg` },
  ];

  return (
  <div>
    <h1 style={{ 
      fontSize: "3rem", 
      textAlign: "center", 
      margin: "40px 0 60px 0", 
      fontFamily: "Georgia, serif",
      color: "#2c3e50"
    }}>
      Kazakhstan
    </h1>

    <div style={{
      maxWidth: "900px",
      margin: "60px auto",
      padding: "40px 20px",
      backgroundColor: "#fdfdfd",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      borderRadius: "12px",
      fontFamily: "Georgia, serif",
      color: "#333"
    }}>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I have been waiting for this trip for such a long time. I fell in love with Central Asia after my trip to Uzbekistan 3 years ago. Instagram spoils you so much these days! All the reels about Kazakhstan were making me dream, so I decided to go to Almaty.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I flew with Pegasus airlines from Brussels Charleroi (Brussels to Istanbul, Istanbul to Almaty). Long flight but then that was the best option for me! Almaty airport is pretty nice and has good facilities. I reached very early morning and thus decided to rest a bit there. The passport control was very smooth. I was happy since I did not need a visa.
      </p>

      <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", marginTop: "20px" }}>At the airport</h3>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        <li>Sim card: there are a few operators; I took an unlimited internet pack for around 10€ (eSIM is an option).</li>
        <li>Transport: taxi or public bus (paid ~200 KZT). Yandex works well for cheap rides.</li>
      </ul>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I stayed at the Golden Square hostel. I had a good experience, the hostel was affordable and at a nice location (<a href="https://www.booking.com/Share-4XxD6o" target="_blank" rel="noopener noreferrer" style={{ color: "#3498db", textDecoration: "underline" }}>Check out Golden Square on Booking.com</a>!).
      </p>

      <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", marginTop: "20px" }}>Green Bazaar & food</h3>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I started with tasting pickled vegetables, tried some Halwa and fresh mango juice. Shopkeepers often let you sample things. Cards are generally accepted but keep cash for some vendors. Kaspi is the local payment system worth setting up for longer stays.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Then, I went to Bayurdaq to try Beshbarmak. I also had a cheesecake and horse milk — an interesting experience. Beshbarmak was under €10.
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "30px", marginBottom: "30px" }}>
        <ImageCard imageNum="7" label="Green Bazaar" />
        <ImageCard imageNum="4" label="Kazakh Cheesecake" />
        <ImageCard imageNum="5" label="Beshbarmak" />
      </div>

      <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", marginTop: "20px" }}>Two-day trip (yurts & lakes)</h3>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I booked a 2-day trip (recommended) to stay in yurts and stargaze — Kazakhstan is spectacular for that. We visited Kolsai and Kaindy lakes, rode horses, boated, and saw Charyn Canyon. The group was international and the local guide was great.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        The yurt stay was a highlight: modern yurts, charging facilities, bonfire, games and karaoke.
      </p>

      <div style={{ maxWidth: "900px", margin: "0 auto 30px auto" }}>
        <ImageGallery
          items={galleryImages}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />
      </div>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        At night I saw the Milky Way — unforgettable.
      </p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px", marginBottom: "20px" }}>
        <img src={`${process.env.PUBLIC_URL}/images/Kazakhstan/8.jpeg`} alt="Milky Way 1" style={{ width: "calc(40% - 10px)", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} />
        <img src={`${process.env.PUBLIC_URL}/images/Kazakhstan/9.jpeg`} alt="Milky Way 2" style={{ width: "calc(40% - 10px)", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }} />
      </div>

      <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", marginTop: "20px" }}>Packing tips</h3>
      <ul style={{ fontSize: "1.1rem", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>💶 Some cash</li>
        <li>💊 Important medicines</li>
        <li>🛂 Passport</li>
        <li>🧥 Light jacket (it can get chilly)</li>
        <li>🥤 Water and snacks</li>
      </ul>

      <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", marginTop: "20px" }}>Medeu & Shymbulak</h3>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I visited Medeu valley and the cable car to Shymbulak. Round-trip tickets cost around €21. The views and the landscape change from green to snowy are worth the visit.
      </p>

      <div style={{ maxWidth: "900px", margin: "0 auto 30px auto" }}>
        <ImageGallery
          items={medeuGalleryImages}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />
      </div>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        I bought a Kazakh edition of The Little Prince from a local bookstore. Almaty is colorful at night and great for walks. One trip to Almaty Lake was interrupted by a checkpoint, so consider joining a tour group if you don't have a car.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        My last day was chill — walking and local food. I left Assy plateau and other places for next time.
      </p>

      <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", marginTop: "30px", marginBottom: "20px" }}>Here is a suggested itinerary: Almaty for 6 Days</h3>

      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "10px", marginTop: "20px", marginBottom: "30px" }}>
        <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #e0e0e0" }}>
          <h4 style={{ fontSize: "1.2rem", color: "#e74c3c", marginBottom: "8px" }}>Day 14 Jun: Almaty + Kok Tobe</h4>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
            Start your adventure in the heart of Almaty. Explore the city center, visit the Green Bazaar, and wander through local neighborhoods. In the evening, take a stroll up to Kok Tobe, the iconic hill offering panoramic views of the city lights. There's a roller coaster and park attractions if you're feeling adventurous!
          </p>
        </div>

        <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #e0e0e0" }}>
          <h4 style={{ fontSize: "1.2rem", color: "#e74c3c", marginBottom: "8px" }}>Days 15–16 Jun: Kolsai Lakes + Lake Kaindy + Charyn Canyon</h4>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
            Book a guided 2-day tour to experience the raw beauty of nature. Visit the stunning turquoise Kolsai Lakes, explore the mystical Lake Kaindy with its submerged forest, and hike through the dramatic Charyn Canyon. This is the highlight of any Almaty trip—bring comfortable hiking shoes and plenty of water!
          </p>
        </div>

        <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #e0e0e0" }}>
          <h4 style={{ fontSize: "1.2rem", color: "#e74c3c", marginBottom: "8px" }}>Day 17 Jun: Medeu + Shymbulak (Easy by Public Transport)</h4>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
            Take the day to visit Medeu, the world's highest skating rink, and ride the cable car up to Shymbulak for breathtaking alpine views. The journey from green valleys to snowy peaks is mesmerizing. Grab lunch at one of the mountain cafés and soak in the serene atmosphere.
          </p>
        </div>

        <div style={{ marginBottom: "0px" }}>
          <h4 style={{ fontSize: "1.2rem", color: "#e74c3c", marginBottom: "8px" }}>Days 18–19 Jun: Adventure Options</h4>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555", marginBottom: "10px" }}>
            <strong>Option 1: Assy Plateau</strong> — Head out for stargazing and vast, endless landscapes. This remote plateau offers some of the darkest skies for astrophotography and a true sense of solitude in nature.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.7", color: "#555" }}>
            <strong>Option 2: Altyn-Emel National Park</strong> — Explore the unique desert scenery and the striking Aktau Mountains, known for their colorful geological formations. This is perfect for those seeking a different kind of natural beauty beyond the mountains.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default KazakhstanPage;
