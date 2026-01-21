import L from "leaflet";

const iconSize = [28, 28];
const iconAnchor = [14, 28];

const makeIcon = (file) =>
  L.icon({
    iconUrl: `${process.env.PUBLIC_URL}/images/markerIcons/${file}`,
    iconSize,
    iconAnchor,
    popupAnchor: [0, -28],
  });

export const waffleIcon = makeIcon("waffle.png");
export const churchIcon = makeIcon("church.png");
export const franceIcon = makeIcon("france.png");
export const germanyIcon = makeIcon("germany.png");
export const italyIcon = makeIcon("italy.png");
export const spainIcon = makeIcon("spain.jpg");
export const netherlandsIcon = makeIcon("netherlands.png");
export const swedenIcon = makeIcon("sweden.png");
export const norwayIcon = makeIcon("norway.png");
export const finlandIcon = makeIcon("finland.jpg");
export const denmarkIcon = makeIcon("denmark.png");
export const austriaIcon = makeIcon("austria.png");
export const switzerlandIcon = makeIcon("swiss.png");
export const greeceIcon = makeIcon("greece.png");
export const portugalIcon = makeIcon("portugal.jpg");
export const irelandIcon = makeIcon("ireland.png");
export const polandIcon = makeIcon("poland.png");
export const czechRepublicIcon = makeIcon("czech.png");
export const slovakiaIcon = makeIcon("slovakia.png");
export const hungaryIcon = makeIcon("hungary.png");
export const romaniaIcon = makeIcon("romania.png");
export const bulgariaIcon = makeIcon("bulgaria.png");
export const sloveniaIcon = makeIcon("slovenia.png");
export const croatiaIcon = makeIcon("croatia.jpg");
export const estoniaIcon = makeIcon("estonia.png");
export const latviaIcon = makeIcon("latvia.jpg");
export const lithuaniaIcon = makeIcon("lithuania.png");
export const luxembourgIcon = makeIcon("luxembourg.png");
export const liechtensteinIcon = makeIcon("liechtenstein.png");
export const maltaIcon = makeIcon("malta.png");
export const andorraIcon = makeIcon("andorra.png");
export const sanMarinoIcon = makeIcon("sanmarino.png");
export const monacoIcon = makeIcon("monaco.png");
export const vaticanIcon = makeIcon("vatican.png");
export const ukIcon = makeIcon("uk.png");
export const bosniaIcon = makeIcon("bosnia.png");
export const albaniaIcon = makeIcon("albania.png");
export const macedoniaIcon = makeIcon("macedonia.png");
export const serbiaIcon = makeIcon("belgrade.png");
export const moldovaIcon = makeIcon("moldova.png");
export const montenegroIcon = makeIcon("montenegro.png");
export const kosovoIcon = makeIcon("kosovo.png");
export const georgiaIcon = makeIcon("georgia.png");
export const azerbaijanIcon = makeIcon("azerbaijan.jpg");
export const indiaIcon = makeIcon("india.jpg");
export const uzbekistanIcon = makeIcon("uzbekistan.png");
export const turkeyIcon = makeIcon("turkey.png");
export const malaysiaIcon = makeIcon("malaysia.jpg");
export const thailandIcon = makeIcon("thailand.jpg");
export const indonesiaIcon = makeIcon("j2.png");
export const icelandIcon = makeIcon("church.png");
