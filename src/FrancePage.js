// pages/FrancePage.js
import { asset, Gallery, galleryItems, StoryPage } from "./StoryKit";

const images = galleryItems(["France/1.jpeg", "France/2.jpeg", "France/3.jpeg"]);

const France_Page = () => (
  <StoryPage
    theme="france"
    hero={asset("France/1.jpeg")}
    title="France"
    subtitle="France through my lens"
  >
    <Gallery items={images} showPlayButton />
  </StoryPage>
);

export default France_Page;
