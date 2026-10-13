// KazakhstanPage.js
import {
  asset,
  Day,
  Gallery,
  galleryItems,
  Heading,
  PhotoGrid,
  StoryPage,
  thumb,
  Timeline,
} from "./StoryKit";

const galleryImages = galleryItems([
  "Kazakhstan/3.jpeg",
  "Kazakhstan/10.jpeg",
  "Kazakhstan/11.jpeg",
  "Kazakhstan/12.jpeg",
  "Kazakhstan/13.jpeg",
  "Kazakhstan/14.jpeg",
]);

const medeuGalleryImages = galleryItems([
  "Kazakhstan/15.jpeg",
  "Kazakhstan/16.jpeg",
  "Kazakhstan/17.jpeg",
  "Kazakhstan/18.jpeg",
  "Kazakhstan/19.jpeg",
  "Kazakhstan/20.jpeg",
]);

const bazaarPhotos = [
  { src: thumb("Kazakhstan/7.jpeg"), caption: "Green Bazaar" },
  { src: thumb("Kazakhstan/4.jpeg"), caption: "Kazakh Cheesecake" },
  { src: thumb("Kazakhstan/5.jpeg"), caption: "Beshbarmak" },
];

const milkyWayPhotos = [
  { src: thumb("Kazakhstan/8.jpeg"), caption: "Milky Way 1" },
  { src: thumb("Kazakhstan/9.jpeg"), caption: "Milky Way 2" },
];

const KazakhstanPage = () => (
  <StoryPage
    theme="kazakhstan"
    hero={asset("Kazakhstan/10.jpeg")}
    title="Kazakhstan"
    subtitle="Almaty, the Kolsai lakes and a night under the Milky Way"
    chips={["Almaty", "Kolsai", "Charyn Canyon", "6 days"]}
  >
    <p className="story-lead">
      I have been waiting for this trip for such a long time. I fell in love with Central Asia after
      my trip to Uzbekistan 3 years ago. Instagram spoils you so much these days! All the reels about
      Kazakhstan were making me dream, so I decided to go to Almaty.
    </p>

    <p>
      I flew with Pegasus airlines from Brussels Charleroi (Brussels to Istanbul, Istanbul to
      Almaty). Long flight but then that was the best option for me! Almaty airport is pretty nice
      and has good facilities. I reached very early morning and thus decided to rest a bit there. The
      passport control was very smooth. I was happy since I did not need a visa.
    </p>

    <Heading kicker="Arrival">At the airport</Heading>

    <ul>
      <li>Sim card: there are a few operators; I took an unlimited internet pack for around 10€ (eSIM is an option).</li>
      <li>Transport: taxi or public bus (paid ~200 KZT). Yandex works well for cheap rides.</li>
    </ul>

    <p>
      I stayed at the Golden Square hostel. I had a good experience, the hostel was affordable and at
      a nice location (
      <a href="https://www.booking.com/Share-4XxD6o" target="_blank" rel="noopener noreferrer">
        Check out Golden Square on Booking.com
      </a>
      !).
    </p>

    <Heading kicker="Almaty">Green Bazaar &amp; food</Heading>

    <p>
      I started with tasting pickled vegetables, tried some Halwa and fresh mango juice. Shopkeepers
      often let you sample things. Cards are generally accepted but keep cash for some vendors. Kaspi
      is the local payment system worth setting up for longer stays.
    </p>

    <p>
      Then, I went to Bayurdaq to try Beshbarmak. I also had a cheesecake and horse milk — an
      interesting experience. Beshbarmak was under €10.
    </p>

    <PhotoGrid photos={bazaarPhotos} />

    <Heading kicker="Out of the city">Two-day trip (yurts &amp; lakes)</Heading>

    <p>
      I booked a 2-day trip (recommended) to stay in yurts and stargaze — Kazakhstan is spectacular
      for that. We visited Kolsai and Kaindy lakes, rode horses, boated, and saw Charyn Canyon. The
      group was international and the local guide was great.
    </p>

    <p>
      The yurt stay was a highlight: modern yurts, charging facilities, bonfire, games and karaoke.
    </p>

    <Gallery items={galleryImages} />

    <p>At night I saw the Milky Way — unforgettable.</p>

    <PhotoGrid wide photos={milkyWayPhotos} />

    <Heading kicker="Practical">Packing tips</Heading>

    <ul>
      <li>💶 Some cash</li>
      <li>💊 Important medicines</li>
      <li>🛂 Passport</li>
      <li>🧥 Light jacket (it can get chilly)</li>
      <li>🥤 Water and snacks</li>
    </ul>

    <Heading kicker="Mountains">Medeu &amp; Shymbulak</Heading>

    <p>
      I visited Medeu valley and the cable car to Shymbulak. Round-trip tickets cost around €21. The
      views and the landscape change from green to snowy are worth the visit.
    </p>

    <Gallery items={medeuGalleryImages} />

    <p>
      I bought a Kazakh edition of The Little Prince from a local bookstore. Almaty is colorful at
      night and great for walks. One trip to Almaty Lake was interrupted by a checkpoint, so consider
      joining a tour group if you don't have a car.
    </p>

    <p>
      My last day was chill — walking and local food. I left Assy plateau and other places for next
      time.
    </p>

    <Heading kicker="Itinerary">Here is a suggested itinerary: Almaty for 6 Days</Heading>

    <Timeline>
      <Day date="Day 14 Jun" title="Almaty + Kok Tobe">
        <p>
          Start your adventure in the heart of Almaty. Explore the city center, visit the Green
          Bazaar, and wander through local neighborhoods. In the evening, take a stroll up to Kok
          Tobe, the iconic hill offering panoramic views of the city lights. There's a roller coaster
          and park attractions if you're feeling adventurous!
        </p>
      </Day>

      <Day date="Days 15–16 Jun" title="Kolsai Lakes + Lake Kaindy + Charyn Canyon">
        <p>
          Book a guided 2-day tour to experience the raw beauty of nature. Visit the stunning
          turquoise Kolsai Lakes, explore the mystical Lake Kaindy with its submerged forest, and
          hike through the dramatic Charyn Canyon. This is the highlight of any Almaty trip—bring
          comfortable hiking shoes and plenty of water!
        </p>
      </Day>

      <Day date="Day 17 Jun" title="Medeu + Shymbulak (Easy by Public Transport)">
        <p>
          Take the day to visit Medeu, the world's highest skating rink, and ride the cable car up to
          Shymbulak for breathtaking alpine views. The journey from green valleys to snowy peaks is
          mesmerizing. Grab lunch at one of the mountain cafés and soak in the serene atmosphere.
        </p>
      </Day>

      <Day date="Days 18–19 Jun" title="Adventure Options">
        <p style={{ marginBottom: "10px" }}>
          <strong>Option 1: Assy Plateau</strong> — Head out for stargazing and vast, endless
          landscapes. This remote plateau offers some of the darkest skies for astrophotography and a
          true sense of solitude in nature.
        </p>
        <p>
          <strong>Option 2: Altyn-Emel National Park</strong> — Explore the unique desert scenery and
          the striking Aktau Mountains, known for their colorful geological formations. This is
          perfect for those seeking a different kind of natural beauty beyond the mountains.
        </p>
      </Day>
    </Timeline>
  </StoryPage>
);

export default KazakhstanPage;
