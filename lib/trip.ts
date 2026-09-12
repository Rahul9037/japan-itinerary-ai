export const FX = { yenToInr: 0.56, note: "Planning rate: ¥1 ≈ ₹0.56 (Sep 2026). Recheck when you pay." };

export const yen = (n: number) => `¥${n.toLocaleString("en-IN")}`;
export const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;
export const yenInr = (jpy: number) => `${yen(jpy)} · ${inr(jpy * FX.yenToInr)}`;

export const trip = {
  title: "Tokyo · Fuji · Kyoto",
  party: "4 adults + 1 infant (18 months)",
  nights: 9,
  daysInJapan: 10,
  window: "Thu 19 Nov – Sat 28 Nov 2026",
  departBlr: "Wed 18 Nov 2026 (evening / night)",
  base: "Three hotels only: Asakusa → Kawaguchiko → Kyoto",
  whyWindow:
    "Late November is the one window that can give you Tokyo ginkgo, a snow-capped Mount Fuji, and Kyoto maples on the same trip. First week of November is better for highland frost, but Kyoto temples are still mostly green and you lose the city colour.",
  whyNotFirstWeek:
    "If school dates force 1–8 Nov, keep this same three-city shape, but treat Fuji as autumn-lake, not snow, and do not expect red maple at Kiyomizu.",
  snowTruth:
    "Tokyo and Kyoto almost never have street snowfall in November. What you can honestly book is Mount Fuji already white at the summit, freezing mornings by the lake, and a small chance of flurries at Kawaguchiko. Walking in city snow means January, not this trip.",
  perAdult: 121000,
  familyTotal: 484000,
  ceiling: 125000,
  shoppingExtra: "₹15,000–40,000 per adult, not in the ₹1.21 lakh figure.",
};

export const budgetRows = [
  { item: "Flights BLR → Tokyo (NRT/HND), KIX → BLR", who: "Family", inr: 213200, note: "Open-jaw, 1-stop, target ₹52k per adult + ~₹5,200 lap infant." },
  { item: "Japan visa + VFS (all 5 passports)", who: "Family", inr: 6500, note: "₹500 + ₹800 VFS each. Baby needs a visa." },
  { item: "Travel insurance (12 days)", who: "Family", inr: 7500, note: "Medical + delay. Japan hospitals want proof up front." },
  { item: "Tokyo hotel: 2 rooms × 4 nights + breakfast", who: "Family", inr: 44800, note: "Toyoko Inn Asakusa / Ueno. ¥10,000 per room if booked early." },
  { item: "Kawaguchiko hotel: 2 rooms × 2 nights + breakfast", who: "Family", inr: 29120, note: "Fuji-view business hotel, not a kaiseki ryokan." },
  { item: "Kyoto hotel: 2 rooms × 3 nights + breakfast", who: "Family", inr: 38640, note: "Toyoko Inn Kyoto Gojo or similar. Near subway, not Gion prices." },
  { item: "Airports + highway bus + Shinkansen + local", who: "Family", inr: 71500, note: "No JR Pass. One bullet train only: Mishima → Kyoto." },
  { item: "Yamato luggage send Tokyo → Kyoto", who: "Family", inr: 5600, note: "4 bags overnight. You travel to Fuji with cabin bags only." },
  { item: "Food (breakfast included most days)", who: "Family", inr: 50400, note: "Lunches ¥1,000–1,400, dinners ¥1,800–2,200 per adult." },
  { item: "Tickets (ropeway, two Kyoto temples)", who: "Family", inr: 10000, note: "Senso-ji, Meiji, Fushimi gates, Gion: free. Infant free." },
  { item: "eSIM + laundry + nappies top-up", who: "Family", inr: 5400, note: "Bring nappies from India." },
  { item: "Contingency / extra taxi on transfer days", who: "Family", inr: 1340, note: "Thin on purpose. Shopping is a separate wallet." },
];

export const perPerson = [
  { label: "International flights", inr: 53300 },
  { label: "Three hotels, split 4 ways", inr: 28140 },
  { label: "All Japan transport + bag send", inr: 19275 },
  { label: "Food", inr: 12600 },
  { label: "Visa + insurance", inr: 3500 },
  { label: "Tickets", inr: 2500 },
  { label: "eSIM, misc, buffer", inr: 1685 },
];

export const bookingOrder = [
  {
    when: "This week",
    title: "Open-jaw flights, then visa",
    detail:
      "Google Flights: BLR → Tokyo (prefer NRT) on 18 Nov night, KIX → BLR on 28 Nov. Same airline both ways if baggage is through-checked. Total time under 16 hours. Print the PNR for VFS.",
    links: [
      { label: "Google Flights", href: "https://www.google.com/travel/flights" },
      { label: "VFS Japan (India)", href: "https://visa.vfsglobal.com/ind/en/jpn" },
    ],
  },
  {
    when: "Same day",
    title: "Three hotels — 2 rooms each",
    detail:
      "Asakusa 19–23 Nov, Kawaguchiko 23–25 Nov, Kyoto Gojo 25–28 Nov. Non-smoking, infant on one room. Free breakfast wherever it exists. Book Fuji rooms first — November lakeside sells out.",
    links: [{ label: "Toyoko Inn", href: "https://www.toyoko-inn.com/eng" }],
  },
  {
    when: "Week 2",
    title: "Holiday bus + bassinet + insurance",
    detail:
      "23 Nov is a Japanese national holiday. Reserve Shinjuku → Kawaguchiko highway-bus seats the hour they open (usually 1 month out). Call the airline for a bassinet. Buy insurance.",
    links: [{ label: "Highway buses Shinjuku–Kawaguchiko", href: "https://highway-buses.jp/" }],
  },
  {
    when: "3 weeks out",
    title: "Shinkansen Mishima → Kyoto",
    detail:
      "Four reserved Hikari or Kodama seats for 25 Nov, late morning. Book on SmartEX / JR East. Do not buy a nationwide JR Pass.",
  },
  {
    when: "10 days out",
    title: "eSIM + Yamato luggage + yen",
    detail:
      "Install eSIM. Ask the Asakusa hotel to send 4 big bags to the Kyoto hotel (next-day). Carry ₹35,000 equivalent in yen for the first 48 hours; 7-Eleven ATMs after that.",
  },
];

export const stays = [
  {
    city: "Tokyo · Asakusa",
    name: "Toyoko Inn Tokyo Asakusa or Ueno Iriya",
    stay: "Thu 19 Nov – Mon 23 Nov (4 nights)",
    rooms: "2 × twin/double, non-smoking, adjacent if possible",
    nightly: "¥10,000 per room (₹5,600)",
    total: "¥80,000 · ₹44,800",
    walk: "Senso-ji 8–12 min; subway to Shinjuku/Shibuya 20–30 min. Quieter nights for the baby than Shibuya.",
    why: "Breakfast included. East Tokyo is calmer after shopping days. Skytree and the river are an easy stroller loop.",
    alt: "Super Hotel Lohas Ueno-ekimae, or APA Asakusa Ekimae if Toyoko is gone.",
  },
  {
    city: "Kawaguchiko · Fuji",
    name: "Hotel Mystays Fuji Onsen Resort, or Hotel New Century",
    stay: "Mon 23 Nov – Wed 25 Nov (2 nights)",
    rooms: "2 rooms with lake or Fuji-side if the price is within ¥2,000 of a no-view room",
    nightly: "¥13,000 per room (₹7,280) including breakfast",
    total: "¥52,000 · ₹29,120",
    walk: "Station shuttle. Lake loop is flat. Ropeway is a short bus.",
    why: "Two nights so a cloudy Fuji day is not a wasted transfer. Onsen for adults after the baby sleeps (one stays in the room). Not a ¥40,000 kaiseki ryokan.",
    alt: "Fuji Lake Hotel only if a family room lands under ¥32,000 for 4+infant — otherwise skip.",
  },
  {
    city: "Kyoto · Gojo / Kawaramachi edge",
    name: "Toyoko Inn Kyoto Gojo Karasuma or Daiwa Roynet Kyoto-ekimae",
    stay: "Wed 25 Nov – Sat 28 Nov (3 nights)",
    rooms: "2 × twin, breakfast",
    nightly: "¥11,500 per room (₹6,440)",
    total: "¥69,000 · ₹38,640",
    walk: "Karasuma subway. Taxi to Higashiyama on the temple day. Do not stay in Arashiyama — you would be stuck.",
    why: "Three slow Kyoto nights, not a day trip. Station hotels cost more in November; Gojo is the value.",
    alt: "Super Hotel Kyoto Shijo, or Hotel Gracery Kyoto Sanjo if Toyoko is sold.",
  },
];

export const hotelSkip = [
  "A fourth hotel in Osaka — that is another check-in with the baby. Eat Osaka on the airport day only if the flight is after 19:00, which this plan does not assume.",
  "Shibuya or Shinjuku hotels — loud, expensive in November, worse for an 18-month-old after 21:00.",
  "Nationwide JR Pass — still a loss on one Shinkansen plus two buses.",
  "Disney or USJ — a full day of queues, and the baby cannot ride the headline attractions.",
];

export const flights = {
  book: "Vietnam Airlines, Thai, Cathay, or ANA/JAL 1-stop. Same alliance both ways if you can.",
  avoid: "Self-transfer LCCs with 90-minute connections. 20-hour Vietjet routings with a toddler.",
  target: "₹50,000–54,000 return-equivalent per adult for the open-jaw. Direct BLR–NRT is often ₹70k+ — skip it.",
  infant: "Lap infant ~10% of the adult fare. Own seat not needed.",
  bags: "20–23 kg × 4. Stroller + one car seat usually free. Bassinet on the long sector at booking.",
  routing: "Land Tokyo (NRT preferred for Skyliner to Ueno/Asakusa). Leave from Kansai (KIX) on the Haruka from Kyoto.",
};

export const days = [
  {
    id: "d0",
    date: "Wed 18 Nov",
    city: "Bengaluru → air",
    title: "Night departure",
    pace: "Travel",
    spend: "Included in flights",
    plan: [
      "BLR 3 hours early. Gate-check the stroller if you want it until boarding.",
      "Cabin bag: passports, visas, three hotel printouts, insurance, 24 hours of baby food, carrier, one change of clothes.",
    ],
    eat: "Airport. Do not count on a full meal on a 1-stop routing.",
    move: "1-stop to Tokyo.",
    baby: "Bassinet on the long sector. One adult with the baby, one with bags.",
  },
  {
    id: "d1",
    date: "Thu 19 Nov",
    city: "Narita → Asakusa",
    title: "Arrive slow — Senso-ji at dusk",
    pace: "Easy",
    spend: yenInr(5000) + " family",
    plan: [
      "Keisei Skyliner NRT → Ueno (41 min), taxi 10 min to Asakusa, or Skyliner + subway. No city sightseeing until check-in.",
      "Showers. Baby nap. Register Yamato luggage pickup for 22 or 23 Nov (4 big bags to Kyoto hotel).",
      "16:30 walk to Senso-ji and Nakamise. Lights, incense, short loop. Back by 18:30.",
    ],
    eat: "Hotel breakfast tomorrow. Tonight: nearby tempura-don or a family restaurant (Saizeriya is fine). No Shinjuku.",
    move: "Skyliner + walk/taxi. ¥2,570 adult.",
    baby: "Stroller works in Asakusa. Carrier inside the temple crowd.",
  },
  {
    id: "d2",
    date: "Fri 20 Nov",
    city: "Tokyo",
    title: "East Tokyo, no agenda sprint",
    pace: "Relaxed",
    spend: yenInr(12000) + " family",
    plan: [
      "Late start. Sumida river walk or Ueno Park. Skip the paid Skytree deck unless the queue is nothing (save ₹4,000 × 4).",
      "If it rains: teamLab Planets is a paid extra (not in core tickets) and not ideal with a 1½-year-old who will touch the water. Use a department-store play floor instead (Lumine / Parco).",
      "14:00–16:00 hotel nap. Non-negotiable.",
      "Optional short evening in Tokyo Skytree town shops (Solamachi) — browsing, not a haul.",
    ],
    eat: "Hotel breakfast. Lunch: conveyor sushi. Dinner: ramen near the hotel.",
    move: "Ginza Line / walk. ICOCA or Suica on phones.",
    baby: "Parks and covered malls. One paid attraction is enough if energy is low — and today can be zero.",
  },
  {
    id: "d3",
    date: "Sat 21 Nov",
    city: "Tokyo",
    title: "Shopping day (own wallet)",
    pace: "Medium, with a nap",
    spend: "Core food only. Shopping is extra.",
    plan: [
      "This is the dedicated shopping day so the rest of the trip stays slow.",
      "Morning: Shinjuku — Don Quijote (tax-free over ¥5,000 ex-tax), Bic Camera only if you know the model, Uniqlo / GU for layers.",
      "Lunch in the department-store basement (depachika). Then one more area, not three: either Shibuya (Shibuya Scramble + Shibuya 109 / Parco) or Ginza (slower, nicer, pricier).",
      "Do not add Harajuku and Akihabara on the same day. Pick Shibuya if you want the photo; Ginza if you want calmer shops with the baby.",
      "Hotel by 17:30. Bags down. Light evening in Asakusa.",
    ],
    eat: "Depachika lunch. Dinner cheap near Asakusa.",
    move: "JR Yamanote or Metro. Fold the stroller on stairs at Shinjuku.",
    baby: "Split 2+2 if the baby melts down — two adults take the child back, two finish tax-free.",
  },
  {
    id: "d4",
    date: "Sun 22 Nov",
    city: "Tokyo",
    title: "Meiji, Omotesando, spare time",
    pace: "Easy",
    spend: yenInr(10000) + " family",
    plan: [
      "Meiji Shrine forest — quiet, free, stroller on the main gravel if you accept a bit of bump. No climbing.",
      "Omotesando / Cat Street only if you still want shops. This is overflow shopping, not a second haul.",
      "Long afternoon rest. Pack Fuji cabin bags. Confirm tomorrow’s 23 Nov bus (holiday — be at Shinjuku 40 minutes early).",
      "Hand big bags to Yamato / hotel front desk if the pickup is today.",
    ],
    eat: "Hotel breakfast. Takeshita snacks or a calm cafe on Omotesando. Early dinner.",
    move: "Metro to Meiji-jingumae / Harajuku.",
    baby: "Shrine gravel + pigeons. Keep snacks. This is the softest Tokyo day.",
  },
  {
    id: "d5",
    date: "Mon 23 Nov",
    city: "Tokyo → Kawaguchiko",
    title: "Holiday move to the lake",
    pace: "Transfer + easy evening",
    spend: yenInr(16000) + " family",
    plan: [
      "Labour Thanksgiving Day. Do not go to Kyoto. Buses to Fuji will be full — you already have reserved seats.",
      "Shinjuku highway bus to Kawaguchiko, ~1h45, ¥2,200. Infant on lap. Sit together; stow the stroller in the hold.",
      "Check in, slow lake walk if Fuji is out. If it is hidden in cloud, go inside and wait — that is why you have two nights.",
      "Maple Corridor lights if the baby’s bedtime allows a short outing (festival runs through 29 Nov). Otherwise skip without guilt.",
    ],
    eat: "Hotel breakfast in Tokyo. Convenience-store on the bus. Lake dinner: hoto noodles (share two pots), not four wagyu plates.",
    move: "Metro to Shinjuku Station West / bus terminal. Then hotel shuttle at Kawaguchiko.",
    baby: "Bus is easier than the train transfer at Otsuki. Feed at Shinjuku before boarding.",
  },
  {
    id: "d6",
    date: "Tue 24 Nov",
    city: "Kawaguchiko",
    title: "Fuji if it shows — rest if it does not",
    pace: "Slow mountain day",
    spend: yenInr(14000) + " family",
    plan: [
      "If the summit is white and the sky is clear: lakeside photo loop + Mt Fuji Panoramic Ropeway. That is the ‘snow’ you came for — on the mountain, not in the street.",
      "If it is snowing at lake level (possible, not promised): short outdoor burst, then onsen hotel. Do not drive mountain roads yourselves.",
      "If cloud soup: Oishi Park greenhouse, music forest, or just the hotel. A wasted transfer would have been worse; you stayed.",
      "Optional shopping stop is tomorrow at Gotemba, not today.",
      "Nap. Early night. Pack for Kyoto.",
    ],
    eat: "Hotel breakfast. Lunch near the ropeway. Simple dinner.",
    move: "Red-line sightseeing bus. 2-day pass ¥2,000 if you ride more than three times; otherwise tap pay.",
    baby: "Cold mornings 2–6°C. Thick layer, windproof, carrier under a coat.",
  },
  {
    id: "d7",
    date: "Wed 25 Nov",
    city: "Fuji → Mishima → Kyoto",
    title: "One bullet train, then stop",
    pace: "Transfer, then quiet Kyoto evening",
    spend: yenInr(8000) + " family besides tickets already counted",
    plan: [
      "Morning bus Kawaguchiko → Mishima (about 1h30). Then Hikari Shinkansen Mishima → Kyoto (~1h20). This avoids going back into Tokyo.",
      "Optional 90 minutes at Gotemba Premium Outlets only if the bus timing is natural and the baby is calm. This is extra shopping money. If the connection is tight, skip Gotemba without discussion.",
      "Kyoto check-in by 16:00. Bags from Tokyo should already be at the hotel. Do nothing else.",
      "Night: Nishiki is still open; walk 20 minutes, buy fruit and pickles, go home.",
    ],
    eat: "Breakfast at Fuji hotel. Ekiben on the Shinkansen. Light Kyoto dinner.",
    move: "Reserved Shinkansen seats. Stroller fold on the platform. Four adults, one infant: sit 2+2 across the aisle.",
    baby: "The longest day. Screens, milk, and a change at Mishima.",
  },
  {
    id: "d8",
    date: "Thu 26 Nov",
    city: "Kyoto west",
    title: "Arashiyama — one side of the city only",
    pace: "Scenic, unhurried",
    spend: yenInr(15000) + " family",
    plan: [
      "One Kyoto district per day. Today is west only.",
      "Hankyu to Arashiyama. Bamboo grove at 8:15. River. Tenryu-ji garden if the maples are loud (¥500). Sit. Do not add Fushimi today.",
      "Skip the monkey-park stairs with the baby. Skip the romantic train unless you already booked and want a 25-minute sit.",
      "Back at the hotel by 15:30. Laundry. Nothing at night except a neighbourhood walk.",
    ],
    eat: "Hotel breakfast. Yudofu or a set lunch by the river, with a konbini fallback. Dinner near Gojo.",
    move: "Subway to Shijo/Karasuma, then Hankyu. Taxi back if the baby is done (¥2,000–2,500).",
    baby: "Stroller on the river path. Carrier in the grove.",
  },
  {
    id: "d9",
    date: "Fri 27 Nov",
    city: "Kyoto east",
    title: "Kiyomizu and Gion, then stop",
    pace: "Walk, then rest",
    spend: yenInr(18000) + " family (includes two taxis)",
    plan: [
      "Taxi to Kiyomizu (skip the city bus with 4 adults + stroller). Temple + Sannenzaka. ¥500.",
      "Walk down to Gion. Yasaka Shrine is free. No geisha chasing.",
      "Fushimi Inari only if everyone is still kind — and only the first 10 minutes of gates. Otherwise leave it. Relaxed beats collecting stamps.",
      "Nara is not on this trip. It would be a fourth long outing with a toddler.",
    ],
    eat: "Onigiri in the taxi. Lunch near Ninenzaka with a queue limit of 15 minutes, else convenience-store picnic. Dinner: nabe or udon near the hotel.",
    move: "Taxis for the hill. Keihan or walk if legs are good.",
    baby: "Carrier on the slopes. This is the hardest walking day — keep it to one neighbourhood.",
  },
  {
    id: "d10",
    date: "Sat 28 Nov",
    city: "Kyoto → KIX → Bengaluru",
    title: "Haruka and home",
    pace: "Travel",
    spend: yenInr(4000) + " family besides Haruka",
    plan: [
      "Breakfast. Checkout 10:00. If the flight is after 18:00, sit with bags at Kyoto Station Isetan / Porta — last shopping hour, extra wallet.",
      "JR Haruka to KIX, about 75 minutes. Be at the terminal 3 hours early for a 1-stop international.",
      "Spend leftover yen at the airport 7-Eleven. Do not start a new city today.",
    ],
    eat: "Hotel breakfast. Airport ramen or onigiri.",
    move: "Haruka reserved seats if the baby needs a sure seat; unreserved is often fine off-peak.",
    baby: "Change nappy after security. Same boarding split as the outbound.",
  },
];

export const doNotBook = [
  { no: "Nationwide JR Pass", why: "One Shinkansen + two buses does not reach ¥50,000 × 4." },
  { no: "A fourth city (Osaka hotel or Hiroshima)", why: "You asked to explore slowly. Three bases is the maximum with an 18-month-old in 9 nights." },
  { no: "Hokkaido / ski for snow", why: "Wrong island and season for this length. That is a different trip in January." },
  { no: "Tokyo Disney or USJ", why: "A full day of standing. Baby cannot use the big rides. Costs sit on top of ₹1.21 lakh." },
  { no: "Same-day Tokyo + Fuji", why: "That is how people hate Japan with a toddler. You overnight at the lake." },
];

export const transportCheat = [
  { leg: "NRT → Asakusa", mode: "Keisei Skyliner to Ueno + taxi/subway", time: "70 min door to door", cost: "¥2,570 + ¥800–1,500 taxi", tip: "Avoid the 90-min local Keisei with luggage and a baby." },
  { leg: "Inside Tokyo", mode: "Suica/ICOCA + Metro/JR", time: "—", cost: "¥180–280 a hop", tip: "Yamanote for Shinjuku/Shibuya. Asakusa stays on Ginza Line." },
  { leg: "Shinjuku → Kawaguchiko", mode: "Reserved highway bus", time: "1h45", cost: "¥2,200", tip: "Book for 23 Nov immediately. Holiday." },
  { leg: "Around the lake", mode: "Sightseeing bus (red line)", time: "loop", cost: "¥2,000 for 2-day pass or tap", tip: "No rental car. November mountain roads + infant is a bad mix." },
  { leg: "Kawaguchiko → Kyoto", mode: "Bus to Mishima + Shinkansen", time: "3–3.5 h total", cost: "Bus ~¥1,800 + train ~¥11,500", tip: "Do not bus back to Shinjuku first." },
  { leg: "Kyoto local", mode: "Subway + two taxis on temple day", time: "—", cost: "Taxis ¥2,000–2,500 a hop", tip: "City buses with a stroller will eat the afternoon." },
  { leg: "Kyoto → KIX", mode: "JR Haruka", time: "75 min", cost: "~¥2,850", tip: "Same station as the hotel cluster if you picked Kyoto Station / Gojo + subway." },
];

export const shopping = {
  note: "Not in the ₹1.21 lakh. Carry a separate card. Tax-free at ¥5,000+ excluding tax, passport at the till.",
  days: [
    { where: "Shinjuku + one of Shibuya or Ginza", when: "Sat 21 Nov", what: "Uniqlo/GU, Donki snacks/cosmetics, one department store. This is the main haul." },
    { where: "Omotesando overflow", when: "Sun 22 Nov", what: "Only if Saturday was cut short. Cafes and a few shops, not electronics." },
    { where: "Gotemba Premium Outlets", when: "Wed 25 Nov, only if the Mishima bus lines up", what: "Brands on discount. Easy to overspend. Skip if the baby is done." },
    { where: "Kyoto Station / Porta / Isetan", when: "Sat 28 Nov morning", what: "Last food gifts. No new suitcases." },
  ],
  budgetHint: "Typical family of four who ‘just look’: ₹15–20k extra. If you actually shop Uniqlo + cosmetics + gifts: ₹30–40k per adult is common. Cap it before you land.",
};

export const foodRules = [
  "Breakfast is the hotel in all three cities whenever it is included.",
  "Lunch ¥1,000–1,400 per adult. Dinner ¥1,800–2,200 except one nicer Kyoto nabe night.",
  "Convenience stores are a feature: egg sandwiches, fruit, baby yogurt, milk.",
  "At Fuji, eat hoto and lake tourist food. Do not book kaiseki.",
  "Tap water is safe.",
];

export const babyKit = [
  { item: "Carrier (mandatory)", note: "Temples, bus steps, Shinkansen platforms." },
  { item: "Compact stroller", note: "Asakusa and Kyoto river/park. Fold for Shinjuku and Fushimi." },
  { item: "Nappies from India", note: "Nine days + two extra. Japanese sizes run small." },
  { item: "Your formula brand", note: "Do not assume the shelf matches." },
  { item: "Warm layer for Fuji", note: "Lake mornings near freezing. Tokyo/Kyoto 8–16°C." },
  { item: "White noise", note: "Asakusa is quieter than Shibuya; Fuji hotels still have thin walls." },
];

export const visaDocs = [
  "Five passports, including the baby, 6+ months validity",
  "VFS form + photo each",
  "Cover letter: 4 adults + infant, 19–28 Nov, hotels in Tokyo / Kawaguchiko / Kyoto",
  "Open-jaw flight reservation and three hotel vouchers",
  "This itinerary printout",
  "Bank statements as VFS Bangalore lists",
  "Baby birth certificate and copies of both parents’ passports",
];

export const packingAdult = [
  "Layers + one warmer coat for the lake",
  "Broken-in walking shoes",
  "Compact umbrella",
  "Power bank, Type A adaptor, 100V",
  "Passport copies in each bag",
];

export const optionalExtras = [
  { extra: "TeamLab or Skytree deck", cost: "₹2,000–4,000 per adult", when: "Only on the rainy Tokyo day, and only if the baby will last 45 minutes." },
  { extra: "Gotemba outlets", cost: "Whatever you spend; transport already on the way", when: "Only on 25 Nov if connections are easy." },
  { extra: "Add Osaka hotel", cost: "+₹12,000 and a fourth check-in", when: "Do not. It breaks the slow pace." },
  { extra: "Force first week of November", cost: "Same money, less Kyoto colour, slightly better highland frost", when: "Only if leave calendars demand it." },
];
