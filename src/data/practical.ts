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
    { item: 'Swimsuit (2 ideally)', priority: 'essential', note: 'Sky Lagoon, hot pots, hot springs' },
    { item: 'Quick-dry towel', priority: 'essential' },
    { item: 'Comfortable walking shoes for city days', priority: 'high' },
    { item: 'One nice outfit for Dill / Grillmarkaðurinn', priority: 'high', note: 'Still casual by European standards' },
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

export const ticketsToBuy = [
  {
    name: 'Dill Restaurant — Farewell Dinner',
    location: 'Reykjavík',
    urgency: 'book-now',
    note: 'Iceland\'s only Michelin star. Books out 2–3 months ahead. June 13.',
    link: 'https://dillrestaurant.is',
    estimated: '~€150–200 pp with wine pairing',
  },
  {
    name: 'Silfra Snorkeling (between tectonic plates)',
    location: 'Þingvellir',
    urgency: 'book-now',
    note: 'June 8. Dry suit snorkeling in 2°C crystal clear water. Books weeks out.',
    link: 'https://dive.is',
    estimated: '~€150–180 pp',
  },
  {
    name: 'Sky Lagoon — Ritual Pass',
    location: 'Reykjavík',
    urgency: 'book-soon',
    note: 'June 13. Oceanside infinity pool + 7-step thermal ritual. Popular on weekends.',
    link: 'https://skylagoon.com',
    estimated: '~€75–90 pp',
  },
  {
    name: 'Jökulsárlón Zodiac Boat Tour',
    location: 'Glacier Lagoon',
    urgency: 'book-soon',
    note: 'June 10. 40-min tour among icebergs. Afternoon slots fill fast.',
    link: 'https://glacierlagoon.is',
    estimated: '~€80 pp',
  },
  {
    name: 'Svínafellsjökull Glacier Hike',
    location: 'Near Höfn',
    urgency: 'optional',
    note: 'June 10. 2hr guided walk on the glacier. Crampons provided.',
    link: 'https://mountainguides.is',
    estimated: '~€80–100 pp',
  },
  {
    name: 'Grillmarkaðurinn — Welcome Dinner',
    location: 'Reykjavík',
    urgency: 'book-soon',
    note: 'June 7 evening. Top restaurant, book at least 3–4 weeks ahead for a table of 5.',
    link: 'https://grillmarkadurinn.is',
    estimated: '~€70–100 pp',
  },
]

export const carRentalTips = [
  { tip: 'Book a large SUV (Toyota Land Cruiser or similar) — 5 people + luggage needs space', important: true },
  { tip: 'Get full gravel protection (SAAP) — F-roads and gravel roads are everywhere', important: true },
  { tip: 'No need for 4WD in June for the Ring Road, but nice to have for F-roads', important: false },
  { tip: 'Compare: Lagoon Car Rental, Northbound, Blue Car Rental — often cheaper than airport desks', important: true },
  { tip: 'Automatic transmission available — specify when booking', important: false },
  { tip: 'Pick up at KEF airport is easiest — many rental counters in the terminal', important: false },
  { tip: 'Fill petrol at Reykjavík before leaving city — it gets pricey and sparse outside', important: true },
  { tip: 'N1 and Orkan are the main petrol station chains — get the app for discounts', important: false },
]
