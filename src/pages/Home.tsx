import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Download, ExternalLink } from 'lucide-react'
import Countdown from '../components/Countdown'
import Weather from '../components/Weather'
import { photos } from '../data/photos'
import { funFacts, resources, icelandicPhrases } from '../data/resources'

const IcelandMap = lazy(() => import('../components/IcelandMap'))

// Google Maps "directions" URL stitching the trip's main waypoints in driving order.
// Opens in the official Google Maps app/site with multi-stop turn-by-turn.
const GOOGLE_MAPS_ROUTE_URL =
  'https://www.google.com/maps/dir/' + [
    'B2+Apartments,+Brautarholt+2,+Reykjavík',
    'Þingvellir+National+Park',
    'Geysir,+Iceland',
    'Gullfoss',
    'Seljalandsfoss',
    'Skógafoss',
    'Reynisfjara',
    'Hotel+Vík+í+Mýrdal',
    'Fjaðrárgljúfur',
    'Reykjavík',
    'Settlement+Center+Borgarnes',
    'Búðakirkja',
    'Kirkjufell',
    'Reykjavík',
    'Keflavík+Airport',
  ].join('/')

export default function Home() {
  return (
    <div className="grain min-h-screen">

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20,12,30,0.6) 0%, rgba(40,22,60,0.4) 30%, rgba(110,79,102,0.75) 78%, rgba(110,79,102,1) 100%), url(${photos.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="animate-fade-in pb-32 md:pb-28">
          <p className="section-label mb-6 tracking-[0.5em]">June 7 — 14 · 2026</p>
          <h1 className="display-title text-7xl md:text-9xl lg:text-[11rem] mb-4">Iceland</h1>
          <div className="font-display italic text-cream/60 mb-12 leading-tight">
            <p className="section-label not-italic mb-2 tracking-[0.4em] text-cream/40">— The —</p>
            <p className="text-2xl md:text-3xl">Girls Scenic Trip</p>
          </div>
          <div className="mb-12">
            <p className="section-label mb-4">Departing in</p>
            <Countdown />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/itinerary" className="btn-primary flex items-center gap-2 justify-center">
              See the plan <ArrowRight size={16} />
            </Link>
            <Link to="/practical" className="btn-ghost">What to pack</Link>
          </div>
        </div>
        <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-cream/30 animate-pulse-slow pointer-events-none">
          <span className="section-label text-[10px]">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="section-label mb-6">The trip</p>
        <h2 className="display-title text-4xl md:text-5xl mb-8">
          8 days in the land of fire,<br />
          <span className="italic text-glacier">ice, waterfalls & langoustine</span>
        </h2>
        <p className="text-cream/60 leading-relaxed text-lg max-w-2xl mx-auto">
          We land Sunday afternoon, pick up the car, and don't stop until we've walked behind a waterfall,
          floated among icebergs, stood between two tectonic plates,
          and eaten somewhere Tereza won't stop talking about for years.
        </p>
      </section>

      {/* Quick facts */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Days', value: '8', sub: 'June 7–14' },
            { label: 'Crew', value: '5', sub: 'Krysse, Marcella, Flavia, Biba, Tereza' },
            { label: 'Overnight stops', value: '1', sub: '1 night in Vík (rest are in Reyk)' },
            { label: 'Daylight', value: '~23h', sub: 'Midnight sun season' },
          ].map(f => (
            <div key={f.label} className="card-glass p-6 text-center">
              <div className="font-display text-4xl text-glacier mb-1">{f.value}</div>
              <div className="section-label mb-1">{f.label}</div>
              <div className="text-cream/40 text-sm">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Weather */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-2xl text-cream">Current weather in Reykjavík</h3>
          <div className="flex items-center gap-1.5 text-cream/40 text-sm">
            <MapPin size={12} /><span>64.1°N</span>
          </div>
        </div>
        <Weather />
        <p className="text-cream/30 text-sm mt-3 text-center">
          June in Iceland: 8–14°C, wind always present, rain always possible. Pack layers. Always.
        </p>
      </section>

      {/* Photo grid */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <p className="section-label mb-6 text-center">What awaits</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.grid.map(photo => (
            <div key={photo.label} className="relative group aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={photo.url}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="section-label">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Where we're going</p>
          <h2 className="display-title text-4xl md:text-5xl mb-3">The Route</h2>
          <p className="text-cream/50 max-w-xl mx-auto text-sm">
            Click any marker to see what we're doing there. Numbers show which day.
          </p>
        </div>

        <Suspense fallback={
          <div className="card-glass h-[500px] rounded-2xl flex items-center justify-center text-cream/30 text-sm">
            Loading map…
          </div>
        }>
          <IcelandMap />
        </Suspense>

        {/* Map CTAs — Google Maps + KML download */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={GOOGLE_MAPS_ROUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ExternalLink size={14} /> Open route in Google Maps
          </a>
          <Link
            to="/map"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <MapPin size={14} /> Searchable spots map
          </Link>
          <Link
            to="/map"
            state={{ download: true }}
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Download size={14} /> Download KML (Google My Maps)
          </Link>
        </div>
        <p className="text-cream/35 text-xs text-center mt-3 max-w-2xl mx-auto leading-relaxed">
          The Google Maps button opens turn-by-turn directions for the whole trip. The KML import works in Google
          My Maps, Earth, or any GPS app — useful if you go offline.
        </p>

        {/* Day legend — full 8 days */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {[
            { color: '#7eb8c4', label: 'Day 1 · Sun · Reykjavík (B2)' },
            { color: '#a8d8b0', label: 'Day 2 · Mon · Golden Circle + Hvammsvík' },
            { color: '#d4cfc4', label: 'Day 3 · Tue · Þórsmörk OR Reykjanes' },
            { color: '#7eb8c4', label: 'Day 4 · Wed · South Coast → Vík (sleep)' },
            { color: '#a8d8b0', label: 'Day 5 · Thu · Fjaðrárgljúfur → Reykjavík' },
            { color: '#d4cfc4', label: 'Day 6 · Fri · Snæfellsnes day trip' },
            { color: '#7eb8c4', label: 'Day 7 · Sat · Reykjavík + Sky Lagoon + farewell' },
            { color: '#3d3d3d', label: 'Day 8 · Sun · KEF departure' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-cream/55">
              <div className="w-3 h-3 rounded-full shrink-0 border border-stone/40" style={{ backgroundColor: l.color }} />
              {l.label}
            </div>
          ))}
        </div>
      </section>

      {/* Fun Facts */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Did you know?</p>
          <h2 className="display-title text-4xl md:text-5xl mb-3">Iceland — The Facts</h2>
          <p className="text-cream/50 max-w-xl mx-auto text-sm">The island that does everything differently.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {funFacts.map(fact => (
            <div key={fact.title} className="card-glass p-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{fact.emoji}</span>
                <div>
                  <h3 className="font-display text-xl text-cream mb-2">{fact.title}</h3>
                  <p className="text-cream/55 text-sm leading-relaxed">{fact.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Speak like a local</p>
          <h2 className="display-title text-4xl md:text-5xl mb-3">Íslenska Essentials</h2>
          <p className="text-cream/50 max-w-xl mx-auto text-sm">
            Eight phrases. Icelanders speak perfect English but will love you forever for trying.{' '}
            <a href="https://icelandiconline.com" target="_blank" rel="noopener noreferrer"
              className="text-glacier hover:text-glacier-light underline underline-offset-2 transition-colors">
              Learn more →
            </a>
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {icelandicPhrases.map(p => (
            <div key={p.phrase} className="card-glass p-5 flex gap-4">
              <div className="shrink-0 text-right w-36">
                <p className="font-display text-xl text-cream">{p.phrase}</p>
                <p className="text-glacier text-sm mt-0.5 font-mono">{p.pronunciation}</p>
              </div>
              <div className="border-l border-stone/40 pl-4">
                <p className="text-cream/80 font-medium text-sm">{p.meaning}</p>
                <p className="text-cream/40 text-sm mt-1 leading-relaxed">{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essential Apps */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <p className="section-label mb-3">Download before you land</p>
          <h2 className="display-title text-4xl md:text-5xl mb-3">Essential Apps</h2>
          <p className="text-cream/50 max-w-xl mx-auto text-sm">Two apps. No excuses. Download them now.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {resources.apps.map(app => (
            <a key={app.name} href={app.url} target="_blank" rel="noopener noreferrer"
              className="card-glass p-6 flex items-start gap-5 hover:border-mist/30 transition-colors group">
              <div className="text-4xl shrink-0">{app.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-xl text-cream group-hover:text-glacier transition-colors">{app.name}</h3>
                  <span className="text-xs bg-stone/40 text-mist px-2 py-0.5 rounded-full">{app.platform}</span>
                </div>
                <p className="text-cream/55 text-sm leading-relaxed">{app.note}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 pb-24">
        <Link to="/itinerary" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-3">
          See the full itinerary <ArrowRight size={16} />
        </Link>
      </section>

    </div>
  )
}
