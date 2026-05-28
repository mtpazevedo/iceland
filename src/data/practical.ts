export interface PackingItem {
  item: string
  priority: string
  note?: string
}

export const packingList: Record<string, PackingItem[]> = {
  clothing: [
    { item: 'Waterproof outer shell jacket', priority: 'essential', note: 'Rain happens daily, even in June' },
    { item: 'Fleece mid-layer', priority: 'essential', note: 'Even "warm" days need layers' },
    { item: 'Thermal base layer (top + bottom)', priority: 'essential', note: 'For glacier days & cold mornings' },
    { item: 'Waterproof hiking pants or leggings + rain pants', priority: 'essential' },
    { item: 'Warm hat & gloves', priority: 'essential', note: 'June can be 5°C with wind chill near glaciers' },
    { item: 'Hiking boots (waterproof, ankle support)', priority: 'essential', note: 'Your feet WILL get wet' },
    { item: 'Flip flops for hot pots & pools', priority: 'essential' },
    { item: 'Wool / merino socks (4 pairs)', priority: 'essential', note: 'Merino wicks moisture — cotton socks are useless when wet' },
    { item: 'Swimsuit (2 ideally)', priority: 'essential', note: 'Sky Lagoon, hot pots, hot springs' },
    { item: 'Quick-dry towel', priority: 'essential' },
    { item: 'Comfortable walking shoes for city days', priority: 'high' },
    { item: 'One nice outfit for OX / Grillmarkaðurinn', priority: 'high', note: 'Still casual by European standards' },
    { item: 'Sunglasses', priority: 'high', note: 'Midnight sun is real — the light is intense' },
    { item: 'Neck gaiter / buff', priority: 'medium' },
    { item: 'Compression socks for long drives/flights', priority: 'medium' },
  ],
  gear: [
    { item: 'Power bank (large capacity)', priority: 'essential', note: 'You will photograph everything' },
    { item: 'European adapter (Type F)', priority: 'essential' },
    { item: 'Reusable water bottle', priority: 'essential', note: 'Icelandic tap water is glacier water — drink freely' },
    { item: 'Rain cover for backpack', priority: 'high' },
    { item: 'Headlamp or small torch', priority: 'medium', note: 'For midnight walks — it\'s never truly dark but still useful' },
    { item: 'Sleeping mask + earplugs (or melatonin)', priority: 'high', note: 'Midnight sun — even with blackout curtains, sleep is tricky' },
    { item: 'Netted insect / midge hat', priority: 'low', note: 'Keeps the small flies off you near waterfalls and lakes' },
    { item: 'Trekking poles', priority: 'low', note: 'Only if doing glacier hike or long mountain trails' },
  ],
  health: [
    { item: 'Sunscreen SPF 50+', priority: 'essential', note: 'Midnight sun = sneaky UV exposure' },
    { item: 'Lip balm with SPF', priority: 'essential' },
    { item: 'Motion sickness tablets', priority: 'high', note: 'Mountain roads can be winding' },
    { item: 'Ibuprofen & basic first aid', priority: 'high' },
    { item: 'Blister plasters (Compeed)', priority: 'high', note: 'Trust us on this one' },
    { item: 'Hand cream / moisturizer', priority: 'medium', note: 'The air is extremely dry' },
  ],
  documents: [
    { item: 'Passport (valid 6 months past June)', priority: 'essential' },
    { item: 'Travel insurance documents', priority: 'essential' },
    { item: 'Car rental confirmation', priority: 'essential' },
    { item: 'Accommodation confirmations (Airbnb + hotels)', priority: 'essential' },
    { item: 'Pre-booked ticket confirmations (screenshot offline)', priority: 'essential' },
    { item: 'Emergency numbers saved (112 for Iceland rescue)', priority: 'essential' },
  ],
}

// Sightseeing & tours — book ahead. Restaurant reservations live in
// `restaurantReservations` below.
export const ticketsToBuy = [
  {
    name: '★ Katla Ice Cave tour (Katlatrack) — June 11 · 10:30 · 3 PEOPLE',
    location: 'Vík (meeting at OB gas station, Austurvegur 16)',
    urgency: 'book-now',
    note: 'Vík must-do for 3 of 5 (the other 2 do a slow morning + late checkout at Hotel Vík). Super-jeep up onto Mýrdalsjökull, walk into the dramatic black-streaked ice cave under the Katla volcano. Fast Track tour 2.5h, includes guide + helmet + crampons. Walking distance from Hotel Vík.',
    link: 'https://katlatrack.is',
    estimated: '~29,900 ISK / €195 pp',
  },
  {
    name: 'Sky Lagoon — June 13 · sunset slot',
    location: 'Kópavogur (15 min from B2)',
    urgency: 'book-now',
    note: '7-step Skjól ritual. Saturday evening books out — pick 17:00 or 18:30.',
    link: 'https://skylagoon.com',
    estimated: '~€75–90 pp Pure / ~€115 Sér',
  },
  {
    name: '★ Hvammsvík fjord kayak + hot springs — June 8 · 17:20',
    location: 'Hvammsvík, Hvalfjörður (~45 min north of Reykjavík)',
    urgency: 'book-now',
    note: 'Whole-group kayak (~1.5h) on the calm fjord, then a 30-min soak in the geothermal pools at the sea\'s edge. Kayak partner is Iceland Highlights — book through Hvammsvík directly. Drysuit + gear included. Backup: Kayak Reykjavík Old Harbour 18:00.',
    link: 'https://booking.hvammsvik.com',
    estimated: '~22,000 ISK / €145 pp (kayak + entry combined)',
  },
  {
    name: '★ Vatnshellir Cave — June 12 · 15:00 slot',
    location: 'Snæfellsjökull NP (between Hellnar and Djúpalónssandur)',
    urgency: 'book-now',
    note: '8,000-year-old lava tube. 35-45 min guided tour with helmet + headlamp. 200 steps down. Drops cleanly into the Snæfellsnes loop after Arnarstapi.',
    link: 'https://www.summitguides.is/vatnshellir-cave',
    estimated: '~5,500 ISK / €37 pp',
  },
  {
    name: '★ Elding Whale Watching — June 13 · 09:00 slot',
    location: 'Old Harbour, Ægisgarður 5, Reykjavík',
    urgency: 'book-now',
    note: 'Classic 3-3.5h tour. Minke whales, white-beaked dolphins, harbor porpoises, occasional humpback. Replaces the slow Saturday brunch. Boat returns ~12:30 → lunch → Hallgrímskirkja → Sky Lagoon at 17:00.',
    link: 'https://elding.is/whale-watching-from-reykjavik/classic-whale-watching/',
    estimated: '~12,990 ISK / €87 pp',
  },
  {
    name: 'Lava Show Reykjavík (optional)',
    location: 'Fiskislóð 73, Grandi (Reykjavík)',
    urgency: 'book-soon',
    note: 'Real molten lava (1,100°C) poured live in front of you. 50-min show, hourly slots. Good Day 1 evening alt if jet-lag energy holds, or Day 7 afternoon. Wear something dark — splatters are tiny but real.',
    link: 'https://www.lavashow.com/',
    estimated: '~3,400 ISK / €23 pp',
  },
  {
    name: 'Whales of Iceland (rainy-day backup)',
    location: 'Fiskislóð 23-25, Grandi (Reykjavík)',
    urgency: 'optional',
    note: 'Walk-in museum with 23 life-size whale models — the blue whale alone is 25m. Backup for Day 7 if Elding cancels for weather. Open daily 10–17.',
    link: 'https://www.whalesoficeland.is/',
    estimated: '~3,500 ISK / €24 pp',
  },
  {
    name: 'Hótel Vík í Mýrdal — June 10 · 1 night',
    location: 'Vík í Mýrdal',
    urgency: 'optional',
    note: 'BOOKED. Confirm exact unit (Hotel vs Apartments) via email.',
    link: 'https://hotelvik.is',
    estimated: 'Already paid',
  },
  {
    name: 'Þingvellir parking pass',
    location: 'Þingvellir',
    urgency: 'optional',
    note: '~1,000 ISK pp, pay on arrival at P1 kiosk. Keep the receipt.',
    link: 'https://parka.is',
    estimated: '~€8 pp',
  },
  {
    name: 'Settlement Center — Borgarnes (Day 6)',
    location: 'Borgarnes',
    urgency: 'optional',
    note: 'Walk-in fine. ~3,500 ISK pp for both audio-guided exhibitions.',
    link: 'https://landnam.is',
    estimated: '~€25 pp',
  },
  {
    name: 'Settlement Exhibition (871±2) — Reykjavík (Day 3)',
    location: 'Aðalstræti 16, Reykjavík',
    urgency: 'optional',
    note: 'Walk-in usually fine; book online if a cruise ship is in port. Audio-guided 9th-century Viking longhouse.',
    link: 'https://reykjavikcitymuseum.is/the-settlement-exhibition',
    estimated: '~€18 pp',
  },
  {
    name: 'Hallgrímskirkja tower — Day 7',
    location: 'Hallgrímskirkja',
    urgency: 'optional',
    note: 'Pay at the desk inside, ~1,500 ISK. Closes 21:00 in summer.',
    link: 'https://hallgrimskirkja.is',
    estimated: '~€12 pp',
  },
  {
    name: 'Saga Museum — Viking wax-figure museum',
    location: 'Grandagarður 2, Reykjavík',
    urgency: 'optional',
    note: 'Lifelike wax dioramas retelling Viking sagas (Egil, Erik the Red, Leif Erikson). ~1h, audio-guided. Open daily 10:00-18:00. The most "show-and-tell" of the three Viking museums on this trip.',
    link: 'https://sagamuseum.is',
    estimated: '~€18 pp',
  },
  {
    name: 'Reykjavík Food Walk (optional Day 3 alt)',
    location: 'Downtown Reykjavík',
    urgency: 'book-soon',
    note: '3.5h guided food tour, 6 stops. Replaces the Reykjanes morning if the group wants an indoor option.',
    link: 'https://www.reykjavikfoodwalk.com',
    estimated: '~€115 pp',
  },
  {
    name: 'Perlan museum (rainy-day alt)',
    location: 'Öskjuhlíð, Reykjavík',
    urgency: 'optional',
    note: 'Glass dome with ice cave exhibit + 360° observation deck. Swap with Settlement Exhibition if weather is brutal.',
    link: 'https://perlan.is',
    estimated: '~€42 pp',
  },
  {
    name: 'Skaftafell parking pass — Day 5',
    location: 'Vatnajökull NP',
    urgency: 'optional',
    note: '~750 ISK at the visitor centre kiosk on arrival.',
    link: 'https://www.vatnajokulsthjodgardur.is',
    estimated: '~€6 pp',
  },
  {
    name: 'Hvalfjörður tunnel — toll-free',
    location: 'Reykjavík ↔ Borgarnes',
    urgency: 'optional',
    note: 'No fee. The Hvalfjörður tunnel has been toll-free since September 2018. Just drive through, no payment, no plate-scan billing. Saves ~3,000 ISK round-trip we used to budget.',
    link: 'https://en.wikipedia.org/wiki/Hvalfj%C3%B6r%C3%B0ur_Tunnel',
    estimated: 'Free',
  },
  {
    name: 'Blue Lagoon — DECLINED',
    location: 'Reykjanes',
    urgency: 'optional',
    note: 'Skipped per the group. Listed here only so you can re-add if anyone changes their mind.',
    link: 'https://bluelagoon.com',
    estimated: '~€80–100 pp',
  },
]

// =============================================================================
//  RESTAURANT RESERVATIONS — primary list with booking status
// =============================================================================

export type ReservationStatus = 'booked' | 'book-now' | 'book-soon' | 'walk-in' | 'declined'

export interface RestaurantReservation {
  name: string
  day: string
  cityOrArea: string
  vibe: 'fine' | 'casual' | 'quick'
  status: ReservationStatus
  note?: string
  url?: string
  phone?: string
  address?: string
  estimated?: string
}

export const restaurantReservations: RestaurantReservation[] = [
  // BOOKED
  { name: 'Apotek Kitchen + Bar', day: 'Mon · Jun 8 (Day 2)', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'booked', note: 'Confirmed. Old pharmacy building, creative cocktails, excellent mocktails for Marcella.', url: 'https://apotek.is', phone: '+354 551 0011', address: 'Austurstræti 16', estimated: '~€60–90 pp' },
  { name: 'Hótel Vík í Mýrdal (dinner)', day: 'Wed · Jun 10 (Day 4)', cityOrArea: 'Vík', vibe: 'casual', status: 'booked', note: 'Hotel restaurant — confirm with reception on check-in.', url: 'https://hotelvik.is', phone: '+354 487 1480', address: 'Klettsvegur 1' },

  // BOOK NOW (urgent)
  { name: 'ÓX', day: 'Sat · Jun 13 (Day 7) — splurge option', cityOrArea: 'Reykjavík', vibe: 'fine', status: 'book-soon', note: 'Tiny 11-seat tasting counter above SUMAC. Skippable — Grillið + Fiskmarkaðurinn fit the group better.', url: 'https://oxrestaurant.is', address: 'Laugavegur 28', estimated: '~€200–250 pp w/ pairing' },
  { name: 'Grillið', day: 'Sat · Jun 13 (Day 7) — farewell B', cityOrArea: 'Reykjavík', vibe: 'fine', status: 'book-soon', note: 'The view. 8th floor of Hótel Saga, 360° panorama. Easier to get than ÓX.', url: 'https://grillid.is', phone: '+354 525 9960', address: 'Hagatorg 1', estimated: '~€120–160 pp' },
  { name: 'Fiskmarkaðurinn (Fish Market)', day: 'Sat · Jun 13 (Day 7) — farewell C', cityOrArea: 'Reykjavík', vibe: 'fine', status: 'book-soon', note: 'The energy. Asian-Icelandic fusion, lava-stone room.', url: 'https://fiskmarkadurinn.is', phone: '+354 578 8877', address: 'Aðalstræti 12', estimated: '~€100–140 pp' },
  { name: 'Lóla', day: 'Sun · Jun 7 (Day 1) — welcome', cityOrArea: 'Reykjavík', vibe: 'fine', status: 'book-now', note: 'Italian-Nordic kitchen, old harbour. The "where\'s the scene" welcome.', url: 'https://lolarestaurant.is', phone: '+354 519 9999', address: 'Tryggvagata 11', estimated: '~€70–100 pp' },
  { name: 'Grillmarkaðurinn', day: 'Sun · Jun 7 (Day 1) — welcome alt', cityOrArea: 'Reykjavík', vibe: 'fine', status: 'book-soon', note: 'Volcanic-stone cooking. Classic alt to Lóla.', url: 'https://grillmarkadurinn.is', phone: '+354 571 7777', address: 'Lækjargata 2a', estimated: '~€80–110 pp' },
  { name: 'Snaps Bistro', day: 'Fri · Jun 12 (Day 6)', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'book-now', note: 'French-Icelandic. Friday night fills up — book 2 weeks out for a 5-top.', url: 'https://snapsbistro.is', phone: '+354 511 6677', address: 'Þórsgata 1', estimated: '~€55–80 pp' },
  { name: 'Kastrup', day: 'Tue · Jun 9 (Day 3)', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'book-soon', note: 'Modern Nordic-Danish bistro. Where Icelanders actually eat on a Tuesday.', url: 'https://kastrup.is', phone: '+354 551 0011', address: 'Hverfisgata 6', estimated: '~€60–90 pp' },
  { name: 'Suður-Vík', day: 'Wed · Jun 10 (Day 4) — Vík dinner alt', cityOrArea: 'Vík í Mýrdal', vibe: 'casual', status: 'book-soon', note: 'Cosy hilltop restaurant in Vík. Lamb + arctic char. Book ahead — Vík is small.', url: 'http://sudur-vik.com', phone: '+354 487 1515', address: 'Suðurvíkurvegur 1', estimated: '~€45–65 pp' },
  { name: 'Sumac Grill + Drinks', day: 'Day 5 alt or Day 6 alt', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'book-soon', note: 'Middle-Eastern-Nordic on Laugavegur 28. Same group as ÓX.', url: 'https://sumac.is', phone: '+354 537 9900', address: 'Laugavegur 28', estimated: '~€55–80 pp' },

  // WALK-IN / OPTIONAL
  { name: 'Skál! at Hlemmur Mathöll', day: 'Day 3 or Day 5 alt', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'walk-in', note: 'Natural wines + small plates inside the food hall. Walk-in friendly.', url: 'https://skalrvk.com', address: 'Laugavegur 107', estimated: '~€35–55 pp' },
  { name: 'Halldórskaffi', day: 'Day 4 Vík alt', cityOrArea: 'Vík í Mýrdal', vibe: 'casual', status: 'walk-in', note: 'Lamb soup + fish-of-the-day. Village classic.', url: 'https://www.halldorskaffi.is', address: 'Víkurbraut 28', estimated: '~€30–45 pp' },
  { name: 'Smiðjan Brugghús', day: 'Day 4 Vík alt', cityOrArea: 'Vík í Mýrdal', vibe: 'casual', status: 'walk-in', note: 'Lamb burger + house craft beer brewery, 5 min walk from Hotel Vík.', url: 'https://smidjanbrugghus.is', phone: '+354 588 9988', address: 'Sunnubraut 15', estimated: '~€30–45 pp' },
  { name: 'Le Kock', day: 'Any Reykjavík evening', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'walk-in', note: 'Burgers near the harbour. Casual dropper.', url: 'https://www.lekock.is', address: 'Tryggvagata 14', estimated: '~€25–35 pp' },
  { name: 'La Poblana', day: 'Day 3 lunch alt', cityOrArea: 'Reykjavík', vibe: 'casual', status: 'walk-in', note: 'Best tacos in town — birria quesatacos. Hafnarstræti 1-3, walk-in.', url: 'https://www.lapoblana.is', address: 'Hafnarstræti 1-3', estimated: '~€20–30 pp' },
  { name: 'Fjöruhúsið Café (Hellnar)', day: 'Fri · Jun 12 (Day 6) lunch', cityOrArea: 'Snæfellsnes', vibe: 'casual', status: 'walk-in', note: 'Cliffside café. Fish soup + cake + ocean panorama.', url: 'https://www.fjoruhusid.is', address: 'Hellnar' },
  { name: 'Café Bryggjan', day: 'Tue · Jun 9 (Day 3) lunch', cityOrArea: 'Grindavík', vibe: 'casual', status: 'walk-in', note: 'Famous langoustine soup in an old fishing-village hall.', url: 'https://www.bryggjan.com', phone: '+354 426 7100' },
  { name: 'Sandholt Bakery', day: 'Day 1 + others', cityOrArea: 'Reykjavík', vibe: 'quick', status: 'walk-in', note: 'Best bakery in town. Sourdough, skyr pastries.', url: 'https://sandholt.is', address: 'Laugavegur 36' },
  { name: 'DEIG Workshop', day: 'Day 3 breakfast', cityOrArea: 'Reykjavík', vibe: 'quick', status: 'walk-in', note: 'Donuts + bagels + sourdough, Skólavörðustígur 14.', url: 'https://www.facebook.com/deigworkshop', address: 'Skólavörðustígur 14' },
  { name: 'Brauð & Co', day: 'Any day', cityOrArea: 'Reykjavík', vibe: 'quick', status: 'walk-in', note: 'The cinnamon roll. Iconic graffiti facade.', url: 'https://braudogco.is', address: 'Frakkastígur 16' },
  { name: 'Reykjavík Roasters', day: 'Any day', cityOrArea: 'Reykjavík', vibe: 'quick', status: 'walk-in', note: 'Top-3 coffee in town.', url: 'https://reykjavikroasters.is', address: 'Kárastígur 1' },
  { name: 'The Coocoo\'s Nest', day: 'Sat · Jun 13 (Day 7) brunch', cityOrArea: 'Reykjavík (Grandi)', vibe: 'casual', status: 'walk-in', note: 'Saturday brunch at the harbour.', url: 'https://www.coocoosnest.is', address: 'Grandagarður 23' },
  { name: 'Café Loki', day: 'Sat · Jun 13 (Day 7) lunch', cityOrArea: 'Reykjavík', vibe: 'quick', status: 'walk-in', note: 'Right by Hallgrímskirkja. Rye sandwiches, rye-bread ice cream.', url: 'https://www.loki.is', address: 'Lokastígur 28' },
  { name: 'Skool Beans', day: 'Day 4 coffee', cityOrArea: 'Vík í Mýrdal', vibe: 'quick', status: 'walk-in', note: 'Yellow school-bus café. Best espresso south of Reykjavík.', url: 'https://www.facebook.com/skoolbeans' },
  { name: 'Mia\'s Country Van', day: 'Day 4 lunch', cityOrArea: 'Skógar area', vibe: 'quick', status: 'walk-in', note: 'Fish & chips food truck near Skógafoss.', url: 'https://www.facebook.com/MiasCountryVan' },
  { name: 'Efstidalur II', day: 'Mon · Jun 8 (Day 2) lunch', cityOrArea: 'Golden Circle', vibe: 'casual', status: 'walk-in', note: 'Working dairy farm. Beef burgers + homemade ice cream — the Friðheimar replacement.', url: 'https://efstidalur.is', phone: '+354 486 1186', address: 'Bláskógabyggð, off Route 37' },
  { name: 'Systrakaffi', day: 'Thu · Jun 11 (Day 5) coffee', cityOrArea: 'Kirkjubæjarklaustur', vibe: 'quick', status: 'walk-in', note: 'Tiny village café on the long drive home.', url: 'https://www.systrakaffi.is', address: 'Klausturvegur 13' },

  // DECLINED / DROPPED
  { name: 'Friðheimar (tomato farm)', day: 'Day 2 lunch', cityOrArea: 'Golden Circle', vibe: 'casual', status: 'declined', note: 'FULLY BOOKED for our window. Replaced by Efstidalur II.', url: 'https://fridheimar.is' },
  { name: 'Pakkhús (Höfn langoustine)', day: 'Originally Day 4', cityOrArea: 'Höfn', vibe: 'fine', status: 'declined', note: 'Höfn dropped from this trip. Save for a future N+E loop.', url: 'https://www.pakkhus.is' },
]

// =============================================================================
//  CULTURAL VENUES — for the Culture tab. Festivals are in src/data/events.ts.
// =============================================================================

export interface CulturalVenue {
  name: string
  type: 'cinema' | 'theatre' | 'music' | 'museum' | 'gallery' | 'venue'
  address: string
  url?: string
  blurb: string
  whenInPlan?: string
}

export const culturalVenues: CulturalVenue[] = [
  { name: 'Bíó Paradís', type: 'cinema', address: 'Hverfisgata 54', url: 'https://bioparadis.is', blurb: 'Independent + Icelandic cinema with English subtitles. Late shows + the cult "Black Sunday" slot. Tickets walk-in.', whenInPlan: 'Day 3 or Day 5 evening alt' },
  { name: 'Mengi', type: 'music', address: 'Óðinsgata 2', url: 'https://mengi.net', blurb: 'Tiny experimental music venue. One curated show per night, ~2,500-4,000 ISK. The opposite of a tourist trap.', whenInPlan: 'Day 3 late evening alt' },
  { name: 'Tjarnarbíó', type: 'theatre', address: 'Tjarnargata 12', url: 'https://tjarnarbio.is', blurb: 'Independent theatre + dance by Tjörnin pond. New Icelandic work, often non-verbal or English-surtitled.', whenInPlan: 'Day 3 or Day 5 evening alt' },
  { name: 'Iðnó', type: 'venue', address: 'Vonarstræti 3', url: 'https://idno.is', blurb: '1897 wooden theatre — small concerts, comedy, "How To Become Icelandic in 60 Min" runs nightly in summer.', whenInPlan: 'Day 3 or Day 7 evening' },
  { name: 'Harpa Concert Hall', type: 'venue', address: 'Austurbakki 2', url: 'https://en.harpa.is/calendar', blurb: 'Ólafur Elíasson glass facade. Free to walk into the foyer; check the calendar for orchestra/jazz nights.', whenInPlan: 'Day 3 + Day 7' },
  { name: 'Húrra', type: 'music', address: 'Tryggvagata 22', url: 'https://tix.is', blurb: 'Post-rock + electronic + indie shows. Most tickets via tix.is, walk-in fine for many gigs.', whenInPlan: 'Any evening' },
  { name: 'Kex Hostel bar', type: 'music', address: 'Skúlagata 28', url: 'https://kexhostel.is', blurb: 'Free indie sets + open mics in the bar of a converted biscuit factory. Loose, mixed crowd. On the welcome-night walking line between Lóla and Amma Don.', whenInPlan: 'Day 1 post-dinner (21:00) · Day 3 evening alt' },
  { name: 'Gaukurinn', type: 'venue', address: 'Tryggvagata 22', url: 'https://gaukurinn.is', blurb: 'Queer/punk/karaoke. Wednesday drag bingo, weekend punk shows. Where the city goes loose.', whenInPlan: 'Saturday after dinner' },
  { name: 'Settlement Exhibition (871±2)', type: 'museum', address: 'Aðalstræti 16', url: 'https://reykjavikcitymuseum.is/the-settlement-exhibition', blurb: 'Underground 9th-century Viking longhouse, preserved in situ. The academic Viking-museum option. Skip if you\'re doing the Saga Museum on Day 7 — they overlap.', whenInPlan: 'Day 3 afternoon (16:45) · Day 7 alt' },
  { name: 'Saga Museum', type: 'museum', address: 'Grandagarður 2 (Grandi harbour)', url: 'https://sagamuseum.is', blurb: 'Wax-figure dioramas retelling the Viking sagas — Egil, Erik the Red, Leif Erikson, Snorri. ~1h, audio-guided. Easier to take in than the Settlement Exhibition.', whenInPlan: 'Day 7 (afternoon slot in schedule)' },
  { name: 'Landnámssetur Íslands (Settlement Center, Borgarnes)', type: 'museum', address: 'Brákarbraut 13–15, Borgarnes', url: 'https://landnam.is', blurb: 'The third Viking museum: two 30-min audio-guided exhibits — Settlement of Iceland + Egil\'s Saga. Storytelling-driven, perfect Snæfellsnes-day stop. Cut from the Day 6 schedule to keep pace; add back if you leave Reykjavík at 07:30 instead of 08:30.', whenInPlan: 'Optional Day 6 add-back if leaving early' },
  { name: 'Perlan', type: 'museum', address: 'Öskjuhlíð', url: 'https://perlan.is', blurb: 'Glass dome with ice-cave exhibit + 360° observation deck + planetarium. ~2h, indoor — ideal rainy-day swap.', whenInPlan: 'Day 3 alt or Day 7 morning' },
  { name: 'Kolaportið flea market', type: 'venue', address: 'Tryggvagata 19 (old harbour)', url: 'https://www.kolaportid.is', blurb: 'Saturday + Sunday flea market. Vintage lopapeysur, cassettes, hákarl shots. Bring cash.', whenInPlan: 'Day 7 (Saturday)' },
  { name: 'Reykjavík Grapevine', type: 'venue', address: 'Online', url: 'https://grapevine.is', blurb: 'English-language paper. Best "what\'s on tonight" source once you\'re in town.', whenInPlan: 'Check daily' },
]

// =============================================================================
//  PHOTOGRAPHERS TO FOLLOW — Iceland-based for shot inspiration before the trip
// =============================================================================

export interface PhotographerToFollow {
  handle: string
  name: string
  specialty: string
  blurb: string
  url: string
}

export const photographersToFollow: PhotographerToFollow[] = [
  {
    handle: '@asasteinars',
    name: 'Ása Steinars',
    specialty: 'Adventure + landscape',
    blurb: 'Iceland\'s most-followed adventure photographer. Aerial drone work, Highlands hikes, ice caves. Reference for Sólheimajökull, Landmannalaugar, Highland river crossings.',
    url: 'https://www.instagram.com/asasteinars',
  },
  {
    handle: '@iurie',
    name: 'Iurie Belegurschi',
    specialty: 'Landscape + workshops',
    blurb: 'Romanian-born, Reykjavík-based. Runs Iceland Photo Tours. The reference for waterfall + glacier compositions — Skógafoss, Kirkjufell, Jökulsárlón.',
    url: 'https://www.instagram.com/iurie',
  },
  {
    handle: '@chrisburkard',
    name: 'Chris Burkard',
    specialty: 'Wild Iceland + surf',
    blurb: 'American photographer who put cold-water Iceland on the global feed. Big aerial work, surfers in basalt-column bays, Vestrahorn (next time).',
    url: 'https://www.instagram.com/chrisburkard',
  },
  {
    handle: '@benjaminhardman',
    name: 'Benjamin Hardman',
    specialty: 'Cinematic landscape',
    blurb: 'Australian living in Iceland. Moody, painterly waterfalls + glaciers. The reference for Day 4 (Skógafoss, Sólheimajökull, Reynisfjara).',
    url: 'https://www.instagram.com/benjaminhardman',
  },
  {
    handle: '@gunnarfreyr',
    name: 'Gunnar Freyr / @icelandic_explorer',
    specialty: 'Snæfellsnes + capital',
    blurb: 'Local-eye Reykjavík + west coast. Best reference for Kirkjufell + Búðakirkja angles you haven\'t seen 1000 times.',
    url: 'https://www.instagram.com/icelandic_explorer',
  },
  {
    handle: '@agla.bara',
    name: 'Agla Bára',
    specialty: 'Reykjavík street + culture',
    blurb: 'Reykjavík design + café culture lens. Reference for the city days — Hallgrímskirkja angles, Skólavörðustígur, harbor.',
    url: 'https://www.instagram.com/agla.bara',
  },
  {
    handle: '@guidetoiceland',
    name: 'Guide to Iceland',
    specialty: 'Crowd-sourced wide net',
    blurb: 'Local agency feed, ~1M followers. Daily Iceland scenes from many photographers — good if you want to scroll one feed for daily inspo.',
    url: 'https://www.instagram.com/guidetoiceland',
  },
]

// =============================================================================
//  COOL BARS — drinking notes for the Reykjavík nights
// =============================================================================

export interface CoolBar {
  name: string
  vibe: 'speakeasy' | 'cocktail' | 'craft beer' | 'wine' | 'dance' | 'dive' | 'live music' | 'hotel'
  address: string
  url?: string
  blurb: string
  bookAhead?: boolean
}

export const coolBars: CoolBar[] = [
  {
    name: 'Amma Don',
    vibe: 'speakeasy',
    address: 'Laugavegur 28 (behind a door at SUMAC/ÓX)',
    url: 'https://oxrestaurant.is',
    blurb: '~16-seat hidden cocktail bar from the ÓX/SUMAC group. Tiny, dim, expert program. THE nightcap move on Day 2 after Apothek.',
    bookAhead: true,
  },
  {
    name: 'Kaffibarinn',
    vibe: 'dive',
    address: 'Bergstaðastræti 1',
    blurb: 'The Reykjavík bar. Co-owned by Damon Albarn since the \'90s. Dive-y at street level, packed dance floor by 1am. Local + zero pretense. Cash + card both fine.',
  },
  {
    name: 'Pablo Discobar',
    vibe: 'dance',
    address: 'Veltusund 1 (above Mathöll Iðnó)',
    url: 'https://www.facebook.com/pablodiscobar',
    blurb: 'Latin-themed cocktail/dance bar. Pink everywhere, frozen margs, salsa-pop-disco mix. Loose Friday/Saturday energy.',
  },
  {
    name: 'Vínstúkan Tíu Sopar',
    vibe: 'wine',
    address: 'Laugavegur 27',
    url: 'https://tiusopar.is',
    blurb: 'Hidden wine bar — natural + Old World list, small Italian-leaning plates. Quiet date or sober-curious group.',
  },
  {
    name: 'Slippbarinn',
    vibe: 'cocktail',
    address: 'Mýrargata 2 (Reykjavík Marina Hotel)',
    url: 'https://www.slippbarinn.is',
    blurb: 'Harbour-side cocktail bar in the Marina Hotel. Live music many nights, big windows, the city\'s long-running classic cocktail room.',
  },
  {
    name: 'Mikkeller & Friends',
    vibe: 'craft beer',
    address: 'Hverfisgata 12 (top floor, above Kex Hostel building)',
    url: 'https://mikkeller.com',
    blurb: 'Danish craft-beer chain\'s Reykjavík outpost. ~20 taps, smashed pizzas, loose neighborhood crowd.',
  },
  {
    name: 'Veður',
    vibe: 'cocktail',
    address: 'Klapparstígur 33',
    blurb: 'Modern cocktail room with small plates. Quieter than Pablo, dressier than Kaffibarinn. Solid mocktail list — Marcella will be happy.',
  },
  {
    name: 'Bravó',
    vibe: 'craft beer',
    address: 'Laugavegur 22',
    blurb: 'Long-running craft-beer + cocktail haunt on the main strip. Famous happy hour 16:00-20:00. Walk-in always.',
  },
  {
    name: 'Skúli Craft Bar',
    vibe: 'craft beer',
    address: 'Aðalstræti 9',
    url: 'https://skulicraftbar.is',
    blurb: 'Icelandic craft-beer focus, ~14 taps, board games, the most chill of the lot. Right by Settlement Exhibition.',
  },
  {
    name: 'Jungle Cocktail Bar',
    vibe: 'cocktail',
    address: 'Austurstræti 9',
    blurb: 'Tropical-themed room — banana-leaf wallpaper, tiki cocktails, late-night DJs. Loud, fun, not subtle.',
  },
  {
    name: 'Kex Hostel bar',
    vibe: 'live music',
    address: 'Skúlagata 28',
    url: 'https://kexhostel.is',
    blurb: 'Bar inside a converted biscuit factory. Free indie sets + open mics most nights. Mixed crowd of locals + travelers, loose energy.',
  },
  {
    name: 'Húrra',
    vibe: 'live music',
    address: 'Tryggvagata 22',
    url: 'https://tix.is',
    blurb: 'Indie + electronic + post-rock club. Most tickets via tix.is, walk-in fine for many nights. The live-music room.',
  },
  {
    name: 'Apótek Bar (Day 2 dinner spot)',
    vibe: 'cocktail',
    address: 'Austurstræti 16',
    url: 'https://apotek.is',
    blurb: 'You already have the dinner reservation here Jun 8. Stay at the bar after — full mocktail program (one of the best in town).',
  },
]

export const carRentalTips = [
  { tip: 'Toyota Land Cruiser 150 (or Land Rover Discovery / Ford Explorer 4WD) — sweet spot for 5 people + luggage + F-road capability. ~€150–220/day in June, total €1,500–2,200 for 8 days', important: true },
  { tip: 'Get full gravel + sand/ash protection (SAAP) — F-roads and gravel roads are everywhere. Add ~€30–50/day, worth it', important: true },
  { tip: 'A proper 4WD SUV handles Lakagígar, Langisjór, and Landmannalaugar (F206, F235, F26+F225) — no super-jeep budget needed', important: true },
  { tip: 'Þórsmörk is the exception — river crossings rule out a regular 4WD. Use the Reykjavík Excursions or Trex shuttle from Hvolsvöllur (~€80–100 pp round trip) instead of a super-jeep tour (€250–350 pp)', important: true },
  { tip: 'Mælifell on F210 IS super-jeep territory — skip on this trip', important: false },
  { tip: 'Avoid for 5: Dacia Duster 4WD (cramped with bags), Suzuki Vitara 4WD (small). Anything 2WD is illegal on F-roads', important: false },
  { tip: 'Compare: Lagoon Car Rental, Northbound, Blue Car Rental — often cheaper than airport desks', important: true },
  { tip: 'Automatic transmission available — specify when booking', important: false },
  { tip: 'Pick up at KEF airport is easiest — many rental counters in the terminal', important: false },
  { tip: 'Fill petrol at Reykjavík before leaving city — it gets pricey and sparse outside', important: true },
  { tip: 'No fuel between Kirkjubæjarklaustur and Hrauneyjar Highland Center — top up at Klaustur N1 if doing the expedition alt', important: true },
  { tip: 'N1 and Orkan are the main petrol station chains — get the app for discounts', important: false },
]

// — Local guide content (recommendations, hotels, apps, tips) —

export const mustDoExperiences: { title: string; note: string; whenInPlan?: string }[] = [
  { title: 'Landmannalaugar & the Highlands', note: 'Riolite mountains in yellow/orange/green, natural hot pool, F-roads only open ~mid-June. Worth a full day if the road is clear.', whenInPlan: 'Optional alt to Day 6 (Snæfellsnes)' },
  { title: 'Westman Islands (Vestmannaeyjar)', note: 'Ferry from Landeyjahöfn (~35 min). Puffins on Stórhöfði, Eldfell volcano hike, Elephant Rock, RIB tours, great food at Næs/Slippurinn.', whenInPlan: 'Optional alt to Day 3 (South Coast)' },
  { title: 'Natural hot pool dip', note: 'Reykjadalur thermal river, Landmannalaugar pool, Hvammsvik, or any local pool — way more memorable than the Blue Lagoon.', whenInPlan: 'Day 5 evening' },
  { title: 'Glacier hike with a local guide', note: 'Svínafellsjökull is the classic. Crampons + ice axe + guide — never solo. ~2hr easy walk.', whenInPlan: 'Day 4 (optional add-on)' },
  { title: 'Glacial lagoon + Diamond Beach at sunset', note: 'June golden hour ~10:30pm — ice on black sand, glowing. Zodiac among icebergs is the splurge.', whenInPlan: 'Day 4 (in plan)' },
  { title: 'Blue Lagoon (or Sky Lagoon)', note: 'Sky Lagoon = oceanside infinity + ritual, cheaper. Blue Lagoon Retreat = the splurge. Sky Lagoon is in the plan; Blue Lagoon could be a Day 1 arrival or Day 8 departure stop.', whenInPlan: 'Sky Lagoon Day 7 (in plan)' },
  { title: 'Stokksnes / Vestrahorn at sunrise', note: 'Mirror beach with Vestrahorn reflection — needs low tide + still wind. 15 min from Höfn.', whenInPlan: 'Optional Day 5 morning before driving back' },
  { title: 'Whale watching, Húsavík', note: 'North Sailing on a restored sailing schooner. Best chance May–Sept. Húsavík is too far for this trip — note for next time.', whenInPlan: 'Future trip' },
  { title: 'Active volcanic eruption (if any)', note: 'Check safetravel.is + en.vedur.is on arrival. Recent eruption sites (Geldingadalir 2021, Meradalir 2022, Litli-Hrútur 2023, Sundhnúkur 2023–24) are pinned on the map even when dormant.', whenInPlan: 'Check on arrival' },
  { title: 'Northern lights', note: 'Not visible in June (midnight sun). Note for an autumn/winter return trip — find spots with low light pollution.', whenInPlan: 'Not in June' },
  { title: 'Highlands expedition (full alt trip)', note: 'Explora-style 7-day route: Reykjavík → Þórsmörk → Mýrdalsjökull/Mælifell → Vatnajökull → Lakagígar + Langisjór → Landmannalaugar → Sky Lagoon. Super-jeeps, F-roads, big hikes. Hotels Borg / Skálakot / Hrífunes / Highland Center. Different kind of trip — drops Reykjavík nightlife + Snæfellsnes.', whenInPlan: 'Alternative trip style' },
]

export const summerNotes = {
  weather: 'Best weather Iceland gets — 8–15°C, less rain. Endless daylight (sunset ~midnight, sunrise ~3am). Lush greens, wild lupines, puffins are nesting.',
  activities: ['puffins', 'hiking', 'whale watching', 'glacier hiking', 'paragliding', 'lupines'],
}

export const topHotels: { name: string; note: string; region: string }[] = [
  { name: 'The Reykjavík EDITION', note: 'Most luxurious hotel in Reykjavík. Tides restaurant downstairs.', region: 'Reykjavík' },
  { name: 'The Retreat at Blue Lagoon', note: 'Expensive but extraordinary. In-room lava + private lagoon access.', region: 'Reykjanes' },
  { name: 'Hotel Geysir', note: 'On the Golden Circle — walk-out access to the geyser field.', region: 'Golden Circle' },
  { name: 'Skálakot Hotel', note: 'South coast horse farm — cosy and rural.', region: 'South' },
  { name: 'Umi Hotel', note: 'Modernist boutique on the south coast near Hvolsvöllur.', region: 'South' },
  { name: 'Deplar Farm', note: 'If money was no object — top of the list. Troll Peninsula remoteness, helicopter access.', region: 'North' },
  { name: 'Hótel Húsafell', note: 'Borgarfjörður. Closest base to Langjökull glacier + Vök Baths-style geothermal pool.', region: 'West' },
  { name: 'Hótel Flatey', note: 'Tiny island in Breiðafjörður — only-thing-on-the-island experience.', region: 'Westfjords' },
  { name: 'Hótel Búðir', note: 'Iconic black church next door, Snæfellsnes peninsula.', region: 'Snæfellsnes' },
  { name: 'Gistihúsið — Lake Hótel Egilsstaðir', note: 'Best base for East Iceland. Food is great here too.', region: 'East' },
  { name: 'Hotel Borg', note: "Reykjavík's landmark historic hotel since 1930 — Art Deco, on Austurvöllur square. Where Explora's expedition starts.", region: 'Reykjavík' },
  { name: 'Hotel Hrífunes', note: 'Boutique south-coast guesthouse — small, family-run, perfect base for Vík + glacier days. Used on the Explora expedition.', region: 'South' },
  { name: 'Highland Center (Hrauneyjar)', note: 'Most remote hotel in Iceland — gateway to Landmannalaugar, Lakagígar, Langisjór. Basic but the only option deep in the Highlands.', region: 'Highlands' },
]

export const usefulApps: { name: string; url: string; note: string }[] = [
  { name: 'Icelandic Met Office (Veður)', url: 'https://en.vedur.is', note: "Iceland's notoriously fickle weather — check it twice a day." },
  { name: 'Aurora Forecast', url: 'https://en.vedur.is/weather/forecasts/aurora/', note: 'Northern lights activity + cloud cover. Less useful in June (midnight sun).' },
  { name: 'Road.is', url: 'https://www.road.is/travel-info/road-conditions-and-weather/', note: 'Road conditions, closures, webcams. Essential when weather turns.' },
  { name: 'Safetravel.is', url: 'https://safetravel.is', note: 'Travel warnings, storms, eruptions. App + you can register your travel plan.' },
  { name: 'Photopills', url: 'https://www.photopills.com', note: "Plan light, sun + moon position, golden hours. Photographer's app." },
  { name: 'Iceland Monitor', url: 'https://icelandmonitor.mbl.is', note: 'Iceland news in English.' },
  { name: 'Visit Iceland', url: 'https://www.visiticeland.com', note: 'Sustainable travel + region guides.' },
]

export const moneySavingTips: { category: string; icon: string; tips: string[] }[] = [
  {
    category: 'Eating & drinking',
    icon: '🍽',
    tips: [
      'Stock up at Bónus (yellow pig sign), Krónan, or Prís — much cheaper than restaurants. Costco in Reykjavík if anyone has a membership.',
      'Gas station markets (N1, Orkan) have cheap hot food — yes, the gas-station hot dogs are good.',
      'Tap water is glacier water — drink it. Never buy bottled.',
      'Buy alcohol at the airport Duty Free on arrival — lowest prices in the country.',
      "Krónan's Thai Cube curry bowls are surprisingly decent road food.",
    ],
  },
  {
    category: 'Transport & fuel',
    icon: '🚗',
    tips: [
      "Smaller car = less fuel. Electric saves less than you'd think with current charging costs.",
      'Blue Car Rental gives a fob with discounts at Ólis stations (and weirdly good cheap coffee).',
      'At the pump: pick a specific ISK amount, NOT "fill-up" — avoids large credit card holds.',
      'Cheapest fuel = Costco just outside Reykjavík (membership required).',
      'Dacia Duster 4x4 is the budget Highlands car — handles Landmannalaugar + Kerlingarfjöll.',
    ],
  },
  {
    category: 'Experiences',
    icon: '🌋',
    tips: [
      'Local pools beat geothermal spas for actual Icelandic life. Try Sundhöllin, Laugardalslaug, Árbæjarlaug, Hófsos, Sundhöll Vestmanneyja.',
      'Most natural sights only cost a parking fee — waterfalls, canyons, beaches.',
      'Self-guided: Perlan ice cave exhibit, puffins at Dyrhólaey + Vestmannaeyjar, glacier edges.',
      'NEVER explore real ice caves or hike on glacier ice without a guide and proper gear.',
    ],
  },
  {
    category: 'Gear & packing',
    icon: '🎒',
    tips: [
      'Rent gear instead of buying — IcelandCover (clothing) and Iceland Camping Equipment.',
      'Pack light to dodge airline luggage fees. Re-wear; book accommodation with washer/dryer.',
      'Laundry services are very expensive and rare outside Reykjavík.',
    ],
  },
]
