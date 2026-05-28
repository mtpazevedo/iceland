import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import {
  Clock, MapPin, Utensils, Ticket, ChevronDown, ChevronUp, Sunrise, Compass,
  ExternalLink, AlertTriangle, Camera, Car, ShoppingBag, Waves, Phone,
  CalendarDays, Bed, Coffee, BookOpen, Navigation, Download,
} from 'lucide-react'
import {
  itinerary, expeditionItinerary, nextTimeSpots,
  type DayPlan, type ScheduleItem, type Meal,
} from '../data/itinerary'
import { photos } from '../data/photos'

const IcelandMap = lazy(() => import('../components/IcelandMap'))

// Multi-stop Google Maps directions URL for the whole trip — same waypoints as on Home + Map page.
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

// Variant chooser was retired — the trip is one curated itinerary now (Tranquility-style:
// Reykjanes + Reykjavík culture Day 3, no exhausting Þórsmörk shuttle day). The dramatic
// "THE Iceland Trip" variant is gone from the data file too.

const STOP_TYPE_META: Record<ScheduleItem['type'], { icon: any; tint: string }> = {
  drive:    { icon: Car,         tint: 'text-mist' },
  photo:    { icon: Camera,      tint: 'text-aurora' },
  sight:    { icon: MapPin,      tint: 'text-glacier' },
  food:     { icon: Utensils,    tint: 'text-cream' },
  spa:      { icon: Waves,       tint: 'text-glacier-light' },
  hike:     { icon: Compass,     tint: 'text-moss-light' },
  shop:     { icon: ShoppingBag, tint: 'text-cream/70' },
  rest:     { icon: Bed,         tint: 'text-mist/80' },
  activity: { icon: Compass,     tint: 'text-aurora' },
  culture:  { icon: BookOpen,    tint: 'text-cream' },
}

export default function Itinerary() {
  const [expanded, setExpanded] = useState<number | null>(1)
  const days = itinerary
  const dayRefs = useRef<Record<number, HTMLDivElement | null>>({})

  // silence unused-import warning while the expedition variant is hidden
  void expeditionItinerary

  // Smooth-scroll the opened day INTO view (downward expand UX).
  useEffect(() => {
    if (expanded == null) return
    const el = dayRefs.current[expanded]
    if (!el) return
    const t = setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 110
      window.scrollTo({ top, behavior: 'smooth' })
    }, 60)
    return () => clearTimeout(t)
  }, [expanded])

  return (
    <div className="min-h-screen pt-24 pb-20 px-5 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <p className="section-label mb-4">June 7 — 14 · 2026</p>
        <h1 className="display-title text-5xl md:text-6xl mb-3">The Plan</h1>
        <p className="text-cream/55 max-w-xl mx-auto">
          8 days. 1 SUV. The apartment in Reykjavík, one night in Vík, two glaciers seen, a Saturday farewell.
        </p>
      </div>

      {/* Route map — full trip route + Google Maps + KML export */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
          <h2 className="display-title text-2xl">The route</h2>
          <span className="text-cream/40 text-xs">Click any pin for the day's stop.</span>
        </div>
        <Suspense fallback={
          <div className="card-glass h-[420px] rounded-2xl flex items-center justify-center text-cream/30 text-sm">
            Loading map…
          </div>
        }>
          <IcelandMap />
        </Suspense>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={GOOGLE_MAPS_TRIP_ROUTE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ExternalLink size={14} /> Open trip route in Google Maps
          </a>
          <Link
            to="/map"
            state={{ download: true }}
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Download size={14} /> Download KML
          </Link>
          <Link
            to="/map"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <MapPin size={14} /> Searchable spots map
          </Link>
        </div>
      </section>

      {/* At-a-glance summary — 8 days, one card each */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4 flex-wrap gap-2">
          <h2 className="display-title text-2xl">At a glance</h2>
          <span className="text-cream/40 text-xs">Tap any card to open the full day below.</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {days.map(d => (
            <button
              key={d.day}
              onClick={() => setExpanded(d.day)}
              className={`text-left rounded-xl border p-3.5 transition-all
                ${expanded === d.day
                  ? 'border-glacier bg-glacier/10'
                  : 'border-stone/30 bg-charcoal/40 hover:border-stone/60 hover:bg-charcoal/60'
                }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[11px] font-body font-semibold ${expanded === d.day ? 'text-glacier' : 'text-mist/80'}`}>
                  Day {d.day}
                </span>
                <span className="text-cream/40 text-[10px]">·</span>
                <span className="text-cream/55 text-[10px] uppercase tracking-widest font-body">
                  {d.date.split(' — ')[0]}
                </span>
              </div>
              <p className="font-display text-base text-cream leading-tight mb-1.5">{d.title}</p>
              <p className="text-cream/50 text-[11px] leading-snug mb-2 line-clamp-2">{d.subtitle}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] font-body text-cream/55">
                {(d.totalDriveTime || d.driveTime) && (
                  <span className="inline-flex items-center gap-1">
                    <Car size={9} /> {(d.totalDriveTime ?? d.driveTime)!.replace(/^~/, '').split('·')[0].trim()}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <Bed size={9} /> {abbreviateOvernight(d.overnight)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Sticky day pills */}
      <div className="sticky top-16 z-30 bg-obsidian/90 backdrop-blur-md py-3 mb-8 -mx-5 sm:-mx-6 px-5 sm:px-6 border-b border-stone/20">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {days.map(day => (
            <button
              key={day.day}
              onClick={() => setExpanded(expanded === day.day ? null : day.day)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all
                ${expanded === day.day
                  ? 'bg-glacier text-obsidian'
                  : 'bg-charcoal text-cream/55 hover:text-cream border border-stone/30'
                }`}
            >
              Day {day.day}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {days.map(day => (
          <DayCard
            key={day.day}
            day={day}
            expanded={expanded === day.day}
            setRef={el => { dayRefs.current[day.day] = el }}
            onToggle={() => setExpanded(expanded === day.day ? null : day.day)}
          />
        ))}
      </div>

      {/* Next time section */}
      {true && (
        <section className="mt-16 mb-4">
          <div className="text-center mb-8">
            <p className="section-label mb-3">Photo spots we won't reach</p>
            <h2 className="display-title text-3xl md:text-4xl mb-3">Next Time in Iceland</h2>
            <p className="text-cream/55 max-w-2xl mx-auto text-sm leading-relaxed">
              The northern + east + Highlands shots from your list. Out of reach in 8 days from a Reykjavík
              base — flag for a future N-and-E loop or a Highlands-focused trip.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {nextTimeSpots.map(spot => (
              <div key={spot.name} className="card-glass p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-cream font-medium text-sm leading-snug">{spot.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-cream/45 font-body shrink-0">
                    {spot.region}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-aurora/70 mb-2">{spot.category}</p>
                <p className="text-cream/65 text-xs leading-relaxed mb-2">{spot.description}</p>
                <p className="text-cream/45 text-xs leading-relaxed">
                  <span className="text-mist/80">Why we're skipping:</span> {spot.why}
                </p>
                {spot.url && (
                  <a
                    href={spot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-glacier text-xs mt-2 hover:text-glacier-light"
                  >
                    More info <ExternalLink size={10} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

// =============================================================================
//  DayCard
// =============================================================================

function DayCard({
  day, expanded, onToggle, setRef,
}: {
  day: DayPlan
  expanded: boolean
  onToggle: () => void
  setRef: (el: HTMLDivElement | null) => void
}) {
  return (
    <div ref={setRef} className="card-glass overflow-hidden transition-all duration-300 scroll-mt-32">
      {/* HEADER — image on top (mobile-safe), text stacks below on small screens, overlays on md+ */}
      <button className="w-full text-left" onClick={onToggle} aria-expanded={expanded}>
        {/* Image */}
        <div className="relative h-44 sm:h-48 md:h-56 overflow-hidden">
          <img
            src={photos.days[day.day] ?? day.heroImage}
            alt={day.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* desktop overlay */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/45 to-transparent" />
          <div className="hidden md:flex absolute inset-0 p-6 flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="pr-3">
                <span className="section-label">Day {day.day} · {day.date}</span>
                <h2 className="display-title text-2xl md:text-3xl mt-1">{day.title}</h2>
                <p className="text-cream/65 text-lg italic font-display mt-1">{day.subtitle}</p>
              </div>
              <div className="bg-obsidian/60 rounded-full p-2 mt-1 shrink-0">
                {expanded ? <ChevronUp size={16} className="text-cream/70" /> : <ChevronDown size={16} className="text-cream/70" />}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-medium text-cream/90">
              <span className="flex items-center gap-1.5"><MapPin size={13} />{day.location}</span>
              {day.totalDriveTime && <span className="flex items-center gap-1.5"><Clock size={13} />{day.totalDriveTime}</span>}
              {!day.totalDriveTime && day.driveTime && <span className="flex items-center gap-1.5"><Clock size={13} />{day.driveTime}</span>}
              <span className="flex items-center gap-1.5"><Bed size={13} />{day.overnight}</span>
            </div>
          </div>
        </div>

        {/* mobile stacked title block — guarantees no clipped text */}
        <div className="md:hidden p-5 pb-4 border-b border-stone/15">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="section-label">Day {day.day} · {day.date}</span>
              <h2 className="display-title text-2xl mt-1 leading-tight">{day.title}</h2>
              <p className="text-cream/60 text-base italic font-display mt-0.5 leading-snug">{day.subtitle}</p>
            </div>
            <div className="bg-obsidian/60 rounded-full p-2 shrink-0">
              {expanded ? <ChevronUp size={16} className="text-cream/70" /> : <ChevronDown size={16} className="text-cream/70" />}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-3 text-xs text-cream/85">
            <span className="flex items-center gap-1.5"><MapPin size={12} />{day.location}</span>
            {(day.totalDriveTime || day.driveTime) && (
              <span className="flex items-center gap-1.5"><Clock size={12} />{day.totalDriveTime ?? day.driveTime}</span>
            )}
            <span className="flex items-center gap-1.5"><Bed size={12} />{day.overnight}</span>
          </div>
        </div>
      </button>

      {/* EXPANDED CONTENT */}
      {expanded && (
        <div className="border-t border-stone/20 p-5 sm:p-6 md:p-8 space-y-8">
          {/* Drive segments */}
          {day.drive && day.drive.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <p className="section-label flex items-center gap-2">
                  <Car size={11} /> Driving
                </p>
                <a
                  href={buildDayDirectionsUrl(day)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-body px-3 py-1.5 rounded-full bg-glacier text-obsidian hover:bg-glacier-light transition-colors"
                >
                  <Navigation size={11} /> Open day's drive in Google Maps
                </a>
              </div>
              <ol className="space-y-3">
                {day.drive.map((leg, i) => (
                  <li key={i} className="bg-charcoal/40 border border-stone/20 rounded-xl px-4 py-3">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <p className="font-medium text-cream text-sm leading-snug">
                        {leg.from} <span className="text-cream/40 font-light px-1">→</span> {leg.to}
                      </p>
                      <span className="text-[11px] font-body text-mist whitespace-nowrap">
                        {leg.duration}{leg.distance ? ` · ${leg.distance}` : ''}
                      </span>
                    </div>
                    {leg.route && <p className="text-cream/55 text-xs mt-1">Via {leg.route}</p>}
                    {leg.notes && <p className="text-cream/45 text-xs mt-1 italic">{leg.notes}</p>}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Detailed schedule — comes first, before photo spots */}
          {day.schedule && day.schedule.length > 0 && (
            <Section title="Schedule" icon={<CalendarDays size={11} />}>
              <ol className="space-y-3">
                {day.schedule.map((s, i) => {
                  const meta = STOP_TYPE_META[s.type]
                  const Icon = meta.icon
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex flex-col items-center pt-0.5 shrink-0">
                        <div className={`w-7 h-7 rounded-full bg-charcoal/70 border border-stone/40 flex items-center justify-center ${meta.tint}`}>
                          <Icon size={12} />
                        </div>
                        {i < day.schedule!.length - 1 && <div className="w-px flex-1 bg-stone/30 mt-1" style={{ minHeight: 20 }} />}
                      </div>
                      <div className="flex-1 min-w-0 pb-2">
                        <div className="flex items-baseline gap-2 flex-wrap">
                          {s.time && <span className="text-[11px] font-body text-mist whitespace-nowrap">{s.time}</span>}
                          <p className={`text-sm leading-snug font-medium ${s.highlight ? 'text-aurora' : 'text-cream'}`}>
                            {s.title}
                          </p>
                          {s.duration && <span className="text-[10px] text-cream/40 font-body">· {s.duration}</span>}
                        </div>
                        <p className="text-cream/65 text-xs mt-1 leading-relaxed">{s.description}</p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 text-[11px] font-body">
                          {s.detour && <span className="text-mist/70">{s.detour}</span>}
                          {s.url && (
                            <a href={s.url} target="_blank" rel="noopener noreferrer"
                              className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                              Open <ExternalLink size={9} />
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </Section>
          )}

          {/* Photo spots — moved AFTER the schedule per user request */}
          {day.photoSpots && day.photoSpots.length > 0 && (
            <section className="rounded-2xl border-2 border-aurora/40 bg-aurora/5 p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Camera size={14} className="text-aurora" />
                <p className="text-[11px] uppercase tracking-widest text-aurora font-body font-semibold">
                  Photo spots
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {day.photoSpots.map((spot, i) => (
                  <div key={i} className="bg-obsidian/30 rounded-xl p-4 border border-aurora/20">
                    <p className="text-cream font-medium text-sm leading-snug">{spot.name}</p>
                    <p className="text-cream/65 text-xs mt-1.5 leading-relaxed">{spot.description}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[11px] font-body text-aurora/80">
                      {spot.detour && <span>📍 {spot.detour}</span>}
                      {spot.bestTime && <span>🕐 {spot.bestTime}</span>}
                    </div>
                    {spot.notes && <p className="text-cream/45 text-[11px] mt-1.5 italic">{spot.notes}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Two-column lower half */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              {/* Accommodation */}
              {day.accommodation && (
                <Section title="Where you sleep" icon={<Bed size={11} />}>
                  <div className="bg-charcoal/40 border border-stone/20 rounded-xl p-4">
                    <p className="text-cream font-medium text-sm">{day.accommodation.name}</p>
                    <p className="text-cream/65 text-xs mt-0.5 leading-relaxed">{day.accommodation.address}</p>
                    {(day.accommodation.checkIn || day.accommodation.checkOut) && (
                      <p className="text-cream/45 text-[11px] mt-1.5">
                        {day.accommodation.checkIn && <>Check-in: {day.accommodation.checkIn}</>}
                        {day.accommodation.checkIn && day.accommodation.checkOut && ' · '}
                        {day.accommodation.checkOut && <>Check-out: {day.accommodation.checkOut}</>}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3 text-[11px] font-body">
                      {day.accommodation.phone && (
                        <a href={`tel:${day.accommodation.phone.replace(/\s/g, '')}`}
                          className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                          <Phone size={10} /> {day.accommodation.phone}
                        </a>
                      )}
                      {day.accommodation.url && (
                        <a href={day.accommodation.url} target="_blank" rel="noopener noreferrer"
                          className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                          <ExternalLink size={10} /> Website
                        </a>
                      )}
                      {day.accommodation.mapUrl && (
                        <a href={day.accommodation.mapUrl} target="_blank" rel="noopener noreferrer"
                          className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                          <MapPin size={10} /> Open in Maps
                        </a>
                      )}
                    </div>
                    {day.accommodation.notes && (
                      <p className="text-cream/55 text-xs mt-3 leading-relaxed border-t border-stone/20 pt-3">
                        {day.accommodation.notes}
                      </p>
                    )}
                  </div>
                </Section>
              )}

              {/* Highlights (legacy schema) */}
              {day.highlights && day.highlights.length > 0 && (
                <Section title="Highlights">
                  <ul className="space-y-2">
                    {day.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-cream/75 text-sm">
                        <span className="text-glacier mt-0.5">—</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Meals */}
              <Section title="Food + coffee" icon={<Utensils size={11} />}>
                <div className="space-y-3">
                  {day.meals.map((m, i) => <MealCard key={i} meal={m} prevMeal={day.meals[i - 1]} />)}
                </div>
              </Section>

              {/* Spas / Thermal */}
              {day.spaOptions && day.spaOptions.length > 0 && (
                <Section title="Thermal · sauna · spa" icon={<Waves size={11} />}>
                  <div className="space-y-2">
                    {day.spaOptions.map((s, i) => (
                      <div key={i} className="bg-charcoal/40 border border-stone/20 rounded-xl p-3.5">
                        <div className="flex items-baseline justify-between gap-2 flex-wrap">
                          <p className="text-cream font-medium text-sm">{s.name}</p>
                          <span className="text-[10px] uppercase tracking-widest text-mist/70 font-body">{s.type}</span>
                        </div>
                        {s.address && <p className="text-cream/45 text-[11px] mt-0.5">{s.address}</p>}
                        {s.note && <p className="text-cream/65 text-xs mt-1.5 leading-relaxed">{s.note}</p>}
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] font-body">
                          {s.price && <span className="text-mist/80">{s.price}</span>}
                          {s.url && (
                            <a href={s.url} target="_blank" rel="noopener noreferrer"
                              className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                              Book <ExternalLink size={9} />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>
              )}
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* Must do (legacy) */}
              {day.mustDo && day.mustDo.length > 0 && (
                <Section title="Must do">
                  <ul className="space-y-2">
                    {day.mustDo.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-cream/75 text-sm">
                        <span className="text-aurora mt-0.5">✓</span>
                        <span className="leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Tips */}
              {day.tips && day.tips.length > 0 && (
                <Section title="Tips">
                  <ul className="space-y-2">
                    {day.tips.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-cream/55 text-xs">
                        <span className="text-mist/50 mt-0.5 shrink-0">→</span>
                        <span className="leading-relaxed">{t}</span>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Grocery stops */}
              {day.groceryStops && day.groceryStops.length > 0 && (
                <Section title="Grocery + fuel" icon={<ShoppingBag size={11} />}>
                  <div className="space-y-2">
                    {day.groceryStops.map((g, i) => (
                      <div key={i} className="bg-charcoal/30 border border-stone/15 rounded-lg p-3">
                        <p className="text-cream text-sm font-medium">{g.name}</p>
                        {g.address && <p className="text-cream/50 text-[11px] mt-0.5">{g.address}</p>}
                        {g.hours && <p className="text-cream/45 text-[11px] mt-0.5">Open: {g.hours}</p>}
                        {g.note && <p className="text-cream/60 text-xs mt-1 leading-relaxed">{g.note}</p>}
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {/* Bookings */}
              {day.bookings && day.bookings.length > 0 && (
                <Section title="Book ahead" icon={<Ticket size={11} />}>
                  <ul className="space-y-2">
                    {day.bookings.map((b, i) => (
                      <li key={i} className="bg-glacier/5 border border-glacier/20 rounded-lg px-3 py-2.5">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <p className="text-cream/85 text-xs leading-snug flex-1 min-w-0">{b.item}</p>
                          {b.status && <BookingStatusPill status={b.status} />}
                        </div>
                        {b.note && <p className="text-cream/50 text-[11px] mt-1 leading-relaxed">{b.note}</p>}
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 text-[11px] font-body">
                          {b.url && (
                            <a href={b.url} target="_blank" rel="noopener noreferrer"
                              className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                              Book <ExternalLink size={9} />
                            </a>
                          )}
                          {b.phone && (
                            <a href={`tel:${b.phone.replace(/\s/g, '')}`}
                              className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                              <Phone size={9} /> {b.phone}
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {/* Tickets needed (legacy) */}
              {(!day.bookings || day.bookings.length === 0) && day.ticketsNeeded && day.ticketsNeeded.length > 0 && (
                <Section title="Book ahead" icon={<Ticket size={11} />}>
                  <ul className="space-y-1.5">
                    {day.ticketsNeeded.map((t, i) => (
                      <li key={i} className="text-xs text-cream/65 flex items-start gap-2 bg-glacier/5 border border-glacier/20 rounded-lg px-3 py-2">
                        <span className="text-glacier shrink-0">!</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}
            </div>
          </div>

          {/* Alt sleep night */}
          {day.altSleepNight && (
            <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-5">
              <div className="flex items-start gap-2 mb-3">
                <AlertTriangle size={14} className="text-amber-300 mt-1 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-amber-300 font-body font-medium">Alternative</p>
                  <h4 className="font-display text-lg text-cream mt-0.5">{day.altSleepNight.headline}</h4>
                  <p className="text-cream/55 text-xs mt-1">Sleep: {day.altSleepNight.overnight}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-3">
                {day.altSleepNight.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-cream/70 text-sm">
                    <span className="text-amber-300/60 mt-0.5 shrink-0">→</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              {day.altSleepNight.drawbacks && (
                <div className="mt-3 pt-3 border-t border-amber-400/20">
                  <p className="text-[10px] uppercase tracking-widest text-cream/40 font-body mb-2">Trade-offs</p>
                  <ul className="space-y-1.5">
                    {day.altSleepNight.drawbacks.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-cream/55 text-xs">
                        <span className="text-amber-400/60 mt-0.5 shrink-0">!</span>
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  )
}

// =============================================================================
//  Helpers
// =============================================================================

function Section({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <p className="section-label mb-3 flex items-center gap-2">
        {icon} {title}
      </p>
      {children}
    </div>
  )
}

function MealCard({ meal, prevMeal }: { meal: Meal; prevMeal?: Meal }) {
  const showOrSeparator = meal.alt && prevMeal && prevMeal.type === meal.type
  const showTypeChange = !meal.alt && prevMeal && prevMeal.type !== meal.type
  return (
    <div>
      {showOrSeparator && (
        <div className="flex items-center gap-3 pb-3">
          <div className="flex-1 h-px bg-stone/20" />
          <span className="text-[10px] uppercase tracking-widest text-cream/40 font-body">or</span>
          <div className="flex-1 h-px bg-stone/20" />
        </div>
      )}
      {showTypeChange && <div className="h-2" />}
      <div className="bg-charcoal/50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <span className="section-label capitalize">{meal.type}</span>
          <span className={`text-[11px] px-2 py-0.5 rounded-full font-body
            ${meal.vibe === 'fine' ? 'bg-glacier/20 text-glacier' :
              meal.vibe === 'casual' ? 'bg-moss/20 text-moss-light' :
              'bg-stone/30 text-cream/55'}`}>
            {meal.vibe === 'fine' ? '✦ Fine' : meal.vibe === 'quick' ? '⚡ Quick' : '◎ Casual'}
          </span>
          {meal.booked && (
            <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-aurora/20 text-aurora font-body">
              Booked
            </span>
          )}
        </div>
        <p className="font-medium text-cream text-sm">{meal.name}</p>
        {meal.address && <p className="text-cream/45 text-[11px] mt-0.5">{meal.address}</p>}
        <p className="text-cream/60 text-xs mt-1.5 leading-relaxed">{meal.note}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] font-body">
          {meal.url && (
            <a href={meal.url} target="_blank" rel="noopener noreferrer"
              className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
              <ExternalLink size={9} /> Website
            </a>
          )}
          {meal.phone && (
            <a href={`tel:${meal.phone.replace(/\s/g, '')}`}
              className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
              <Phone size={9} /> {meal.phone}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function BookingStatusPill({ status }: { status: 'booked' | 'urgent' | 'todo' }) {
  const styles =
    status === 'booked' ? 'bg-aurora/20 text-aurora' :
    status === 'urgent' ? 'bg-red-400/20 text-red-300' :
    'bg-stone/30 text-cream/55'
  const label =
    status === 'booked' ? 'Booked' :
    status === 'urgent' ? 'Book now' :
    'To do'
  return (
    <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-body ${styles}`}>
      {label}
    </span>
  )
}

// silence unused-warning for Coffee import (kept for future use in meal types)
void Coffee

// Compact overnight label for the summary grid — "B2 Apartments, Reykjavík" -> "B2 · Reykjavík".
function abbreviateOvernight(overnight: string): string {
  if (!overnight) return ''
  if (overnight.includes('B2')) return 'B2 · Reykjavík'
  if (overnight.includes('Vík')) return 'Hotel Vík'
  if (overnight.startsWith('—')) return 'Homebound'
  return overnight.length > 22 ? overnight.slice(0, 22) + '…' : overnight
}

// Build a Google Maps "directions" URL for the day, stitched from drive[].from/to.
// Strips parenthetical clutter ("Reykjavík (B2)" -> "Reykjavík") so Google geocodes cleanly.
function buildDayDirectionsUrl(day: DayPlan): string {
  if (!day.drive || day.drive.length === 0) return 'https://www.google.com/maps'
  const clean = (s: string) => s.replace(/\s*\([^)]*\)/g, '').replace(/\s+OR\s+.*$/i, '').trim()
  const stops: string[] = [clean(day.drive[0].from)]
  for (const leg of day.drive) stops.push(clean(leg.to))
  // Dedupe consecutive identical stops (a from→to where to == next.from is normal; we want the unique chain)
  const dedup = stops.filter((s, i) => i === 0 || s !== stops[i - 1])
  return 'https://www.google.com/maps/dir/' + dedup.map(s => encodeURIComponent(s)).join('/')
}
