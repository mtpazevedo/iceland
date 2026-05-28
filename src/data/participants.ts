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

// Listed alphabetically.
export const participants: Participant[] = [
  {
    id: 'biba',
    name: 'Biba',
    emoji: '🏔️',
    photo: '/crew/tereza.jpg',
    tagline: 'Adventurous and stylish — the one you follow up the trail',
    vibe: ['Adventurous', 'Stylish', 'Up for any hike'],
    diningStyle: 'casual',
    drinker: true,
    funFact: 'Ridge hikes in the morning, perfect outfit by golden hour.',
    color: '#4a6741',
  },
  {
    id: 'flavia',
    name: 'Flavia',
    emoji: '🎵',
    photo: '/crew/krysse.jpg',
    tagline: 'History, music, curious — the one asking the questions',
    vibe: ['History buff', 'Music lover', 'Curious + cool'],
    diningStyle: 'casual',
    drinker: true,
    funFact: 'Will know more about the sagas than the museum guide by Day 6.',
    color: '#f0ebe0',
  },
  {
    id: 'krysse',
    name: 'Krysse',
    emoji: '🎨',
    photo: '/crew/flavia.jpg',
    tagline: 'The art girl — gallery in the day, speakeasy at night',
    vibe: ['Galleries + art', 'Speakeasy + cocktails', 'Easy-going partier'],
    diningStyle: 'both',
    drinker: true,
    funFact: 'Will know which Reykjavík opening is on tonight before the locals do.',
    color: '#a8d8b0',
  },
  {
    id: 'marcella',
    name: 'Marcella',
    emoji: '⚡',
    photo: '/crew/marcella.jpg',
    tagline: 'Fun, energetic, mocktail-stylish, never tired',
    vibe: ['Fun + energetic', 'Non-drinker', 'Stylish'],
    diningStyle: 'both',
    drinker: false,
    funFact: 'The reason the group is laughing in 90% of the photos.',
    color: '#d4cfc4',
  },
  {
    id: 'tereza',
    name: 'Tereza',
    emoji: '📸',
    photo: '/crew/biba.jpg',
    tagline: 'Photos and good food. That\'s the brief.',
    vibe: ['Photo-driven', 'Good food', 'Storyteller'],
    diningStyle: 'both',
    drinker: true,
    funFact: 'Has the eye. Will frame a black-sand beach better than the influencers will.',
    color: '#7eb8c4',
  },
]
