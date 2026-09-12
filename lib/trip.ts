export const FX = { yenToInr: 0.56, note: "Planning rate: ¥1 ≈ ₹0.56 (Sep 2026). Recheck when you pay." };

export const yen = (n: number) => `¥${n.toLocaleString("en-IN")}`;
export const inr = (n: number) => `₹${Math.round(n).toLocaleString("en-IN")}`;
export const yenInr = (jpy: number) => `${yen(jpy)} · ${inr(jpy * FX.yenToInr)}`;

export const trip = {
  title: "Kansai family autumn",
  party: "4 adults + 1 infant (18 months)",
  nights: 8,
  daysInJapan: 9,
  window: "Fri 20 Nov – Sat 28 Nov 2026",
  departBlr: "Thu 19 Nov 2026 (evening / night)",
  base: "Namba, Osaka — one hotel for the whole trip",
  whyWindow:
    "Second half of November is the foliage window for Kyoto, Nara and Osaka. First week of November is still mostly green in the cities. With a toddler, one hotel in Osaka beats splitting Tokyo + Kyoto.",
  whyNotFirstWeek:
    "Early November is better for Nikko / Fuji highlands, which means extra transfers and cold mountain days. Not a fit with an 18-month-old on this budget.",
  perAdult: 98400,
  familyTotal: 393600,
  ceiling: 105000,
};

export const budgetRows = [
  { item: "Flights BLR ↔ KIX (4 adults, 1-stop)", who: "Family", inr: 200000, note: "Target ₹48–52k per adult. Infant lap fare ~10% (~₹5,000) included here." },
  { item: "Japan visa + VFS (all 5 passports)", who: "Family", inr: 6500, note: "₹500 embassy + ₹800 VFS each. Baby needs a visa." },
  { item: "Travel insurance (10 days)", who: "Family", inr: 6800, note: "Include medical + trip delay. Infant rider is cheap." },
  { item: "Hotel: 2 rooms × 8 nights, breakfast", who: "Family", inr: 89600, note: "¥10,000/room if booked 8+ weeks ahead. Toyoko Inn Namba." },
  { item: "Airport trains (Nankai Express both ways)", who: "Family", inr: 4350, note: "¥970 adult each way. Infant free on lap." },
  { item: "Local trains / buses / 2 Kyoto taxis", who: "Family", inr: 18000, note: "ICOCA on phones. No JR Pass." },
  { item: "Food (hotel breakfast + lunches + dinners)", who: "Family", inr: 51000, note: "Includes baby snacks and one shared Kobe-beef plate." },
  { item: "Tickets (Kaiyukan, Kinkaku-ji, Kiyomizu, Tōdai-ji)", who: "Family", inr: 9400, note: "Infant free almost everywhere. Skip USJ in the base plan." },
  { item: "eSIM (2 phones, 10 days)", who: "Family", inr: 2400, note: "Airalo / Holafly 10 GB. One phone as hotspot." },
  { item: "Laundry, souvenirs, nappies top-up", who: "Family", inr: 5000, note: "Bring nappies from India. Hotel coin laundry ~¥300." },
  { item: "Contingency / forex slip", who: "Family", inr: 5500, note: "Holds yen moves and one extra taxi on a tired evening." },
];

export const perPerson = [
  { label: "International flights", inr: 50000 },
  { label: "Hotel share (2 rooms split 4 ways)", inr: 22400 },
  { label: "Food", inr: 12750 },
  { label: "All Japan transport", inr: 5590 },
  { label: "Visa + insurance", inr: 3325 },
  { label: "Tickets", inr: 2350 },
  { label: "eSIM, misc, buffer", inr: 1985 },
];

export const bookingOrder = [
  {
    when: "This week",
    title: "Hold flights, then visa file",
    detail:
      "Google Flights: BLR → KIX, 19 Nov out / 28 Nov back. Filter total time under 16 hours, one stop, evening Bangalore departure. Then print the itinerary for VFS.",
    links: [
      { label: "Google Flights BLR–KIX", href: "https://www.google.com/travel/flights" },
      { label: "VFS Japan (India)", href: "https://visa.vfsglobal.com/ind/en/jpn" },
    ],
  },
  {
    when: "Same day as flights",
    title: "Lock the hotel — 2 adjacent rooms",
    detail:
      "Book Toyoko Inn Osaka Namba (or Namba West) for 20–28 Nov, 2 non-smoking rooms, 2 adults each, infant noted on one room. Free breakfast is the money saver.",
    links: [{ label: "Toyoko Inn official", href: "https://www.toyoko-inn.com/eng" }],
  },
  {
    when: "Week 2",
    title: "Insurance + infant bassinet",
    detail:
      "Call the airline for a bassinet on the long sector. Buy travel insurance with cashless hospital cover in Japan (hospitals want proof up front).",
  },
  {
    when: "4 weeks out",
    title: "Kaiyukan dated tickets + ICOCA setup",
    detail:
      "Buy Osaka Aquarium timed tickets online. Install the official ICOCA app or plan to buy cards at KIX. Download Google Maps offline for Osaka + Kyoto.",
    links: [{ label: "Kaiyukan tickets", href: "https://www.kaiyukan.com/language/eng/" }],
  },
  {
    when: "10 days out",
    title: "eSIM + yen + baby kit",
    detail:
      "Install eSIM before leaving Bangalore. Carry ₹30,000 equivalent in yen cash for the first 48 hours (7-Eleven ATMs after that). Pack the baby carrier as cabin luggage.",
  },
];

export const hotels = {
  primary: {
    name: "Toyoko Inn Osaka Namba",
    alt: "If sold out: Toyoko Inn Osaka Namba West, or Super Hotel Lohas JR Namba",
    stay: "Fri 20 Nov – Sat 28 Nov (8 nights)",
    rooms: "2 × standard twin or double, non-smoking, adjacent if possible",
    nightly: "Budget ¥10,000 per room (₹5,600). Peak foliage can hit ¥12,000 — book early.",
    total: "¥1,60,000 · ₹89,600 for both rooms, 8 nights",
    why: [
      "Free Japanese breakfast — saves ~₹14,000 for the family",
      "Namba: one station web for Kyoto (Kintetsu/Nankai), Nara, Kobe and Dotonbori on foot",
      "No hotel change with a toddler and 4 suitcases",
      "Front desk English, coin laundry, infant stays free in parents’ bed",
    ],
    walk: "8–12 min to Dotonbori; Namba Station 5 min; Kuromon Market 10 min",
    book: "Official site or Booking.com — match free-cancellation until mid-October if the fare is within ₹2,000 of the non-refundable rate.",
  },
  skip: [
    "Kyoto hotels for this trip — November rates are 30–50% higher and you would still day-trip to Osaka food.",
    "Two-city Tokyo + Osaka — one Shinkansen for 4 adults is ~₹32,000 and a second hotel check-in with the baby.",
    "USJ-area hotels — farther from Kyoto/Nara trains.",
    "Airbnb without hotel licence — immigration may ask for a hotel certificate for the visa file.",
  ],
};

export const flights = {
  book: "Vietnam Airlines, Thai Airways, or Cathay Pacific. 1 stop (SGN / BKK / HKG).",
  avoid: "Vietjet ultra-long 20h+ connections, and 90-minute self-transfers with a toddler.",
  target: "₹48,000–52,000 return per adult. Direct JAL via Tokyo is usually ₹70,000+ — skip it on this budget.",
  infant: "Lap infant under 2 is typically 10% of the adult fare. Own seat is ~75% and not needed.",
  bags: "Confirm 20–23 kg checked × 4. Collapsible stroller + 1 car seat are usually free. Request bassinet at booking, not at the airport.",
  routing: "Land and leave from Kansai International (KIX), not Tokyo. That is how you avoid the Shinkansen.",
};

export const days = [
  {
    id: "d0",
    date: "Thu 19 Nov",
    city: "Bengaluru → air",
    title: "Night departure",
    pace: "Travel day",
    spend: "Included in flights",
    plan: [
      "Reach BLR 3 hours before departure. Check in the stroller at the gate if you want it until boarding.",
      "Carry: passports + visas, hotel printout, insurance PDF, baby food for 24 hours, carrier, change of clothes in cabin bag.",
      "Give the baby the last proper nap at home. Cabin lights and a long connection are the hard part, not Japan.",
    ],
    eat: "Airport food. Do not count on a proper meal on a 1-stop LCC/hybrid routing.",
    move: "Indigo/partner to the first hub, then the Japan sector.",
    baby: "Request bulkhead/bassinet on the long-haul sector. One adult stays with the baby at boarding; the other handles bags.",
  },
  {
    id: "d1",
    date: "Fri 20 Nov",
    city: "KIX → Namba",
    title: "Arrive, check in, Dotonbori lights",
    pace: "Easy",
    spend: yenInr(4000) + " family (dinner + snacks)",
    plan: [
      "Clear immigration, buy 4 ICOCA cards (or tap with the app) at the Nankai counter.",
      "Nankai Airport Express to Namba — 44 minutes, no transfer. Sit in the last car; stroller space is easier.",
      "Taxi only if the baby has melted down (¥3,500–4,500, 50–70 min).",
      "Check in from 15:00. Shower, short nap for the baby.",
      "18:30 walk to Dotonbori. Photo at the Glico sign. Do not queue for Ichiran on night one.",
    ],
    eat: "Kukuru takoyaki (share 2 boxes) + stewed-wheat or kushikatsu at Daruma. In bed by 21:00.",
    move: "Walk. Hotel is the base.",
    baby: "Carrier for Dotonbori crowds. Stroller is fine on the covered shopping streets (Shinsaibashi-suji).",
  },
  {
    id: "d2",
    date: "Sat 21 Nov",
    city: "Osaka",
    title: "Castle gardens, Kuromon, evening food street",
    pace: "Moderate, with a hotel nap",
    spend: yenInr(14000) + " family",
    plan: [
      "09:30 Osaka Castle Park and Nishinomaru Garden — late-November maples, stroller paths, picnic lawns. Skip the keep unless the queue is under 15 minutes (¥1,800, many stairs).",
      "12:30 Kuromon Market. Walk, do not graze everything — pick tuna skewer, wagyu sample, fruit.",
      "14:30–16:30 hotel quiet time. Non-negotiable with an 18-month-old.",
      "17:30 Shinsaibashi → Dotonbori. One souvenir stop (Don Quijote Namba) if energy remains.",
    ],
    eat: "Breakfast at hotel. Lunch: market + onigiri. Dinner: okonomiyaki at Mizuno or Chibo (book Mizuno on TableCheck the day before).",
    move: "Metro Tanimachi / Chuo to Tanimachi 4-chome, then 10 min walk into the park. Return by Metro to Namba.",
    baby: "Castle park is the best toddler morning in Osaka. Carry snacks; vending machines are everywhere (¥160 tea).",
  },
  {
    id: "d3",
    date: "Sun 22 Nov",
    city: "Nara (day trip)",
    title: "Deer park and the Great Buddha",
    pace: "One focused day",
    spend: yenInr(16000) + " family",
    plan: [
      "08:10 Kintetsu from Osaka-Namba to Kintetsu-Nara (about 40 min, ¥560 adult). This beats JR from Osaka Station with a Namba hotel.",
      "Nara Park deer (buy senbei only if you want; they are pushy). Keep the baby in the carrier — deer go for paper and snacks.",
      "Tōdai-ji Great Buddha (¥800). 20 minutes inside is enough.",
      "Kasuga Taisha path if legs remain; otherwise ice cream and train home by 15:30.",
      "Evening: laundry + leftover Donki snacks. No more sightseeing.",
    ],
    eat: "Hotel breakfast. Nara: kakinoha-zushi or a simple teishoku near Sanjo-dori. Dinner: gyudon (Yoshinoya/Sukiya) back in Namba — cheap and fast.",
    move: "Kintetsu Rapid. Sit in reserved seats if the train offers them (small extra) — worth it with a baby.",
    baby: "This is the ‘wow’ day for a toddler. Leave before the afternoon tour buses.",
  },
  {
    id: "d4",
    date: "Mon 23 Nov",
    city: "Osaka indoor",
    title: "Kaiyukan aquarium — holiday crowds elsewhere",
    pace: "Indoor, slow",
    spend: yenInr(18000) + " family",
    plan: [
      "23 Nov is Labour Thanksgiving Day. Kyoto will be packed. Stay in Osaka.",
      "Timed entry at Kaiyukan (Osaka Aquarium). Book the 10:00–11:00 slot. Whale shark tank is the memory of the trip for the baby.",
      "Tempozan Ferris wheel only if weather is clear and the baby is still happy (optional, ~¥800).",
      "Back to Namba by 15:00. Rest. Evening: covered malls (Namba Parks or HEP if you go north) so rain does not matter.",
    ],
    eat: "Hotel breakfast. Lunch inside Kaiyukan or Tempozan marketplace. Dinner: conveyor sushi (Kura or Sushiro) — kids’ plates, cheap, fun.",
    move: "Metro to Osakako (Chuo Line). ~20 min from Namba with one transfer at Hommachi or via Yotsubashi depending on the hotel door.",
    baby: "Stroller-friendly, toilets with changing rooms, dim halls that help naps in the carrier.",
  },
  {
    id: "d5",
    date: "Tue 24 Nov",
    city: "Kyoto east",
    title: "Fushimi Inari, Kiyomizu, Gion",
    pace: "Hardest walking day — start early",
    spend: yenInr(20000) + " family (includes two taxis)",
    plan: [
      "07:20 Kintetsu/JR to Kyoto, then JR Nara Line to Inari (or taxi from Kyoto Station if you arrive tired, ~¥2,000).",
      "Fushimi Inari: walk the first 10–15 minute stretch of gates only. Do not climb to the summit with a toddler.",
      "Taxi to Kiyomizu-dera (saves a brutal bus). Temple + Sannenzaka / Ninenzaka slope. Kiyomizu ¥500.",
      "Walk down to Gion. Yasaka Shrine is free. Skip geisha hunting — it is rude and you will not see much at 16:00 anyway.",
      "Train home from Gion-Shijo (Keihan) or Kawaramachi (Hankyu) to Umeda/Namba. In Namba by 18:00.",
    ],
    eat: "Onigiri on the train. Lunch: soba or a set near Sannenzaka (expect queues; have a convenience-store backup). Dinner: hotel area, nothing ambitious.",
    move: "Trains for the long hops, taxis for the two Kyoto clusters. Do not run the Kyoto city bus with 4 adults + stroller on this day.",
    baby: "Carrier at Fushimi and Kiyomizu (stairs, crowds). Stroller only on the station ↔ taxi legs.",
  },
  {
    id: "d6",
    date: "Wed 25 Nov",
    city: "Kyoto west",
    title: "Arashiyama bamboo and river",
    pace: "Scenic, more space than east Kyoto",
    spend: yenInr(17000) + " family",
    plan: [
      "Hankyu from Umeda to Arashiyama (change at Katsura) or JR to Saga-Arashiyama. Door to grove ~70 min from Namba.",
      "Bamboo grove at opening (aim to be there by 08:30). Togetsukyo Bridge photos. Kimono Forest is skippable.",
      "Tenryu-ji garden if foliage is screaming (¥500). Otherwise sit by the river with convenience-store coffee.",
      "Skip the monkey park stairs with the baby. Skip the Sagano romantic train unless you pre-booked and the baby will sit for 25 minutes.",
      "Optional if colour is late: Tōfuku-ji instead of a second Arashiyama hour (best maple corridor in the city, ¥600).",
    ],
    eat: "Yudofu or a simple lunch near the river. Do not eat in the bamboo grove. Dinner back in Osaka: kushikatsu in Shinsekai if you still want a neighbourhood, or stay in Namba.",
    move: "Hankyu is less crowded than JR for Arashiyama. Return the same way.",
    baby: "Stroller works on the river path. Grove paths are gravel — carrier is kinder.",
  },
  {
    id: "d7",
    date: "Thu 26 Nov",
    city: "Kobe (half day) + Namba",
    title: "Harbour, shared wagyu, early night",
    pace: "Easy",
    spend: yenInr(22000) + " family",
    plan: [
      "Late start. Hanshin or JR to Kobe-Sannomiya (~30–40 min, ~¥410).",
      "Harbourland / Mosaic for open space and the giant Ferris wheel views. This is a lungs day after Kyoto.",
      "Lunch: do not buy four Kobe steaks. Order one 120–150g certified steak to share, plus teishoku for the rest (Steakland or a department-food-floor grill). Cap this lunch at ¥12,000 for the table.",
      "Back in Namba by 16:30. Pack a suitcase. Optional teamLab Botanical Garden Osaka only if the baby still has a daytime nap in reserve (not in base tickets).",
    ],
    eat: "Hotel breakfast. Kobe lunch as the ‘memorable meal’. Light dinner: ramen (Ippudo or a local shop) and fruit.",
    move: "JR Rapid from JR Namba (or Umeda). Direct, seated.",
    baby: "Harbourland is flat and indoor-capable if it rains.",
  },
  {
    id: "d8",
    date: "Fri 27 Nov",
    city: "Osaka",
    title: "Buffer, shopping, Shinsekai",
    pace: "Flexible",
    spend: yenInr(12000) + " family",
    plan: [
      "This day exists so nothing earlier can ruin the trip. If rain hit Kyoto, swap a temple here. If everyone is tired, do nothing until 16:00.",
      "Default loop: Den Den Town (small souvenirs, not electronics unless you know the tax-free rules) → Shinsekai + Tsutenkaku photo → spa-like soak if Super Hotel was chosen, else hotel rest.",
      "Tax-free at Don Quijote: passport, spend over ¥5,000 excluding tax. Snacks, matcha, plasters, heat packs.",
      "Pack. Set 06:30 alarms. Confirm tomorrow’s Nankai time.",
    ],
    eat: "Whatever the group is craving. Kushikatsu Daruma in Shinsekai, or a last okonomiyaki. No new neighbourhoods after 20:00.",
    move: "Metro / walk.",
    baby: "Protect sleep. Tomorrow is an airport day.",
  },
  {
    id: "d9",
    date: "Sat 28 Nov",
    city: "KIX → Bengaluru",
    title: "Fly home",
    pace: "Travel day",
    spend: yenInr(4000) + " family (breakfast already included)",
    plan: [
      "Check out 10:00. If the flight is after 18:00, ask the hotel to hold bags and sit in Namba Parks until 13:00.",
      "Nankai Airport Express to KIX. Be at the terminal 3 hours before a 1-stop international.",
      "Finish yen at the airport 7-Eleven. Keep ¥1,000 on each ICOCA in case of a delay (or refund the card at the JR/Nankai counter if you have time).",
    ],
    eat: "Hotel breakfast. Airport: ramen or a last konbini onigiri. Baby food in the cabin bag.",
    move: "Nankai Airport Express, same as arrival.",
    baby: "Same boarding split as the outbound. Change nappy after security, not on the jet bridge.",
  },
];

export const doNotBook = [
  { no: "Nationwide JR Pass", why: "¥50,000 × 4 = ₹1.12 lakh. You are not riding the Shinkansen. Pass would double ground costs." },
  { no: "Universal Studios Japan in the base budget", why: "¥8,400–11,900 × 4 plus food. A 1.5-year-old cannot ride the headline attractions. Add later only if the flight comes in under ₹45k." },
  { no: "Tokyo add-on", why: "One extra Shinkansen × 4 ≈ ₹32,000 and a second hotel. Save it for trip two." },
  { no: "Hiroshima / Miyajima", why: "A 4-hour round trip on a 9-day toddler itinerary. Colour is fine in Nara instead." },
  { no: "Ryokan kaiseki night", why: "¥25,000–40,000 per adult. One night blows the cap." },
  { no: "Pocket Wi-Fi rental", why: "eSIM on two phones is cheaper and one less counter at KIX." },
];

export const transportCheat = [
  { leg: "KIX ↔ Namba", mode: "Nankai Airport Express", time: "44 min", cost: "¥970 adult, infant free", tip: "Not the Haruka. Haruka goes to Tennoji/Shin-Osaka and adds a transfer." },
  { leg: "Namba ↔ Nara", mode: "Kintetsu Rapid", time: "40 min", cost: "¥560", tip: "Use Kintetsu-Nara station, not JR Nara — closer to the park." },
  { leg: "Namba ↔ Kyoto (east)", mode: "Kintetsu to Kyoto + JR to Inari, or Keihan", time: "50–70 min", cost: "¥600–800", tip: "Taxi the Fushimi → Kiyomizu gap." },
  { leg: "Umeda ↔ Arashiyama", mode: "Hankyu (change Katsura)", time: "45 min from Umeda", cost: "¥250–400", tip: "From Namba, subway to Umeda first (~15 min)." },
  { leg: "Namba ↔ Kobe", mode: "Hanshin or JR Rapid", time: "30–40 min", cost: "¥410–650", tip: "Sannomiya station for Harbourland transfer." },
  { leg: "Inside Osaka", mode: "Osaka Metro + walk", time: "—", cost: "¥180–280 a hop", tip: "Tap ICOCA. Do not buy 1-day Metro pass unless you take 5+ rides." },
];

export const foodRules = [
  "Breakfast is always the hotel. That is already paid.",
  "Lunch target: ¥1,000–1,400 per adult (gyudon, ramen, convenience-store plus one hot dish).",
  "Dinner target: ¥1,800–2,400 per adult except the Kobe share lunch, which replaces a dinner budget that day.",
  "7-Eleven / Lawson / FamilyMart are not a compromise: egg sandwiches, fruit, milk, baby yogurt, onigiri are excellent.",
  "Allergy: Japan labels poorly in English. Carry a small card in Japanese for any real allergy.",
  "Water: tap is safe. Skip buying cases of bottles.",
];

export const babyKit = [
  { item: "Soft carrier (mandatory)", note: "Temples and trains. Bring the one you already use." },
  { item: "Compact stroller", note: "Gate-check on the plane. Fine in Osaka; fold on Kyoto stairs." },
  { item: "Nappies from India", note: "7-Eleven sizes run small and cost more. Pack the full 9 days + 2 extra." },
  { item: "Formula / milk plan", note: "If on formula, bring your brand. Japanese shelves will not match." },
  { item: "Light wool layer + windproof", note: "Osaka days 12–18°C, mornings 7–10°C. Temples are outdoor." },
  { item: "Foldable changing mat", note: "Station toilets are clean; a mat still helps." },
  { item: "White noise on a phone", note: "Thin hotel walls, Dotonbori until late." },
  { item: "Infant paracetamol you already use", note: "Japanese paediatric dosing is different. Bring your bottle." },
];

export const visaDocs = [
  "Passports (6+ months validity) for all 5, including the baby",
  "VFS form + photo per embassy spec",
  "Cover letter listing 4 adults + infant, 20–28 Nov, Osaka base",
  "Flight reservation and hotel voucher (2 rooms)",
  "This itinerary printout",
  "Bank statements / ITRs as VFS Bangalore currently lists",
  "Infant birth certificate and both parents’ passports copied",
];

export const packingAdult = [
  "Uniqlo-style layers, one smarter knit for the Kobe lunch",
  "Walking shoes already broken in — 8–15k steps on Kyoto days",
  "Compact umbrella (November drizzle)",
  "Power bank, universal adaptor (Type A/B, 100V)",
  "Copies of passport photo page in each bag",
];

export const optionalExtras = [
  { extra: "Add Universal Studios", cost: "₹12,000–16,000 per adult extra", when: "Only if flights land under ₹45,000 and you drop the Kobe day." },
  { extra: "Add Tokyo 4 nights", cost: "+₹32,000 Shinkansen + ₹50,000 hotel delta", when: "Makes the trip miss the ₹1 lakh cap. Do not mix into this plan." },
  { extra: "Swap one Kyoto day to first week of November", cost: "Same money, worse colour", when: "Only if school calendars force it. Then add Nishinomaru and Nara; skip expecting red maples at Kiyomizu." },
];
