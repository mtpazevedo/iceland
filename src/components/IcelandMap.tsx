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

const stops = [
  { name: 'Reykjavík', lat: 64.1355, lng: -21.8954, day: 1, note: 'Base camp — Airbnb HQ' },
  { name: 'Þingvellir', lat: 64.2559, lng: -21.1306, day: 2, note: 'Walk between two tectonic plates' },
  { name: 'Geysir', lat: 64.3108, lng: -20.3012, day: 2, note: 'Strokkur erupts every 5–7 min' },
  { name: 'Gullfoss', lat: 64.3270, lng: -20.1210, day: 2, note: 'Double waterfall into a canyon' },
  { name: 'Seljalandsfoss', lat: 63.6154, lng: -19.9887, day: 3, note: 'Walk behind the waterfall' },
  { name: 'Skógafoss', lat: 63.5320, lng: -19.5136, day: 3, note: '527 steps to the top' },
  { name: 'Sólheimasandur (DC-3)', lat: 63.4993, lng: -19.3618, day: 3, note: 'Plane wreck on black sand' },
  { name: 'Reynisfjara', lat: 63.4029, lng: -19.0440, day: 3, note: 'Black sand beach & basalt columns' },
  { name: 'Vík', lat: 63.4186, lng: -19.0074, day: 3, note: 'Overnight stop #1' },
  { name: 'Fjaðrárgljúfur Canyon', lat: 63.7617, lng: -18.1717, day: 5, note: 'Game of Thrones canyon' },
  { name: 'Jökulsárlón', lat: 64.0784, lng: -16.2306, day: 4, note: 'Glacier lagoon — icebergs!' },
  { name: 'Diamond Beach', lat: 64.0652, lng: -16.1793, day: 4, note: 'Ice on black sand' },
  { name: 'Höfn', lat: 64.2539, lng: -15.2082, day: 4, note: 'Overnight stop #2 — langoustine capital' },
  { name: 'Kirkjufell', lat: 64.9409, lng: -23.3056, day: 6, note: 'Most photographed mountain in Iceland' },
  { name: 'Snæfellsjökull', lat: 64.8080, lng: -23.7736, day: 6, note: 'Jules Verne\'s volcano' },
  { name: 'Sky Lagoon', lat: 64.1088, lng: -21.9530, day: 7, note: 'Oceanfront geothermal pool' },
]

// Route as a polyline — approximate driving route
const route: [number, number][] = [
  [64.1355, -21.8954], // Reykjavík
  [64.2559, -21.1306], // Þingvellir
  [64.3108, -20.3012], // Geysir
  [64.3270, -20.1210], // Gullfoss
  [63.6154, -19.9887], // Seljalandsfoss
  [63.5320, -19.5136], // Skógafoss
  [63.4029, -19.0440], // Reynisfjara
  [63.4186, -19.0074], // Vík
  [63.7617, -18.1717], // Fjaðrárgljúfur
  [64.0784, -16.2306], // Jökulsárlón
  [64.0652, -16.1793], // Diamond Beach
  [64.2539, -15.2082], // Höfn
  [64.2539, -15.2082], // back from Höfn
  [63.7617, -18.1717], // Fjaðrárgljúfur (return)
  [64.1355, -21.8954], // Reykjavík
  [64.9409, -23.3056], // Kirkjufell
  [64.8080, -23.7736], // Snæfellsjökull
  [64.1355, -21.8954], // Reykjavík
]

function dayColor(day: number) {
  const colors: Record<number, string> = {
    1: '#7eb8c4', 2: '#a8d8b0', 3: '#d4cfc4',
    4: '#7eb8c4', 5: '#a8d8b0', 6: '#d4cfc4', 7: '#7eb8c4',
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
        center={[64.7, -19.0]}
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
