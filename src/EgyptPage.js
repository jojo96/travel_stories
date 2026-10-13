// EgyptPage.js — Luxor, Cairo and Alexandria, September–October 2026
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./EgyptPage.css";

const base = `${process.env.PUBLIC_URL}/images/Egypt`;
const img = (name) => `${base}/${name}.jpeg`;
const thumb = (name) => `${base}/thumbs/${name}.jpeg`;

const gallery = (items) =>
  items.map(([name, caption]) => ({
    original: img(name),
    thumbnail: thumb(name),
    description: caption,
    originalAlt: caption,
    thumbnailAlt: caption,
  }));

const mummyGallery = gallery([
  ["mummy-coffin", "Mummy board of a high priest of Amun"],
  ["mummy-cat", "Mummy of a cat, sacred animal of the goddess Bastet"],
  ["mummy-fish", "Mummy of a fish (Lates niloticus), found in Esna"],
  ["mummy-crocodile", "Mummy of a crocodile"],
  ["mummy-baboon", "A baboon mummy"],
  ["mummy-jars", "Alabaster canopic jars, each guarded by a son of Horus"],
]);

const vokGallery = gallery([
  ["vok-entrance", "Into the Valley of the Kings"],
  ["vok-ceiling", "Gold and blue — a tomb ceiling that has not faded in 3,000 years"],
  ["vok-relief", "Carved and painted walls, column after column of hieroglyphs"],
  ["vok-sarcophagus", "A broken sarcophagus lid in the burial chamber"],
  ["medinet-habu", "The massive gateway at Medinet Habu"],
]);

const gemGallery = gallery([
  ["gem-hall", "The entrance hall of the Grand Egyptian Museum"],
  ["tut-mask", "The golden mask of Tutankhamun"],
  ["tut-coffin", "One of Tutankhamun's coffins"],
  ["khufu-boat-1", "Khufu's boat, reassembled plank by plank"],
  ["khufu-boat-2", "The restoration hall from above"],
  ["gem-window-pyramid", "A pyramid framed by the museum window"],
  ["gem-pyramid-view", "Khafre's pyramid from the museum terrace"],
]);

const pyramidGallery = gallery([
  ["sphinx-1", "The Sphinx, first thing you see when you enter"],
  ["sphinx-2", "Early morning light on the Sphinx"],
  ["sphinx-3", "Up close — the scale only makes sense in person"],
  ["pyramid-passage", "Inside Khufu's pyramid"],
  ["grand-gallery-1", "The Grand Gallery, climbing towards the burial chamber"],
  ["grand-gallery-2", "Standing, crouching, crawling into ancient history"],
  ["camels", "Camels waiting near the panoramic point"],
  ["pyramids-walk", "Walking the desert between the pyramids"],
]);

const alexGallery = gallery([
  ["library-alexandria", "The Bibliotheca Alexandrina"],
  ["qaitbay", "Qaitbay Citadel"],
  ["lighthouse-site", "Where the ancient lighthouse of Alexandria once stood"],
  ["catacombs-1", "Catacombs of Kom el Shoqafa"],
  ["catacombs-2", "Greek, Roman and Egyptian styles carved into one tomb"],
]);

const EgyptPage = () => {
  const [zoom, setZoom] = useState(null);

  const close = useCallback(() => setZoom(null), []);

  useEffect(() => {
    if (!zoom) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, close]);

  const Figure = ({ name, caption }) => (
    <figure className="eg-figure">
      <img
        src={img(name)}
        alt={caption}
        loading="lazy"
        onClick={() => setZoom({ name, caption })}
      />
      <figcaption className="eg-cap">{caption}</figcaption>
    </figure>
  );

  const Grid = ({ photos, wide }) => (
    <div className={wide ? "eg-grid two" : "eg-grid"}>
      {photos.map(([name, caption]) => (
        <figure
          key={name}
          className="eg-tile"
          role="button"
          tabIndex={0}
          onClick={() => setZoom({ name, caption })}
          onKeyDown={(e) => e.key === "Enter" && setZoom({ name, caption })}
        >
          <img src={thumb(name)} alt={caption} loading="lazy" />
          <figcaption>{caption}</figcaption>
        </figure>
      ))}
    </div>
  );

  const Gallery = ({ items }) => (
    <div className="eg-gallery">
      <ImageGallery
        items={items}
        showThumbnails
        showFullscreenButton
        showPlayButton={false}
        lazyLoad
        slideDuration={400}
      />
    </div>
  );

  const Heading = ({ kicker, children }) => (
    <>
      <h2>
        <span className="eg-kicker">{kicker}</span>
        {children}
      </h2>
      <div className="eg-rule" />
    </>
  );

  const Tip = ({ icon = "💡", children }) => (
    <div className="eg-tip">
      <span className="eg-tip-icon">{icon}</span>
      <div>{children}</div>
    </div>
  );

  return (
    <div className="eg">
      <header
        className="eg-hero"
        style={{ backgroundImage: `url(${img("pyramids-panorama")})` }}
      >
        <Link to="/" className="eg-back">
          ← All travel stories
        </Link>
        <div className="eg-hero-inner">
          <h1>Egypt</h1>
          <p className="eg-hero-sub">
            Luxor, Cairo and Alexandria — a week of mummies, koshari and the kindness of strangers
          </p>
          <div className="eg-chips">
            <span className="eg-chip">Sep–Oct 2026</span>
            <span className="eg-chip">3 cities</span>
            <span className="eg-chip">6 days</span>
            <span className="eg-chip">solo trip</span>
          </div>
        </div>
      </header>

      <main className="eg-wrap">
        <p className="eg-lead">
          I always wanted to go to Egypt, and finally I had the chance. I kept checking flights
          all the time and came across this EasyJet flight to Luxor — the decision didn't take too
          long afterwards. I have some amazing Egyptian friends in Belgium. I asked them countless
          questions and they were very kind.
        </p>

        <Heading kicker="Before the trip">The visa saga</Heading>

        <p>
          I think one of the hardest parts of my trip was applying for the visa. I had a rather
          funny experience on the visa website: after a lot of reading, I decided to take the
          e-visa path (
          <a href="https://visa2egypt.gov.eg/eVisa/Home" target="_blank" rel="noopener noreferrer">
            visa2egypt.gov.eg
          </a>
          ).
        </p>

        <p>
          The website repeatedly kept mentioning that I needed to have an invitation letter from
          an Egyptian tour agency. The whole site was a maze, but then at some point, after many
          efforts, I figured out that if I didn't save my data and just went ahead, the site
          somehow allowed me to bypass the tourist agency rule and apply.
        </p>

        <Tip icon="🧭">
          <p>
            <strong>The trick:</strong> on the applicants page, just click <strong>NEXT</strong>.
            Do not use <strong>SAVE / UPDATE APPLICANT</strong> — that is what triggers the
            invitation-letter requirement.
          </p>
        </Tip>

        <p>
          After I applied, I had an anxious wait of a few days — you know the pre-visa jitters.
          The visa actually arrived a few days later. Simple, nice e-visa.
        </p>

        <p>
          I still had my doubts though, and I went to the embassy in Brussels to check. But they
          told me that they only deal with physical visas, not e-visas. Several people on the
          internet mentioned{" "}
          <a href="https://www.atlys.com/" target="_blank" rel="noopener noreferrer">
            Atlys
          </a>
          , but when I checked, I found out that they charged more for the e-visa and I was also
          not very sure. (Several people mentioned that Atlys provides the invitation letter as
          well.)
        </p>

        <p>
          I just went ahead with the e-visa website, hoping that I would be allowed entry into
          Egypt. I'm not much of a planner. I kind of knew which cities I wanted to go to: Luxor,
          Cairo and Alexandria.
        </p>

        <div className="eg-route">
          <div className="eg-route-label">The plan</div>
          <div className="eg-legs">
            <span className="stop">Brussels Charleroi</span>
            <span className="arrow">✈</span>
            <span className="stop">Milan</span>
            <span className="arrow">✈</span>
            <span className="stop">Luxor</span>
          </div>
          <div className="eg-legs" style={{ marginTop: "12px" }}>
            <span className="stop">Cairo</span>
            <span className="arrow">✈</span>
            <span className="stop">Verona</span>
            <span className="arrow">✈</span>
            <span className="stop">Brussels Charleroi</span>
          </div>
          <p>
            The original plan was to fly back out of Cairo straight to Charleroi — then the Luxor
            heat killed the Indian guy in me and I made my return trip a bit shorter, via Verona.
          </p>
        </div>

        <Heading kicker="Day of the trip">Milan, then down to Luxor</Heading>

        <p>
          I landed in Milan and headed straight to Como and Bellano — a magnificent experience and
          an unexpected bonus of a cheap-flight routing. Milan to Luxor was pretty straightforward;
          I have taken an EasyJet flight before and had a nice experience.
        </p>

        <p>
          I landed at the airport with an Airalo eSIM. Immigration was smooth, no hiccups
          whatsoever. The first challenge was the e-SIM: I thought Airalo would work easily, but it
          wasn't getting activated at all. Sadly, the only way to go to the city was a taxi, and I
          knew I would be overcharged if I took the ones waiting outside. So I ended up asking
          someone for a hotspot, and after looking here and there I did find a local taxi who
          charged me €10 for the trip.
        </p>

        <Tip icon="📱">
          <p>
            <strong>Get an e-SIM before you go to Egypt</strong> — and don't count on it activating
            the moment you land.{" "}
            <a
              href="https://travel.vodafone.com/our-destinations/egypt"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vodafone
            </a>{" "}
            seems to have good plans.
          </p>
        </Tip>

        <p>
          Somehow I reached my hostel —{" "}
          <a
            href="https://www.booking.com/hotel/eg/luxor-city-center-hostel.en-gb.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hana Stay Hostel
          </a>{" "}
          in Luxor — got some sleep and rejuvenated myself. One thing I did not expect was the
          heat, but that was my fault. Also, my heat tolerance has decreased considerably over the
          years.
        </p>

        <Heading kicker="Luxor · Day one">Souqs, mummies and the Nile at sunset</Heading>

        <Grid
          wide
          photos={[
            ["souq-1", "The souq near my hostel"],
            ["souq-2", "Everything, hanging everywhere"],
          ]}
        />

        <p>
          The afternoon walk was nice. I went to the Mummification Museum — it was so cool, one of
          my favourites in Egypt. The museum portrays the process of mummification and has a lot of
          detail about the rituals around it. Additionally, there are mummies of cats, crocodiles,
          birds and fish as well.
        </p>

        <Gallery items={mummyGallery} />

        <p>
          Then I went for a walk and watched the feluccas under the setting sun. I also managed to
          notice Venus, thanks to{" "}
          <a href="https://stellarium-web.org/" target="_blank" rel="noopener noreferrer">
            Stellarium
          </a>
          .
        </p>

        <Figure name="felucca" caption="Felucca rides on the Nile" />

        <p>
          I checked out the Luxor museum at night and it looked spectacular under the lights.
        </p>

        <Grid
          wide
          photos={[
            ["luxor-night-1", "Luxor under the lights"],
            ["luxor-night-2", "Columns that look even better after dark"],
          ]}
        />

        <Heading kicker="Luxor · Day two">The Valley of the Kings</Heading>

        <p>
          I met a friend in the hostel, and the next day we ended up going to the Valley of the
          Kings and Queen Hatshepsut's temple. It was a half-day tour, but worth it. It was really
          crazy roaming around these historical places. I also got some books and souvenirs from
          the local markets.
        </p>

        <Figure name="hatshepsut" caption="Queen Hatshepsut's temple, carved into the cliff" />

        <Gallery items={vokGallery} />

        <Heading kicker="Food">What I ate in Egypt</Heading>

        <p>
          I went around the markets (souqs) and tried a lot of food: hashim mashi, mahalabiya for
          dessert, fateera, hummus and koshari. Food in Egypt is both excellent and very cheap.
        </p>

        <Grid
          photos={[
            ["koshari-1", "Koshari"],
            ["koshari-2", "Koshari, again — no regrets"],
            ["hummus", "Hummus"],
            ["fateera", "Fateera"],
            ["sahlap", "Sahlap"],
            ["breakfast", "Hotel breakfast :D"],
            ["sahaby-menu", "Al-Sahaby Lane"],
            ["sahaby-plate", "Lunch with a rooftop view"],
          ]}
        />

        <Heading kicker="Luxor → Cairo">A long bus and a bookshop cat</Heading>

        <p>
          The next part was figuring out how to go from Luxor to Cairo. I was warned about buses
          and all, but I still went with{" "}
          <a href="https://go-bus.com/" target="_blank" rel="noopener noreferrer">
            GoBus
          </a>
          . It was actually pretty good, and they gave us food and water too. Long trip, but okay.
          Cairo city was alright, like any other capital.
        </p>

        <p>
          The first day was busy. I took some rest and then ended up going to the local bookstore,
          where I met an amazing cat who won my heart. I bought a book on the history of Indian
          cinema, which was really, really unexpected.
        </p>

        <Figure name="bookstore-cat" caption="The bookshop cat who won my heart" />

        <Heading kicker="Cairo">The Grand Egyptian Museum</Heading>

        <p>
          After that, I headed to the{" "}
          <a href="https://visit-gem.com/" target="_blank" rel="noopener noreferrer">
            Grand Egyptian Museum
          </a>
          . Amazing place — take your time to observe everything. You get a good view of the
          pyramids from the museum, and the room dedicated to Tutankhamun was amazing. It could be
          an overdose of things, so take your time, please! There are some eating places inside the
          museum and other museum shops that you could check out.
        </p>

        <p>
          Then another part of the museum belongs to{" "}
          <a
            href="https://en.wikipedia.org/wiki/Khufu_ship"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khufu's boats
          </a>
          . It was a really nice place as well — a lot of talented people coming together to
          restore the boats from antiquity.
        </p>

        <Gallery items={gemGallery} />

        <p>
          You could have done the pyramids on the same day, but I decided to come back and take
          some time for myself.
        </p>

        <Tip icon="🚕">
          <p>
            Uber is generally okay for the prices, but Careem and inDrive work too, as some people
            had suggested. Sometimes you get a message in Uber from the driver asking to pay more
            money — if you wait a bit, you will find the right offer on the app.
          </p>
        </Tip>

        <Heading kicker="Giza">And now, the pyramids</Heading>

        <p>
          The next morning I woke up really, really early and ended up reaching the ticket place
          before the opening time at 7 AM — and it was a good decision. There were not many people
          and it was lovely to walk around the complex.
        </p>

        <p>
          You see the Sphinx first thing when you enter, and it's just not possible to explain the
          feeling in words. I love the Mummy movies and Egypt and all the stories that I read in my
          childhood. Seeing this in real life is something else.
        </p>

        <p>
          You can walk around at your own pace, but there is also a free shuttle bus to go to the
          various sections — for example, you can go to the panoramic viewpoint, which is quite a
          walk otherwise. The structures are massive, and seeing them in person makes you realise
          how much effort it would have taken.
        </p>

        <p>
          One of the coolest things was going inside Khufu's pyramid. Standing, crouching, crawling
          into ancient history, and then you reach the burial chamber — my inner child was so
          happy. The panoramic point, from where you see all three pyramids together, is also
          incredible. Layers and layers of sand and historical artefacts, still withstanding the
          tests of time!
        </p>

        <Gallery items={pyramidGallery} />

        <Tip icon="🍕">
          <p>
            There is a Pizza Hut right next to the pyramids that apparently offers a great view. I
            tried to check it out, but it was closed in the morning.
          </p>
        </Tip>

        <Heading kicker="Cairo · Evening">Khan el-Khalili</Heading>

        <p>
          I came back home. After all these surreal experiences, I needed some rest. Then in the
          evening I went to the famous market there — Khan el-Khalili — and walked around. I had a
          sweet potato, some drinks, some roasted seeds, basically everything I could see on the
          streets, and it was just like in India: an overwhelming amount of street food options.
          The souq was really nice too. If you want some souvenirs, it is a good place to go to.
        </p>

        <Figure name="khan-el-khalili" caption="Lamps and lanterns at Khan el-Khalili" />

        <Heading kicker="Day trip">Alexandria</Heading>

        <p>
          I was thinking about doing a day trip to Alexandria, and then I actually ended up doing
          it. Alexandria is a totally different vibe. I loved walking across the promenade and went
          to the{" "}
          <a href="https://www.bibalex.org/en/default" target="_blank" rel="noopener noreferrer">
            Library of Alexandria
          </a>
          , Qaitbay Citadel — the site of the ancient lighthouse of Alexandria — and the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Catacombs_of_Kom_El_Shoqafa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catacombs of Kom el Shoqafa
          </a>
          , one of the wonders of the medieval world.
        </p>

        <Gallery items={alexGallery} />

        <p>
          But the most exciting part of my Alexandria trip was going to my friend's house. I visited
          his parents and they were so nice to me. I played with Rozza, the cutest dog in the world,
          and my friend's parents fed me for a week in a single meal. It's just like in India.
        </p>

        <Grid
          wide
          photos={[
            ["rozza", "Rozza"],
            ["family-lunch", "Lunch at my friend's house :D"],
          ]}
        />

        <div className="eg-closing">
          I really appreciate the time living abroad, away from your comfort zone. It can get
          really lonely sometimes, but the moments of happiness always overpower everything else.
        </div>

        <Figure name="road-sunrise" caption="One last Egyptian sunrise, on the way out" />

        <Heading kicker="Practical">Things I wish I had known</Heading>

        <ul className="eg-tips">
          <li>
            <span className="ico">🛂</span>
            <span>
              Apply for the e-visa early. The site insists on an invitation letter from a tour
              agency — click NEXT instead of SAVE/UPDATE APPLICANT and you can get through without
              one.
            </span>
          </li>
          <li>
            <span className="ico">📱</span>
            <span>
              Buy an e-SIM before you fly, and keep a backup plan: mine never activated on arrival.
            </span>
          </li>
          <li>
            <span className="ico">🚖</span>
            <span>
              Agree the taxi price before getting in — €10 from Luxor airport into the city was
              fair. In Cairo, use Uber, Careem or inDrive.
            </span>
          </li>
          <li>
            <span className="ico">🚍</span>
            <span>
              GoBus between Luxor and Cairo is comfortable, and food and water are included.
            </span>
          </li>
          <li>
            <span className="ico">⏰</span>
            <span>
              Be at the pyramids before the 7 AM opening. Fewer people, softer light, cooler air.
            </span>
          </li>
          <li>
            <span className="ico">🥵</span>
            <span>
              The Luxor heat is no joke. Water, a hat and an afternoon break are not optional.
            </span>
          </li>
          <li>
            <span className="ico">💵</span>
            <span>Keep cash for souqs, street food and small vendors.</span>
          </li>
          <li>
            <span className="ico">🏛️</span>
            <span>
              Give the Grand Egyptian Museum a full day of its own — don't try to add Giza to it.
            </span>
          </li>
        </ul>

        <Heading kicker="Itinerary">How the week actually went</Heading>

        <div className="eg-timeline">
          <div className="eg-day">
            <h4>
              <span className="eg-date">Day 1 · 28 Sep</span>
              Arrival in Luxor
            </h4>
            <p>
              Land, fight with the e-SIM, bargain for a taxi, check in and sleep. Afternoon: the
              souq near the hostel, lunch at Al-Sahaby Lane, then the Mummification Museum.
              Feluccas at sunset, Luxor lit up at night.
            </p>
          </div>
          <div className="eg-day">
            <h4>
              <span className="eg-date">Day 2 · 29 Sep</span>
              Valley of the Kings &amp; Hatshepsut
            </h4>
            <p>
              A half-day tour of the West Bank: the royal tombs, Queen Hatshepsut's temple and
              Medinet Habu. Books and souvenirs in the afternoon, koshari and fateera in the
              evening.
            </p>
          </div>
          <div className="eg-day">
            <h4>
              <span className="eg-date">Day 3 · 30 Sep</span>
              GoBus to Cairo + the Grand Egyptian Museum
            </h4>
            <p>
              Long bus ride, a quiet bookstore (and its cat), then the Grand Egyptian Museum:
              Tutankhamun, Khufu's boats, and the pyramids through the window.
            </p>
          </div>
          <div className="eg-day">
            <h4>
              <span className="eg-date">Day 4 · 1 Oct</span>
              Giza before sunrise, Khan el-Khalili after dark
            </h4>
            <p>
              At the gate before 7 AM: the Sphinx, inside Khufu's pyramid, the panoramic point with
              all three pyramids. Rest in the afternoon, street food in the market at night.
            </p>
          </div>
          <div className="eg-day">
            <h4>
              <span className="eg-date">Day 5 · 2 Oct</span>
              Day trip to Alexandria
            </h4>
            <p>
              The promenade, the Library of Alexandria, Qaitbay Citadel on the site of the ancient
              lighthouse, and the Catacombs of Kom el Shoqafa — then lunch with my friend's family,
              and Rozza.
            </p>
          </div>
          <div className="eg-day">
            <h4>
              <span className="eg-date">Day 6 · 3 Oct</span>
              Cairo → Verona → Charleroi
            </h4>
            <p>Sunrise on the road to the airport, and the long way home.</p>
          </div>
        </div>
      </main>

      {zoom && (
        <div className="eg-lightbox" onClick={close} role="presentation">
          <button className="eg-lightbox-close" onClick={close} aria-label="Close">
            ×
          </button>
          <img src={img(zoom.name)} alt={zoom.caption} />
          <figcaption>{zoom.caption}</figcaption>
        </div>
      )}
    </div>
  );
};

export default EgyptPage;
