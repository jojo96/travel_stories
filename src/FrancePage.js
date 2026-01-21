// pages/SpainPage.js
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "images/France/1.jpeg",
    thumbnail: "images/France/1.jpeg",
  },
  {
    original: "images/France/2.jpeg",
    thumbnail: "images/France/2.jpeg",
  },
  {
    original: "images/France/3.jpeg",
    thumbnail: "images/France/3.jpeg",
  },



];


const France_Page = () => (
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
        France through my lens
      </h2>
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={true}
        additionalClass="custom-gallery"
      />
    </div>
  </div>
); // ← this closing parenthesis and semicolon were missing

export default France_Page;

