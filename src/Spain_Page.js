// pages/SpainPage.js
import { asset, Gallery, galleryItems, Heading, StoryPage } from "./StoryKit";

const valenciaImages = galleryItems(["Spain/1.jpeg", "Spain/2.jpeg", "Spain/3.jpeg"]);

const granadaImages = galleryItems(
  Array.from({ length: 16 }, (_, i) => `Granada/${i + 1}.jpeg`)
);

const caminitoImages = galleryItems(
  Array.from({ length: 6 }, (_, i) => `Caminito/${i + 1}.jpeg`)
);

const foodImages = galleryItems([
  "Spain/food1.jpeg",
  "Spain/food2.jpeg",
  "Spain/food3.jpeg",
  "Spain/food4.jpeg",
]);

const dishes = [
  {
    title: "🍤 Pulpo Frito",
    text: "Crispy fried octopus - a Málaga specialty that's perfectly tender and flavorful.",
    price: "€3.50",
  },
  {
    title: "🍷 Sweet Wine - Moscatel",
    text: "A sweet, dessert wine from the region with notes of honey and dried fruits.",
    meta: "Traditional Andalusian wine",
  },
  {
    title: "🥤 Horchata",
    text: "A refreshing plant-based drink made from tiger nuts, naturally sweet and creamy.",
    meta: "Plant-based • Naturally sweet",
  },
  {
    title: "🐟 Anchovies",
    text: "Fresh anchovies, either grilled or in olive oil - a Mediterranean classic.",
    meta: "Fresh Mediterranean seafood",
  },
];

const Spain_Page = () => (
  <StoryPage
    theme="spain"
    hero={asset("Granada/16.jpeg")}
    title="Spain"
    subtitle="Spain through my lens"
    chips={["Valencia", "Málaga", "Granada", "Caminito del Rey"]}
  >
    <Heading kicker="Gallery">Valencia</Heading>

    <Gallery items={valenciaImages} />

    <Heading kicker="Notes">Málaga</Heading>

    <h3>First Night: The Lights Hostel</h3>
    <p>
      On my first night in Málaga, I stayed at <strong>The Lights Hostel</strong>, and honestly it
      was a great choice.
    </p>
    <p>
      The place was clean, cozy, and the room was surprisingly nice for a hostel. What made it even
      better was the atmosphere — they have a rooftop terrace where they were giving{" "}
      <strong>free sangria</strong>, and every night they organize a small dinner for around{" "}
      <strong>5€</strong>.
    </p>
    <p>
      It felt very social and relaxed, so I would definitely recommend it if you're staying in the
      city.
    </p>

    <h3>Evening City Exploration</h3>
    <p>
      That evening I didn't plan anything specific and just walked around the city. Málaga is a great
      place to wander aimlessly — small streets, cafés, and a very lively atmosphere.
    </p>
    <p>
      At some point I walked up to the citadel area (Gibralfaro hill) where you get an amazing view
      over the city. At night there were lots of people hanging out there, some music, some small
      groups of friends drinking and talking.
    </p>
    <p>
      It actually felt very safe, and the view of the city lights from the top was beautiful. I
      imagine it would also be a fantastic place to watch the sunset.
    </p>

    <h3>Day Trip to Mijas</h3>
    <p>
      The next day I decided to visit the village of <strong>Mijas</strong>, which sits in the hills
      above the coast.
    </p>
    <p>
      Figuring out the bus route took a bit of trial and error, but eventually I worked it out. I
      first took a bus to Fuengirola, and from there I switched to the <strong>M122</strong> bus that
      goes up to Mijas.
    </p>
    <p>
      I used the <strong>green transport card</strong>, and the whole trip was surprisingly cheap —
      around <strong>1.5€</strong>.
    </p>
    <p>
      Public transport in the area turned out to be really convenient once I understood how it
      worked.
    </p>

    <h3>Planning the Next Adventure</h3>
    <p>
      After exploring Málaga and Mijas, my next plan was a day trip to <strong>Granada</strong>.
    </p>
    <p>
      I booked a round-trip <strong>ALSA</strong> bus ticket for about <strong>27€</strong>. I
      probably could have found something cheaper with <strong>BlaBlaCar</strong>, but I had some
      issues using it at the time.
    </p>
    <p>
      The main reason for going to Granada was, of course, to finally see the{" "}
      <strong>Alhambra</strong>.
    </p>
    <p>
      Finally, I did another day trip to the Caminito Del Rey with{" "}
      <a href="https://malagasouthexperiences.com/" target="_blank" rel="noopener noreferrer">
        Malaga South Experiences
      </a>
      .
    </p>

    <Heading kicker="Food">Food I Tried in Málaga</Heading>

    <p>
      Málaga has amazing food culture! Here are some delicious local specialties I tried during my
      stay:
    </p>

    <div className="story-cards">
      {dishes.map((d) => (
        <div className="story-card" key={d.title}>
          <h4>{d.title}</h4>
          <p>{d.text}</p>
          {d.price && <p className="price">{d.price}</p>}
          {d.meta && <p className="meta">{d.meta}</p>}
        </div>
      ))}
    </div>

    <Gallery items={foodImages} />

    <Heading kicker="Gallery">Granada</Heading>

    <Gallery items={granadaImages} />

    <Heading kicker="Day trip">Caminito del Rey</Heading>

    <Gallery items={caminitoImages} />
  </StoryPage>
);

export default Spain_Page;
