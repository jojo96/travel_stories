// pages/BelgiumPage.js
import { asset, Gallery, galleryItems, Heading, PhotoGrid, StoryPage, thumb } from "./StoryKit";

const images = galleryItems(["Belgium/1.jpeg", "Belgium/2.jpeg", "Belgium/3.jpeg"]);

const sketches = [
  { src: thumb("Belgium/dr1.jpg"), caption: "Sketch 1" },
  { src: thumb("Belgium/dr2.jpg"), caption: "Sketch 2" },
  { src: thumb("Belgium/dr3.jpg"), caption: "Sketch 3" },
];

const BelgiumPage = () => (
  <StoryPage
    theme="belgium"
    hero={asset("Belgium/gent.jpg")}
    title="Belgium"
    subtitle="Belgium through my lens"
  >
    <Gallery items={images} showPlayButton />

    <Heading kicker="Pen and paper">My Sketches of Gent ✏️</Heading>

    <PhotoGrid photos={sketches} contain />

    <Heading kicker="Notes">My Travel Notes 📝</Heading>

    <p>So, Gent is the best city in Belgium. If you are around and want a tour of city, hit me up :)</p>

    <p>Some nice museums in Belgium:</p>

    <ol>
      <li>Musée Hergé</li>
      <li>Musical Instruments Museum</li>
      <li>STAM - Ghent City Museum</li>
    </ol>
  </StoryPage>
);

export default BelgiumPage;
