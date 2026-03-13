// pages/SpainPage.js

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const valenciaImages = [
  { original: `${process.env.PUBLIC_URL}/images/Spain/1.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/1.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Spain/2.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/2.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Spain/3.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/3.jpeg` }
];

const granadaImages = [
  { original: `${process.env.PUBLIC_URL}/images/Granada/1.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/1.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/2.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/2.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/3.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/3.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/4.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/4.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/5.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/5.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/6.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/6.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/7.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/7.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/8.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/8.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/9.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/9.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/10.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/10.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/11.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/11.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/12.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/12.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/13.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/13.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/14.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/14.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/15.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/15.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Granada/16.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Granada/16.jpeg` }
];

const caminitoImages = [
  { original: `${process.env.PUBLIC_URL}/images/Caminito/1.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Caminito/1.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Caminito/2.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Caminito/2.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Caminito/3.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Caminito/3.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Caminito/4.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Caminito/4.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Caminito/5.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Caminito/5.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Caminito/6.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Caminito/6.jpeg` }
];

const foodImages = [
  { original: `${process.env.PUBLIC_URL}/images/Spain/food1.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/food1.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Spain/food2.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/food2.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Spain/food3.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/food3.jpeg` },
  { original: `${process.env.PUBLIC_URL}/images/Spain/food4.jpeg`, thumbnail: `${process.env.PUBLIC_URL}/images/Spain/food4.jpeg` }
];

const sectionStyle = {
  maxWidth: "900px",
  margin: "60px auto",
  padding: "40px 20px",
  backgroundColor: "#fdfdfd",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  borderRadius: "12px"
};

const titleStyle = {
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: "20px",
  fontFamily: "Georgia, serif"
};

const Spain_Page = () => (

  
  <div>
    <h1 style={{ 
      fontSize: "3rem", 
      textAlign: "center", 
      margin: "40px 0 60px 0", 
      fontFamily: "Georgia, serif",
      color: "#2c3e50"
    }}>
      Spain through my lens
    </h1>

    {/* Main Spain gallery */}
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Valencia</h2>

      <ImageGallery
        items={valenciaImages}
        showThumbnails
        showFullscreenButton
        showPlayButton={false}
      />
    </div>


    {/* Malaga section */}
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Málaga</h2>

      <div style={{ marginBottom: "30px" }}>
        <h3 style={{
          fontSize: "1.4rem",
          color: "#2c3e50",
          marginBottom: "15px",
          fontFamily: "Georgia, serif"
        }}>
          First Night: The Lights Hostel
        </h3>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          On my first night in Málaga, I stayed at <strong style={{ color: "#e74c3c" }}>The Lights Hostel</strong>, and honestly it was a great choice.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          The place was clean, cozy, and the room was surprisingly nice for a hostel. What made it even better was the atmosphere — they have a rooftop terrace where they were giving <strong style={{ color: "#27ae60" }}>free sangria</strong>, and every night they organize a small dinner for around <strong style={{ color: "#f39c12" }}>5€</strong>.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          It felt very social and relaxed, so I would definitely recommend it if you're staying in the city.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 style={{
          fontSize: "1.4rem",
          color: "#2c3e50",
          marginBottom: "15px",
          fontFamily: "Georgia, serif"
        }}>
          Evening City Exploration
        </h3>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          That evening I didn't plan anything specific and just walked around the city. Málaga is a great place to wander aimlessly — small streets, cafés, and a very lively atmosphere.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          At some point I walked up to the citadel area (Gibralfaro hill) where you get an amazing view over the city. At night there were lots of people hanging out there, some music, some small groups of friends drinking and talking.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          It actually felt very safe, and the view of the city lights from the top was beautiful. I imagine it would also be a fantastic place to watch the sunset.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3 style={{
          fontSize: "1.4rem",
          color: "#2c3e50",
          marginBottom: "15px",
          fontFamily: "Georgia, serif"
        }}>
          Day Trip to Mijas
        </h3>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          The next day I decided to visit the village of <strong style={{ color: "#3498db" }}>Mijas</strong>, which sits in the hills above the coast.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          Figuring out the bus route took a bit of trial and error, but eventually I worked it out. I first took a bus to Fuengirola, and from there I switched to the <strong style={{ color: "#9b59b6" }}>M122</strong> bus that goes up to Mijas.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          I used the <strong style={{ color: "#2ecc71" }}>green transport card</strong>, and the whole trip was surprisingly cheap — around <strong style={{ color: "#f39c12" }}>1.5€</strong>.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          Public transport in the area turned out to be really convenient once I understood how it worked.
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{
          fontSize: "1.4rem",
          color: "#2c3e50",
          marginBottom: "15px",
          fontFamily: "Georgia, serif"
        }}>
          Planning the Next Adventure
        </h3>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          After exploring Málaga and Mijas, my next plan was a day trip to <strong style={{ color: "#e67e22" }}>Granada</strong>.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          I booked a round-trip <strong style={{ color: "#34495e" }}>ALSA</strong> bus ticket for about <strong style={{ color: "#f39c12" }}>27€</strong>. I probably could have found something cheaper with <strong style={{ color: "#1abc9c" }}>BlaBlaCar</strong>, but I had some issues using it at the time.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          The main reason for going to Granada was, of course, to finally see the <strong style={{ color: "#8e44ad" }}>Alhambra</strong>.
        </p>
        <p style={{ lineHeight: "1.7", marginBottom: "15px", fontSize: "1.1rem" }}>
          Finally, I did another day trip to the Caminito Del Rey with <a 
            href="https://malagasouthexperiences.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: "#3498db", 
              textDecoration: "none",
              fontWeight: "bold",
              borderBottom: "1px solid #3498db"
            }}
          >
            Malaga South Experiences
          </a>.
        </p>
      </div>
    </div>

    {/* Food in Malaga section */}
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Food I Tried in Málaga</h2>

      <div style={{ marginBottom: "30px" }}>
        <p style={{ lineHeight: "1.7", marginBottom: "20px", fontSize: "1.1rem" }}>
          Málaga has amazing food culture! Here are some delicious local specialties I tried during my stay:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "30px" }}>
          <div style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #e9ecef"
          }}>
            <h4 style={{
              fontSize: "1.2rem",
              color: "#2c3e50",
              marginBottom: "8px",
              fontFamily: "Georgia, serif"
            }}>
              🍤 Pulpo Frito
            </h4>
            <p style={{ lineHeight: "1.6", marginBottom: "8px", fontSize: "1rem" }}>
              Crispy fried octopus - a Málaga specialty that's perfectly tender and flavorful.
            </p>
            <p style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              color: "#f39c12"
            }}>
              €3.50
            </p>
          </div>

          <div style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #e9ecef"
          }}>
            <h4 style={{
              fontSize: "1.2rem",
              color: "#2c3e50",
              marginBottom: "8px",
              fontFamily: "Georgia, serif"
            }}>
              🍷 Sweet Wine - Moscatel
            </h4>
            <p style={{ lineHeight: "1.6", marginBottom: "8px", fontSize: "1rem" }}>
              A sweet, dessert wine from the region with notes of honey and dried fruits.
            </p>
            <p style={{
              fontSize: "1rem",
              color: "#7f8c8d",
              fontStyle: "italic"
            }}>
              Traditional Andalusian wine
            </p>
          </div>

          <div style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #e9ecef"
          }}>
            <h4 style={{
              fontSize: "1.2rem",
              color: "#2c3e50",
              marginBottom: "8px",
              fontFamily: "Georgia, serif"
            }}>
              🥤 Horchata
            </h4>
            <p style={{ lineHeight: "1.6", marginBottom: "8px", fontSize: "1rem" }}>
              A refreshing plant-based drink made from tiger nuts, naturally sweet and creamy.
            </p>
            <p style={{
              fontSize: "1rem",
              color: "#27ae60",
              fontStyle: "italic"
            }}>
              Plant-based • Naturally sweet
            </p>
          </div>

          <div style={{
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #e9ecef"
          }}>
            <h4 style={{
              fontSize: "1.2rem",
              color: "#2c3e50",
              marginBottom: "8px",
              fontFamily: "Georgia, serif"
            }}>
              🐟 Anchovies
            </h4>
            <p style={{ lineHeight: "1.6", marginBottom: "8px", fontSize: "1rem" }}>
              Fresh anchovies, either grilled or in olive oil - a Mediterranean classic.
            </p>
            <p style={{
              fontSize: "1rem",
              color: "#7f8c8d",
              fontStyle: "italic"
            }}>
              Fresh Mediterranean seafood
            </p>
          </div>
        </div>

        <ImageGallery
          items={foodImages}
          showThumbnails
          showFullscreenButton
          showPlayButton={false}
        />
      </div>
    </div>

    {/* Granada Gallery */}
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Granada</h2>

      <ImageGallery
        items={granadaImages}
        showThumbnails
        showFullscreenButton
        showPlayButton={false}
      />
    </div>


    {/* Caminito del Rey */}
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Caminito del Rey</h2>

      <ImageGallery
        items={caminitoImages}
        showThumbnails
        showFullscreenButton
        showPlayButton={false}
      />
    </div>

  </div>
);

export default Spain_Page;