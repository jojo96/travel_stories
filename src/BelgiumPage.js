// pages/BelgiumPage.js
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: `${process.env.PUBLIC_URL}/images/Belgium/1.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Belgium/1.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Belgium/2.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Belgium/2.jpeg`,
  },
  {
    original: `${process.env.PUBLIC_URL}/images/Belgium/3.jpeg`,
    thumbnail: `${process.env.PUBLIC_URL}/images/Belgium/3.jpeg`,
  },
];



const BelgiumPage = () => (


<div>
  {/* Your gallery section – unchanged */}
  <div style={{
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '#fdfdfd',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '12px'
  }}>
    <h2 style={{
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
      fontFamily: 'Georgia, serif'
    }}>
      Belgium through my lens
    </h2>
    <ImageGallery
      items={images}
      showThumbnails={true}
      showFullscreenButton={true}
      showPlayButton={true}
      additionalClass="custom-gallery"
    />
  </div>

  {/* My Sketches section below gallery */}
  <div style={{
    maxWidth: '900px',
    margin: '60px auto 0 auto',
    padding: '30px 20px',
    backgroundColor: '#fff',
    borderTop: '2px solid #eee'
  }}>
    <h3 style={{
      fontSize: '1.8rem',
      textAlign: 'center',
      marginBottom: '30px',
      fontFamily: 'Georgia, serif',
      color: '#444'
    }}>
      My Sketches of Gent ✏️
    </h3>
    <div style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }}>
      <img src={`${process.env.PUBLIC_URL}/images/Belgium/dr1.jpg`} alt="Sketch 1" style={{
        width: '250px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }} />
      <img src={`${process.env.PUBLIC_URL}/images/Belgium/dr2.jpg`} alt="Sketch 2" style={{
        width: '250px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }} />
      <img src={`${process.env.PUBLIC_URL}/images/Belgium/dr3.jpg`} alt="Sketch 3" style={{
        width: '250px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }} />
    </div>
  </div>
  
  {/* Travel Notes Section */}
<div style={{
  maxWidth: '900px',
  margin: '60px auto',
  padding: '30px 20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  fontFamily: 'Georgia, serif',
  color: '#333'
}}>
  <h3 style={{
    fontSize: '1.8rem',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2c3e50'
  }}>
    My Travel Notes 📝
  </h3>
  <p style={{
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '15px'
  }}>
    So, Gent is the best city in Belgium. If you are around and want a tour of city, hit me up :)
  </p>
  <p style={{
    fontSize: '1.1rem',
    lineHeight: '1.8'
  }}>
Some nice museums in Belgium:
<ol style={{
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  fontFamily: 'Georgia, serif',
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: '#333',
  listStylePosition: 'inside'
}}>
  <li>Musée Hergé</li>
  <li>Musical Instruments Museum</li>
  <li>STAM - Ghent City Museum</li>
</ol>



  </p>
</div>



</div>






);

export default BelgiumPage;

