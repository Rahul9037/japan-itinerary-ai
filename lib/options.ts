export type Place = {
  id: string;
  name: string;
  blurb: string;
  image: string;
  imageAlt: string;
  video: { id: string; title: string };
  links: { label: string; href: string }[];
};

export const places: Place[] = [
  {
    id: "tokyo",
    name: "Tokyo",
    blurb:
      "Asakusa for temples and a quiet hotel, Shinjuku/Shibuya/Ginza for the shopping day. Stroller-friendly metros. Almost no November snow.",
    image: "/places/tokyo-skyline.jpg",
    imageAlt: "Tokyo skyline",
    video: { id: "TNomzoYXWMc", title: "Official Tokyo Tokyo — Culture" },
    links: [
      { label: "GO TOKYO (official)", href: "https://www.gotokyo.org/en/" },
      { label: "JNTO Tokyo", href: "https://www.japan.travel/en/destinations/kanto/tokyo/" },
      { label: "Asakusa / Senso-ji", href: "https://www.senso-ji.jp/english/" },
      { label: "Meiji Shrine", href: "https://www.meijijingu.or.jp/en/" },
      { label: "Shibuya", href: "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html" },
    ],
  },
  {
    id: "fuji",
    name: "Kawaguchiko (Mount Fuji)",
    blurb:
      "The honest November ‘snow’ stop: a white summit if the sky is clear, freezing lake mornings, a small chance of flurries. Stay two nights so cloud does not waste the transfer.",
    image: "/places/fuji-kawaguchiko.jpg",
    imageAlt: "Mount Fuji from the Fuji Five Lakes",
    video: { id: "gqcV7rWRTpo", title: "JNTO — Tokai region (Fuji & Hakone)" },
    links: [
      { label: "Fuji-Kawaguchiko tourism", href: "https://www.fujisan.ne.jp/index_en.php" },
      { label: "Yamanashi official (English)", href: "https://www.yamanashi-kankou.jp/english/" },
      { label: "Highway bus Shinjuku–Kawaguchiko", href: "https://highway-buses.jp/" },
      { label: "Momiji / maple festival notes", href: "https://www.japan.travel/en/spot/1703/" },
    ],
  },
  {
    id: "hakone",
    name: "Hakone",
    blurb:
      "Hot-spring town between Tokyo and Kyoto. Fuji views from the lake on a clear day, ropeway, onsen after the baby sleeps. Romancecar from Shinjuku is easier than the Fuji highway bus.",
    image: "/places/fuji-red-pagoda.jpg",
    imageAlt: "Red pagoda with Mount Fuji",
    video: { id: "gqcV7rWRTpo", title: "JNTO — Tokai region (Fuji & Hakone)" },
    links: [
      { label: "Hakone Navi (official)", href: "https://www.hakonenavi.jp/international/en/" },
      { label: "Hakone Freepass (Odakyu)", href: "https://www.odakyu.jp/english/passes/hakone/" },
      { label: "Lake Ashi / Hakone Shrine", href: "https://www.japan.travel/en/spot/1708/" },
    ],
  },
  {
    id: "nikko",
    name: "Nikko",
    blurb:
      "UNESCO shrines, waterfalls, colder highland air. Best if you travel the first week of November, when colour and possible frost/snow sit higher up. More stairs — carrier, not stroller, at Toshogu.",
    image: "/places/japan-shrine-path.jpg",
    imageAlt: "Shrine path in autumn",
    video: { id: "mu-0CoEPWqA", title: "JNTO — Kanto region (includes Nikko)" },
    links: [
      { label: "Visit Nikko (official)", href: "https://www.visitnikko.jp/en/" },
      { label: "Nikko Toshogu", href: "https://www.toshogu.jp/english/" },
      { label: "JNTO Nikko", href: "https://www.japan.travel/en/destinations/kanto/tochigi/nikko/" },
    ],
  },
  {
    id: "kyoto",
    name: "Kyoto",
    blurb:
      "Late-November maples. One district per day with a toddler: Arashiyama, then Higashiyama/Gion. Fushimi only the first stretch of gates.",
    image: "/places/kyoto-fushimi.jpg",
    imageAlt: "Fushimi Inari shrine gates",
    video: { id: "FLsncmk6YNQ", title: "Kyoto City official promotional film" },
    links: [
      { label: "Kyoto City official guide", href: "https://kyoto.travel/en/" },
      { label: "JNTO Kyoto", href: "https://www.japan.travel/en/destinations/kansai/kyoto/" },
      { label: "Kiyomizu-dera", href: "https://www.kiyomizudera.or.jp/en/" },
      { label: "Arashiyama / Tenryu-ji", href: "https://www.tenryuji.com/en/" },
    ],
  },
  {
    id: "osaka",
    name: "Osaka",
    blurb:
      "Food and shopping, not snow. Dotonbori at night, Kuromon market, easy trains to Kyoto. Use as a third city only if shopping matters more than Fuji.",
    image: "/places/osaka-dotonbori.jpg",
    imageAlt: "Dotonbori, Osaka at night",
    video: { id: "MqDhBNGxhnE", title: "Osaka official campaign film" },
    links: [
      { label: "Osaka Info (official)", href: "https://osaka-info.jp/en/" },
      { label: "JNTO Osaka", href: "https://www.japan.travel/en/destinations/kansai/osaka/" },
      { label: "Dotonbori", href: "https://osaka-info.jp/en/page/dotonbori" },
      { label: "Kaiyukan aquarium", href: "https://www.kaiyukan.com/language/eng/" },
    ],
  },
  {
    id: "kanazawa",
    name: "Kanazawa",
    blurb:
      "Kenrokuen garden in autumn, quieter streets, gold-leaf souvenirs. A calmer middle city than Osaka. Snow is unlikely in November; colour is the point.",
    image: "/places/japan-pagoda.jpg",
    imageAlt: "Japanese temple grounds in autumn",
    video: { id: "FLsncmk6YNQ", title: "Kyoto film — similar garden-and-temple pace" },
    links: [
      { label: "Visit Kanazawa (official)", href: "https://visitkanazawa.jp/" },
      { label: "Kenrokuen garden", href: "https://www.pref.ishikawa.jp/siro-niwa/kenrokuen/e/" },
      { label: "JNTO Kanazawa", href: "https://www.japan.travel/en/destinations/hokuriku-shinetsu/ishikawa/kanazawa/" },
    ],
  },
];

export type RouteOption = {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  nights: string;
  corePerAdult: string;
  snow: string;
  shopping: string;
  pace: string;
  baby: string;
  when: string;
  stays: string[];
  placeIds: string[];
  days: { date: string; title: string }[];
  why: string;
  watchOut: string;
};

export const routes: RouteOption[] = [
  {
    id: "fuji",
    badge: "Best match",
    name: "Tokyo · Fuji lake · Kyoto",
    tagline: "Tokyo shopping, a snow-capped Fuji, Kyoto maples. Two hotel changes only.",
    nights: "9 nights (19–28 Nov)",
    corePerAdult: "₹1.21 lakh",
    snow: "Fuji summit (likely). Lake flurries (maybe). City snow (no).",
    shopping: "Full day in Shinjuku + Shibuya/Ginza. Gotemba only if the bus lines up.",
    pace: "One neighbourhood a day. Nap window kept.",
    baby: "Highway bus to the lake. Courier bags Tokyo → Kyoto.",
    when: "Second half of November",
    stays: ["Asakusa 4N", "Kawaguchiko 2N", "Kyoto 3N"],
    placeIds: ["tokyo", "fuji", "kyoto"],
    days: [
      { date: "19 Nov", title: "Land Narita → Asakusa. Senso-ji at dusk only." },
      { date: "20 Nov", title: "East Tokyo slow: park, river, hotel nap." },
      { date: "21 Nov", title: "Shopping day (own wallet). Back to Asakusa by evening." },
      { date: "22 Nov", title: "Meiji Shrine + spare time. Pack for the lake." },
      { date: "23 Nov", title: "Holiday bus Shinjuku → Kawaguchiko. Lake walk." },
      { date: "24 Nov", title: "Fuji if it shows. Ropeway or rest in cloud." },
      { date: "25 Nov", title: "Bus to Mishima → Shinkansen to Kyoto. Stop." },
      { date: "26 Nov", title: "Arashiyama only." },
      { date: "27 Nov", title: "Kiyomizu + Gion. No Nara." },
      { date: "28 Nov", title: "Haruka to KIX, fly home." },
    ],
    why: "Covers Tokyo, a second landscape, Kyoto colour, shopping, and the only realistic November snow you can plan.",
    watchOut: "23 Nov buses sell out. Fuji hides in cloud about half the time — that is why you stay two nights.",
  },
  {
    id: "hakone",
    badge: "Easier trains",
    name: "Tokyo · Hakone onsen · Kyoto",
    tagline: "Same three-stop idea, but Hakone is a train town with onsen instead of a highway bus to the lake.",
    nights: "9 nights (19–28 Nov)",
    corePerAdult: "₹1.22 lakh",
    snow: "Fuji from Lake Ashi on a clear day. Occasional highland frost.",
    shopping: "Tokyo shopping day plus Odawara station gifts. No outlet mall unless you detour.",
    pace: "Romancecar is seated and simple with a toddler.",
    baby: "Hakone Freepass. Onsen: one adult soaks, one stays with the baby.",
    when: "Second half of November",
    stays: ["Asakusa 4N", "Hakone-Yumoto 2N", "Kyoto 3N"],
    placeIds: ["tokyo", "hakone", "kyoto"],
    days: [
      { date: "19–22 Nov", title: "Tokyo as in option 1, including the shopping Saturday." },
      { date: "23 Nov", title: "Romancecar Shinjuku → Hakone-Yumoto. Short village walk." },
      { date: "24 Nov", title: "Hakone loop: pirate ship or ropeway only if queues are kind. Stop early." },
      { date: "25 Nov", title: "Odawara → Shinkansen to Kyoto." },
      { date: "26–27 Nov", title: "Kyoto west, then east. Same slow split." },
      { date: "28 Nov", title: "KIX." },
    ],
    why: "If the highway bus worries you, Hakone is the gentler mountain stop and still gives a Fuji photograph.",
    watchOut: "Ropeway and pirate ships get packed on the 23 Nov holiday. Book the Freepass; skip Owakudani if sulphur and crowds stress the baby.",
  },
  {
    id: "nikko",
    badge: "If you go 1–8 Nov",
    name: "Tokyo · Nikko highlands · Kyoto",
    tagline: "Use this only for the first week of November, when Nikko is colder and Kyoto is still mostly green.",
    nights: "8–9 nights in early November",
    corePerAdult: "₹1.18 lakh",
    snow: "Best November chance of frost or a dusting at altitude. Not a ski trip.",
    shopping: "Tokyo shopping still fits. Nikko is shrines, not malls.",
    pace: "Toshogu is stairs. Keep Nikko to one shrine cluster plus the lake if energy remains.",
    baby: "Carrier at the shrine. Limited evening food — hotel with breakfast.",
    when: "First week of November (not 19–28)",
    stays: ["Ueno/Asakusa 3N", "Nikko 2N", "Kyoto 3N"],
    placeIds: ["tokyo", "nikko", "kyoto"],
    days: [
      { date: "Day 1–3", title: "Tokyo, with one shopping day." },
      { date: "Day 4", title: "Limited Express Spacia to Nikko. Check in, short walk." },
      { date: "Day 5", title: "Toshogu morning. Lake Chuzenji only if the baby is still happy." },
      { date: "Day 6", title: "Return toward Tokyo Station / Ueno and Shinkansen to Kyoto." },
      { date: "Day 7–8", title: "Kyoto slow. Colour may be late — gardens still worth it." },
      { date: "Day 9", title: "KIX." },
    ],
    why: "Matches ‘snow if possible’ better than city Japan if your leave is the first week.",
    watchOut: "Do not run this in late November instead of Fuji — you would miss Kyoto peak colour and sit in Nikko after the maples.",
  },
  {
    id: "osaka",
    badge: "Max shopping",
    name: "Tokyo · Kyoto · Osaka",
    tagline: "Three cities, no mountain. Best if shopping and food matter more than any snow.",
    nights: "9 nights (19–28 Nov)",
    corePerAdult: "₹1.16 lakh",
    snow: "None planned. Fuji would be a rushed day trip — we do not add it here.",
    shopping: "Shinjuku/Shibuya, Kyoto Station/Nishiki, Dotonbori/Shinsaibashi. Highest haul.",
    pace: "Still 3 hotels. Osaka is flat and night-life easy; keep the baby on a carrier in Dotonbori.",
    baby: "Osaka Metro is simple. Aquarium instead of USJ.",
    when: "Second half of November",
    stays: ["Asakusa 4N", "Kyoto 3N", "Namba 2N"],
    placeIds: ["tokyo", "kyoto", "osaka"],
    days: [
      { date: "19–22 Nov", title: "Tokyo including Saturday shopping." },
      { date: "23 Nov", title: "Holiday Shinkansen to Kyoto (book seats). Rest." },
      { date: "24–25 Nov", title: "Kyoto west then east." },
      { date: "26 Nov", title: "Short hop to Namba. Kuromon + Dotonbori." },
      { date: "27 Nov", title: "Kaiyukan or covered shopping. Pack." },
      { date: "28 Nov", title: "Nankai to KIX — shortest airport exit." },
    ],
    why: "If the group will be unhappy without Osaka food streets and extra shops, this is the honest trade: you drop snow.",
    watchOut: "Four adults will spend more in Dotonbori than the core budget. That is still the extra wallet.",
  },
  {
    id: "kanazawa",
    badge: "Calmest",
    name: "Tokyo · Kanazawa · Kyoto",
    tagline: "Quieter middle city, Kenrokuen maples, gold-leaf souvenirs. Least snow, least noise.",
    nights: "9 nights (19–28 Nov)",
    corePerAdult: "₹1.20 lakh",
    snow: "Unlikely. Gardens and sea light, not powder.",
    shopping: "Tokyo day plus Kanazawa gold leaf / Kaga crafts. Gentler than Osaka.",
    pace: "Kanazawa is compact. Good if the baby (or grandparents) need a slower middle.",
    baby: "Kenrokuen has paths; skip the castle keep.",
    when: "Mid to late November",
    stays: ["Asakusa 3N", "Kanazawa 3N", "Kyoto 3N"],
    placeIds: ["tokyo", "kanazawa", "kyoto"],
    days: [
      { date: "19–21 Nov", title: "Tokyo. Shopping on the Saturday." },
      { date: "22 Nov", title: "Hokuriku Shinkansen to Kanazawa (~2.5h). Rest." },
      { date: "23 Nov", title: "Holiday in Kenrokuen — go at opening. Higashi Chaya walk." },
      { date: "24 Nov", title: "Omicho market, crafts, nap. No extra town." },
      { date: "25 Nov", title: "Thunderbird limited express to Kyoto." },
      { date: "26–27 Nov", title: "Kyoto west, then east." },
      { date: "28 Nov", title: "KIX." },
    ],
    why: "If ‘relaxed’ is the top need and shopping can be crafts not malls, this is the kindest rhythm.",
    watchOut: "You will not see Fuji. Do not add it as a day trip from Kanazawa.",
  },
];

export function placeById(id: string) {
  return places.find((p) => p.id === id)!;
}
