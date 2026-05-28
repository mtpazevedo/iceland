import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix Leaflet default marker icons in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// Stops match the current 8-day plan: B2 base, 1 night Vík, no Höfn/Jökulsárlón.
// Day 3 is the variant day — Þórsmörk (Dramatic) OR Reykjanes (Tranquility).
const stops = [
  // Day 1 — arrival
  { name: 'B2 Apartments, Reykjavík', lat: 64.1421, lng: -21.9090, day: 1, note: 'Brautarholt 2 · base for 6 nights' },
  // Day 2 — Golden Circle + Silfra
  { name: 'Þingvellir + Silfra', lat: 64.2559, lng: -21.1306, day: 2, note: 'Tectonic plates · 8am snorkel for 2' },
  { name: 'Geysir', lat: 64.3108, lng: -20.3012, day: 2, note: 'Strokkur erupts every 5–7 min' },
  { name: 'Gullfoss', lat: 64.3270, lng: -20.1210, day: 2, note: 'Two-cascade canyon waterfall' },
  // Day 3a — Dramatic variant
  { name: 'Þórsmörk (Dramatic Day 3)', lat: 63.6849, lng: -19.5181, day: 3, note: 'Shuttle from Hvolsvöllur · 3 glaciers' },
  // Day 3b — Tranquility variant
  { name: 'Reykjanes loop (Tranquility Day 3)', lat: 63.8155, lng: -22.7060, day: 3, note: 'Stóra Sandvík · Brimketill · Gunnuhver' },
  // Day 4 — South coast → Vík
  { name: 'Seljalandsfoss', lat: 63.6154, lng: -19.9887, day: 4, note: 'Walk behind the waterfall' },
  { name: 'Skógafoss + Kvernufoss', lat: 63.5320, lng: -19.5136, day: 4, note: '527 steps + hidden second falls' },
  { name: 'Reynisfjara + Yoda Cave', lat: 63.4029, lng: -19.0440, day: 4, note: 'Black sand + Hjörleifshöfði cave' },
  { name: 'Hotel Vík í Mýrdal (sleep)', lat: 63.4186, lng: -19.0074, day: 4, note: 'Klettsvegur 1 · 1 night booked' },
  // Day 5 — back to Reykjavík
  { name: 'Eldhraun moss-lava', lat: 63.7517, lng: -18.0900, day: 5, note: 'Pull-over photo stop' },
  { name: 'Fjaðrárgljúfur', lat: 63.7617, lng: -18.1717, day: 5, note: '2-million-year-old canyon' },
  // Day 6 — Snæfellsnes day trip
  { name: 'Settlement Center, Borgarnes', lat: 64.5374, lng: -21.9220, day: 6, note: 'Best Viking museum on the route' },
  { name: 'Búðakirkja', lat: 64.8217, lng: -23.3840, day: 6, note: 'Black church on the lava field' },
  { name: 'Arnarstapi cliffs', lat: 64.7695, lng: -23.6224, day: 6, note: 'Sea arch coastal walk' },
  { name: 'Djúpalónssandur + Lóndrangar', lat: 64.7522, lng: -23.9005, day: 6, note: 'Pebble beach + sea-stack pinnacles' },
  { name: 'Abandoned ship by Rif', lat: 64.9209, lng: -23.8227, day: 6, note: 'Photo list 1.6' },
  { name: 'Kirkjufell + Kirkjufellsfoss', lat: 64.9409, lng: -23.3056, day: 6, note: 'Most-photographed mountain · golden-hour 22:00' },
  // Day 7 — Reykjavík proper + Sky Lagoon
  { name: 'Sky Lagoon', lat: 64.1088, lng: -21.9530, day: 7, note: 'Sunset ritual · farewell night' },
  // Day 8 — departure
  { name: 'Keflavík (KEF) airport', lat: 63.9850, lng: -22.6056, day: 8, note: 'Departure · refuel at N1 Hafnarfjörður' },
]

// Approximate driving route (skipping the Day 3 Þórsmörk shuttle leg —
// that's a bus, not the SUV).
const route: [number, number][] = [
  [64.1421, -21.9090], // B2 Reykjavík
  [64.2559, -21.1306], // Þingvellir
  [64.3108, -20.3012], // Geysir
  [64.3270, -20.1210], // Gullfoss
  [64.1421, -21.9090], // back to B2
  [63.6154, -19.9887], // Seljalandsfoss (Day 4 outbound)
  [63.5320, -19.5136], // Skógafoss
  [63.4029, -19.0440], // Reynisfjara
  [63.4186, -19.0074], // Vík (sleep)
  [63.7517, -18.0900], // Eldhraun (Day 5)
  [63.7617, -18.1717], // Fjaðrárgljúfur
  [64.1421, -21.9090], // back to B2
  [64.5374, -21.9220], // Borgarnes (Day 6)
  [64.8217, -23.3840], // Búðakirkja
  [64.7695, -23.6224], // Arnarstapi
  [64.9209, -23.8227], // Abandoned ship
  [64.9409, -23.3056], // Kirkjufell
  [64.1421, -21.9090], // back to B2
  [63.9850, -22.6056], // KEF (Day 8)
]

function dayColor(day: number) {
  const colors: Record<number, string> = {
    1: '#7eb8c4', 2: '#a8d8b0', 3: '#d4cfc4',
    4: '#7eb8c4', 5: '#a8d8b0', 6: '#d4cfc4',
    7: '#7eb8c4', 8: '#3d3d3d',
  }
  return colors[day] ?? '#7eb8c4'
}

function makeIcon(day: number) {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:28px;height:28px;border-radius:50%;
      background:${dayColor(day)};
      border:2px solid #0d1a0d;
      display:flex;align-items:center;justify-content:center;
      font-size:11px;font-weight:700;color:#0d1a0d;
      font-family:Inter,sans-serif;
      box-shadow:0 2px 8px rgba(0,0,0,0.5);
    ">${day}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  })
}

export default function IcelandMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-stone/30" style={{ height: '500px' }}>
      <MapContainer
        center={[64.7, -19.5]}
        zoom={6}
        style={{ height: '100%', width: '100%', background: '#0d1a0d' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        <Polyline
          positions={route}
          pathOptions={{ color: '#7eb8c4', weight: 2, opacity: 0.6, dashArray: '6 4' }}
        />
        {stops.map(stop => (
          <Marker key={stop.name} position={[stop.lat, stop.lng]} icon={makeIcon(stop.day)}>
            <Popup>
              <div style={{ fontFamily: 'Inter, sans-serif', minWidth: '140px' }}>
                <strong style={{ fontSize: '13px' }}>{stop.name}</strong>
                <br />
                <span style={{ fontSize: '11px', color: '#666' }}>Day {stop.day} · {stop.note}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
