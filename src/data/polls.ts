export interface PollOption {
  id: string
  text: string
  emoji: string
  subtext?: string
}

export interface Poll {
  id: string
  question: string
  subtitle?: string
  options: PollOption[]
}

export const polls: Poll[] = [
  {
    id: 'first-night',
    question: 'First night in Reykjavík — what\'s the vibe?',
    subtitle: 'We just landed in Iceland. What happens next?',
    options: [
      { id: 'bar-crawl', emoji: '🍺', text: 'Bar crawl on Laugavegur', subtext: 'Hit the local craft beer bars, see where the night takes us' },
      { id: 'fancy-dinner', emoji: '🕯️', text: 'Welcome dinner at Grillmarkaðurinn', subtext: 'Volcanic stone grill, Icelandic lamb, proper welcome toast' },
      { id: 'airbnb-party', emoji: '🪩', text: 'Airbnb night — drinks, music, chaos', subtext: 'We\'re in Iceland!! Playlist on, snacks from Bónus, maybe some games' },
      { id: 'harbour-walk', emoji: '🌅', text: 'Sunset harbour walk + drinks after', subtext: 'The sun sets at midnight — walk the old harbour at golden hour' },
    ],
  },
  {
    id: 'hiking-energy',
    question: 'It\'s day 3, it\'s 7am, there\'s a 5km hike to a waterfall.',
    subtitle: 'What\'s your honest reaction?',
    options: [
      { id: 'lets-go', emoji: '🥾', text: 'Let\'s go. I\'m already in my boots.', subtext: 'First one at the trailhead, snacks packed, map downloaded' },
      { id: 'sure-but-coffee', emoji: '☕', text: 'Sure, but only after a real coffee', subtext: 'Non-negotiable. The waterfall will still be there in 20 minutes.' },
      { id: 'take-me-to-the-view', emoji: '🚗', text: 'I\'ll meet you at the viewpoint', subtext: 'Drove around, found the Instagram spot, arrived refreshed. You\'re welcome.' },
      { id: 'you-hike-ill-wait', emoji: '🛋️', text: 'You hike, I\'ll find the coffee shop', subtext: 'It\'s called division of labor. Someone needs to review the café.' },
    ],
  },
  {
    id: 'geothermal-pool',
    question: 'Sky Lagoon or Blue Lagoon?',
    subtitle: 'We can only do one. Choose wisely.',
    options: [
      { id: 'sky-lagoon', emoji: '🌊', text: 'Sky Lagoon', subtext: 'Oceanfront infinity pool, cold plunge ritual, locals\' pick, half the price' },
      { id: 'blue-lagoon', emoji: '💙', text: 'Blue Lagoon', subtext: 'The OG, milky blue silica water, face masks, full spa experience' },
    ],
  },
  {
    id: 'night-two-activity',
    question: 'Second evening in Reykjavík — pick one',
    subtitle: 'We\'re back from the Golden Circle. Now what?',
    options: [
      { id: 'concert', emoji: '🎸', text: 'Live music at a local venue', subtext: 'Iceland has insane live music culture — find something intimate' },
      { id: 'hot-pot', emoji: '♨️', text: 'Community hot pot + local gossip', subtext: 'Sundhöll or a neighbourhood pool — peak local Reykjavík experience' },
      { id: 'dinner-and-wine', emoji: '🍷', text: 'Long dinner at Apotek', subtext: 'Converted pharmacy, cocktails, good food, no rush' },
      { id: 'northern-lights-hunt', emoji: '🌌', text: 'Northern lights hunt drive', subtext: 'Slim chance in June (too light) but we can try — bring blankets' },
    ],
  },
  {
    id: 'food-adventure',
    question: 'One local thing you HAVE to try in Iceland',
    subtitle: 'No cowards allowed.',
    options: [
      { id: 'hakarl', emoji: '🦈', text: 'Hákarl — fermented shark', subtext: 'Smells like ammonia. Tastes like a dare. Essential rite of passage.' },
      { id: 'skyr', emoji: '🥛', text: 'Skyr every single day', subtext: 'Technically a cheese, tastes like yogurt, extremely healthy, very Icelandic' },
      { id: 'langoustine', emoji: '🦞', text: 'Langoustine in Höfn', subtext: 'The freshest shellfish you\'ll ever eat. No drama needed.' },
      { id: 'brennivín', emoji: '🥃', text: 'Brennivín — Black Death', subtext: 'Iceland\'s national schnapps. Caraway. Bracing. One shot minimum.' },
    ],
  },
]
