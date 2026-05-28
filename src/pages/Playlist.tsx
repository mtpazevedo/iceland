import { ExternalLink, Plus } from 'lucide-react'

const suggestedTracks = [
  { artist: 'Sigur Rós', track: 'Hoppípolla', why: 'The quintessential Iceland song. You will cry.' },
  { artist: 'Sigur Rós', track: 'Ára bátur', why: 'For driving through lava fields at 11pm in golden light.' },
  { artist: 'Sigur Rós', track: 'Svefn-g-englar', why: 'Glaciers and total silence, encapsulated.' },
  { artist: 'Bon Iver', track: 'Holocene', why: 'Mandatory on the South Coast drive.' },
  { artist: 'Bon Iver', track: 'Skinny Love', why: 'For the mountain passes.' },
  { artist: 'Fleet Foxes', track: 'White Winter Hymnal', why: 'First morning in Reykjavík, coffee in hand.' },
  { artist: 'Fleet Foxes', track: 'Helplessness Blues', why: 'Snæfellsnes Peninsula, cloud formations.' },
  { artist: 'James Blake', track: 'Limit to Your Love', why: 'Reykjavík bar, second drink.' },
  { artist: 'Nick Drake', track: 'Pink Moon', why: 'Late night, somewhere coastal.' },
  { artist: 'Radiohead', track: 'How to Disappear Completely', why: 'One for the drive back from the glacier lagoon.' },
  { artist: 'Ólafur Arnalds', track: 'Near Light', why: 'Icelandic composer — non-negotiable.' },
  { artist: 'Ólafur Arnalds', track: 'Near Light (variations)', why: 'More of him. Always.' },
  { artist: 'Explosions in the Sky', track: 'Your Hand in Mine', why: 'Sunset at midnight. You\'ll understand.' },
  { artist: 'The National', track: 'Bloodbuzz Ohio', why: 'Last night dinner, getting emotional.' },
  { artist: 'Sufjan Stevens', track: 'Death With Dignity', why: 'Diamond Beach, icebergs, reverence.' },
  { artist: 'Agnes Obel', track: 'Riverside', why: 'Morning drive, fog lifting off the mountains.' },
  { artist: 'Beach House', track: 'Space Song', why: 'Golden Circle, Gullfoss mist, feeling things.' },
  { artist: 'Daughter', track: 'Youth', why: 'For the hike that nearly killed you but didn\'t.' },
  { artist: 'Alt-J', track: 'Tessellate', why: 'Lava field vibes. Geometric Iceland.' },
  { artist: 'Foals', track: 'Mountain at My Gates', why: 'Because there literally are mountains at every gate.' },
]

export default function Playlist() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <p className="section-label mb-4">The soundtrack</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">Playlist</h1>
        <p className="text-cream/50 max-w-xl mx-auto">
          Indie rock, post-rock & Nordic atmospherics for 8 days of glaciers, highways and midnight sun.
        </p>
      </div>

      {/* Spotify Embed Placeholder */}
      <div className="card-glass p-8 mb-8 text-center">
        <h3 className="font-display text-2xl text-cream mb-6">Iceland '26 — The Playlist</h3>

        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/51rwyQMaEROBNzD01TLnD1?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameBorder={0}
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />

        <a
          href="https://open.spotify.com/playlist/51rwyQMaEROBNzD01TLnD1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm"
          style={{ color: '#1DB954' }}
        >
          Open in Spotify & add your songs <ExternalLink size={13} />
        </a>
      </div>

      {/* Suggested tracks */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl text-cream">Suggested tracks</h2>
          <span className="text-cream/30 text-xs">{suggestedTracks.length} tracks</span>
        </div>

        <div className="space-y-2">
          {suggestedTracks.map((track, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-ash/60 transition-colors group">
              <span className="text-stone text-xs font-mono w-6 shrink-0 mt-0.5 text-right">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-cream text-sm font-medium">{track.track}</p>
                <p className="text-cream/40 text-xs">{track.artist}</p>
                <p className="text-cream/25 text-xs mt-1 italic">{track.why}</p>
              </div>
              <Plus size={14} className="text-stone group-hover:text-glacier transition-colors shrink-0 mt-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Vibe note */}
      <div className="mt-12 text-center">
        <p className="font-display text-lg text-cream/40 italic">
          "Music is what feelings sound like. Iceland is where feelings happen."
        </p>
        <p className="section-label mt-2">Play loud on the Ring Road.</p>
      </div>
    </div>
  )
}
