// JordanPage.js
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";

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
        Jordan through my lens 
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
    <h2 className="travel-title">
  My Travel Notes 🏜️
</h2>

      {/* Arrival */}
      <div style={cardStyle}>
	  
	  <div className="travel-card">
  <h3>✈️ Arrival in Jordan</h3>
</div>
     
	 
	  
     
        <div className="travel-section">

  <p>
    I flew from Belgium (Charleroi Airport) with Ryanair. The arrival
    experience was smooth and the airport was modern and well-organized.
 
    I had already purchased the <strong>Jordan Pass</strong> (≈ €100), and would recomment it.
    It makes immigration easy, saves money on attractions and time.
  </p>

  <p>
    I exchanged €10 for around <strong>7 JD</strong> and bought an
    <strong> Orange SIM</strong> (10 JD for 30GB + 20 mins).
  </p>

  <p className="note">
    💡 Tip: Don’t accept the first offer for the sim — walk around and compare. Also, exchange rates are better in the city.
  </p>

  <p>
    I took the <strong>Sariyah Express</strong> bus (3.3 JD) to Amman
    North Station. A Careem ride to the center cost only 2 JD.
  </p>

</div>



      </div>

      {/* Day 1 */}
      <div style={cardStyle}>
	  
	  <div className="travel-card">
  <h3>Day 1 — Exploring Amman </h3>
</div>
        

        <div className="travel-section">

  <p>
    I stayed at <strong>Castle Star Hostel</strong>, which was cozy,
    affordable, and perfectly located, just next to the Amman Citadel.
  </p>

  <h4 className="section-title">🏛️ Amman Citadel</h4>
  <p>
    The Citadel was amazing — great views and the famous
    <strong> Temple of Hercules</strong>. I spent a long time walking
    around and exploring the history. Also check this out:{" "}
    <a
      href="https://www.atlasobscura.com/places/hand-of-hercules"
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>Hand of Hercules – Atlas Obscura</strong>
    </a>
  </p>

  <h4 className="section-title">🎨 Around the City</h4>
  <p>I stopped at a small art shop and bought:</p>
  <ul className="clean-list">
    <li>Old stamps</li>
    <li>A beautiful bookmark</li>
  </ul>

  <p>
    I reached the Roman Amphitheater after 6 PM, so it was closed.
    However, the lady at the shop gave me a “Top 40 things to do in Amman”
    list — which was super nice.
  </p>

  <h4 className="section-title">🍽️ Street Food</h4>
  <ul className="clean-list">
    <li>Knafeh — 0.9 JD</li>
    <li>Salep — 1 JD</li>
    <li>Arais — 1 JD</li>
    <li>Assorted bread — 1 JD</li>
  </ul>

  <p className="note">
    💡 Food in Jordan is amazing and very affordable. Exchange money in
    the city for better rates.
  </p>

</div>

		
		
		<div className="food-grid">
  {[
    { img: "food1.jpeg", caption: "Knafeh" },
    { img: "food2.jpeg", caption: "Salep" },
    { img: "food3.jpeg", caption: "Arais" },
    { img: "food4.jpeg", caption: "Assorted Bread" },
  ].map((item, i) => (
    <div key={i} className="food-card">
      <img
        src={`${process.env.PUBLIC_URL}/images/Jordan/${item.img}`}
        alt={item.caption}
      />
      <p className="food-caption">{item.caption}</p>
    </div>
  ))}
</div>



      </div>

      {/* Day 2 */}
      <div style={cardStyle}>
	  
	   <div className="travel-card">
  <h3>Day 2 — Journey to Petra 🚍 </h3>
</div>
        
        <div className="travel-section">
  <p>
    I took a public bus to Petra for about <strong>8 JD</strong>.
    Comfortable ride and great views along the way.
  </p>

  <p>
    The bus dropped me close to the entrance, and from there I walked
    a lot — but every step was worth it.
  </p>
</div>

      </div>

      {/* Day 3 */}
      <div style={cardStyle}>
       
		
		  <div className="travel-card">
  <h3>Day 3 — Petra & Return 🏜️</h3>
</div>
        
<div className="travel-section">

  <p>
    Petra was surreal. Walking through the Siq and seeing the Treasury
    for the first time was unforgettable. I stayed at the Petra Musa Rural House.
    I had my own room for 8.6 JD and the host was absolutely amazing.
    Definitely recommend.
    {" "}
    <a
      href="https://www.booking.com/hotel/jo/musa-rural-house.en-gb.html?aid=356980"
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>View Petra Musa Rural House on Booking.com</strong>
    </a>
  </p>

  <p>
    Ok the story of Petra now. The Jordan pass is handy and depending on the
    number of days you are there get the best option (
    <a
      href="https://www.jordanpass.jo/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong>Jordan Pass link</strong>
    </a>
    ). You get a ticket on the first day and you can use it to go everywhere
    inside the Petra complex. There is a museum at the starting point. It gives
    you amazing details about the Nabateans.
  </p>

  <p>
    I took the main entrance and walked all the way. But there is also a
    backside entrance if you want a smaller walk to the monastery (one of the
    attractions). I would suggest spending at least 2 days there, but if you
    have less time, one day is also okay — just expect a lot of walking.
  </p>

  <p>
    On the way back, a kind stranger gave me a lift toward Amman — another
    reminder of how welcoming people in Jordan are.
  </p>

  <p>
    🚕 Uber is cheap and very convenient in Jordan.
  </p>

</div>

   <p>
 <div
  style={{
    marginTop: "40px",
    padding: "25px",
    background: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    fontFamily: "Georgia, serif",
  }}
>
  <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
     Tips for Traveling in Petra
  </h3>

  <ul style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
    <li>
      🎟️ <strong>Get the Jordan Pass</strong> — it saves money on the visa and
      includes entry to major attractions like Petra.
    </li>

    <li>
      💧 <strong>Carry plenty of water</strong> — distances can be long and
      walking under the sun can be exhausting.
    </li>

    <li>
      🐪 <strong>Expect many offers</strong> for horse and camel rides,
      especially around Petra. Be polite but firm if you’re not interested.
    </li>

    <li>
      🗓️ <strong>Plan at least 2 days</strong> for Petra and the surrounding
      areas to truly enjoy them without rushing.
    </li>

    <li>
      🌙 <strong>Petra by Night</strong> — some people love it, but I personally
      found it a bit overpriced compared to the daytime experience.
    </li>

    <li>
      ⭐ <strong>Stay after sunset</strong> — the night sky in Jordan is
      breathtaking. Sit quietly, look up, and enjoy the stars.
    </li>
  </ul>
</div>

        </p>
        
      </div>
	  
	  
	  {/* Day 4 */}
      <div style={cardStyle}>
	  
	   <div className="travel-card">
  <h3>Day 4 — Dead Sea </h3>
</div>
        
       
       <div className="travel-section">

  <p>
    I stayed at the Carob hostel for the last part of my journey. It's a nice
    community and they do a lot of activities like free group dinner and trips.
    Also extremely nice hosts.
  </p>

  <p>
    I decided to explore the Dead Sea since I did not have much time left.
    I took the Jett bus this time, got the tickets from their office (Abdali office),
    round trip 15 JD.
  </p>

  <p>
    So, there is this annoying thing though: when the Jett bus drops you,
    you are aggressively pushed to the resorts. They have lunch and sea packages
    for around 20–30 JD and say it’s mandatory.
  </p>

  <p>
    But I found two Chinese friends and we decided to explore the area on our own.
    There are public areas where you can walk freely. We walked along the beach
    for a while — make sure to carry water and snacks because there are not many
    shops nearby.
  </p>

  <p>
    Then we found a taxi driver who took us to the salt beach from the resort
    area for 20 JD (for 3 people).
  </p>

  <p>
    I got a lot of salt crystals haha.
  </p>

  {/* Dead Sea Salt Photos */}
  <div className="food-grid">
    {["salt1.jpeg", "salt2.jpeg", "salt3.jpeg", "salt4.jpeg"].map((img, i) => (
      <div key={i} className="food-card">
        <img
          src={`${process.env.PUBLIC_URL}/images/Jordan/${img}`}
          alt={`Dead Sea salt ${i + 1}`}
        />
      </div>
    ))}
  </div>

  <p>
    Then I hiked around with my friend on the nearby hills and you get really
    good views of the Dead Sea.
  </p>

</div>

       
      </div>
	  
	  
	  
	  <div className="travel-section">

  <h2 className="section-title">🗺️ 4-Day Jordan Travel Itinerary</h2>

  {/* Day 1 */}
  <div className="travel-card">
    <h3>Day 1 — Arrival & Exploring Amman</h3>

    <ul>
      <li>Arrival at Queen Alia International Airport</li>
      <li>Immigration made easy with the <strong>Jordan Pass</strong></li>
      <li>SIM card purchase (Orange – 30GB)</li>
      <li>Bus to Amman (Sariyah Express)</li>
      <li>Check-in</li>
      <li>Visit <strong>Amman Citadel</strong> & Temple of Hercules</li>
      <li>Explore local shops & buy souvenirs</li>
      <li>Street food dinner (Knafeh, Arais, Salep)</li>
    </ul>
  </div>

  {/* Day 2 */}
  <div className="travel-card">
    <h3>Day 2 — Journey to Petra</h3>

    <ul>
      <li>Early morning public bus to Petra (~8 JD)</li>
      <li>Scenic ride through the desert</li>
      <li>Arrival near Petra entrance</li>
	  <li>Optional Petra at night</li>
      <li>Overnight stay</li>
    </ul>
  </div>

  {/* Day 3 */}
  <div className="travel-card">
    <h3>Day 3 — Exploring Petra</h3>

    <ul>
      <li>Full day inside Petra using the Jordan Pass</li>
      <li>Visit the museum and ancient tombs</li>
      <li>Hike through the main trail or others</li>
      <li>Optional back entrance hike to the Monastery</li>
      <li>Enjoy sunset views over Petra</li>
      <li>Evening return and rest</li>
    </ul>

    <p className="note">
      💡 Tip: Petra is huge — wear good shoes and carry plenty of water.
    </p>
  </div>

  {/* Day 4 */}
  <div className="travel-card">
    <h3>Day 4 — Dead Sea Experience</h3>

    <ul>
      <li>Jett bus from Amman (15 JD round trip)</li>
      <li>Avoid resort pressure — public access is possible</li>
      <li>Walk along the shore and float in the Dead Sea</li>
      <li>Visit the salt beach</li>
      <li>Hike for panoramic views</li>
      <li>Return to Amman in the evening</li>
    </ul>

    <p className="note">
      💧 Carry water and snacks — facilities are limited.
    </p>
  </div>

</div>

	  
	  
    </div>
  </div>
);

export default JordanPage;
