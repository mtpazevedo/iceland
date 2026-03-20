export interface DayPlan {
  day: number
  date: string
  title: string
  subtitle: string
  location: string
  overnight: string
  driveTime?: string
  driveFrom?: string
  heroImage: string
  highlights: string[]
  meals: { type: 'lunch' | 'dinner'; name: string; vibe: 'fine' | 'casual' | 'quick'; note: string }[]
  mustDo: string[]
  tips: string[]
  ticketsNeeded?: string[]
}

export const itinerary: DayPlan[] = [
  {
    day: 1,
    date: 'June 7 — Sunday',
    title: 'Velkomin í Ísland',
    subtitle: 'Welcome to the land of fire and ice',
    location: 'Reykjavík',
    overnight: 'Airbnb, Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1600&q=80',
    highlights: ['Arrive at Keflavík Airport (KEF)', 'Pick up rental car (Dacia Duster 4WD or similar)', 'Drive 45 min to Reykjavík', 'Check in & drop bags', 'First taste of the city'],
    meals: [
      { type: 'lunch', name: 'Sandholt Bakery', vibe: 'quick', note: 'Best bakery in Reykjavík — sourdough sandwiches, skyr pastries, strong coffee. Perfect after landing.' },
      { type: 'dinner', name: 'Grillmarkaðurinn', vibe: 'fine', note: 'The Market Restaurant — volcanic stone cooking, local lamb, char. Tereza will be in heaven. Good vegetarian options too.' },
    ],
    mustDo: ['Walk Laugavegur street', 'See Hallgrímskirkja from outside (save interior for later)', 'Golden hour at the old harbour'],
    tips: ['Sunset is around 11:30pm — you have ALL the time', 'Supermarket: Bónus (yellow pig sign) for snacks & road trip supplies', 'Fill the car — petrol is expensive outside the city'],
    ticketsNeeded: [],
  },
  {
    day: 2,
    date: 'June 8 — Monday',
    title: 'The Golden Circle',
    subtitle: 'Geysers, waterfalls & the oldest parliament on earth',
    location: 'Golden Circle',
    overnight: 'Airbnb, Reykjavík',
    driveTime: '~4–5 hrs driving total',
    driveFrom: 'Reykjavík loop',
    heroImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80',
    highlights: ['Þingvellir National Park — walk between tectonic plates', 'Geysir hot spring area — Strokkur erupts every 5–7 min', 'Gullfoss waterfall — double cascade into a canyon', 'Optional: Friðheimar tomato greenhouse lunch'],
    meals: [
      { type: 'lunch', name: 'Friðheimar', vibe: 'casual', note: 'Greenhouse restaurant inside a working tomato farm. Everything is tomato-based and somehow incredible. Book ahead — it fills up.' },
      { type: 'dinner', name: 'Apotek Kitchen + Bar', vibe: 'casual', note: 'Back in Reykjavík, inside a converted pharmacy. Creative cocktails (Marcella gets the mocktail menu — it\'s actually excellent here), good fish dishes, lively atmosphere.' },
    ],
    mustDo: ['Snorkeling at Silfra fissure (between tectonic plates — visibility 100m+)', 'Stand over the Eurasian and North American plates at Þingvellir'],
    tips: ['Silfra snorkeling MUST be booked weeks ahead — dry suit required', 'Geysir: stand to the side the wind is blowing, not behind', 'Gullfoss: bring a rain jacket, the spray soaks you'],
    ticketsNeeded: ['Silfra snorkeling — book via Dive.is', 'Þingvellir parking pass (pay on arrival)'],
  },
  {
    day: 3,
    date: 'June 9 — Tuesday',
    title: 'South Coast Run',
    subtitle: 'Black sand, waterfalls & the road to the end of the world',
    location: 'South Coast → Vík',
    overnight: 'Hótel Vík í Mýrdal, Vík (or Icelandair Hotel Vík)',
    driveTime: '~3 hrs Reykjavík → Vík',
    driveFrom: 'Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80',
    highlights: ['Seljalandsfoss — walk behind the waterfall', 'Skógafoss — 60m drop, rainbow in the mist, 527 steps to the top', 'Reynisfjara black sand beach — basalt columns, sea stacks, wild Atlantic waves', 'Arrive Vík — Iceland\'s southernmost village'],
    meals: [
      { type: 'lunch', name: 'Skógarfoss café / picnic', vibe: 'quick', note: 'Pack picnic supplies from Reykjavík — eat at the base of Skógarfoss waterfall. Iconic.' },
      { type: 'dinner', name: 'Halldórskaffi', vibe: 'casual', note: 'Cozy local restaurant in Vík. Lamb soup, fish of the day, Icelandic character. Biba will approve.' },
    ],
    mustDo: ['Climb the Skógafoss stairs for the top view', 'Walk Reynisfjara at sunset (midnight sun magic)', 'Photo stop at DC-3 plane wreck (on the way, near Sólheimasandur — 30 min flat walk)'],
    tips: ['Reynisfjara: NEVER turn your back to the ocean — sneaker waves are dangerous', 'Seljalandsfoss walk-behind is wet — waterproof everything', 'Vík is tiny — dinner early or book ahead'],
    ticketsNeeded: ['Sólheimasandur parking is free, plane wreck walk is free'],
  },
  {
    day: 4,
    date: 'June 10 — Wednesday',
    title: 'Glaciers & Diamond Beach',
    subtitle: 'Icebergs floating in a lagoon, diamonds on black sand',
    location: 'Vík → Jökulsárlón → Höfn',
    overnight: 'Hótel Höfn or Airbnb near Höfn',
    driveTime: '~2.5 hrs Vík → Jökulsárlón',
    driveFrom: 'Vík',
    heroImage: 'https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=1600&q=80',
    highlights: ['Jökulsárlón Glacier Lagoon — icebergs calving from Vatnajökull', 'Zodiac boat tour among the icebergs', 'Diamond Beach — ice chunks on black sand, look like crystal sculptures', 'Svínafellsjökull glacier hike (optional guided walk on the ice)'],
    meals: [
      { type: 'lunch', name: 'Jökulsárlón café kiosk', vibe: 'quick', note: 'Langoustine soup in a bread bowl. It\'s famous. It deserves the fame.' },
      { type: 'dinner', name: 'Pakkhús', vibe: 'fine', note: 'In Höfn, the langoustine capital of Iceland. This is the move. Tereza + fine dining + fresh langoustine = everyone wins.' },
    ],
    mustDo: ['Zodiac boat tour at Jökulsárlón — 45 min, absolutely worth it', 'Golden hour at Diamond Beach (10:30pm, completely golden light)'],
    tips: ['Zodiac tour: book ahead via Glacier Lagoon tours', 'Höfn is a 1.5 hr drive from Jökulsárlón — leave by 8pm', 'Pack layers — it\'s windy even in June near the glaciers'],
    ticketsNeeded: ['Zodiac boat tour — Glacier Lagoon (glacierlagoon.is)', 'Glacier hike if doing Svínafellsjökull — book via Icelandic Mountain Guides'],
  },
  {
    day: 5,
    date: 'June 11 — Thursday',
    title: 'Back Through the Highlands',
    subtitle: 'Waterfalls, lava fields & the road home',
    location: 'Höfn → Reykjavík',
    overnight: 'Airbnb, Reykjavík',
    driveTime: '~5 hrs with stops',
    driveFrom: 'Höfn',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    highlights: ['Fjaðrárgljúfur Canyon — Game of Thrones location, Bieber caused it to close once', 'Kirkjubæjarklaustur area lunch stop', 'Evening arrival Reykjavík', 'Thermal hot pot evening — Sundhöll or local hot pot'],
    meals: [
      { type: 'lunch', name: 'Systrakaffi, Kirkjubæjarklaustur', vibe: 'casual', note: 'Middle of nowhere but totally solid. Soup, sandwiches, warm vibes. Good stopping point.' },
      { type: 'dinner', name: 'Matur og Drykkur', vibe: 'fine', note: 'Traditional Icelandic recipes elevated. Cod head, hákarl (fermented shark — dare accepted?), skyr desserts. One of the most unique meals in Iceland.' },
    ],
    mustDo: ['Fjaðrárgljúfur Canyon hike (easy, 1.5km, insane views)', 'Evening hot pot session — Reykjavík locals\' therapy'],
    tips: ['Fjaðrárgljúfur: stay on marked paths — erosion closed it in 2019', 'Hot pots: bring flip flops & a towel'],
    ticketsNeeded: [],
  },
  {
    day: 6,
    date: 'June 12 — Friday',
    title: 'Snæfellsnes Day Trip',
    subtitle: 'The glacier that inspired Jules Verne',
    location: 'Reykjavík → Snæfellsnes → Reykjavík',
    overnight: 'Airbnb, Reykjavík',
    driveTime: '~2 hrs each way',
    driveFrom: 'Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1600&q=80',
    highlights: ['Snæfellsjökull glacier & volcano — Jules Verne\'s "Journey to the Center of the Earth"', 'Arnarstapi sea cliffs & arch', 'Djúpalónssandur pebble beach', 'Kirkjufell mountain — the most photographed in Iceland'],
    meals: [
      { type: 'lunch', name: 'Fjöruhúsið Café, Hellnar', vibe: 'casual', note: 'Cliffside café with ocean views. Cake, soup, coffee. Possibly the most scenic lunch spot in Iceland.' },
      { type: 'dinner', name: 'Skál! Reykjavík', vibe: 'casual', note: 'Natural wines, small plates, Nordic vibes, excellent music. This is Biba\'s night. One of the coolest atmospheres in the city.' },
    ],
    mustDo: ['Kirkjufell at golden light (goes all night)', 'Walk Arnarstapi coastal path', 'Lift the "strength stones" at Djúpalónssandur (Viking tradition, size 0 to 155kg)'],
    tips: ['Kirkjufell: the waterfall in front is Kirkjufellsfoss — 5 min walk from parking', 'Weather changes fast on Snæfellsnes — always bring a rain layer'],
    ticketsNeeded: [],
  },
  {
    day: 7,
    date: 'June 13 — Saturday',
    title: 'Reykjavík, Properly',
    subtitle: 'Culture, geothermal bliss & the farewell dinner',
    location: 'Reykjavík',
    overnight: 'Airbnb, Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1539768942893-daf3b3b98b3e?w=1600&q=80',
    highlights: ['Hallgrímskirkja interior + tower elevator (360° views)', 'Harpa Concert Hall architecture', 'The Settlement Exhibition (874 AD Viking longhouse)', 'Sky Lagoon — sunset ritual with the ocean view'],
    meals: [
      { type: 'lunch', name: 'Café Loki', vibe: 'quick', note: 'Right next to Hallgrímskirkja. Traditional Icelandic open-face sandwiches, rye bread ice cream, hákarl shots if you\'re brave. Very local, very good.' },
      { type: 'dinner', name: 'Dill Restaurant', vibe: 'fine', note: 'Iceland\'s only Michelin-starred restaurant. Nordic tasting menu, local ingredients, exceptional. This is the farewell dinner — Tereza\'s night. Book months ahead.' },
    ],
    mustDo: ['Sky Lagoon — oceanside geothermal pool, ritual: sauna → cold plunge → sky pool', 'Hallgrímskirkja tower for the city view', 'Kolaportið flea market (Saturday only!) for local finds', 'Last midnight sun walk on the harbour'],
    tips: ['Dill must be booked 2–3 months in advance — do this NOW', 'Sky Lagoon: book online, popular on Saturdays', 'Kolaportið: 11am–5pm Saturdays, bring cash'],
    ticketsNeeded: ['Dill Restaurant — book now (dillrestaurant.is)', 'Sky Lagoon — book online (skylagoon.com)', 'Hallgrímskirkja tower — pay on arrival (~1500 ISK)'],
  },
  {
    day: 8,
    date: 'June 14 — Sunday',
    title: 'Bless, Ísland',
    subtitle: 'Early departure & one last coffee',
    location: 'Reykjavík → KEF Airport',
    overnight: '— Homebound to Brasil',
    driveTime: '~45 min to airport',
    driveFrom: 'Reykjavík',
    heroImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80',
    highlights: ['Return rental car at KEF', 'Duty-free Icelandic spirits & lava salt', 'Depart Keflavík Airport'],
    meals: [
      { type: 'lunch', name: 'Dunkin\' Donuts or airport café', vibe: 'quick', note: 'It\'s departure day. No judgment.' },
    ],
    mustDo: ['Arrive KEF at least 2.5 hrs before departure', 'One last skyr at the airport'],
    tips: ['Return car fuel full — airports charge premium for refueling', 'Departure tax is included in most tickets — no surprises'],
    ticketsNeeded: [],
  },
]
