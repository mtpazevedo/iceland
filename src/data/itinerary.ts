// Iceland trip itinerary — June 7-14, 2026
// Apartments: B2 Apartments (Reykjavík) booked all nights except Vík.
// Vík: 1 night booked Jun 10-11 at VIK Hotel / VIK Apartments.
// Höfn + Diamond Beach + Jökulsárlón dropped this trip — see nextTime list.

export interface Accommodation {
  name: string
  address: string
  phone?: string
  url?: string
  bookingRef?: string
  checkIn?: string
  checkOut?: string
  notes?: string
  mapUrl?: string
}

export interface DriveLeg {
  from: string
  to: string
  duration: string
  distance?: string
  route?: string
  notes?: string
}

export type StopType = 'drive' | 'photo' | 'sight' | 'food' | 'spa' | 'hike' | 'shop' | 'rest' | 'activity' | 'culture'

export interface ScheduleItem {
  time?: string
  title: string
  type: StopType
  duration?: string
  description: string
  url?: string
  detour?: string
  highlight?: boolean
}

export interface PhotoSpot {
  name: string
  description: string
  detour?: string
  bestTime?: string
  notes?: string
}

export interface Meal {
  type: 'breakfast' | 'coffee' | 'lunch' | 'dinner' | 'snack'
  name: string
  vibe: 'fine' | 'casual' | 'quick'
  note: string
  url?: string
  phone?: string
  address?: string
  alt?: boolean
  booked?: boolean
}

export interface SpaOption {
  name: string
  type: string
  url?: string
  note?: string
  price?: string
  address?: string
}

export interface GroceryStop {
  name: string
  address?: string
  hours?: string
  note?: string
}

export interface BookingItem {
  item: string
  url?: string
  phone?: string
  status?: 'booked' | 'urgent' | 'todo'
  note?: string
}

export interface DayPlan {
  day: number
  date: string
  title: string
  subtitle: string
  location: string
  overnight: string
  accommodation?: Accommodation
  drive?: DriveLeg[]
  totalDriveTime?: string
  driveTime?: string
  driveFrom?: string
  heroImage: string
  schedule?: ScheduleItem[]
  meals: Meal[]
  photoSpots?: PhotoSpot[]
  spaOptions?: SpaOption[]
  groceryStops?: GroceryStop[]
  highlights?: string[]
  mustDo?: string[]
  tips: string[]
  bookings?: BookingItem[]
  ticketsNeeded?: string[]
  expeditionAlt?: {
    headline: string
    overnight: string
    driveTime?: string
    bullets: string[]
    drawbacks?: string[]
  }
  altSleepNight?: {
    headline: string
    overnight: string
    bullets: string[]
    drawbacks?: string[]
  }
}

// — Shared accommodation records used across days —

const B2_APARTMENTS: Accommodation = {
  name: 'B2 Apartments',
  address: 'Brautarholt 2, 105 Reykjavík',
  url: 'https://www.b2apartments.is',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Brautarholt+2%2C+105+Reykjav%C3%ADk%2C+Iceland',
  notes: 'Already booked. 7 min walk to Hallgrímskirkja, 12 min to the harbour. Free street parking on Brautarholt + side streets.',
  checkIn: 'Sun Jun 7 (afternoon)',
  checkOut: 'Sun Jun 14 (morning)',
}

const VIK_HOTEL: Accommodation = {
  name: 'Hótel Vík í Mýrdal + VIK Apartments',
  address: 'Klettsvegur 1–5, 870 Vík í Mýrdal',
  phone: '+354 487 1480',
  url: 'https://hotelvik.is',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Klettsvegur+1%2C+870+V%C3%ADk+%C3%AD+M%C3%BDrdal%2C+Iceland',
  notes: 'Same owner, same block — the hotel rooms and the apartment units share reception at Klettsvegur 1. Walking distance to Vík church, the black-sand beach, and Smiðjan Brugghús. Confirm your specific unit via the booking email; the front desk handles both check-ins.',
  checkIn: 'Wed Jun 10 (from 16:00)',
  checkOut: 'Thu Jun 11 (by 11:00)',
}

// =============================================================================
//  OFFICIAL ITINERARY — 8 days, 5 friends, June 7-14 2026
// =============================================================================

export const itinerary: DayPlan[] = [
  // ─── DAY 1 ───────────────────────────────────────────────────────────────
  {
    day: 1,
    date: 'June 7 — Sunday',
    title: 'Velkomin í Ísland',
    subtitle: 'Land, drive, drop bags, walk it off',
    location: 'Keflavík → Reykjavík',
    overnight: 'B2 Apartments, Reykjavík',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://images.unsplash.com/photo-1604859289820-3a7eaee4d8b3?w=1600&q=80',
    drive: [
      {
        from: 'Keflavík Airport (KEF)',
        to: 'Reykjavík city centre',
        duration: '~50 min',
        distance: '~50 km',
        route: 'Route 41 (Reykjanesbraut) → Route 49 → Hringbraut',
        notes: 'Skip the Blue Lagoon detour. Refuel at N1 Hafnarfjörður on the way in.',
      },
    ],
    totalDriveTime: '~50 min from KEF',
    schedule: [
      { time: '09:00', title: 'Land at KEF', type: 'rest', description: 'Wheels-down, passport control, baggage. Group photo + first skyr at the airport convenience store while waiting on bags.', duration: '60 min' },
      { time: '10:00', title: 'Pick up the SUV', type: 'rest', description: 'Rental counter inside the terminal. Inspect the car, photograph any pre-existing damage, confirm gravel + sand insurance is on the contract.', duration: '30 min' },
      { time: '10:30', title: 'Drive KEF → Reykjavík', type: 'drive', description: 'One stop: N1 Hafnarfjörður to fill the tank (cheaper than airport pumps).', duration: '50 min' },
      { time: '11:30', title: 'Reykjavík city centre', type: 'rest', description: 'B2 check-in is 15:00 — park near Hlemmur or Sandholt and stash big bags in the locked car for now.', duration: '15 min' },
      { time: '12:00', title: 'Slow brunch at Sandholt Bakery', type: 'food', description: 'Sourdough sandwiches, skyr pastries, strong coffee. The post-redeye reset. Walk-in.', duration: '90 min', url: 'https://sandholt.is', highlight: true },
      { time: '13:30', title: 'Walk Laugavegur + Skólavörðustígur', type: 'sight', description: 'Rainbow street up to Hallgrímskirkja exterior (save the tower for Day 7). Easy paced — adjust to whoever\'s most jet-lagged. ~90 min.', duration: '90 min', highlight: true },
      { time: '15:00', title: 'Check in at B2 Apartments', type: 'rest', description: 'Brautarholt 2, 105 Reykjavík. Drop bags, shower if needed, plug phones in, anyone who needs a 90-min nap takes it now.', duration: '90 min', url: 'https://www.google.com/maps/search/?api=1&query=Brautarholt+2%2C+105+Reykjav%C3%ADk' },
      { time: '16:30', title: '★ Bónus Hallveigarstígur — grocery run for Day 2', type: 'shop', description: 'Bónus closes 18:00 on Sundays — go now, before the harbour walk. 3 min walk south of B2 at Hallveigarstígur 1. Buy ground coffee + filters or instant, milk or oat milk, skyr, oats, bananas, granola bars, water bottles. Day 2 leaves B2 at 07:00 for the Golden Circle loop and every café opens too late. Brew the coffee + fill a flask tomorrow morning at B2.', detour: 'On route — 3 min walk from B2', highlight: true, duration: '30 min', url: 'https://www.google.com/maps/search/?api=1&query=B%C3%B3nus+Hallveigarst%C3%ADgur+1+Reykjav%C3%ADk' },
      { time: '17:00', title: '★ Sjómannadagurinn (Fisherman\'s Day) at the Old Harbour', type: 'culture', description: 'June 7, 2026 is Sjómannadagurinn — Iceland\'s Seamen\'s Day, the first Sunday of June. Festivities run all afternoon at the Old Harbour (Grandi): sea-rescue demos, rowing races, tug-of-war between fishing crews, live music, food stalls, harbour swims. The single most local thing happening in Reykjavík that day. Walk down from B2 (~20 min), eat a fish stew or skyr from a stall, watch a rescue demo, stay for an hour.', detour: 'On route', highlight: true, duration: '75 min', url: 'https://www.google.com/maps/search/?api=1&query=Old+Harbour+Reykjavik+Gr%C3%B3fin' },
      { time: '18:15', title: 'Sun Voyager + Harpa + Tjörnin loop', type: 'sight', description: 'From the Old Harbour walk east along Sæbraut to Sun Voyager (Sólfar) sculpture, past Harpa exterior, loop back south via Tjörnin pond. ~60 min, all flat. Lóla is a 5-min walk from Tjörnin.', duration: '60 min', highlight: true, detour: 'On route to dinner' },
      { time: '19:30', title: 'Welcome dinner — Lóla', type: 'food', description: 'Booked. Tryggvagata 11, 5 min walk from Tjörnin loop. Italian-Nordic, big arched windows, strong cocktail + mocktail program.', highlight: true },
      { time: '21:00', title: '★ Quick drink at KEX Hostel', type: 'culture', description: 'Old biscuit factory at Skúlagata 28 — wood floors, vintage barbershop chairs, harbour view, local crowd. 12-min walk from Lóla via Hverfisgata. One drink at the bar, soak in the room (live music on weekend nights), then keep moving to Amma Don.', url: 'https://kexhostel.is', detour: 'On route — between Lóla and Amma Don', highlight: true, duration: '30 min' },
      { time: '21:30', title: '★ Welcome drink at Amma Don (speakeasy)', type: 'culture', description: 'Hidden ~16-seat speakeasy behind a door at Laugavegur 28 — same building as ÓX/SUMAC, same operator. Tiny, dim, expert cocktail program (and excellent mocktails for Marcella). The "we are here, the city is glowing at midnight" first-night cocktail. Reservation strongly recommended via the SUMAC Instagram DM or call.', url: 'https://oxrestaurant.is', detour: 'On route — 10 min walk from KEX', highlight: true, duration: '60 min' },
      { time: '22:30', title: 'Optional midnight-sun walk', type: 'sight', description: 'Sunset is ~23:50. Loop the old harbour again or just sit by the seafront. Skip without guilt — Day 2 starts at 07:00 for the Golden Circle loop.', duration: '45 min' },
    ],
    photoSpots: [
      {
        name: 'Hallgrímskirkja exterior at golden hour',
        description: 'The 74m basalt-inspired church at the top of Skólavörðustígur. Warm gold facade ~10:30pm in June.',
        detour: 'On route — 7 min walk from B2',
        bestTime: '22:00–23:00',
      },
      {
        name: 'Skólavörðustígur rainbow street',
        description: 'Rainbow-painted cobblestones leading uphill to the church. Iconic vertical shot.',
        detour: 'On route',
        bestTime: 'Early evening, no crowd',
      },
    ],
    spaOptions: [
      {
        name: 'Sundhöllin Reykjavík',
        type: 'Neighbourhood thermal pool',
        url: 'https://reykjavik.is/stadir/sundhollin',
        note: 'The original 1937 Reykjavík city pool, two blocks from B2. Hot tubs + steam room, where locals actually go. Open til 22:00.',
        price: '~1,330 ISK',
        address: 'Barónsstígur 45a',
      },
    ],
    groceryStops: [
      { name: 'Bónus Hallveigarstígur', address: 'Hallveigarstígur 1, 101 Reykjavík', hours: 'Mon–Fri 10–18, Sat 10–18, Sun 11–18', note: 'Cheapest supermarket, 3 min walk from B2. PRIMARY STOP at 16:30 today — closes 18:00 on Sunday. STOCK FOR DAY 2 (Golden Circle loop, 07:00 departure): ground coffee + filters or instant, milk or oat milk, skyr, oats, bananas, granola bars, water bottles. B2 kitchen has a coffee machine — brew + flask in the morning.' },
      { name: 'Krónan Reykjavík (Granda)', address: 'Fiskislóð 39', hours: 'Daily 10–20', note: 'Backup if you miss the 18:00 Bónus close. 8 min drive west to Grandi. Note: out of the way for the harbour walk — not on the natural Sjómannadagurinn route.' },
    ],
    meals: [
      { type: 'lunch', name: 'Sandholt Bakery', vibe: 'quick', note: 'Best bakery in Reykjavík. Sourdough sandwiches, skyr pastries, strong coffee. Walk-in.', url: 'https://sandholt.is', address: 'Laugavegur 36' },
      { type: 'snack', name: 'Sjómannadagurinn food stalls — Old Harbour', vibe: 'quick', note: 'Fish stew, fried fish, langoustine rolls, skyr, waffles from the Fisherman\'s Day stalls at Grandi. Stand-up snack between brunch and dinner.', address: 'Old Harbour, Grandi' },
      { type: 'dinner', name: 'Lóla', vibe: 'fine', note: 'Italian-Nordic kitchen by the old harbour. Big arched windows, good cocktail + mocktail program. The "where\'s the scene" welcome-night move.', url: 'https://lolarestaurant.is', phone: '+354 519 9999', address: 'Tryggvagata 11' },
      { type: 'dinner', name: 'Grillmarkaðurinn', vibe: 'casual', note: 'The classic. Volcanic stone cooking, local lamb, arctic char. Stylish but not stiff.', url: 'https://grillmarkadurinn.is', phone: '+354 571 7777', address: 'Lækjargata 2a', alt: true },
      { type: 'snack', name: '★ KEX Hostel bar (post-dinner drink)', vibe: 'casual', note: 'Old biscuit factory on Skúlagata 28 — wood floors, vintage barbershop chairs, harbour view. Quick drink between Lóla and Amma Don. Walk-in.', url: 'https://kexhostel.is', address: 'Skúlagata 28' },
    ],
    highlights: ['09:00 KEF landing → SUV → city by 11:30', 'Slow brunch at Sandholt + Laugavegur walk before B2 check-in (15:00)', 'Afternoon nap window at B2', '★ Sjómannadagurinn (Fisherman\'s Day) festivities at the Old Harbour', 'Sun Voyager + Harpa + Tjörnin pre-dinner loop', 'Welcome dinner: Lóla 19:30', 'KEX Hostel drink before Amma Don'],
    mustDo: ['Eat properly at Sandholt — you\'ll be running on the redeye', 'Hallgrímskirkja exterior + Skólavörðustígur', 'Catch Sjómannadagurinn at the Old Harbour — only happens this one Sunday', 'Sun Voyager seafront walk on the way to dinner', 'Quick drink at KEX'],
    tips: [
      'June 7, 2026 is Sjómannadagurinn (Seamen\'s Day) — the first Sunday in June, Iceland\'s tribute to its fishing fleet. Old Harbour at Grandi has demos, races, music + food stalls all afternoon. Free, all-ages, very local. Plan the harbour walk around it.',
      'Plane lands 09:00 — by 10:30 you\'re on the road. B2 check-in is 15:00, time the brunch + walk to land at the apartment around then.',
      'Sunday hours: Bónus Hallveigarstígur closes 18:00. Hit it at 16:30 right after check-in, before the harbour walk — that is the Day 2 coffee + breakfast supply.',
      'Sunset Jun 7 is ~23:50 — but don\'t push midnight tonight, Day 2 starts at 07:00 for the Golden Circle loop.',
      'Tap water in Iceland = glacier. Refill bottles, skip bottled.',
      'B2 Apartments is on Brautarholt 2 — free street parking on the side streets.',
      'On arrival check safetravel.is + en.vedur.is for any active eruption near Reykjanes.',
    ],
    bookings: [
      { item: 'Lóla welcome dinner', url: 'https://lolarestaurant.is', phone: '+354 519 9999', status: 'urgent', note: 'Book 3-4 weeks out for a 5-top' },
      { item: 'Amma Don welcome cocktail (post-Lóla)', url: 'https://oxrestaurant.is', status: 'urgent', note: 'Tiny ~16-seat speakeasy at Laugavegur 28, same group as ÓX/SUMAC. DM the SUMAC Instagram or call to lock 21:30 for 5.' },
      { item: 'Grillmarkaðurinn (alt welcome)', url: 'https://grillmarkadurinn.is', phone: '+354 571 7777', status: 'urgent' },
      { item: 'Saga Museum (Viking wax-figure museum, rainy-day alt)', url: 'https://sagamuseum.is', status: 'todo', note: 'Grandagarður 2 (Grandi harbour). Lifelike wax dioramas of Viking sagas — Egil, Erik the Red, Leif Erikson, Snorri. ~1h, audio-guided. Open daily 10:00-18:00. Good redeye-friendly afternoon if anyone has energy.' },
      { item: 'Settlement Exhibition 871±2 (rainy-day alt)', url: 'https://reykjavikcitymuseum.is/the-settlement-exhibition', status: 'todo', note: 'Aðalstræti 16. Real Viking longhouse preserved underground. ~1h, audio-guided. The academic counterpart to the Saga Museum.' },
      { item: 'Perlan (rainy-day alt)', url: 'https://perlan.is', status: 'todo', note: '~5,990 ISK. Glass dome on Öskjuhlíð hill, ice-cave + 360° deck. 10 min drive from B2.' },
    ],
  },

  // ─── DAY 2 ───────────────────────────────────────────────────────────────
  {
    day: 2,
    date: 'June 8 — Monday',
    title: 'The Golden Circle + Hvammsvík',
    subtitle: 'Gullfoss, geysers, tectonic plates, then fjord hot springs',
    location: 'Reykjavík → Gullfoss → Geysir → Friðheimar → Þingvellir → Hvammsvík → Reykjavík',
    overnight: 'B2 Apartments, Reykjavík',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://images.unsplash.com/photo-1559521783-1d1599583485?w=1600&q=80',
    drive: [
      { from: 'Reykjavík (B2)', to: 'Kerið crater', duration: '~50 min', distance: '~58 km', route: 'Route 1 east → Route 35 north', notes: 'Coffee in the car. First sight of the day, sits right on the south route to Gullfoss.' },
      { from: 'Kerið crater', to: 'Gullfoss', duration: '~1 hr', distance: '~70 km', route: 'Route 35 north', notes: 'Continue straight up Route 35 through Reykholt area.' },
      { from: 'Gullfoss', to: 'Geysir', duration: '~10 min', distance: '~10 km', route: 'Route 35 south', notes: 'Quick hop' },
      { from: 'Geysir', to: 'Faxi waterfall', duration: '~10 min', distance: '~10 km', route: 'Route 35 south', notes: 'Small but pretty roadside waterfall on Route 35 — easy 10-min stop, almost no crowds.' },
      { from: 'Faxi waterfall', to: 'Vínstofa Friðheimar', duration: '~10 min', distance: '~5 km', route: 'Route 35 south → Route 37', notes: 'Lunch stop is a real waypoint on the route, not a detour.' },
      { from: 'Vínstofa Friðheimar', to: 'Þingvellir National Park', duration: '~50 min', distance: '~50 km', route: 'Route 37 → 365 → 36 (Þingvallavegur)', notes: 'Past Laugarvatn lake.' },
      { from: 'Þingvellir National Park', to: 'Hvammsvík Hot Springs', duration: '~1 hr', distance: '~55 km', route: 'Route 36 west → Route 48 (Kjósarskarðsvegur) → Route 47', notes: 'Direct line over the pass. No doubling back through Reykjavík.' },
      { from: 'Hvammsvík Hot Springs', to: 'Reykjavík (B2)', duration: '~40 min', distance: '~45 km', route: 'Route 47 south → Route 1' },
    ],
    totalDriveTime: '~5 hr driving · ~13 hr door-to-door · lunch: Vínstofa Friðheimar',
    schedule: [
      { time: '07:00', title: 'Coffee + drive out (south route)', type: 'drive', description: 'Reykjavík → Kerið via Route 1 south through Selfoss, then Route 35 north. ~50 min to the crater. Brew the Bónus coffee at B2 and fill a flask, eat skyr + oats. Bring snacks for the road.', duration: '50 min' },
      { time: '07:50', title: 'Kerið crater', type: 'sight', description: 'Brick-red volcanic rim with a cobalt-lake bottom. 30-min walk around the rim, ~400 ISK pp at the gate. Sits literally on the south route to Gullfoss, no detour. Empty in the morning before the tour buses arrive.', url: 'https://www.google.com/maps/search/?api=1&query=Keri%C3%B0+crater', highlight: true, duration: '30 min' },
      { time: '08:20', title: 'Drive to Gullfoss', type: 'drive', description: '~1 hr north on Route 35 through Reykholt area.', duration: '60 min' },
      { time: '09:20', title: 'Gullfoss', type: 'sight', description: 'Two-cascade waterfall, 32m total drop into a glacial canyon. Walk both viewpoints, the upper rim AND the lower platform (you will get soaked, worth it). Cafeteria upstairs if anyone needs a hot drink before the geyser stop.', url: 'https://www.google.com/maps/search/?api=1&query=Gullfoss+Falls%2C+846+Iceland', highlight: true, duration: '60 min' },
      { time: '10:20', title: 'Drive to Geysir', type: 'drive', description: 'Quick 10-min hop south on Route 35.', duration: '10 min' },
      { time: '10:30', title: 'Strokkur eruptions', type: 'sight', description: 'The active geyser blows every 5–8 min. Stand UPWIND, not behind. Walk the whole field, Litli-Geysir, Blesi blue pool. ~50 min.', highlight: true, duration: '50 min' },
      { time: '11:20', title: 'Drive to Faxi waterfall', type: 'drive', description: '~10 min south on Route 35.', duration: '10 min' },
      { time: '11:30', title: 'Faxi waterfall (roadside)', type: 'photo', description: 'Small but pretty waterfall right off Route 35. Salmon-ladder visible from the viewing platform. 10-min stop, almost no crowds.', url: 'https://www.google.com/maps/search/?api=1&query=Faxi+waterfall+Iceland', duration: '10 min' },
      { time: '11:40', title: 'Drive to Friðheimar', type: 'drive', description: '~10 min south on Route 35 → 37 toward Reykholt.', duration: '10 min' },
      { time: '11:50', title: 'Lunch at Vínstofa Friðheimar (tomato greenhouse wine bar)', type: 'food', description: 'The wine-bar side of Friðheimar, tomato soup with sourdough, Bloody Mary made tableside, mozzarella salad, basil cheesecake. Bookable and walk-in friendlier than the main restaurant. Sits right on the route from Geysir to Þingvellir, so no backtracking.', url: 'https://www.fridheimar.is', highlight: true, duration: '70 min' },
      { time: '13:00', title: 'Drive to Þingvellir', type: 'drive', description: '~50 min via Route 37 → 365 → 36 (Þingvallavegur). Pretty drive past Laugarvatn lake.', duration: '50 min' },
      { time: '13:50', title: 'Þingvellir National Park on foot', type: 'sight', description: 'Park at P1 (Hakið visitor centre, 1,000 ISK). Walk Almannagjá gorge between the Eurasian and N. American plates → Lögberg (the old parliament rock) → Öxarárfoss waterfall. Loop ~1.5h, paved + boardwalk.', highlight: true, duration: '2h 5' },
      { time: '15:55', title: 'Drive to Hvammsvík (Hvalfjörður)', type: 'drive', description: '~1 hr northwest. Route 36 west out of Þingvellir → Route 48 (Kjósarskarðsvegur) over the pass → Route 47 along the south shore of Hvalfjörður. Direct line, no doubling back through Reykjavík.', duration: '60 min' },
      { time: '17:20', title: '★ Hvammsvík fjord kayak — whole group', type: 'activity', description: 'Sea kayak tour on Hvalfjörður fjord, the calm bay where Hvammsvík sits. ~1.5h paddle, drysuit + gear included. Book through Hvammsvík (kayak partner is Iceland Highlights). Backup if no kayak slots that day: Kayak Reykjavík Old Harbour 18:00 paddle instead.', url: 'https://booking.hvammsvik.com', highlight: true, duration: '90 min' },
      { time: '18:50', title: 'Hvammsvík hot springs soak', type: 'spa', description: '8 geothermal pools at the sea\'s edge. Warm up post-kayak. ~30 min quick soak to keep the dinner reservation, ~7,990 ISK pp.', url: 'https://hvammsvik.is', highlight: true, duration: '30 min' },
      { time: '19:20', title: 'Drive back to Reykjavík', type: 'drive', description: '~40 min south on Route 47 → Route 1.', duration: '40 min' },
      { time: '20:00', title: 'Back at B2 — quick reset before dinner', type: 'rest', description: 'Hot shower, dry hair, change of clothes after the kayak + soak. 30 min to look human.', duration: '30 min' },
      { time: '20:30', title: 'Apothek dinner (BOOKED)', type: 'food', description: 'Confirmed reservation Jun 8 · 20:30. Old pharmacy building, creative cocktails (Marcella: their mocktail program is one of the best in town), strong fish dishes, lively room.', url: 'https://apotek.is', highlight: true },
      { time: '22:30', title: 'Optional second nightcap at Amma Don', type: 'culture', description: 'Same speakeasy you visited Day 1 (Laugavegur 28, behind ÓX/SUMAC). Drop in if Apothek leaves anyone wanting one more. Walk-in fine if your reservation Day 1 went smoothly, they will remember you.', url: 'https://oxrestaurant.is', duration: '60 min' },
    ],
    photoSpots: [
      {
        name: 'Almannagjá gorge — between two continents',
        description: 'Walking the rift between the Eurasian and North American plates. Cinematic vertical walls.',
        detour: 'On route — Þingvellir P1',
        bestTime: 'Morning, soft light + fewer tour buses',
      },
      {
        name: 'Öxarárfoss',
        description: 'The waterfall inside Þingvellir, fed by a river the Vikings rerouted in 930 AD for the parliament.',
        detour: '15 min walk from Almannagjá',
      },
      {
        name: 'Strokkur mid-eruption',
        description: 'Use 1/500s shutter. Burst mode. The blue dome forms 1 sec before the blast.',
        detour: 'On route',
        bestTime: 'Wait through 2-3 cycles, frame the right side',
      },
      {
        name: 'Gullfoss lower platform',
        description: 'Walk all the way down the staircase to the platform on the canyon edge. Rainbow in spray on sunny afternoons.',
        detour: 'On route',
        bestTime: '14:00–16:00 for the rainbow angle',
      },
      {
        name: 'Bruarfoss (the turquoise waterfall)',
        description: 'Electric-blue glacial water cascading over dark volcanic rock. One of the most Instagrammed waterfalls in Iceland — most lists rank it top-3 on the Golden Circle. Trade-off: 7 km gravel hike round-trip from the trailhead off Route 37.',
        detour: '+2.5 hr if added',
        bestTime: 'Late morning when sun lights the blue from above',
        notes: 'Park at the official trailhead (Brúarhlöð). Trail is flat but muddy in rain.',
      },
      {
        name: 'Kerið crater',
        description: 'Brick-red volcanic rim with a cobalt-lake bottom. 30-min walk around the rim. ~400 ISK pp at the gate. First stop of the day, sits directly on Route 35 between Selfoss and Gullfoss.',
        detour: 'On route — Route 35, ~50 min from Reykjavík',
        bestTime: 'Morning before the tour buses (we arrive ~07:50)',
      },
    ],
    spaOptions: [
      {
        name: 'Laugarvatn Fontana',
        type: 'Lakeside thermal baths + steam',
        url: 'https://www.fontana.is',
        note: 'Right on the Golden Circle route between Þingvellir and Geysir. Steam huts built over a natural hot spring. ~1.5h soak.',
        price: '~5,400 ISK',
        address: 'Hverabraut 1, 840 Laugarvatn',
      },
      {
        name: 'Hvammsvík Hot Springs',
        type: 'Ocean-edge thermal pools',
        url: 'https://hvammsvik.is',
        note: 'Hvalfjörður, 40 min north of Reykjavík. 8 pools at the sea\'s edge. Less touristy than Sky Lagoon. Detour only if driving back via Route 47.',
        price: '~7,990 ISK',
        address: 'Hvammsvík, 276 Mosfellsbær',
      },
      {
        name: 'Sundhöllin Reykjavík',
        type: 'Neighbourhood thermal pool',
        url: 'https://reykjavik.is/stadir/sundhollin',
        note: 'Back-up if the day runs long. 2-block walk from B2.',
        price: '~1,330 ISK',
      },
    ],
    meals: [
      { type: 'breakfast', name: 'B2 kitchen — skyr + Bónus coffee flask', vibe: 'quick', note: 'Brewed at the apartment before the 07:00 departure. Bring bananas + granola bars for the road; Kerið is the first stop ~50 min later, and the cafeteria at Gullfoss is the next real food option.' },
      { type: 'lunch', name: 'Vínstofa Friðheimar (wine bar)', vibe: 'casual', note: 'The wine-bar side of Friðheimar, same tomato greenhouse, same tomato-everything menu (the famous soup, tableside Bloody Marys, mozzarella salad, basil cheesecake). Bookable / walk-in friendlier than the main restaurant. Sits right on Route 37 between Geysir and Þingvellir.', url: 'https://www.fridheimar.is', phone: '+354 486 8894', address: 'Reykholt, 801' },
      { type: 'lunch', name: 'Efstidalur II', vibe: 'casual', note: 'Working dairy farm — beef burgers from their own herd, homemade ice cream made downstairs. Backup if the wine bar is full.', url: 'https://efstidalur.is', phone: '+354 486 1186', alt: true },
      { type: 'lunch', name: 'Lindin Bistro Café (Laugarvatn)', vibe: 'casual', note: 'Lakeside bistro on Lindarbraut. Lamb, arctic char, smoked trout. Slightly fine but reservable.', url: 'https://laugarvatn.is/lindin', phone: '+354 486 1262', address: 'Lindarbraut 2, Laugarvatn', alt: true },
      { type: 'lunch', name: 'Geysir Glíma at Geysir Centre', vibe: 'quick', note: 'Lava bread + soup + smoked salmon platters, right across from the geysers. Walk-in, cafeteria-style.', url: 'https://geysircenter.is', alt: true },
      { type: 'dinner', name: 'Apotek Kitchen + Bar', vibe: 'casual', note: 'BOOKED Jun 8 · 20:30. Ex-pharmacy, creative cocktails, excellent mocktails for Marcella, lively room. One block from Austurvöllur.', url: 'https://apotek.is', phone: '+354 551 0011', address: 'Austurstræti 16', booked: true },
    ],
    highlights: ['Kerið crater at sunrise', 'Gullfoss double cascade', 'Strokkur geyser eruption', 'Lunch in the Friðheimar tomato greenhouse', 'Þingvellir on foot (Almannagjá + Öxarárfoss)', '★ Hvammsvík fjord kayak + hot springs combo', 'Apotek dinner 20:30 — BOOKED'],
    mustDo: ['Walk the Kerið crater rim before the buses arrive', 'Both Gullfoss viewpoints, especially the lower one', 'See Strokkur erupt (every 5-8 min)', 'Walk Almannagjá gorge between the tectonic plates', 'Hvammsvík kayak + soak (whole group)'],
    tips: [
      'The route is a clean clockwise loop with no backtracking. Kerið and Gullfoss first while everyone is fresh, then work west through the geyser field, lunch, Þingvellir, and over the Kjósarskarðsvegur pass to Hvammsvík. The whole day pastes cleanly into Google Maps.',
      'Kerið gate fee is cash-only (~400 ISK pp). Walk the full rim loop, not just the upper deck.',
      'Þingvellir parking P1 is 1,000 ISK, pay at the kiosk or app — keep the receipt.',
      'Gullfoss: bring a rain shell, the spray soaks you.',
      'Geysir: stand to the side the wind is blowing FROM, never behind.',
      'Lunch is the wine-bar side of Friðheimar (Vínstofa Friðheimar). Call +354 486 8894 ahead — easier to book than the main restaurant. Sits right between Geysir and Þingvellir on Route 37, no detour.',
      'Route 48 (Kjósarskarðsvegur) is the direct pass from Þingvellir to Hvalfjörður. Closed in winter but fully open in June. Saves ~30 min vs. going back through Reykjavík.',
    ],
    bookings: [
      { item: '★ Hvammsvík fjord kayak + hot springs combo — Mon Jun 8 · 17:20', url: 'https://booking.hvammsvik.com', status: 'urgent', note: 'Book through Hvammsvík — kayak partner is Iceland Highlights. ~1.5h paddle + 30 min soak. ~22,000 ISK pp total estimate (kayak + entry). Drysuit + gear included. Backup if no kayak slots: Kayak Reykjavík Old Harbour 18:00.' },
      { item: 'Apotek dinner', url: 'https://apotek.is', phone: '+354 551 0011', status: 'booked', note: 'Confirmed Jun 8 · 20:30 (pushed from 20:00 so the group has time to dry off after Hvammsvík kayak + soak)' },
      { item: 'Vínstofa Friðheimar (lunch wine bar)', url: 'https://www.fridheimar.is', phone: '+354 486 8894', status: 'urgent', note: 'Wine-bar side of the tomato greenhouse — easier to book than the main restaurant. Call ahead for the ~12:45 slot for 5.' },
      { item: 'Amma Don (optional 2nd nightcap)', url: 'https://oxrestaurant.is', status: 'todo', note: 'Same speakeasy as Day 1 — drop in if anyone wants one more after Apothek. Walk-in fine if Day 1 reservation already happened.' },
      { item: 'Þingvellir parking pass', url: 'https://parka.is', status: 'todo', note: 'Pay on arrival, 1,000 ISK' },
    ],
  },

  // ─── DAY 3 ───────────────────────────────────────────────────────────────
  {
    day: 3,
    date: 'June 9 — Tuesday',
    title: 'Reykjanes + Reykjavík Culture',
    subtitle: 'Black-sand beach, lava cliffs, then a city afternoon',
    location: 'Reykjanes peninsula loop → Reykjavík',
    overnight: 'B2 Apartments, Reykjavík',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Reykjanes_%282023%29.jpg/1280px-Reykjanes_%282023%29.jpg',
    drive: [
      { from: 'Reykjavík (B2)', to: 'Stóra Sandvík beach', duration: '~50 min', distance: '~55 km', route: 'Route 41 → 425', notes: 'Skip Blue Lagoon — go straight to the wild side of Reykjanes.' },
      { from: 'Stóra Sandvík', to: 'Brimketill lava rock pool', duration: '~15 min', distance: '~10 km' },
      { from: 'Brimketill', to: 'Gunnuhver hot springs + Reykjanes lighthouse', duration: '~10 min', distance: '~6 km' },
      { from: 'Gunnuhver', to: 'Bridge Between Continents', duration: '~10 min', distance: '~7 km' },
      { from: 'Bridge Between Continents', to: 'Café Bryggjan, Grindavík', duration: '~15 min', distance: '~15 km', route: 'Route 425 east into Grindavík.', notes: 'Langoustine soup in the old fishing hall — east-bound lunch stop with no backtracking.' },
      { from: 'Café Bryggjan, Grindavík', to: 'Kleifarvatn lake', duration: '~20 min', distance: '~20 km', route: 'Route 427 east → Route 42 north', notes: '5-min roadside pull-over for the photo — black lava beach + cobalt water.' },
      { from: 'Kleifarvatn lake', to: 'Seltún (Krýsuvík geothermal)', duration: '~10 min', distance: '~6 km', route: 'Route 42 north', notes: 'Solfataras + mudpots on a boardwalk. Free.' },
      { from: 'Seltún (Krýsuvík geothermal)', to: 'Reykjavík (B2)', duration: '~40 min', distance: '~35 km', route: 'Route 42 north → Route 41' },
    ],
    totalDriveTime: '~3 hr driving · ~10 hr door-to-door · lunch: Café Bryggjan, Grindavík',
    schedule: [
      { time: '08:30', title: 'Breakfast at DEIG Workshop', type: 'food', description: 'Donuts + bagels + sourdough at Skólavörðustígur 14, 5 min walk from B2. Walk-in.', url: 'https://www.facebook.com/deigworkshop', highlight: true, duration: '45 min' },
      { time: '09:30', title: 'Drive to Stóra Sandvík', type: 'drive', description: '50 min. Black volcanic landscape opens up after Hafnarfjörður.', duration: '50 min' },
      { time: '10:30', title: 'Stóra Sandvík beach', type: 'sight', description: 'Black-sand cove on the photo list (1.19). Wild dunes, basalt cliffs, almost always empty.', highlight: true, duration: '45 min' },
      { time: '11:30', title: 'Brimketill lava rock pool', type: 'photo', description: 'Natural pool the Atlantic crashes into, viewed from a clifftop walkway.', highlight: true, duration: '20 min' },
      { time: '12:00', title: 'Gunnuhver + Reykjanes lighthouse', type: 'sight', description: 'Steaming geothermal mudpots + Iceland\'s oldest lighthouse on a basalt headland.', highlight: true, duration: '60 min' },
      { time: '13:00', title: 'Drive to Bridge Between Continents', type: 'drive', description: '~10 min north on Route 425.', duration: '10 min' },
      { time: '13:10', title: 'Bridge Between Continents', type: 'photo', description: 'Symbolic walking bridge across the Mid-Atlantic Ridge.', duration: '15 min' },
      { time: '13:25', title: 'Drive to Grindavík for lunch', type: 'drive', description: '~15 min east on Route 425 into the fishing village.', duration: '15 min' },
      { time: '13:40', title: 'Lunch at Café Bryggjan, Grindavík', type: 'food', description: 'Famous langoustine soup in an old fishing-village hall. East-bound stop, no backtracking.', url: 'https://www.bryggjan.com', highlight: true, duration: '60 min' },
      { time: '14:40', title: 'Drive to Kleifarvatn lake', type: 'drive', description: '~20 min via Route 427 east → Route 42 north.', duration: '20 min' },
      { time: '15:00', title: 'Kleifarvatn lake roadside stop', type: 'photo', description: '5-min pull-over on Route 42. Black lava beach + cobalt water, often deserted. Quick photo, back in the car.', duration: '10 min' },
      { time: '15:10', title: 'Drive to Seltún', type: 'drive', description: '~10 min further north on Route 42.', duration: '10 min' },
      { time: '15:20', title: '★ Seltún geothermal field', type: 'sight', description: 'Krýsuvík\'s solfataras + mudpots: hissing yellow + ochre + black on a 30-min boardwalk loop. Stay on the path, the crust is thin. Free. From the cheat sheet hidden-gems list.', detour: 'On route', highlight: true, duration: '30 min' },
      { time: '15:50', title: 'Drive Seltún → Reykjavík', type: 'drive', description: '~40 min via Route 42 north to Route 41.', duration: '40 min' },
      { time: '16:30', title: 'Back at B2, regroup', type: 'rest', description: 'Quick reset, grab a layer for the city afternoon.', duration: '15 min' },
      { time: '16:45', title: 'Settlement Exhibition (871±2)', type: 'culture', description: 'Underground 9th-century Viking longhouse preserved in situ. Aðalstræti 16. (Skip if you\'re doing the Saga Museum on Day 7 — they overlap.)', url: 'https://reykjavikcitymuseum.is/the-settlement-exhibition', highlight: true, duration: '60 min' },
      { time: '17:45', title: 'Walk to Sun Voyager (Sólfar)', type: 'photo', description: 'Steel ship sculpture on the seafront, 15 min walk along the harbour. Photo list 2.3.', highlight: true, duration: '20 min' },
      { time: '18:05', title: 'Harpa Concert Hall (walk-through)', type: 'culture', description: 'Ólafur Elíasson glass facade. Quick 25-min look — top-floor view + the lobby grid shot. Skip if tired (Day 7 has more time here).', url: 'https://en.harpa.is/calendar', duration: '25 min' },
      { time: '18:30', title: 'Tjörnin pond + Ráðhús loop', type: 'sight', description: 'Loop the pond on foot. Ends right by Sundhöllin.', duration: '30 min' },
      { time: '19:00', title: 'Sundhöllin local hot pot', type: 'spa', description: 'The 1937 city pool. 75 min — perfect after a walking day.', url: 'https://reykjavik.is/stadir/sundhollin', highlight: true, duration: '75 min' },
      { time: '20:30', title: 'Dinner at Kastrup', type: 'food', description: 'Modern Nordic-Danish bistro on Hverfisgata 6.' },
      { time: '22:30', title: '★ Drinks + live music at KEX Hostel', type: 'culture', description: 'Old biscuit factory on Skúlagata 28 — laid-back bar with wood floors, vintage barbershop chairs, harbour view. Local crowd, occasional live music. Walk-in. Alts if KEX is quiet: Húrra (rock/indie venue) or Mengi (experimental + jazz).', url: 'https://kexhostel.is' },
    ],
    photoSpots: [
      { name: 'Stóra Sandvík (1.19)', description: 'Black volcanic dunes meeting Atlantic surf.', detour: 'On route', bestTime: 'Late morning' },
      { name: 'Brimketill', description: 'Wave-carved lava pool from a clifftop boardwalk.', detour: 'On route', bestTime: 'High tide for spray' },
      { name: 'Gunnuhver mudpots', description: 'Sulphur yellows + ochre against black volcanic rock.', detour: 'On route' },
      { name: 'Seltún (Krýsuvík)', description: 'Vivid yellow-orange geothermal crust, hissing solfataras, boardwalk loop. Cheat-sheet hidden gem.', detour: 'On route — 25 min off Route 42', bestTime: 'Mid-afternoon, low sun on the crust' },
      { name: 'Sun Voyager / Sólfar (2.3)', description: 'Steel ship sculpture against Mt. Esja.', detour: 'On route', bestTime: '20:00–22:00' },
      { name: 'Harpa glass facade (2.4)', description: 'Honeycomb glass interior, geometric grid shots.', detour: 'On route' },
      { name: 'Tjörnin pond (2.6)', description: 'Swans + the Ráðhús reflecting in the water.', detour: 'On route' },
    ],
    spaOptions: [
      { name: 'Sundhöllin Reykjavík', type: 'Local thermal pool', url: 'https://reykjavik.is/stadir/sundhollin', note: '5 hot tubs, sauna, steam, cold plunge. Bring flip-flops.', price: '~1,330 ISK', address: 'Barónsstígur 45a' },
      { name: 'Laugardalslaug', type: 'Bigger neighbourhood pool', url: 'https://reykjavik.is/stadir/laugardalslaug', note: 'Olympic outdoor + 6 hot tubs + 86m water slide. 10 min drive from B2.', price: '~1,330 ISK' },
    ],
    groceryStops: [
      { name: 'Bónus Hallveigarstígur', address: 'Hallveigarstígur 1', hours: 'Daily 11–18', note: 'Top up snacks for tomorrow\'s south coast drive.' },
    ],
    meals: [
      { type: 'breakfast', name: 'DEIG Workshop', vibe: 'quick', note: 'Donuts + bagels + sourdough.', url: 'https://www.facebook.com/deigworkshop', address: 'Skólavörðustígur 14' },
      { type: 'breakfast', name: 'Reykjavík Roasters', vibe: 'quick', note: 'Top-3 coffee in town.', url: 'https://reykjavikroasters.is', address: 'Kárastígur 1', alt: true },
      { type: 'breakfast', name: 'Brauð & Co', vibe: 'quick', note: 'The cinnamon roll. Iconic graffiti facade.', url: 'https://braudogco.is', address: 'Frakkastígur 16', alt: true },
      { type: 'lunch', name: 'Café Bryggjan, Grindavík', vibe: 'casual', note: 'Langoustine soup in an old fishing-village hall.', url: 'https://www.bryggjan.com', phone: '+354 426 7100', address: 'Miðgarður 2, Grindavík' },
      { type: 'lunch', name: 'La Poblana', vibe: 'casual', note: 'Best tacos in town. Skip Bryggjan, drive back to Reykjavík for this.', url: 'https://www.lapoblana.is', address: 'Hafnarstræti 1-3', alt: true },
      { type: 'dinner', name: 'Kastrup', vibe: 'casual', note: 'Modern Nordic-Danish on Hverfisgata. Locals\' weeknight pick.', url: 'https://kastrup.is', phone: '+354 551 0011', address: 'Hverfisgata 6' },
      { type: 'dinner', name: 'Skál! Hlemmur Mathöll', vibe: 'casual', note: 'Natural wines + small plates inside the food hall.', url: 'https://skalrvk.com', address: 'Laugavegur 107', alt: true },
    ],
    highlights: ['Stóra Sandvík (photo list 1.19)', 'Brimketill + Gunnuhver + Reykjanes lighthouse', '★ Seltún (Krýsuvík geothermal)', 'Settlement Exhibition (Viking longhouse)', 'Sun Voyager + Tjörnin walk', 'Sundhöllin local hot pot evening'],
    mustDo: ['Walk Stóra Sandvík beach', 'See Brimketill from the clifftop deck', 'Seltún boardwalk loop', 'Soak at Sundhöllin like a local'],
    tips: [
      'No Blue Lagoon — wild Reykjanes is way better and almost free.',
      'Reykjanes weather changes in 10 min — bring a wind shell + waterproof shoes.',
      'Sundhöllin: bring own flip-flops + towel (or rent at the desk).',
      '★ VOLCANIC CONTINGENCY (the real risk on this trip): Sundhnúkur-Grindavík fissure had 9 eruptions Dec 2023 — Aug 2025. As of mid-May 2026, magma is accumulating again under Svartsengi. IMO\'s hazard assessment runs through Jun 30. Check safetravel.is the morning of Day 3. If a new eruption is active or imminent: the Reykjanes loop (Brimketill, Gunnuhver, lighthouse, Bridge, Seltún) may be closed.',
      '★ CONTINGENCY SWAP: if Reykjanes is closed, run a Borgarfjörður loop instead — drive north (Hvalfjörður tunnel, free) to Deildartunguhver (Europe\'s most powerful hot spring, 180 L/s of boiling water) + Hraunfossar + Barnafoss (lava waterfalls flowing out of moss) + Reykholt (Snorri Sturluson\'s farm and the Snorrastofa cultural centre). Same drive distance, same ~6h loop, equally photogenic. Café at Húsafell on the way back. Then back to Reykjavík for the same afternoon city plan + Sundhöllin + Kastrup dinner.',
    ],
    bookings: [
      { item: 'Settlement Exhibition tickets', url: 'https://reykjavikcitymuseum.is/the-settlement-exhibition', status: 'todo', note: 'Walk-in usually fine.' },
      { item: 'Kastrup dinner', url: 'https://kastrup.is', phone: '+354 551 0011', status: 'urgent', note: 'Reserve 1-2 weeks out for a 5-top.' },
      { item: 'Café Bryggjan lunch', url: 'https://www.bryggjan.com', phone: '+354 426 7100', status: 'todo' },
      { item: 'Reykjavík Food Walk (full Reykjavík alt)', url: 'https://www.reykjavikfoodwalk.com', status: 'todo', note: '3.5h guided food tour, 6 stops — replaces the Reykjanes morning.' },
      { item: 'Perlan museum (rainy-day alt)', url: 'https://perlan.is', status: 'todo', note: '~5,990 ISK pp.' },
    ],
  },

  // ─── DAY 4 ───────────────────────────────────────────────────────────────
  {
    day: 4,
    date: 'June 10 — Wednesday',
    title: 'South Coast → Vík',
    subtitle: 'Five waterfalls, a black beach, a Yoda cave, a hotel in Vík',
    location: 'Reykjavík → Seljalandsfoss → Skógafoss → Kvernufoss → Reynisfjara → Vík',
    overnight: 'Hótel Vík í Mýrdal / VIK Apartments',
    accommodation: VIK_HOTEL,
    heroImage: 'https://images.unsplash.com/photo-1490080886466-6ea0a78d4f01?w=1600&q=80',
    drive: [
      { from: 'Reykjavík (B2)', to: 'Seljalandsfoss', duration: '~1 hr 50', distance: '~120 km', route: 'Route 1 east via Hveragerði + Selfoss + Hella' },
      { from: 'Seljalandsfoss', to: 'Gljúfrabúi', duration: '~5 min walk', distance: '~600 m', notes: 'Same parking lot as Seljalandsfoss. Walk the path north along the cliff into the slot-canyon chamber.' },
      { from: 'Gljúfrabúi', to: 'Skógafoss', duration: '~25 min', distance: '~30 km', route: 'Route 1 east' },
      { from: 'Skógafoss', to: 'Kvernufoss', duration: '~10 min', distance: '~5 km', route: 'Route 1 east → Skógar Museum parking', notes: 'Park at the Skógar Museum, then walk ~15 min through a sheep field into the canyon to the falls. Almost no crowds.' },
      { from: 'Kvernufoss', to: 'Dyrhólaey', duration: '~20 min', distance: '~20 km', route: 'Route 1 east → Route 218 south' },
      { from: 'Dyrhólaey', to: 'Reynisfjara', duration: '~10 min', distance: '~10 km', route: 'Route 218 → 215' },
      { from: 'Reynisfjara', to: 'Hótel Vík í Mýrdal', duration: '~10 min', distance: '~10 km' },
      { from: 'Hótel Vík í Mýrdal', to: 'Yoda Cave (Gígjagjá)', duration: '~10 min', distance: '~7 km', notes: 'Check-in first, then evening detour for the photo.' },
    ],
    totalDriveTime: '~3.25 hr driving · ~14 hr door-to-door · lunch: Mia\'s Country Van (Skógafoss)',
    schedule: [
      { time: '08:00', title: 'Coffee + checkout from B2 (we keep the booking, just leaving for the night)', type: 'rest', description: 'B2 stays booked while you\'re in Vík — leave anything you don\'t need.', duration: '15 min' },
      { time: '08:30', title: 'Drive Reykjavík → Seljalandsfoss', type: 'drive', description: '~1h50. Stop at the N1 in Hveragerði if anyone needs coffee + a bathroom. Quick.', duration: '110 min' },
      { time: '10:30', title: 'Seljalandsfoss', type: 'sight', description: 'Walk behind the curtain. Wear a rain shell — you WILL get soaked. 30 min.', highlight: true, duration: '30 min' },
      { time: '11:00', title: 'Gljúfrabúi (next door)', type: 'photo', description: 'The hidden waterfall, 5 min walk down the path. Step over rocks into the cave-like canyon. Way fewer people.', highlight: true, duration: '20 min' },
      { time: '11:30', title: 'Drive to Skógafoss', type: 'drive', description: '25 min along the south coast plain.', duration: '25 min' },
      { time: '12:00', title: 'Lunch at Mia\'s Country Van', type: 'food', description: 'Fish & chips food truck near Skógafoss. Better than the cafés. ~45 min.', duration: '45 min' },
      { time: '12:45', title: 'Skógafoss — base + the 527-step climb', type: 'sight', description: '60m drop, double rainbow on sunny afternoons. Walk to the foot of the falls for the spray shot, then climb the iron staircase to the cliff-top viewpoint. View back along the river to the sea is the postcard. Bring a rain shell, the spray soaks the base.', url: 'https://www.google.com/maps/search/?api=1&query=Sk%C3%B3gafoss', highlight: true, duration: '75 min' },
      { time: '14:00', title: 'Drive to Kvernufoss (Skógar Museum parking)', type: 'drive', description: '5 min east on Route 1. Park at the Skógar Folk Museum and walk through the sheep gate behind the museum.', duration: '5 min' },
      { time: '14:05', title: 'Kvernufoss — the hidden waterfall', type: 'sight', description: '~15 min walk along the river into a small canyon. The path leads behind the curtain, same as Seljalandsfoss but almost no one is there. Out-and-back ~60 min total with photo time.', url: 'https://www.google.com/maps/search/?api=1&query=Kvernufoss', highlight: true, duration: '60 min' },
      { time: '15:05', title: 'Drive to Dyrhólaey', type: 'drive', description: '~20 min east on Route 1, then south on Route 218.', duration: '20 min' },
      { time: '15:25', title: 'Dyrhólaey arch + lighthouse', type: 'sight', description: 'Cliff promontory with a sea arch. Puffin closure runs May 1 — June 25 in 2026, so the lower puffin viewpoint is shut for us, but the upper deck is open and the views east + west are huge.', highlight: true, duration: '45 min' },
      { time: '16:10', title: 'Drive to Reynisfjara', type: 'drive', description: '10 min south on Route 218 → 215.', duration: '10 min' },
      { time: '16:20', title: 'Reynisfjara black-sand beach', type: 'sight', description: 'Basalt columns + sea stacks. NEVER turn your back to the ocean — sneaker waves kill people every year. Stay 30m back.', highlight: true, duration: '45 min' },
      { time: '17:05', title: 'Drive to Hotel Vík', type: 'drive', description: '10 min east on Route 215 → Route 1 → Vík village.', duration: '10 min' },
      { time: '17:15', title: 'Check in Hótel Vík í Mýrdal', type: 'rest', description: 'Klettsvegur 1-5. Confirm exact unit (Hotel vs Apartments). Park in the lot. Day 5 plan: the 3 cave-goers take the 09:00 Katla Fast Track tour (back ~11:30), the 2 staying behind check out at 11:00 and leave bags at reception. Ask reception to confirm a left-luggage spot.', url: 'https://hotelvik.is', duration: '30 min' },
      { time: '19:00', title: 'Dinner at Suður-Vík', type: 'food', description: 'Cosy spot above the village. Arctic char, lamb, Icelandic comfort food. Book ahead — Vík is small.', url: 'http://sudur-vik.com' },
      { time: '21:30', title: 'Yoda Cave (Gígjagjá) at sunset', type: 'photo', description: 'Hjörleifshöfði headland, 10 min east. Sand road last 4 km — fine in dry weather, slow in rain. The cave frames the ocean like Yoda\'s mouth. Photo list 1.16. June 10 sunset is ~23:50 so 22:00 golden hour is perfect here.', detour: '+30 min round trip', highlight: true, duration: '60 min' },
      { time: '22:45', title: 'Late walk to Vík í Mýrdalskirkja (optional)', type: 'photo', description: 'Red-roof white church on the hill above the village. 10-min uphill walk from Hotel Vík. Frames the whole town + black beach + Reynisdrangar sea stacks. Skip if Yoda Cave wrecked everyone.', duration: '30 min' },
    ],
    photoSpots: [
      {
        name: 'Skógafoss (1.3)',
        description: '60m, double rainbow, climb the iron staircase for the top view back along the river to the sea.',
        detour: 'On route',
        bestTime: '13:00–15:00 for the rainbow',
      },
      {
        name: 'Kvernufoss',
        description: 'Hidden waterfall behind the Skógar Museum, ~15 min walk in. Cave-like alcove behind the curtain, almost no people. Frame from the base looking up.',
        detour: 'On route — 5 min from Skógafoss',
        bestTime: 'Early afternoon when sun reaches into the canyon',
      },
      {
        name: 'Yoda Cave / Gígjagjá (1.16)',
        description: 'Cave at Hjörleifshöfði, frames the ocean horizon like a green Star Wars character. Sand road in.',
        detour: '+30 min from Vík',
        bestTime: 'Sunset (~22:00 Jun 10) for backlit horizon',
      },
      {
        name: 'Gljúfrabúi (hidden waterfall)',
        description: 'Tucked in a slot canyon next to Seljalandsfoss. Wade through a stream into a chamber.',
        detour: 'On route — 5 min walk',
      },
      {
        name: 'Reynisdrangar sea stacks from Reynisfjara',
        description: 'The basalt monoliths in the surf, framed against Mt Reynisfjall.',
        detour: 'On route',
      },
      {
        name: 'Dyrhólaey sea arch',
        description: 'Massive natural arch from the upper viewpoint. Light is best late afternoon.',
        detour: 'On route',
      },
      {
        name: 'Sólheimasandur DC-3 plane wreck (optional)',
        description: 'Crashed US Navy DC-3 lying on a black-sand plain since 1973. Sigur Rós, Bieber, Bond intros. Free shuttle from the parking (~10-15 min each way) or 50-min walk. Long but iconic.',
        detour: '+1.5 hr if added — between Skógafoss and Dyrhólaey',
        bestTime: 'Overcast or low-light for moody shots',
        notes: 'Decide at Skógafoss based on group energy + weather.',
      },
      {
        name: 'Vík í Mýrdalskirkja (red-roof church on the hill)',
        description: 'White wooden church with red roof, perched above Vík village. Frames the whole town + black beach in one shot. 10-min walk uphill from Hotel Vík.',
        detour: 'On route — evening walk from check-in',
        bestTime: 'Golden hour 22:00–23:00',
      },
    ],
    spaOptions: [
      {
        name: 'Seljavallalaug',
        type: 'Hidden valley swimming pool',
        url: 'https://www.guidetoiceland.is/travel-iceland/drive/seljavallalaug',
        note: '1923 concrete pool tucked under a glacier, ~30 min walk in from a parking lot off Route 1. Free, unsupervised, lukewarm. Bring water shoes — algae on the bottom. Detour ~1.5h round trip.',
        price: 'Free',
      },
      {
        name: 'Vík public pool (Sundlaug Víkur)',
        type: 'Village pool',
        note: 'Tiny but functional. Walk-in. Cheap.',
        price: '~900 ISK',
      },
    ],
    groceryStops: [
      { name: 'Krónan Selfoss', address: 'Larsenstræti 1, 800 Selfoss', hours: 'Daily 10–20', note: 'Largest stop on the route — fill up here for snacks + drinks for the next 2 days. 1h25 from Reykjavík.' },
      { name: 'Krónan Vík', address: 'Víkurbraut 30, 870 Vík', hours: 'Daily 10–22', note: 'Open late. Pick up breakfast + sandwich supplies for tomorrow morning.' },
    ],
    meals: [
      { type: 'breakfast', name: 'Brauð & Co + Reykjavík Roasters takeaway', vibe: 'quick', note: 'Cinnamon rolls + lattes for the road, or grab from the B2 kitchen.' },
      { type: 'lunch', name: 'Mia\'s Country Van', vibe: 'quick', note: 'Fish & chips food truck near Skógafoss. Best counter-service on the south coast. Closed in bad weather.', url: 'https://www.facebook.com/MiasCountryVan' },
      { type: 'lunch', name: 'Gamla Fjósið ("The Old Cowshed")', vibe: 'casual', note: 'Hvolsvöllur, ~30 min before Seljalandsfoss. Volcano-soup, lamb burgers, in a converted barn. Good if leaving Reykjavík late.', url: 'https://gamlafjosid.is', alt: true },
      { type: 'coffee', name: 'Skool Beans (Vík)', vibe: 'quick', note: 'Yellow school-bus café on the Vík main road. Best espresso south of Reykjavík.', url: 'https://www.facebook.com/skoolbeans' },
      { type: 'dinner', name: 'Suður-Vík', vibe: 'casual', note: 'Cosy hilltop restaurant in Vík. Arctic char, lamb, soup. Book ahead — Vík dining is small and fills up.', url: 'http://sudur-vik.com', phone: '+354 487 1515', address: 'Suðurvíkurvegur 1, 870 Vík' },
      { type: 'dinner', name: 'Smiðjan Brugghús', vibe: 'casual', note: 'Lamb burger + house craft beer brewery, 5 min walk from Hotel Vík. Loose vibe.', url: 'https://smidjanbrugghus.is', phone: '+354 588 9988', address: 'Sunnubraut 15, 870 Vík', alt: true },
      { type: 'dinner', name: 'Halldórskaffi', vibe: 'casual', note: 'Lamb soup, fish-of-the-day, the village classic. Walk-in friendly.', url: 'https://www.halldorskaffi.is', alt: true },
    ],
    highlights: ['Seljalandsfoss + Gljúfrabúi', 'Skógafoss base + the 527-step climb', 'Kvernufoss hidden waterfall (behind Skógar Museum)', 'Dyrhólaey arch + Reynisfjara black-sand beach', 'Yoda Cave at sunset (photo list 1.16)', 'Sleep at Hotel Vík'],
    mustDo: ['Walk behind Seljalandsfoss', 'Climb to the top of Skógafoss for the cliff-edge view', 'Walk into Kvernufoss canyon', 'Yoda Cave at sunset (~22:00)', 'Reynisfjara — but stay back from the surf'],
    tips: [
      'B2 stays booked while you\'re in Vík — only pack a 1-night bag',
      'Sólheimajökull glacier walk was dropped. The Katla ice cave on Day 5 covers the glacier experience and these two activities back-to-back are redundant. Frees up the afternoon for Skógafoss top + Kvernufoss, which the earlier version had to cut.',
      'Skógafoss climb: 527 iron steps. Take your time, the cliff-edge view is the postcard. Bring a rain shell — the base is a soaking zone.',
      'Kvernufoss: park at the Skógar Folk Museum lot, walk through the sheep gate behind the museum, follow the river into the canyon ~15 min. Boots help, the path can be muddy.',
      'Reynisfjara: NEVER turn your back to the ocean — sneaker waves are deadly. Authorities post a green/yellow/red flag at the parking. Yellow = stay 30m back. Red = don\'t go.',
      'Yoda Cave sand road: fine in dry weather, slow in rain. AWD/4WD recommended (your SUV is fine).',
      'Day 5 morning: the 3 cave-goers take the 09:00 Katla Fast Track tour (walk to the OB gas station at 08:30). The 2 staying behind check out at the standard 11:00 and leave bags at reception — no late checkout needed since the tour is back ~11:30.',
      'Vík is tiny — restaurant capacity ~150 covers total. Book Suður-Vík by Day 3 morning.',
      'Volcanic gas alert: if Katla rumbles (rare but happens), the south coast is on real evac protocols. Save 112 in your phone.',
    ],
    bookings: [
      { item: 'Hótel Vík í Mýrdal — confirmed Jun 10', url: 'https://hotelvik.is', phone: '+354 487 1480', status: 'booked', note: 'Day 5: 3 are on the 09:00 Katla Fast Track tour, 2 check out at the standard 11:00 and leave bags at reception. Ask reception to confirm a left-luggage spot.' },
      { item: 'Suður-Vík dinner', url: 'http://sudur-vik.com', phone: '+354 487 1515', status: 'urgent' },
      { item: '★ Katla Ice Cave Fast Track tour for Day 5 morning · 3 people · 09:00 slot', url: 'https://katlatrack.is', status: 'urgent', note: 'Book the 09:00 Fast Track Thu Jun 11 slot for 3. Tour leaves OB gas station, Austurvegur 16, 5 min walk from Hotel Vík. 2.5h door-to-door, back ~11:30. ~29,900 ISK pp. Pack: waterproof layers, sturdy boots — helmet + crampons provided.' },
    ],
  },

  // ─── DAY 5 ───────────────────────────────────────────────────────────────
  {
    day: 5,
    date: 'June 11 — Thursday',
    title: 'Vík → Fjaðrárgljúfur → Reykjavík',
    subtitle: 'The canyon, the moss-lava field, the road home',
    location: 'Vík → Skaftafell → Fjaðrárgljúfur → Reykjavík',
    overnight: 'B2 Apartments, Reykjavík',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://images.unsplash.com/photo-1547059347-50ddc36d2e91?w=1600&q=80',
    drive: [
      { from: 'Vík', to: 'Eldhraun moss-lava pull-over', duration: '~50 min', distance: '~55 km', route: 'Route 1 east' },
      { from: 'Eldhraun moss-lava pull-over', to: 'Fjaðrárgljúfur canyon', duration: '~30 min', distance: '~25 km', route: 'Route 1 east → Route 206 north' },
      { from: 'Fjaðrárgljúfur canyon', to: 'Kirkjubæjarklaustur (Systrakaffi coffee)', duration: '~10 min', distance: '~10 km' },
      { from: 'Kirkjubæjarklaustur (Systrakaffi coffee)', to: 'Stjórnarfoss waterfall', duration: '~5 min', distance: '~2 km', route: 'Route 203 north out of Klaustur', notes: 'Tiny 2-tier waterfall right outside Klaustur — 10-min photo stop, basically on the way home.' },
      { from: 'Stjórnarfoss waterfall', to: 'Reykjavík (B2)', duration: '~3 hr', distance: '~270 km', route: 'Route 203 → Route 1 west', notes: 'Long stretch — split the wheel.' },
    ],
    totalDriveTime: '~4.5 hr driving · ~11 hr door-to-door · lunch: Skool Beans / Soup Company (Vík, post-cave)',
    schedule: [
      { time: '07:45', title: 'Early breakfast at Hótel Vík (cave-goers)', type: 'food', description: 'Hotel breakfast included if booked direct. The 3 cave-goers eat first and head out for the 09:00 Fast Track tour; the 2 staying behind eat slow.', duration: '30 min' },
      { time: '08:30', title: 'The 3 cave-goers walk to OB gas station', type: 'rest', description: '5 min walk from Hotel Vík to Katlatrack meeting point at the OB gas station, Austurvegur 16. The 2 staying behind start their slow morning in Vík.', duration: '15 min' },
      { time: '08:45', title: '★ Katlatrack Fast Track check-in (3 of 5)', type: 'rest', description: 'Sign waivers, fitted with helmet + crampons. Super-jeep boarding.', url: 'https://katlatrack.is', duration: '15 min' },
      { time: '09:00', title: '★ Katla Ice Cave — Fast Track tour (3 of 5)', type: 'activity', description: 'Super-jeep up onto Mýrdalsjökull, walk into the dramatic black-streaked Katla ice cave under the volcano. The 09:00 Fast Track tour, 2.5h door-to-door, ~29,900 ISK pp. Year-round operation. Licensed guide, all glacier safety gear provided. Earliest slot = softer ice and fewest groups in the cave.', url: 'https://katlatrack.is', highlight: true, duration: '150 min' },
      { time: '09:00', title: 'Slow Vík morning (the 2 staying behind)', type: 'rest', description: 'Standard checkout is 11:00 — leave bags at reception if needed. Options while the others are on the glacier: walk up to Vík í Mýrdalskirkja red-roof church for the village + black beach view, Skool Beans espresso, walk the beach right outside the hotel, finish packing the car. Be ready ~11:30 when the cave crew is back.', duration: '150 min' },
      { time: '11:30', title: 'Cave tour ends — walk back to Hotel Vík', type: 'rest', description: '5 min walk from OB gas station back to the hotel. Reunite with the 2 stay-behinds, load the car.', duration: '15 min' },
      { time: '11:45', title: 'Quick lunch in Vík — Skool Beans or Soup Company', type: 'food', description: 'Skool Beans for a sandwich + espresso, or Soup Company for the lamb soup. Eat in Vík — the next real food is 2 hours of driving away.', url: 'https://www.facebook.com/skoolbeans', duration: '45 min' },
      { time: '12:30', title: 'Drive east to Eldhraun', type: 'drive', description: '~50 min on Route 1. Glacial outwash plains, Mýrdalssandur sand desert.', duration: '50 min' },
      { time: '13:20', title: 'Photo stop: Eldhraun moss-lava field', type: 'photo', description: 'The 1783 Laki-eruption lava covered in 30 cm of pale-green moss. Pull-over on Route 1, do NOT walk on the moss.', url: 'https://www.google.com/maps/search/?api=1&query=Eldhraun+lava+field%2C+880+Iceland', highlight: true, duration: '15 min' },
      { time: '13:35', title: 'Drive to Fjaðrárgljúfur', type: 'drive', description: '~30 min via Route 206 north from Route 1.', url: 'https://www.google.com/maps/search/?api=1&query=Fja%C3%B0r%C3%A1rglj%C3%BAfur+canyon%2C+880+Iceland', duration: '30 min' },
      { time: '14:05', title: 'Fjaðrárgljúfur canyon', type: 'sight', description: '2-million-year-old serpentine canyon. 1.5 km top-rim trail with multiple viewpoints. Photo list 1.8.', url: 'https://www.google.com/maps/search/?api=1&query=Fja%C3%B0r%C3%A1rglj%C3%BAfur+canyon%2C+880+Iceland', highlight: true, duration: '75 min' },
      { time: '15:20', title: 'Coffee at Systrakaffi (Kirkjubæjarklaustur)', type: 'food', description: 'Tiny village café. Cake + drip coffee in a 1960s village interior. Quick stop before the long stretch home.', url: 'https://www.systrakaffi.is', duration: '30 min' },
      { time: '15:50', title: 'Stjórnarfoss waterfall (5 min from Klaustur)', type: 'photo', description: 'Tiny 2-tier waterfall on Route 203, basically on the way out of Klaustur. 10-min photo stop.', duration: '15 min' },
      { time: '16:05', title: 'Drive Stjórnarfoss → Reykjavík', type: 'drive', description: '~3h direct. Trade drivers around Vík (1h in). Sunset is ~23:50 — bright the whole way.', duration: '180 min' },
      { time: '19:05', title: 'Arrive Reykjavík, check back into B2', type: 'rest', description: 'Same key, same beds. Drop bags. The 09:00 cave slot buys you a relaxed evening back in town instead of a 20:45 crawl in.', duration: '25 min' },
      { time: '19:30', title: 'Casual dinner — Skál! at Hlemmur Mathöll', type: 'food', description: 'PRIMARY pick: Hlemmur Mathöll food hall is the fastest turn after a long drive — walk-in, small plates, kitchen open till 22:00. Sumac or Kastrup are sit-down alternatives if anyone wants table service. Easy night — Snæfellsnes leaves 08:30 tomorrow.', url: 'https://skalrvk.com' },
    ],
    photoSpots: [
      {
        name: 'Katla Ice Cave',
        description: 'Black-streaked blue ice tunnel under Mýrdalsjökull / Katla volcano. Iconic moody Iceland shot — bring a wide lens, the cave is bigger than your phone\'s field of view. Tour-only access.',
        detour: 'On route — Vík morning',
        bestTime: 'Morning slot — softer ice + fewer groups',
        notes: 'No tripods inside (group flow). Phone-flash kills the colour — natural light works.',
      },
      {
        name: 'Mýrdalsjökull super-jeep ride (en route to the cave)',
        description: 'The drive up onto the glacier is half the experience — black ridges, glacier outwash, the volcano dome behind. Bus-window-friendly.',
        detour: 'On route — included in tour',
      },
      {
        name: 'Fjaðrárgljúfur (1.8)',
        description: 'Serpentine canyon walls covered in green moss, river snaking 100m below. Multiple top-rim viewpoints — walk the full trail.',
        detour: 'On route',
        bestTime: '13:30–15:00 afternoon light',
        notes: 'STAY ON MARKED PATHS. The site closed in 2019 from erosion damage; rangers will turn you around if you stray.',
      },
      {
        name: 'Eldhraun lava field',
        description: 'The 1783 Laki-eruption lava, fully covered in 30 cm of pale-green moss. Pull-over on Route 1 — do NOT walk on the moss (regrowth = decades).',
        detour: 'On route',
      },
    ],
    spaOptions: [
      {
        name: 'Sundhöllin Reykjavík (back home)',
        type: 'Hot pot to recover from the drive',
        url: 'https://reykjavik.is/stadir/sundhollin',
        note: 'A long-day classic — 30 min in a hot tub after 6h of driving fixes everyone. Open until 22:00.',
        price: '~1,330 ISK',
      },
    ],
    meals: [
      { type: 'breakfast', name: 'Hótel Vík breakfast buffet', vibe: 'casual', note: 'Included with the room. Eggs, smoked salmon, skyr, breads.', address: 'Klettsvegur 1' },
      { type: 'lunch', name: 'Skool Beans (Vík)', vibe: 'quick', note: 'Yellow school-bus café on Vík\'s main road, ~5 min walk from Hotel Vík. Sandwich + espresso, fast turn after the ice cave so the group can roll east on time.', url: 'https://www.facebook.com/skoolbeans', address: 'Víkurbraut, Vík' },
      { type: 'lunch', name: 'Suður-Vík Soup Company (lunch service)', vibe: 'quick', note: 'Lamb soup + bread, comforting and fast. Same kitchen as last night\'s dinner.', address: 'Suðurvíkurvegur 1, Vík', alt: true },
      { type: 'coffee', name: 'Systrakaffi, Kirkjubæjarklaustur', vibe: 'quick', note: 'Cake + drip coffee in a 1960s village café. Stop on the way home.', url: 'https://www.systrakaffi.is', address: 'Klausturvegur 13' },
      { type: 'dinner', name: 'Skál! Reykjavík (Hlemmur Mathöll)', vibe: 'casual', note: 'PRIMARY pick after the long drive: natural wines + small plates in the food hall. Walk-in, fast turnaround, kitchen open till 22:00. Eat by 21:30 so everyone\'s in bed by midnight before the Snæfellsnes 08:30 departure.', url: 'https://skalrvk.com', phone: '+354 775 2299', address: 'Laugavegur 107' },
      { type: 'dinner', name: 'Sumac Grill + Drinks', vibe: 'casual', note: 'Middle-Eastern-Nordic on Laugavegur 28. Lamb shawarma, za\'atar flatbread, mezze. Same group as ÓX, lively room.', url: 'https://sumac.is', phone: '+354 537 9900', address: 'Laugavegur 28', alt: true },
      { type: 'dinner', name: 'Kastrup', vibe: 'casual', note: 'Modern Nordic-Danish bistro on Hverfisgata 6. Locals\' weeknight pick — good if Skál! looks too chaotic.', url: 'https://kastrup.is', phone: '+354 551 0011', address: 'Hverfisgata 6', alt: true },
    ],
    highlights: ['★ Katla Ice Cave Fast Track tour (3 of 5) at 09:00 from Vík', 'Slow Vík morning for the 2 friends staying behind', 'Fjaðrárgljúfur canyon (photo list 1.8)', 'Eldhraun moss-lava drive-by', 'Back at B2 by ~19:05, relaxed dinner'],
    mustDo: ['Pre-book the Katlatrack Fast Track ice cave tour for 09:00 (3 people)', 'The 2 stay-behinds leave bags at reception after the 11:00 checkout', 'Walk the full Fjaðrárgljúfur top-rim trail', 'Stop at Eldhraun for the moss-lava photo'],
    tips: [
      '★ ICE CAVE: meeting point is OB gas station, Austurvegur 16 — 5 min walk from Hotel Vík. The 3 cave-goers walk over at 08:30 for the 09:00 Fast Track tour. Wear waterproof layers + sturdy boots; helmet + crampons provided.',
      'Group split: 3 do the 09:00 Katla Fast Track, 2 do a slow morning in Vík. Standard checkout is 11:00 — the stay-behinds leave bags at reception, walk the church + beach, and meet the cave crew back at the hotel ~11:30 to load up and roll east.',
      'For the 2 staying behind: walk up to Vík í Mýrdalskirkja (red-roof church on the hill) for the village + Reynisdrangar view, Skool Beans espresso, walk the black beach right outside the hotel. Pack the car so you can leave immediately when the 3 return.',
      'Tour is 2.5h door-to-door, ~29,900 ISK pp. Year-round operation, confirmed for June.',
      'Eldhraun moss: pull over for the photo, do NOT walk on the moss — regrowth takes decades.',
      'Fjaðrárgljúfur: stay on marked paths — closed in 2019 from erosion damage.',
      'Total day: ~11h door-to-door. The 09:00 Fast Track cave means Reykjavík arrival ~19:05 and a relaxed dinner at Skál! — much easier than the old 10:30 slot that landed you back at 20:45.',
      '★ JÖKULSÁRLÓN NOTE: most expert 7-8 day Iceland itineraries push 2h further east to Jökulsárlón glacier lagoon + Diamond Beach + Skaftafell. We are deliberately skipping these to keep the kayak (Day 2) + Snæfellsnes (Day 6) + whale watching (Day 7) + Sky Lagoon balance, and to avoid a brutal back-to-back Vík + Höfn double-overnight. The Katla ice cave + Fjaðrárgljúfur on this day stand in for the eastern glacier-lagoon experience. If anyone in the group is dying to see Jökulsárlón, the only way is to add a Höfn overnight (would cost the Reykjanes day or one Reykjavík day).',
    ],
    bookings: [
      { item: '★ Katla Ice Cave Fast Track tour (Katlatrack) — Thu Jun 11 · 09:00 · 3 people', url: 'https://katlatrack.is', status: 'urgent', note: 'Vík must-do for 3 of 5. The 09:00 Fast Track tour, 2.5h, ~29,900 ISK pp. Book 2-4 weeks ahead. Meeting point: OB gas station, Austurvegur 16, Vík.' },
      { item: 'Hotel Vík — leave bags at reception after 11:00 checkout', url: 'https://hotelvik.is', phone: '+354 487 1480', status: 'todo', note: 'With the 09:00 cave tour ending ~11:30, the old ~13:00 late checkout is no longer needed. The 2 stay-behinds check out at 11:00 and leave bags at reception while they walk the church + beach.' },
      { item: 'Skál! or Sumac dinner', url: 'https://skalrvk.com', status: 'todo' },
    ],
  },

  // ─── DAY 6 ───────────────────────────────────────────────────────────────
  {
    day: 6,
    date: 'June 12 — Friday',
    title: 'Snæfellsnes Day Trip',
    subtitle: 'Kirkjufell, Búðakirkja, the Snæfellsnes loop',
    location: 'Reykjavík → Snæfellsnes loop → Reykjavík',
    overnight: 'B2 Apartments, Reykjavík',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://images.unsplash.com/photo-1612456225451-b4f3eb98bb50?w=1600&q=80',
    drive: [
      { from: 'Reykjavík (B2)', to: 'Gerðuberg basalt cliffs', duration: '~1 hr 30', distance: '~90 km', route: 'Route 1 north under the (toll-free) Hvalfjörður tunnel → Route 54 west → short spur to Gerðuberg.' },
      { from: 'Gerðuberg basalt cliffs', to: 'Bjarnarfoss waterfall', duration: '~40 min', distance: '~55 km', route: 'Route 54 west along the Snæfellsnes south coast.', notes: 'Tall waterfall visible from the Route 54 pull-over near Búðir — 5 min for a photo before the church.' },
      { from: 'Bjarnarfoss waterfall', to: 'Búðakirkja', duration: '~5 min', distance: '~5 km' },
      { from: 'Búðakirkja', to: 'Hotel Búðir (lunch)', duration: '~1 min walk', distance: '~200 m', notes: 'Hotel Búðir is right next to the black church. Walk over, no need to move the car.' },
      { from: 'Hotel Búðir', to: 'Hellnar', duration: '~15 min', distance: '~12 km' },
      { from: 'Hellnar', to: 'Arnarstapi', duration: '~5 min', distance: '~3 km' },
      { from: 'Arnarstapi', to: 'Vatnshellir lava cave', duration: '~15 min', distance: '~10 km', route: 'Route 574 west into Snæfellsjökull NP', notes: 'Cave parking is on Route 574, signed.' },
      { from: 'Vatnshellir lava cave', to: 'Djúpalónssandur + Lóndrangar', duration: '~10 min', distance: '~8 km' },
      { from: 'Djúpalónssandur + Lóndrangar', to: 'Saxhóll crater', duration: '~10 min', distance: '~8 km', route: 'Route 574 north', notes: 'Volcanic crater with metal stairs to the rim — 15 min round-trip, 360° view of lava field + sea + Snæfellsjökull.' },
      { from: 'Saxhóll crater', to: 'Kirkjufell + Kirkjufellsfoss', duration: '~35 min', distance: '~35 km', route: 'Route 574 north → Route 54 east' },
      { from: 'Kirkjufell + Kirkjufellsfoss', to: 'Reykjavík (B2)', duration: '~2 hr 15', distance: '~175 km', route: 'Route 54 east → Route 1 south' },
    ],
    totalDriveTime: '~6 hr driving · ~13 hr door-to-door · lunch: Hotel Búðir (refined) or Fjöruhúsið (casual)',
    schedule: [
      { time: '08:00', title: 'Coffee + slow start', type: 'rest', description: 'Reykjavík Roasters opens 08:00 — grab lattes + croissants to-go. No museum to race for today, so the day breathes from the start.', duration: '30 min' },
      { time: '08:30', title: 'Drive Reykjavík → Gerðuberg basalt cliffs', type: 'drive', description: '~1h30 north under the (toll-free) Hvalfjörður tunnel, then Route 54 west past Borgarnes, then a short spur to Gerðuberg.', duration: '90 min' },
      { time: '10:00', title: 'Gerðuberg basalt cliffs', type: 'photo', description: '500m wall of perfectly hexagonal basalt columns, ~14m tall. 1 km flat walk along the base. Hardly any tourists. Easy win.', highlight: true, duration: '30 min' },
      { time: '10:30', title: 'Drive to Bjarnarfoss', type: 'drive', description: '~40 min west on Route 54 along the Snæfellsnes south coast.', duration: '40 min' },
      { time: '11:10', title: 'Bjarnarfoss waterfall (roadside)', type: 'photo', description: 'Tall multi-tier waterfall pouring off the cliff above Búðir. View from the Route 54 pull-over, no climb needed. 10 min.', duration: '10 min' },
      { time: '11:20', title: 'Drive to Búðakirkja', type: 'drive', description: '5 min further west.', duration: '5 min' },
      { time: '11:25', title: 'Búðakirkja (the black church)', type: 'photo', description: 'Tiny black timber church alone in a lava field. Iconic vertical shot.', highlight: true, duration: '20 min' },
      { time: '11:45', title: 'Walk to Hotel Búðir', type: 'rest', description: '200m walk over the lava field from the church. No need to move the car.', duration: '5 min' },
      { time: '11:50', title: '★ Lunch at Hotel Búðir', type: 'food', description: 'Refined Icelandic lunch in the historic Búðir hotel dining room (call +354 435 6700 to book — small room). Views over the lava field + Snæfellsjökull. À la carte or set menu. Book ahead, especially Fridays. The right pick for demanding guests.', url: 'https://www.hotelbudir.is', highlight: true, duration: '90 min' },
      { time: '13:20', title: 'Drive to Hellnar/Arnarstapi', type: 'drive', description: '~20 min west on Route 54 → 574.', duration: '20 min' },
      { time: '13:40', title: 'Arnarstapi cliff walk', type: 'sight', description: 'Walk out to Gatklettur sea arch + back. The full Hellnar–Arnarstapi loop is 2.5 km if anyone wants to extend.', highlight: true, duration: '40 min' },
      { time: '14:20', title: 'Drive to Vatnshellir', type: 'drive', description: '~15 min west on Route 574 to the lava-cave parking inside Snæfellsjökull NP.', duration: '15 min' },
      { time: '14:35', title: 'Stretch + Snæfellsjökull NP visitor area', type: 'rest', description: '25 min buffer before the 15:00 cave check-in. Look out at the glacier dome.', duration: '25 min' },
      { time: '15:00', title: '★ Vatnshellir lava cave guided tour', type: 'activity', description: '8,000-year-old lava tube inside Snæfellsjökull NP. 35–45 min guided descent with helmet + headlamp (provided). 200 metal steps down. Cold inside (~5°C) — bring a layer. Hourly slots, book the 15:00 ahead.', url: 'https://www.summitguides.is/vatnshellir-cave', highlight: true, duration: '45 min' },
      { time: '15:45', title: 'Drive to Djúpalónssandur', type: 'drive', description: '~10 min west on Route 574.', duration: '10 min' },
      { time: '15:55', title: 'Djúpalónssandur + Lóndrangar', type: 'sight', description: 'Black pebble beach with Viking strength stones (lift size 0 to 155kg). Then Lóndrangar basalt pinnacles — a known puffin nesting cliff in June, bring zoom if you want a chance at one.', highlight: true, duration: '50 min' },
      { time: '16:45', title: 'Drive to Saxhóll crater', type: 'drive', description: '~10 min north on Route 574.', duration: '10 min' },
      { time: '16:55', title: 'Saxhóll crater', type: 'photo', description: 'Volcanic crater on Route 574 with metal stairs to the rim. 15 min round-trip. 360° view: lava field + sea + Snæfellsjökull glacier. Easy detour.', duration: '20 min' },
      { time: '17:15', title: 'Drive to Kirkjufell', type: 'drive', description: '~35 min north on Route 574 then east on Route 54, the scenic north-coast road.', duration: '35 min' },
      { time: '17:50', title: 'Kirkjufell + Kirkjufellsfoss', type: 'photo', description: 'The most photographed mountain in Iceland (photo list 1.9). Park near the falls, walk the 5-min path. Mountain is 1.5 km from the falls. Stay longer if the group wants to chase 22:00 golden hour, but that pushes dinner late.', highlight: true, duration: '75 min' },
      { time: '19:05', title: 'Drive back to Reykjavík', type: 'drive', description: '~2h15. Sunset light hits the Snæfellsnes road around 22:00 — stop for the side-of-road shot anywhere it grabs you.', duration: '135 min' },
      { time: '21:30', title: 'Late dinner at Kastrup', type: 'food', description: 'Modern Nordic-Danish bistro on Hverfisgata 6 — locals\' weeknight room, kitchen runs till 22:30, calm enough for a 5-top after a 13-hour day. Book a 21:30 slot ahead. Whale watch is 09:00 tomorrow — wrap by 23:00.', url: 'https://kastrup.is' },
    ],
    photoSpots: [
      {
        name: 'Kirkjufell + Kirkjufellsfoss (1.9)',
        description: 'Pyramidal mountain with the small waterfall in foreground. The classic Iceland shot.',
        detour: 'On route',
        bestTime: 'Late afternoon side-light or 22:00 golden hour',
      },
      {
        name: 'Búðakirkja',
        description: 'Black-painted timber church alone in lava. Vertical or wide-and-low for the dramatic horizon.',
        detour: 'On route',
      },
      {
        name: 'Lóndrangar basalt pinnacles + puffins',
        description: '75m volcanic plugs rising from the sea cliff. The grassy clifftop is a known puffin nesting site in June — bring a zoom lens, scan the cliff face.',
        detour: 'On route',
        bestTime: 'Mid-late afternoon side light on the pinnacles',
      },
      {
        name: 'Snæfellsjökull glacier-volcano (in the distance)',
        description: 'The glacier-capped stratovolcano at the western tip of Snæfellsnes — Jules Verne\'s "Journey to the Center of the Earth" volcano. Visible from much of the peninsula loop. The "scenic" glacier of the trip after Katla on Day 5.',
        detour: 'On route — visible from Búðakirkja, Hellnar, and Djúpalónssandur',
        bestTime: 'Clear-air afternoon for the white dome',
      },
      {
        name: 'Arnarstapi Gatklettur arch',
        description: 'Sea arch on the coastal walk. Best framed from above — birds nesting nearby.',
        detour: 'On route',
      },
    ],
    groceryStops: [
      { name: 'Bónus Borgarnes', address: 'Egilsgata 6, 310 Borgarnes', hours: 'Daily 11–18', note: 'Top up on the way out. Bring sandwiches for the peninsula.' },
    ],
    meals: [
      { type: 'breakfast', name: 'Reykjavík Roasters to-go', vibe: 'quick', note: 'Lattes + croissants for the road.' },
      { type: 'lunch', name: '★ Hotel Búðir restaurant', vibe: 'fine', note: 'Refined Icelandic lunch in the historic Búðir hotel dining room. Views over the lava field + Snæfellsjökull. Book ahead — small dining room. Right next to Búðakirkja (200m walk).', url: 'https://www.hotelbudir.is', phone: '+354 435 6700', address: 'Búðir, 356 Snæfellsbær' },
      { type: 'lunch', name: 'Fjöruhúsið Café, Hellnar', vibe: 'casual', note: 'Cliffside café between Hellnar and Arnarstapi. Cake, fish soup, ocean panorama. The cosier alt to Hotel Búðir — walk-in friendly, less formal.', url: 'https://www.fjoruhusid.is', address: 'Hellnar, 360 Snæfellsbær', alt: true },
      { type: 'lunch', name: 'Bjargarsteinn Mathús, Grundarfjörður', vibe: 'fine', note: 'Right at the foot of Kirkjufell. Tasting-style local seafood. Reservation only.', url: 'https://bjargarsteinn.is', phone: '+354 438 6770', alt: true },
      { type: 'dinner', name: 'Kastrup', vibe: 'casual', note: 'PRIMARY for Friday after the Snæfellsnes loop. Modern Nordic-Danish bistro on Hverfisgata 6, kitchen till 22:30. Calmer + faster than Snaps — better choice when whale watch is at 09:00 the next morning. Book a 21:30 slot.', url: 'https://kastrup.is', phone: '+354 551 0011', address: 'Hverfisgata 6' },
      { type: 'dinner', name: 'Sumac Grill + Drinks', vibe: 'casual', note: 'Middle-Eastern-Nordic on Laugavegur 28. Same group as OX (upstairs).', url: 'https://sumac.is', phone: '+354 537 9900', address: 'Laugavegur 28', alt: true },
      { type: 'dinner', name: 'Snaps Bistro', vibe: 'casual', note: 'Moved to Day 7 farewell options — Friday night Snaps fills up + the room runs late, not ideal before 09:00 whale watch. Available here only if Kastrup + Sumac are both booked.', url: 'https://snapsbistro.is', phone: '+354 511 6677', address: 'Þórsgata 1', alt: true },
    ],
    highlights: ['Gerðuberg hexagonal basalt cliffs', 'Búðakirkja black church', '★ Refined lunch at Hotel Búðir', 'Arnarstapi cliff walk', '★ Vatnshellir lava cave (15:00 slot)', 'Lóndrangar basalt pinnacles + puffins', 'Kirkjufell + Kirkjufellsfoss'],
    mustDo: ['Walk Gerðuberg base for the column shot', 'Book Hotel Búðir lunch ahead — small dining room', 'Vatnshellir cave tour — book the 15:00 slot', 'Lift the Viking strength stones at Djúpalónssandur', 'Scan Lóndrangar for puffins', 'Kirkjufell + Kirkjufellsfoss photo'],
    tips: [
      'Settlement Center + Ytri Tunga seal beach were cut to ease the pace — saves ~2 hours, lets you leave 1h later and lunch at proper Iceland time. The Saga Museum on Day 7 covers the same Viking territory.',
      'Hvalfjörður tunnel: toll-free since September 2018. No payment needed, just drive through.',
      'Snæfellsnes weather changes in 15 min — bring layers + a wind shell.',
      'Friday dinners: Kastrup, Sumac, Snaps all fill up. Book Kastrup Day 4 morning if you haven\'t already.',
      'Saturday whale watch is 09:00 — wrap dinner by 23:00 tonight. Kastrup is the faster turn vs Snaps for that reason.',
      'Sunset Jun 12 = ~23:55. Kirkjufell golden hour is 21:00–22:30 — stay longer if you want it, but dinner pushes to 22:00+.',
    ],
    bookings: [
      { item: '★ Vatnshellir Cave — Fri Jun 12 · 15:00', url: 'https://www.summitguides.is/vatnshellir-cave', status: 'urgent', note: '~5,500 ISK pp, 35-45 min guided tour. Hourly slots, book the 15:00 to match the schedule (Hotel Búðir lunch is 90 min).' },
      { item: '★ Hotel Búðir lunch — Fri Jun 12 · 11:50 · party of 5', url: 'https://www.hotelbudir.is', phone: '+354 435 6700', status: 'urgent', note: 'Refined Icelandic lunch in the Búðir hotel dining room. Small room, books out — call 1-2 weeks ahead.' },
      { item: 'Settlement Center tickets', url: 'https://landnam.is', status: 'todo', note: '~3,500 ISK pp, both exhibitions' },
      { item: '★ Kastrup Friday dinner — Fri Jun 12 · 21:30 · party of 5', url: 'https://kastrup.is', phone: '+354 551 0011', status: 'urgent', note: 'Reserve 1-2 weeks out. Kitchen open till 22:30 — wrap by 23:00 before the 09:00 whale watch.' },
    ],
  },

  // ─── DAY 7 ───────────────────────────────────────────────────────────────
  {
    day: 7,
    date: 'June 13 — Saturday',
    title: 'Reykjavík, Properly',
    subtitle: 'Hallgrímskirkja tower, Sky Lagoon, the farewell',
    location: 'Reykjavík',
    overnight: 'B2 Apartments, Reykjavík',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://images.unsplash.com/photo-1535486303025-8f1296ae5878?w=1600&q=80',
    drive: [],
    totalDriveTime: 'No driving — walk + one taxi to Sky Lagoon',
    schedule: [
      { time: '08:15', title: 'Coffee + pastries to-go at Reykjavík Roasters or Brauð & Co', type: 'food', description: 'Fast pickup. Eat on the walk down to the harbour — no sit-down brunch this morning, the boat leaves at 09:00. Bring layers, gloves, and a hat (it\'s cold on the water even in June).', url: 'https://reykjavikroasters.is', duration: '20 min' },
      { time: '08:40', title: 'Walk to Old Harbour (Ægisgarður 5)', type: 'drive', description: '15 min walk from B2 to the Elding terminal. Check in with the booking reference, get fitted with thermal coveralls if it\'s cold.', duration: '20 min' },
      { time: '09:00', title: '★ Elding Whale Watching — Classic tour', type: 'activity', description: 'Iceland\'s original whale-watching operator (since 1991). 3-3.5h on Faxaflói bay. Minke whales, white-beaked dolphins, harbor porpoises, occasional humpback in June. Sails right under Esja from the Old Harbour. Cheat-sheet "Top Experience" checked off.', url: 'https://elding.is/whale-watching-from-reykjavik/classic-whale-watching/', highlight: true, duration: '210 min' },
      { time: '12:30', title: 'Lunch — Café Loki OR La Poblana', type: 'food', description: 'Café Loki is by Hallgrímskirkja (rye sandwiches, rye ice cream, hákarl shots). La Poblana is on Hafnarstræti 1-3 (tacos, birria quesatacos). Pick by where the group lands after the boat.', url: 'https://www.loki.is', duration: '60 min' },
      { time: '13:30', title: 'Hallgrímskirkja interior + tower elevator', type: 'culture', description: '74m basalt-inspired church. Pay 1,500 ISK at the desk inside, take the elevator to the spire for the 360° city view. Photo list 1.1.', url: 'https://hallgrimskirkja.is', highlight: true, duration: '60 min' },
      { time: '14:30', title: 'Kolaportið flea market', type: 'culture', description: 'Saturday-only market at the old harbour (11-17). Lopapeysur, vintage cassettes, hákarl shots, Icelandic candy. Bring cash. 45 min.', url: 'https://www.kolaportid.is', duration: '45 min' },
      { time: '15:15', title: 'Pick one Viking museum — Saga or Settlement', type: 'culture', description: 'SAGA MUSEUM: lifelike wax dioramas of Viking sagas (Egil, Erik the Red, Leif Erikson). Grandagarður 2, ~1h, audio-guided. SETTLEMENT EXHIBITION 871±2: real Viking longhouse preserved underground in situ. Aðalstræti 16, ~1h. Pick the one closer to where the group is.', url: 'https://sagamuseum.is', highlight: true, duration: '60 min' },
      { time: '16:15', title: 'Skólavörðustígur + Bankastræti shopping', type: 'shop', description: 'Geysir (wool), Farmers & Friends, Kraum, 66°North. The trip\'s best souvenir window. 30 min express version.', duration: '30 min' },
      { time: '16:45', title: 'Back to B2 for change-of-clothes', type: 'rest', description: 'Reset before the lagoon. Bring swimsuit + flip-flops + a quick-dry towel.', duration: '15 min' },
      { time: '17:00', title: 'Sky Lagoon — sunset ritual', type: 'spa', description: 'Geothermal infinity pool over the Atlantic. 7-step Skjól ritual: sauna → cold plunge → sky pool. Book the 17:00 slot for both default and concert variant. ~2h.', url: 'https://skylagoon.com', highlight: true, duration: '120 min' },
      { time: '20:30', title: 'Farewell dinner — ÓX, Grillið or Fiskmarkaðurinn', type: 'food', description: 'DEFAULT path. See meal options below. ÓX is the splurge but books 2-3 months ahead. Pick one and confirm.', highlight: true },
      { time: '23:00', title: 'Last midnight-sun walk on the harbour', type: 'sight', description: 'Sunset is 23:55. Walk it. Sun Voyager (Sólfar) sculpture is 10 min along the seafront if anyone hasn\'t seen it yet.', duration: '45 min' },
      { time: '— OR —', title: '★ Concert variant: John Grant @ Eldborg, Harpa', type: 'culture', description: 'CONCERT PATH (replaces 17:00 + 20:30 above): Sky Lagoon 14:00-16:00 (book the early slot) → quick reset at B2 16:30 → early farewell dinner 17:00 (Grillið or Fiskmarkaðurinn — both serve early; ÓX won\'t do a 17:00 tasting) → walk to Harpa 19:30 → John Grant in the main Eldborg hall 20:00. American indie/folk legend who lives in Reykjavík (Queen of Denmark, Pale Green Ghosts, GMF). Books at en.harpa.is. Then drinks at Slippbarinn or Amma Don for the wrap.', url: 'https://en.harpa.is/calendar', highlight: true, duration: '120 min' },
    ],
    photoSpots: [
      {
        name: 'Hallgrímskirkja tower 360° (1.1)',
        description: 'The trip\'s landmark shot. Take the elevator to the 8th-floor viewpoint. Photo list item 1.1.',
        detour: 'On route',
        bestTime: 'Anytime; clearer at 10:30 before crowds',
      },
      {
        name: 'Sky Lagoon edge at sunset',
        description: 'Sky pool against Faxaflói bay + Snæfellsjökull on the horizon.',
        detour: 'On route',
        bestTime: '21:30–23:00',
        notes: 'Phone in a waterproof bag, not in the water. Lockers cost extra.',
      },
      {
        name: 'Skólavörðustígur rainbow street with Hallgrímskirkja behind',
        description: 'Vertical shot framing the rainbow + church spire.',
        detour: 'On route',
      },
      {
        name: 'Perlan glass dome (optional morning)',
        description: 'Geometric glass dome on Öskjuhlíð hill — exterior architecture + city panorama from the deck.',
        detour: '+1.5 hr if added',
        bestTime: 'Early morning when the light is soft on the dome',
      },
      {
        name: 'Sun Voyager / Sólfar (post-dinner walk)',
        description: 'If Day 3 didn\'t reach the seafront in time, the midnight-sun walk after farewell dinner does. 23:00–23:55 light is gold.',
        detour: 'On route',
      },
    ],
    spaOptions: [
      {
        name: 'Sky Lagoon — 7-step ritual',
        type: 'Geothermal infinity pool + ritual',
        url: 'https://skylagoon.com',
        note: 'Book the 7-step Skjól ritual (warm pool → cold plunge → sauna → cold mist → body scrub → steam → cold rinse → warm pool again). 2h experience.',
        price: '~12,990 ISK (Pure pass) / ~17,990 ISK (Sér with private changing)',
        address: 'Vesturvör 44–48, 200 Kópavogur',
      },
      {
        name: 'Sundhöllin Reykjavík (cheaper alt)',
        type: 'Local thermal pool',
        url: 'https://reykjavik.is/stadir/sundhollin',
        note: 'Backup if Sky Lagoon is sold out. Walk from B2.',
        price: '~1,330 ISK',
      },
    ],
    meals: [
      { type: 'breakfast', name: 'The Coocoo\'s Nest', vibe: 'casual', note: 'Saturday brunch at Grandi harbour. Eggs, sourdough, oat milk lattes. 15 min walk from B2.', url: 'https://www.coocoosnest.is', address: 'Grandagarður 23' },
      { type: 'breakfast', name: 'Perlan café (alt — if doing the museum)', vibe: 'quick', note: 'Café upstairs in the glass dome. Coffee + pastries with the city view. Combine with the museum.', url: 'https://perlan.is', address: 'Öskjuhlíð', alt: true },
      { type: 'lunch', name: 'Café Loki', vibe: 'quick', note: 'Right next to Hallgrímskirkja. Traditional rye sandwiches, rye-bread ice cream, hákarl shots if anyone is brave.', url: 'https://www.loki.is', address: 'Lokastígur 28' },
      { type: 'lunch', name: 'La Poblana (alt — if near Kolaportið)', vibe: 'casual', note: 'Best tacos in town — birria quesatacos. Right by the old harbour.', url: 'https://www.lapoblana.is', address: 'Hafnarstræti 1-3', alt: true },
      { type: 'dinner', name: 'ÓX', vibe: 'fine', note: 'The splurge option if anyone wants it. 11-seat tasting-counter above SUMAC, books 2-3 months ahead. €200-250 pp. Skip without guilt — there are easier picks below.', url: 'https://oxrestaurant.is', address: 'Laugavegur 28' },
      { type: 'dinner', name: 'Grillið', vibe: 'fine', note: 'The view. 8th floor of Hótel Saga, 360° panorama. Icelandic lamb, langoustine, polished service. €120–160 pp.', url: 'https://grillid.is', phone: '+354 525 9960', address: 'Hagatorg 1', alt: true },
      { type: 'dinner', name: 'Fiskmarkaðurinn (Fish Market)', vibe: 'fine', note: 'The energy. Asian-Icelandic fusion, robata grill, lava-stone room, livelier than ÓX. €100–140 pp.', url: 'https://fiskmarkadurinn.is', phone: '+354 578 8877', address: 'Aðalstræti 12', alt: true },
      { type: 'dinner', name: 'Matur og Drykkur', vibe: 'casual', note: 'The "one real Icelandic dinner" pick. Traditional Icelandic done seriously — cod\'s head, salted lamb, rye flatbread, smoked trout. In the Saga Museum building at Grandi harbour. The dish to order: salted cod with potatoes + butter sauce. Confirm hours when booking.', url: 'https://www.maturogdrykkur.is', phone: '+354 571 8877', address: 'Grandagarður 2, Grandi', alt: true },
      { type: 'dinner', name: 'Snaps Bistro', vibe: 'casual', note: 'Cosy French-Icelandic bistro on Þórsgata. Moules frites, steak tartare, the best roast chicken in town. Saturday night is packed — book 2 weeks out. Pairs well with the concert variant if you want a 17:00 slot before John Grant at Harpa.', url: 'https://snapsbistro.is', phone: '+354 511 6677', address: 'Þórsgata 1', alt: true },
      { type: 'snack', name: '★ KEX Hostel bar (drinks)', vibe: 'casual', note: 'Hostel + bar in an old biscuit factory on Skúlagata 28. Wood floors, vintage barbershop chairs, harbour view. Best for laid-back drinks + occasional live music. Walk-in. The local hang.', url: 'https://kexhostel.is', address: 'Skúlagata 28' },
    ],
    highlights: ['★ Elding whale watching (Old Harbour)', 'Hallgrímskirkja tower 360°', 'Kolaportið Saturday flea market', 'Saga Museum or Settlement Exhibition', 'Sky Lagoon at sunset', 'Farewell dinner', '★ Optional: John Grant @ Eldborg, Harpa, 20:00'],
    mustDo: ['Elding whale watch — book the 09:00 slot', 'Take the Hallgrímskirkja elevator', 'Sky Lagoon ritual at sunset', 'One last walk on the harbour at midnight'],
    tips: [
      '★ ELDING: dress warm. Even in June it\'s 8-12°C on the water with wind chill. Bring a windproof shell, gloves, beanie, sunglasses. Thermal coveralls available free at the dock. Meds for motion sickness if anyone is prone — they sell them at the kiosk.',
      'If Elding cancels for weather (rare in June), the booking reschedules free OR refunds. Backup: walk-in at Whales of Iceland in Grandi (life-size whale models, ~3,500 ISK pp).',
      '★ JOHN GRANT decision point: Saturday Jun 13, 20:00, Eldborg main hall. American indie-folk artist who lives in Iceland (Queen of Denmark, GMF). If going, swap the day: whale watch still 09:00, Sky Lagoon 14:00 slot, Grillið or Fiskmarkaðurinn at 17:00, concert at 20:00, drinks after at Slippbarinn or Amma Don. Book Harpa tickets NOW at en.harpa.is.',
      'ÓX is the splurge option but skippable — Grillið + Fiskmarkaðurinn are easier to book and fit either farewell-dinner timing.',
      'Sky Lagoon Saturday slots sell out — book 17:00 (default) or 14:00 (concert variant) ritual now.',
      'Kolaportið is cash-only at most stalls.',
      'Hallgrímskirkja tower closes 21:00 in summer.',
      'Pack the car loosely tonight — Day 8 is an early run to the airport.',
    ],
    bookings: [
      { item: '★ Elding Whale Watching — Sat Jun 13 · 09:00', url: 'https://elding.is/whale-watching-from-reykjavik/classic-whale-watching/', status: 'urgent', note: 'Classic 3-3.5h tour, ~12,990 ISK pp. Old Harbour, Ægisgarður 5. Book the 09:00 slot — it lines up with Sky Lagoon 17:00.' },
      { item: 'Whales of Iceland (rainy-day backup)', url: 'https://www.whalesoficeland.is/', status: 'todo', note: 'Walk-in. Use if Elding cancels for weather. Fiskislóð 23-25, Grandi. ~3,500 ISK pp.' },
      { item: '★ John Grant @ Eldborg, Harpa — Sat Jun 13 · 20:00', url: 'https://en.harpa.is/calendar', status: 'urgent', note: 'Concert option for the farewell night. Eldborg main hall (~1,700 seats), tickets via en.harpa.is. ~€55-95 pp. Book now.' },
      { item: 'ÓX farewell dinner (splurge — optional)', url: 'https://oxrestaurant.is', status: 'todo', note: 'Books 2-3 months ahead, only 11 seats, ~€200-250 pp. Skip without guilt — Grillið + Fiskmarkaðurinn are stronger fits for this group.' },
      { item: 'Grillið (farewell — works with concert variant)', url: 'https://grillid.is', phone: '+354 525 9960', status: 'urgent', note: 'Book a 17:00 slot if going to John Grant; 20:30 for the default path.' },
      { item: 'Fiskmarkaðurinn (farewell — works with concert variant)', url: 'https://fiskmarkadurinn.is', phone: '+354 578 8877', status: 'urgent', note: 'Same — early or late slot depending on path.' },
      { item: 'Snaps Bistro (farewell alt — easy 17:00 slot for concert variant)', url: 'https://snapsbistro.is', phone: '+354 511 6677', status: 'todo', note: 'Cosy French-Icelandic bistro. Saturday fills up, book 2 weeks out. Good fit if you want concert-variant timing without going full fine dining.' },
      { item: 'Sky Lagoon — Saturday ritual', url: 'https://skylagoon.com', status: 'urgent', note: 'Default: 17:00. Concert variant: 14:00 slot.' },
      { item: 'Hallgrímskirkja tower', url: 'https://hallgrimskirkja.is', status: 'todo', note: 'Pay at the desk, ~1,500 ISK' },
      { item: 'Saga Museum (Viking wax-figure museum)', url: 'https://sagamuseum.is', status: 'todo', note: 'Grandagarður 2, ~2,500 ISK pp. Saturday slot in the schedule above.' },
      { item: 'Settlement Exhibition 871±2 (alt to Saga Museum)', url: 'https://reykjavikcitymuseum.is/the-settlement-exhibition', status: 'todo', note: 'Aðalstræti 16. Real Viking longhouse preserved underground.' },
      { item: 'Perlan museum (optional morning)', url: 'https://perlan.is', status: 'todo', note: '~5,990 ISK pp. Buy online to skip the queue.' },
    ],
  },

  // ─── DAY 8 ───────────────────────────────────────────────────────────────
  {
    day: 8,
    date: 'June 14 — Sunday',
    title: 'Bless, Ísland',
    subtitle: 'Last skyr, last drive, home',
    location: 'Reykjavík → KEF Airport',
    overnight: '— Homebound to Brasil',
    accommodation: B2_APARTMENTS,
    heroImage: 'https://images.unsplash.com/photo-1655179144456-160a22e5ca85?w=1600&q=80',
    drive: [
      { from: 'B2 Apartments', to: 'Keflavík Airport (KEF)', duration: '~50 min', distance: '~50 km', route: 'Route 49 → 41', notes: 'Fill the tank at the N1 in Hafnarfjörður before returning the car (airport pumps charge a premium).' },
    ],
    totalDriveTime: '~50 min to airport',
    schedule: [
      { time: '~early', title: 'Pack + checkout B2', type: 'rest', description: 'Lock the keys in the apartment box per host instructions.' },
      { time: '~3 hr before flight', title: 'Drive to KEF', type: 'drive', description: 'Stop at N1 Hafnarfjörður to refuel.', duration: '50 min' },
      { time: 'Airport', title: 'Return car + check-in', type: 'rest', description: 'Allow 45 min for car return + walk to terminal. Then 2.5h for international check-in + Schengen.' },
    ],
    meals: [
      { type: 'lunch', name: 'Joe & The Juice / KEF airport café', vibe: 'quick', note: 'Last skyr. Last hot dog if anyone is into that.' },
    ],
    photoSpots: [],
    highlights: ['Return car at KEF', 'Duty-free Icelandic spirits + lava salt', 'Wheels up'],
    mustDo: ['Refuel before the airport', 'Arrive 2.5h before international flight', 'One last skyr at the gate'],
    tips: [
      'Departure tax included in the ticket — no surprises.',
      'Skip Blue Lagoon final stop — you\'ve done enough hot pots.',
      'Save space for one cinnamon roll from Brauð & Co at the airport branch.',
    ],
    bookings: [],
  },
]

// =============================================================================
//  NEXT TIME IN ICELAND — places we won't reach this June
// =============================================================================

export interface NextTimeSpot {
  name: string
  region: string
  category: string
  description: string
  why: string
  url?: string
}

export const nextTimeSpots: NextTimeSpot[] = [
  {
    name: 'Stuðlagil Canyon (1.2)',
    region: 'East Iceland',
    category: 'Canyon',
    description: 'Glacier-fed turquoise river slicing between hexagonal basalt columns. Iceland\'s most epic canyon — appeared on every photographer\'s 2018 feed.',
    why: 'It\'s in Jökuldalur, ~6h drive east of Vík. With Höfn dropped this trip, it\'s out of reach. Save it for a North + East Iceland loop.',
  },
  {
    name: 'Sigöldugljúfur (1.4)',
    region: 'Highlands',
    category: 'Canyon',
    description: 'The "Valley of Tears" — green-walled canyon with dozens of small waterfalls running off the rim into a turquoise river.',
    why: 'F26 + F-road only — 4WD essential, only open mid-June onward. Add to a future Highlands-focused trip with a Land Cruiser.',
  },
  {
    name: 'Stokksnes / Vestrahorn (1.5)',
    region: 'Southeast',
    category: 'Mountain + black-sand beach',
    description: 'Dramatic 454m horn rising directly from a black-sand mirror beach. Possibly the most photographed mountain in Iceland after Kirkjufell.',
    why: 'It\'s 15 min east of Höfn — and we dropped Höfn this trip. Still doable if you change your mind: 3h drive each way from Vík (long but possible).',
  },
  {
    name: 'Klifbrekku Waterfall (1.7)',
    region: 'East Fjords',
    category: 'Waterfall',
    description: '7-tiered waterfall in Mjóifjörður, one of the most beautiful and least-visited cascades in Iceland.',
    why: 'Far East Fjords, 7+ hr drive. Save for a slow ring-road trip.',
  },
  {
    name: 'Hengifoss (1.10)',
    region: 'East',
    category: 'Waterfall',
    description: '128m — Iceland\'s 3rd-tallest waterfall, with red basalt layers in the cliff face. 5 km hike round trip.',
    why: 'Near Egilsstaðir, ~7h drive. Pair with Stuðlagil on a future East loop.',
  },
  {
    name: 'Jökulsárlón Glacier Lagoon (1.11)',
    region: 'Southeast (Höfn corridor)',
    category: 'Glacier lagoon',
    description: 'Icebergs calving from Breiðamerkurjökull (a tongue of Vatnajökull) into a tidal lagoon. Zodiac and amphibious-boat tours weave between the floating bergs. Iceland\'s deepest lake, ~250m, formed since 1934 as the glacier retreated.',
    why: 'Dropped this trip. From Vík it\'s ~2h15 each way — only viable with a 2nd Vík night, which wasn\'t available. Next time: 2-3 nights in the Höfn corridor.',
  },
  {
    name: 'Diamond Beach',
    region: 'Southeast (Höfn corridor)',
    category: 'Beach',
    description: 'The black-sand beach directly across Route 1 from Jökulsárlón. Icebergs from the lagoon drift out, get tossed by the surf, and wash back up on the black sand glittering like crystal. Iceland\'s most photographed beach scene.',
    why: 'Same corridor as Jökulsárlón — visit them together as a pair. Out of reach this trip without a Höfn overnight.',
  },
  {
    name: 'Fjallsárlón',
    region: 'Southeast (Höfn corridor)',
    category: 'Glacier lagoon',
    description: 'Smaller glacier lagoon 10 min south of Jökulsárlón, fed by Fjallsjökull. Way fewer tourists, calmer water, often more dramatic light. Walk down to the lagoon edge.',
    why: 'Same drive corridor as Jökulsárlón. Pair them.',
  },
  {
    name: 'Skaftafell + Svartifoss',
    region: 'Southeast (Höfn corridor)',
    category: 'National Park / Waterfall',
    description: 'Vatnajökull National Park\'s western entry. Svartifoss (the basalt-column waterfall that inspired Hallgrímskirkja\'s architecture) is a 1.8 km uphill hike from the visitor centre. Multiple glacier viewpoints + Svínafellsjökull glacier hike trailhead.',
    why: '~2h east of Vík. Was floated as a Day 5 add-on, then dropped to keep the day under 5h driving.',
  },
  {
    name: 'Svínafellsjökull glacier hike',
    region: 'Southeast (Höfn corridor)',
    category: 'Glacier walk',
    description: 'Guided 2.5-3h walk on the ice — crampons + axe + helmet provided. Cracked blue crevasses, moulin pits, stunning. Operators: Icelandic Mountain Guides, Glacier Guides. Same trailhead as Skaftafell.',
    why: 'Needs the Höfn-corridor day we dropped. Sólheimajökull viewpoint on Day 4 is the closest substitute this trip.',
    url: 'https://mountainguides.is',
  },
  {
    name: 'Höfn í Hornafirði (langoustine capital)',
    region: 'Southeast',
    category: 'Town + food',
    description: 'Iceland\'s langoustine capital — Pakkhús, Otto Matur & Drykkur, Humarhöfnin, all serving cracked langoustine in butter that\'s caught in the harbour 3 hours earlier. Annual Humarhátíð (langoustine festival) usually late June. The eastern harbour town with mountain backdrop.',
    why: '~4.5h drive each way from Reykjavík — needs 2 nights to do well. Next time, sleep at Hótel Höfn or a Stokksnes-area guesthouse.',
  },
  {
    name: 'Hoffellsjökull glacier + Vatnajökull edge',
    region: 'Southeast',
    category: 'Glacier',
    description: 'The Vatnajökull tongue closest to Höfn — easier to reach than Skaftafell, less crowded. Park at the lagoon, walk to the moraine edge.',
    why: 'Höfn-corridor day we dropped.',
  },
  {
    name: 'Hvannadalshnjúkur (Iceland\'s highest peak, 2,110m)',
    region: 'Southeast (Vatnajökull)',
    category: 'Peak / glacier climb',
    description: 'The summit of Iceland — guided climb, ~14-16h round trip, crampons + ropes. For a future trip when "summited Iceland\'s highest" is on the bucket list.',
    why: 'A trip-by-itself kind of climb. Needs proper logistics and 2 nights at minimum.',
  },
  {
    name: 'Hornbjarg (1.12)',
    region: 'Westfjords (Hornstrandir)',
    category: 'Cliffs / hike',
    description: 'Iceland\'s most dramatic sea cliffs — 534m vertical faces in the abandoned Hornstrandir nature reserve.',
    why: 'Boat in only, multi-day hike, no infrastructure. Needs its own dedicated trip with a guide.',
  },
  {
    name: 'Mælifell (1.13)',
    region: 'Highlands',
    category: 'Volcano',
    description: 'Pyramidal green moss-covered cone rising from black volcanic sand in Mýrdalssandur. Looks like a Pixar render.',
    why: 'F210 only, super-jeep + river crossings. Distant view possible from the Mælifellssandur road area but the F210 itself is no.',
  },
  {
    name: 'Iconic A-frame (1.14) — confirm location',
    region: 'TBD',
    category: 'Photospot',
    description: 'Several "A-frame" structures are floated as photo spots: the Hvítárnes Highlands cabin (oldest tourist cabin in Iceland, F-road only), Búðir-area A-frame, or one of the modern A-frame Airbnbs. Tell me which one you meant.',
    why: 'Need to confirm which A-frame you have in mind before scheduling.',
  },
  {
    name: 'Elliðaey "world\'s loneliest house" (1.15)',
    region: 'Vestmannaeyjar',
    category: 'Island',
    description: 'The famous solo cabin on a green isolated island — a Vestmannaeyjar Hunting Association lodge, viewable from boat tours.',
    why: 'Only reached by chartered boat from Heimaey. The Heimaey ferry from Landeyjahöfn is doable but adds a full day; cut from this trip to keep Vík + Snæfellsnes intact.',
  },
  {
    name: 'Landmannalaugar (1.17)',
    region: 'Highlands',
    category: 'Riolite mountains + hot pool',
    description: 'Rainbow-coloured riolite mountains, sulphur-wave hikes (Brennisteinsalda, Bláhnúkur), and a natural warm pool at the campsite.',
    why: 'F208/F225 — open from mid-June, 4WD essential, river crossings. Best done as a 2-night Highlands focus trip.',
  },
  {
    name: '"Secret volcano" (Sundhnúksgígar fissure)',
    region: 'Reykjanes',
    category: 'Active eruption viewing',
    description: 'The recent volcanic activity near Grindavík — hikable to a viewpoint when authorities open access.',
    why: 'Status changes monthly. Re-check safetravel.is morning of Day 3. If accessible, it\'s a 1h round-trip add-on from your Reykjanes loop.',
    url: 'https://safetravel.is',
  },
]

// =============================================================================
//  EXPEDITION (EXPLORA-STYLE) ITINERARY — kept intact from prior version
//  for the "Explora expedition" toggle on the Itinerary page.
// =============================================================================

export const expeditionItinerary: DayPlan[] = [
  {
    day: 1,
    date: 'June 7 — Sunday',
    title: 'The Adventure Begins',
    subtitle: 'Briefing at Hotel Borg, Reykjavík',
    location: 'Reykjavík',
    overnight: 'Hotel Borg',
    heroImage: 'https://images.unsplash.com/photo-1604859289820-3a7eaee4d8b3?w=1600&q=80',
    highlights: ['Land at Keflavík (KEF), pick up a Toyota Land Cruiser 150 (or equivalent)', 'Drive 45 min to Reykjavík', 'Check in at Hotel Borg — Art Deco landmark on Austurvöllur square', 'Evening aperitif + expedition briefing at the hotel', 'First taste of Reykjavík before the road'],
    meals: [
      { type: 'lunch', name: 'Sandholt Bakery', vibe: 'quick', note: 'Sourdough, skyr pastries, strong coffee — recovery fuel after the flight.' },
      { type: 'dinner', name: 'Brút (Hotel Borg)', vibe: 'fine', note: 'Hotel Borg\'s ground-floor restaurant — fine Icelandic, convenient first night when the body is wrecked from travel. Reservation in your room key.' },
      { type: 'dinner', name: 'Apotek Kitchen + Bar', vibe: 'casual', note: 'One block from Borg, lively, creative cocktails + mocktails. The "step out and feel the city" alt.', alt: true },
    ],
    mustDo: ['Walk Austurvöllur square + the old harbour at golden hour', 'Briefing with the expedition team', 'Stock the car: snacks at Bónus, water bottles filled (tap = glacier)'],
    tips: ['Sunset is around 11:30pm — use it', 'Hotel Borg vs The Reykjavík EDITION: Borg = historic charm, EDITION = modern lux + Tides restaurant', 'Don\'t over-eat / over-drink tonight — Day 2 is a long drive south'],
    ticketsNeeded: ['Hotel Borg — book ahead (hotelborg.is)', 'Brút or Apotek dinner — reserve 1–2 weeks out'],
  },
  {
    day: 2,
    date: 'June 8 — Monday',
    title: 'The Þórsmörk Valley',
    subtitle: 'Hanging glaciers off Eyjafjallajökull',
    location: 'Þórsmörk',
    overnight: 'Hotel Skálakot',
    driveTime: '~2.5 hr Reykjavík → Hvolsvöllur, then shuttle into the valley',
    driveFrom: 'Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1490080886466-6ea0a78d4f01?w=1600&q=80',
    highlights: ['Drive south to Hvolsvöllur, park the Land Cruiser', 'Þórsmörk shuttle bus (Reykjavík Excursions or Trex) — handles the Krossá river crossings the Land Cruiser cannot', 'Hike the basin: Húsadalur or Langidalur loops, hanging glaciers off Eyjafjallajökull, Tindfjallajökull views', 'Late afternoon: shuttle back to Hvolsvöllur, drive 30 min to Hotel Skálakot'],
    meals: [
      { type: 'lunch', name: 'Volcano Huts café (Þórsmörk basecamp)', vibe: 'quick', note: 'Soup + sandwich at the basecamp — only food in the valley. Bring a snack backup.' },
      { type: 'dinner', name: 'Hotel Skálakot restaurant', vibe: 'fine', note: 'Horse-farm boutique south of the volcano belt. Set menu, lamb-forward, intimate dining room.' },
    ],
    mustDo: ['Þórsmörk basin walk (1–3 hr loop, easy)', 'Photo stop at Eyjafjallajökull viewpoint near Seljalandsfoss on the way in', 'Sunset over the south coast plain from Skálakot'],
    tips: ['Þórsmörk shuttle: 8:30am out, 5pm return — book ahead, don\'t miss the return', 'Bring layers: basin is sheltered but glaciers stay cold', 'Skálakot has only 14 rooms — book months out', 'No super-jeep needed: shuttle is €80–100 pp round trip vs €250–350 for a guided super-jeep'],
    ticketsNeeded: ['Þórsmörk shuttle bus — re.is or trex.is', 'Hotel Skálakot — book ahead (skalakot.com)'],
  },
  {
    day: 3,
    date: 'June 9 — Tuesday',
    title: 'Southern Highlands',
    subtitle: 'Mýrdalsjökull, Katla & the Mælifell country',
    location: 'South Highlands',
    overnight: 'Hotel Hrífunes',
    driveTime: '~4 hr scenic drive with stops',
    driveFrom: 'Skálakot / Hvolsvöllur',
    heroImage: 'https://images.unsplash.com/photo-1547059347-50ddc36d2e91?w=1600&q=80',
    highlights: ['Tindfjallajökull massif viewpoint', 'Mýrdalsjökull glacier — covers the active Katla volcano', 'Mælifell Mountain photo stop (the green pyramid in Mýrdalssandur — viewed from a distance, F210 needs a super-jeep)', 'Optional: 10 km hike (one way) to the remote Strútslaug Hot Springs for the strong hikers', 'Arrive Hotel Hrífunes for the night'],
    meals: [
      { type: 'lunch', name: 'Packed picnic from Skálakot or Klaustur', vibe: 'quick', note: 'Skálakot can pack you a lunch — eat with a glacier view. There\'s nothing in the Highlands.' },
      { type: 'dinner', name: 'Hotel Hrífunes restaurant', vibe: 'fine', note: '12-room family-run guesthouse, Icelandic ingredients, set menu. Cosy, intimate, the same hotel Explora uses on this leg.' },
    ],
    mustDo: ['Mælifell viewpoint (you do NOT need to drive F210 — distant view from F26 area is iconic enough)', 'Mýrdalsjökull glacier edge from a Vík super-jeep tour OR the Sólheimajökull foot from the Ring Road', 'Hot pot in the Hrífunes evening'],
    tips: ['Strútslaug hike: 10 km / 6.2 mi each way — only if the group is fit AND the weather is clear. Save it for a full day on a different trip if in doubt.', 'F210 itself (the road past Mælifell) is super-jeep-only — viewing from the gravel road is the move', 'No fuel deep in this region — top up at Vík or Klaustur'],
    ticketsNeeded: ['Hotel Hrífunes — book ahead (hrifuneshotel.is)', 'Mýrdalsjökull super-jeep tour from Vík — optional, book via icelandfromabove.is or arcanum.is'],
  },
  {
    day: 4,
    date: 'June 10 — Wednesday',
    title: 'Vatnajökull Adventure',
    subtitle: "Europe's largest ice cap",
    location: 'Skaftafell / Vatnajökull',
    overnight: 'Hotel Hrífunes',
    driveTime: '~2.5 hr each way to Skaftafell',
    driveFrom: 'Hrífunes',
    heroImage: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=1600&q=80',
    highlights: ['Drive east to Skaftafell, the gateway to Vatnajökull', 'Guided glacier hike on Svínafellsjökull or Falljökull (~2 hr, crampons + axe provided)', 'Svartifoss waterfall — basalt columns above the visitor center (~1.5 km easy hike)', 'Multiple glacier viewpoints + canyon walks', 'Return to Hrífunes for a second night'],
    meals: [
      { type: 'lunch', name: 'Skaftafell visitor café', vibe: 'quick', note: 'Soup, sandwiches, coffee. Limited but fine.' },
      { type: 'dinner', name: 'Hotel Hrífunes restaurant', vibe: 'fine', note: 'Same hotel, different menu. Set dinner.' },
    ],
    mustDo: ['Glacier hike with a certified guide (Icelandic Mountain Guides or Glacier Guides)', 'Svartifoss hike from the Skaftafell visitor center', 'Stop at Fjaðrárgljúfur canyon on the way back if time + light allow'],
    tips: ['Glacier hike: book the morning slot — afternoon weather can shut it down', 'Bring waterproof everything — glacier microclimate', 'Hrífunes has a small hot tub on-site — reward yourself'],
    ticketsNeeded: ['Glacier hike — Icelandic Mountain Guides (mountainguides.is) or Glacier Guides (glacierguides.is)', 'Skaftafell parking pass — pay at the visitor center'],
  },
  {
    day: 5,
    date: 'June 11 — Thursday',
    title: 'Into the Highlands',
    subtitle: 'Lakagígar, Langisjór & Fjallabak',
    location: 'Highlands',
    overnight: 'Highland Center (Hrauneyjar)',
    driveTime: '~3.5 hr with at least three scenic stops',
    driveFrom: 'Hrífunes',
    heroImage: 'https://images.unsplash.com/photo-1547059347-50ddc36d2e91?w=1600&q=80',
    highlights: ['Top up fuel + supplies in Kirkjubæjarklaustur', 'F206 north into Lakagígar — the 27 km volcanic fissure of 130 craters from the 1783 eruption that caused European famine', 'Tjarnargígur crater rim walk + Laki summit hike if you want elevation', 'Continue F235 to Langisjór — 25 km cobalt-blue glacial lake on the northern edge of Vatnajökull. Sveinstindur lookout for the panorama.', 'Drive to Hrauneyjar Highland Center for the night — most remote hotel in Iceland'],
    meals: [
      { type: 'lunch', name: 'Lakagígar visitor area picnic', vibe: 'quick', note: 'Pack everything from Klaustur — there is literally nothing here. Sit on a crater rim, eat the sandwich.' },
      { type: 'dinner', name: 'Highland Center restaurant', vibe: 'casual', note: 'Plain rooms, plain food, decent lamb stew. Only place to eat for 100km — you\'re not here for the menu.' },
    ],
    mustDo: ['Walk the Tjarnargígur crater rim trail (~1 hr loop)', 'Hike up Sveinstindur for the Langisjór panorama (~1.5 hr)', 'Stay out late: midnight light on the highland plateau is otherworldly'],
    tips: ['F-roads only — Toyota Land Cruiser essential, gravel insurance mandatory', 'No fuel between Klaustur and Hrauneyjar (~150 km) — top up at Klaustur N1', 'No mobile signal for big stretches — download offline maps + the road.is webcams in advance', 'Highland Center has shared bathrooms in the older wing — pay for the upgraded rooms if available'],
    ticketsNeeded: ['Highland Center / Hrauneyjar — book ahead (highlandcenter.is or hrauneyjar.is)', 'Lakagígar parking — pay at the visitor area kiosk'],
  },
  {
    day: 6,
    date: 'June 12 — Friday',
    title: 'Landmannalaugar',
    subtitle: 'Riolite mountains & the Fjallabak Reserve',
    location: 'Landmannalaugar / Fjallabak',
    overnight: 'Highland Center (Hrauneyjar)',
    driveTime: '~3 hr round-trip with three scenic stops',
    driveFrom: 'Hrauneyjar',
    heroImage: 'https://images.unsplash.com/photo-1612456225451-b4f3eb98bb50?w=1600&q=80',
    highlights: ['Drive south on F208 to Landmannalaugar — the heart of the Fjallabak Nature Reserve', 'Choose your hike (Explora\'s four options, easiest to hardest):  (1) Lava field loop, 2.5 km / 1.5 mi, 1 hr.  (2) Brennisteinsalda — the sulphur-wave mountain, 6.5 km, 2 hr.  (3) Bláhnúkur — the blue peak, 6 km, 2.5–3 hr.  (4) Skalli & Suðurnámur ridge, up to 20 km / 12.4 mi for the strong hikers.', 'Soak in the Landmannalaugar natural hot pool', 'Hot dog at the Mountain Mall (the famous green hut)', 'Frostastaðavatn lake lookout on the way back'],
    meals: [
      { type: 'lunch', name: 'Mountain Mall', vibe: 'quick', note: 'The green hut. Hot dogs, coffee, soup. The lunch you\'ll remember for the absurdity of being the only food for 50 km.' },
      { type: 'dinner', name: 'Highland Center restaurant', vibe: 'casual', note: 'Same as Day 5. Hearty after a hike.' },
    ],
    mustDo: ['Pick a hike that matches the group\'s real ability — be honest', 'Soak in the natural pool (warm, not hot) — bring flip flops + towel', 'Frostastaðavatn cobalt-blue lake lookout at sunset'],
    tips: ['F208/F225: 4WD essential, river crossings get higher in afternoon — go early', 'Pack layers: sun is brutal at altitude even when air is cold', 'No food in Landmannalaugar besides the Mountain Mall — bring snacks'],
    ticketsNeeded: ['Highland Center — second night (already booked from Day 5)', 'Landmannalaugar parking pass — pay at the campsite kiosk (~1000 ISK)'],
  },
  {
    day: 7,
    date: 'June 13 — Saturday',
    title: 'Valleys, Craters & Sky Lagoon',
    subtitle: 'Þjórsárdalur waterfalls + the farewell',
    location: 'Þjórsárdalur → Reykjavík',
    overnight: 'Hotel Borg (or back to your Reykjavík home)',
    driveTime: '~2.5 hr with three waterfall stops',
    driveFrom: 'Hrauneyjar',
    heroImage: 'https://images.unsplash.com/photo-1535486303025-8f1296ae5878?w=1600&q=80',
    highlights: ['Leave Hrauneyjar after breakfast', 'Two craters on the route back — Stóra-Eldborg / Hekla viewpoint + Kerið near Selfoss', 'Three Þjórsárdalur Valley waterfalls: Háifoss (122 m, second-highest in Iceland), Þjófafoss (next to Hekla), Hjálparfoss (twin basalt cascades)', 'Arrive Reykjavík mid-afternoon', 'Sky Lagoon ritual: sauna → cold plunge → sky pool, watch the sunset over the Atlantic', 'Farewell group dinner in Reykjavík'],
    meals: [
      { type: 'lunch', name: 'Friðheimar', vibe: 'casual', note: 'Greenhouse restaurant on the route back via Reykholt — tomato everything. Detour worth taking, book ahead.' },
      { type: 'dinner', name: 'OX', vibe: 'fine', note: 'The splurge. 11-seat chef\'s counter — books 2–3 months ahead. Tasting menu only.' },
      { type: 'dinner', name: 'Grillið', vibe: 'fine', note: 'The view alt. Top of Hótel Saga, 360° city + sea + Esja. Easier to book than OX.', alt: true },
      { type: 'dinner', name: 'Fiskmarkaðurinn', vibe: 'fine', note: 'The energy alt. Asian-Icelandic fusion, robata grill, livelier room — best for Saturday-night buzz.', alt: true },
    ],
    mustDo: ['Háifoss + Þjófafoss + Hjálparfoss in sequence — chase three waterfalls before lunch', 'Sky Lagoon ritual at sunset', 'Last midnight-sun walk on the harbour'],
    tips: ['Háifoss: gravel road, doable in a Land Cruiser, ~30 min off-route from Þjórsárdalur', 'Sky Lagoon: book the sunset slot in advance', 'Pack the car neatly tonight — Day 8 is an early airport run'],
    ticketsNeeded: ['Sky Lagoon — book online (skylagoon.com)', 'OX — book 2–3 months ahead (oxrestaurant.is)', 'Hotel Borg or Reykjavík home — last night booked', 'Friðheimar lunch — book ahead (fridheimar.is)'],
  },
  {
    day: 8,
    date: 'June 14 — Sunday',
    title: 'Bless, Ísland',
    subtitle: 'Departure',
    location: 'Reykjavík → KEF Airport',
    overnight: '— Homebound to Brasil',
    driveTime: '~45 min to airport',
    driveFrom: 'Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1655179144456-160a22e5ca85?w=1600&q=80',
    highlights: ['Return the Land Cruiser at KEF', 'Optional Blue Lagoon final soak on the way to KEF (~15 min off-route)', 'Duty-free Icelandic spirits + lava salt'],
    meals: [
      { type: 'lunch', name: 'Airport café', vibe: 'quick', note: 'Last skyr. Last hot dog if you\'re into that.' },
    ],
    mustDo: ['Return car fuel full', 'Arrive KEF at least 2.5 hrs before the flight'],
    tips: ['Blue Lagoon final stop: book ahead (bluelagoon.com), aim for the 9–10am slot', 'Departure tax included in most tickets'],
    ticketsNeeded: ['Blue Lagoon — book ahead if doing the pre-flight stop'],
  },
]
