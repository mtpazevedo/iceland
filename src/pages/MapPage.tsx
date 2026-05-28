import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Search, X, ExternalLink, Navigation, AlertTriangle, Check, Download, Map as MapIcon } from 'lucide-react'
import { spots, SPOT_TYPE_LABELS, REGIONS, GOOGLE_MY_MAPS_URL, type Spot, type SpotCategory } from '../data/spots'

const foodIcon = L.divIcon({
  className: 'leaflet-spot food',
  html: '<span></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})
const sightIcon = L.divIcon({
  className: 'leaflet-spot sight',
  html: '<span></span>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
})
const planIcon = L.divIcon({
  className: 'leaflet-spot plan',
  html: '<span></span>',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
})

function FlyTo({ spot }: { spot: Spot | null }) {
  const map = useMap()
  useEffect(() => {
    if (spot) map.flyTo([spot.lat, spot.lng], Math.max(map.getZoom(), 11), { duration: 0.8 })
  }, [spot, map])
  return null
}

function gmapsUrl(s: Spot) {
  if (s.gmapsUrl) return s.gmapsUrl
  // Single query combining name + coords — Google Maps usually pins to the named place near those coords.
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.name} ${s.lat},${s.lng}`)}`
}
function directionsUrl(s: Spot) {
  return `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`
}

function escapeXml(str: string) {
  return str.replace(/[<>&'"]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c] || c))
}

// Multi-stop Google Maps "directions" URL for the whole trip — same waypoints as the Home route button.
const GOOGLE_MAPS_TRIP_ROUTE =
  'https://www.google.com/maps/dir/' + [
    'B2+Apartments,+Brautarholt+2,+Reykjavík',
    'Þingvellir+National+Park',
    'Geysir,+Iceland',
    'Gullfoss',
    'Seljalandsfoss',
    'Skógafoss',
    'Sólheimajökull',
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

// Build a Google Maps "directions" URL straight to a single spot — used by the
// per-spot "Directions" link in the popups already.

function buildKml(items: Spot[]) {
  const styles = `
    <Style id="food"><IconStyle><Icon><href>https://maps.google.com/mapfiles/kml/paddle/blu-circle.png</href></Icon></IconStyle></Style>
    <Style id="sight"><IconStyle><Icon><href>https://maps.google.com/mapfiles/kml/paddle/grn-circle.png</href></Icon></IconStyle></Style>
    <Style id="plan"><IconStyle><Icon><href>https://maps.google.com/mapfiles/kml/paddle/ylw-stars.png</href></Icon></IconStyle></Style>
  `
  const placemarks = items.map(s => `
    <Placemark>
      <name>${escapeXml(s.name)}</name>
      <description><![CDATA[<b>${escapeXml(s.rawType)}</b> · ${escapeXml(s.region)}<br/>${escapeXml(s.note)}${s.inPlan ? `<br/><b>In plan · Day ${s.planDay}</b>` : ''}]]></description>
      <styleUrl>#${s.inPlan ? 'plan' : s.category}</styleUrl>
      <Point><coordinates>${s.lng},${s.lat},0</coordinates></Point>
    </Placemark>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2"><Document><name>Iceland 2026 — Spots</name>${styles}${placemarks}</Document></kml>`
}

function downloadKml(items: Spot[]) {
  const blob = new Blob([buildKml(items)], { type: 'application/vnd.google-earth.kml+xml' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `iceland-spots-${items.length}.kml`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export default function MapPage() {
  const location = useLocation()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<SpotCategory | 'all'>('all')
  const [region, setRegion] = useState<string>('all')
  const [type, setType] = useState<string>('all')
  const [active, setActive] = useState<Spot | null>(null)

  // If we arrived here from the Home page's "Download KML" button, auto-trigger
  // the download once on mount.
  useEffect(() => {
    const state = location.state as { download?: boolean } | null
    if (state?.download) downloadKml(spots)
  }, [location.state])

  const types = useMemo(() => {
    const s = new Set<string>()
    spots.forEach(sp => s.add(sp.type))
    return Array.from(s).sort()
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return spots.filter(s => {
      if (category !== 'all' && s.category !== category) return false
      if (region !== 'all' && s.region !== region) return false
      if (type !== 'all' && s.type !== type) return false
      if (q) {
        const hay = `${s.name} ${s.note} ${s.region} ${s.rawType}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [query, category, region, type])

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <p className="section-label mb-3">{spots.length} spots · searchable offline</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">The Map</h1>
        <p className="text-cream/50 max-w-xl mx-auto mb-5">
          Every café, bakery, bar, and dinner pick the crew has flagged. Tap a pin for directions in Google Maps.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={GOOGLE_MAPS_TRIP_ROUTE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ExternalLink size={14} /> Open trip route in Google Maps
          </a>
          <button
            onClick={() => downloadKml(spots)}
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Download size={14} /> Download all spots as KML
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div className="card-glass p-4 mb-6 space-y-3">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name or notes…"
            className="w-full pl-9 pr-9 py-2 rounded-lg bg-charcoal/60 border border-stone/20 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-glacier/50"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream">
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {(['all', 'food', 'sight'] as const).map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded-full text-xs tracking-wide font-body transition-colors ${
                category === c
                  ? 'bg-glacier text-obsidian'
                  : 'bg-charcoal/60 text-cream/50 border border-stone/20 hover:text-cream'
              }`}
            >
              {c === 'all' ? 'All' : c === 'food' ? 'Food & drink' : 'Sights'}
            </button>
          ))}

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-3 py-1 rounded-full text-xs bg-charcoal/60 text-cream/70 border border-stone/20 focus:outline-none focus:border-glacier/50"
          >
            <option value="all">All regions</option>
            {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="px-3 py-1 rounded-full text-xs bg-charcoal/60 text-cream/70 border border-stone/20 focus:outline-none focus:border-glacier/50"
          >
            <option value="all">All types</option>
            {types.map(t => <option key={t} value={t}>{SPOT_TYPE_LABELS[t] || t}</option>)}
          </select>

          <span className="ml-auto text-xs text-cream/40 font-body">{filtered.length} of {spots.length}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest text-cream/40 font-body pt-1">
          <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-glacier border border-white/80" /> Food</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-moss-light border border-white/80" /> Sight</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-2.5 h-2.5 rounded-full bg-aurora border border-white/80" /> In plan</span>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => downloadKml(filtered)}
              title={`Download ${filtered.length} spot${filtered.length === 1 ? '' : 's'} as a .kml file you can import into Google My Maps`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal/80 border border-stone/30 text-cream/70 hover:text-cream hover:border-glacier/50 transition-colors normal-case tracking-normal text-xs"
            >
              <Download size={12} /> Download KML
            </button>
            {GOOGLE_MY_MAPS_URL ? (
              <a
                href={GOOGLE_MY_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                title="Open all spots in Google My Maps"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-glacier text-obsidian hover:bg-glacier-light transition-colors normal-case tracking-normal text-xs"
              >
                <MapIcon size={12} /> Open in Google Maps
              </a>
            ) : (
              <a
                href="https://www.google.com/maps/d/"
                target="_blank"
                rel="noreferrer"
                title="Create a Google My Map, import the KML you just downloaded, share it, and paste the URL into GOOGLE_MY_MAPS_URL in src/data/spots.ts"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal/80 border border-dashed border-stone/40 text-cream/50 hover:text-cream hover:border-glacier/50 transition-colors normal-case tracking-normal text-xs"
              >
                <MapIcon size={12} /> Set up My Maps
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-[460px] rounded-xl overflow-hidden border border-stone/20 mb-6">
        <MapContainer
          center={[64.9631, -19.0208]}
          zoom={6}
          className="h-full w-full"
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filtered.map(s => {
            const icon = s.inPlan ? planIcon : s.category === 'food' ? foodIcon : sightIcon
            return (
              <Marker
                key={s.id}
                position={[s.lat, s.lng]}
                icon={icon}
                eventHandlers={{ click: () => setActive(s) }}
              >
                <Popup>
                  <div className="spot-popup">
                    <div className="text-[10px] uppercase tracking-widest opacity-60">{s.rawType} · {s.region}</div>
                    <div className="font-semibold mt-1 text-sm">{s.name}</div>
                    {s.inPlan && <div className="text-[10px] mt-1 text-emerald-600">✓ In plan · Day {s.planDay}</div>}
                    {s.verify && <div className="text-[10px] mt-1 text-amber-600">⚠ Verify location</div>}
                    <p className="text-xs mt-2 opacity-80 leading-snug">{s.note}</p>
                    <div className="flex gap-3 mt-3 text-xs">
                      <a href={gmapsUrl(s)} target="_blank" rel="noreferrer" className="underline hover:opacity-80">Open</a>
                      <a href={directionsUrl(s)} target="_blank" rel="noreferrer" className="underline hover:opacity-80">Directions</a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          })}
          <FlyTo spot={active} />
        </MapContainer>
      </div>

      {/* List */}
      <div className="grid md:grid-cols-2 gap-3">
        {filtered.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s)}
            className={`text-left card-glass p-4 hover:border-glacier/40 transition-colors ${active?.id === s.id ? 'border-glacier/60 ring-1 ring-glacier/40' : ''}`}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="section-label text-[10px] truncate">{s.rawType} · {s.region}</span>
              <div className="flex gap-1.5 shrink-0">
                {s.verify && <span title="Verify location" className="text-amber-400/90"><AlertTriangle size={12} /></span>}
                {s.inPlan && <span title={`In plan · Day ${s.planDay}`} className="text-aurora"><Check size={12} /></span>}
              </div>
            </div>
            <div className="font-medium text-cream text-sm mb-1">{s.name}</div>
            <p className="text-cream/50 text-xs leading-relaxed line-clamp-3">{s.note}</p>
            <div className="flex gap-3 mt-2 text-[10px] text-cream/40">
              <a
                onClick={(e) => e.stopPropagation()}
                href={gmapsUrl(s)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-glacier"
              >
                <ExternalLink size={10} /> Open
              </a>
              <a
                onClick={(e) => e.stopPropagation()}
                href={directionsUrl(s)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-glacier"
              >
                <Navigation size={10} /> Directions
              </a>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-10 text-cream/40 text-sm">
            No spots match those filters.
          </div>
        )}
      </div>
    </div>
  )
}
