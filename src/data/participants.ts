export interface Participant {
  id: string
  name: string
  emoji: string
  photo: string
  tagline: string
  vibe: string[]
  diningStyle: 'fine' | 'casual' | 'both'
  drinker: boolean
  funFact: string
  color: string
}

export const participants: Participant[] = [
  {
    id: 'biba',
    name: 'Biba',
    emoji: '✨',
    photo: '/crew/tereza.jpg',
    tagline: 'If it\'s cool, she was into it before it was cool',
    vibe: ['Atmosphere hunter', 'Cool bars', 'Interesting everything'],
    diningStyle: 'casual',
    drinker: true,
    funFact: 'Her Reykjavík must-do list is longer than the itinerary.',
    color: '#4a6741',
  },
  {
    id: 'flavia',
    name: 'Flavia',
    emoji: '🏔️',
    photo: '/crew/krysse.jpg',
    tagline: 'Here for a good time, a great view, and all the laughs',
    vibe: ['Fun first', 'Always laughing', 'Up for anything'],
    diningStyle: 'casual',
    drinker: true,
    funFact: 'Will find a way to make any situation more fun. It\'s a gift.',
    color: '#f0ebe0',
  },
  {
    id: 'krysse',
    name: 'Krysse',
    emoji: '🌿',
    photo: '/crew/flavia.jpg',
    tagline: 'The adaptable one. Angel energy.',
    vibe: ['Easy-going', 'Up for anything', 'Probably also has opinions'],
    diningStyle: 'both',
    drinker: true,
    funFact: 'Will get along with the glacier AND the Michelin chef.',
    color: '#a8d8b0',
  },
  {
    id: 'marcella',
    name: 'Marcella',
    emoji: '☕',
    photo: '/crew/marcella.jpg',
    tagline: 'Sober, stylish, and will find the best café in every zip code',
    vibe: ['Non-drinker', 'Atmosphere lover', 'Probably knows the barista'],
    diningStyle: 'both',
    drinker: false,
    funFact: 'Her mocktail game is undefeated. Also: found a better coffee shop.',
    color: '#d4cfc4',
  },
  {
    id: 'tereza',
    name: 'Tereza',
    emoji: '🍽️',
    photo: '/crew/biba.jpg',
    tagline: 'She researched every Michelin star between KEF and Höfn',
    vibe: ['Fine dining', 'Wine connoisseur', 'Has opinions about menus'],
    diningStyle: 'fine',
    drinker: true,
    funFact: 'Will probably cry at the langoustine at Pakkhús. In a good way.',
    color: '#7eb8c4',
  },
]
