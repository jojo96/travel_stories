// JordanPage.js
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/1.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/1.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/2.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/2.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/3.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/3.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/4.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/4.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/5.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/5.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/6.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/6.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/7.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/7.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/8.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/8.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Jordan/9.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Jordan/9.jpeg`,
  },
];

const cardStyle = {
  background: "#f7f7f7",
  padding: "25px",
  borderRadius: "12px",
  marginBottom: "30px",
};

const JordanPage = () => (
  <div>

    {/* Gallery Section */}
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        backgroundColor: "#fdfdfd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          textAlign: "center",
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
        }}
      >
        Jordan through my lens 🇯🇴
      </h2>

      <ImageGallery
        items={images}
        showThumbnails
        showFullscreenButton
        showPlayButton
      />
    </div>


    {/* Travel Notes */}
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "30px 20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        fontFamily: "Georgia, serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Travel Notes 🏜️
      </h2>

      {/* Arrival */}
      <div style={cardStyle}>
        <h3>✈️ Arrival in Jordan</h3>
        <p>
          I flew from Belgium (Charleroi Airport) with Ryanair. The arrival
          experience was smooth and the airport was modern and well-organized.
        </p>
        <p>
          I had already purchased the <strong>Jordan Pass</strong> (≈ €100),
          which made immigration very easy and saved money on attractions.
        </p>
        <p>
          I exchanged €10 for around <strong>7 JOD</strong> and bought an
          <strong> Orange SIM</strong> (10 JOD for 30GB + 20 mins).
        </p>
        <p>
          💡 Tip: Don’t accept the first offer — walk around and compare.
        </p>
        <p>
          I took the <strong>Saraya Express</strong> bus (3.3 JOD) to Amman
          North Station. A Careem ride to the center cost only 2 JOD.
        </p>
      </div>

      {/* Day 1 */}
      <div style={cardStyle}>
        <h3>Day 1 — Exploring Amman 🇯🇴</h3>

        <p>
          I stayed at <strong>Castle Star Hostel</strong>, which was cozy,
          affordable, and perfectly located.
        </p>

        <h4>🏛️ Amman Citadel</h4>
        <p>
          The Citadel was stunning — great views and the famous
          <strong> Temple of Hercules</strong>. I spent a long time walking
          around and exploring the history.
        </p>

        <h4>🎨 Around the City</h4>
        <p>
          I stopped at a small art shop and bought:
        </p>
        <ul>
          <li>Old stamps</li>
          <li>A beautiful bookmark</li>
        </ul>

        <p>
          I reached the Roman Amphitheater after 6 PM, so it was closed.
          However, the shop owner gave me a “Top 40 things to do in Amman”
          list — such a kind gesture.
        </p>

        <h4>🍽️ Street Food</h4>
        <ul>
          <li>Kunafa — 0.9 JD</li>
          <li>Saleh — 1 JD</li>
          <li>Arayesh — 1 JD</li>
          <li>Assorted bread — 1 JD</li>
        </ul>

        <p>
          💡 Food in Jordan is amazing and very affordable. Exchange money in
          the city for better rates.
        </p>
      </div>

      {/* Day 2 */}
      <div style={cardStyle}>
        <h3>Day 2 — Journey to Petra 🚍</h3>
        <p>
          I took a public bus to Petra for about <strong>8 JD</strong>.
          Comfortable ride and great views along the way.
        </p>
        <p>
          The bus dropped me close to the entrance, and from there I walked
          a lot — but every step was worth it.
        </p>
      </div>

      {/* Day 3 */}
      <div style={cardStyle}>
        <h3>Day 3 — Petra & Return 🏜️</h3>
        <p>
          Petra was surreal. Walking through the Siq and seeing the Treasury
          for the first time was unforgettable.
        </p>
        <p>
          On the way back, a kind stranger gave me a lift toward Amman —
          another reminder of how welcoming people in Jordan are.
        </p>
        <p>
          🚕 Uber is cheap and very convenient in Jordan.
        </p>
      </div>
    </div>
  </div>
);

export default JordanPage;
