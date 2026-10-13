// The written-up trips, newest first. `places` doubles as search text.
export const stories = [
  { slug: "egypt", name: "Egypt", places: "Luxor · Cairo · Alexandria" },
  { slug: "jordan", name: "Jordan", places: "Amman · Petra · Dead Sea" },
  { slug: "kazakhstan", name: "Kazakhstan", places: "Almaty · Kolsai · Charyn Canyon" },
  { slug: "spain", name: "Spain", places: "Valencia · Málaga · Granada · Caminito del Rey" },
  { slug: "belgium", name: "Belgium", places: "Gent" },
  { slug: "france", name: "France", places: "Nice" },
];

export const storySlugByCountry = stories.reduce((acc, s) => {
  acc[s.name] = s.slug;
  return acc;
}, {});

export const cardImage = (slug) => `${process.env.PUBLIC_URL}/images/cards/${slug}.jpeg`;
