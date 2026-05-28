import { useState } from 'react'
import {
  Check, AlertTriangle, ExternalLink, Car, Star, Phone, MapPin, Languages,
  Utensils, Theater,
} from 'lucide-react'
import {
  packingList, ticketsToBuy, carRentalTips, mustDoExperiences, summerNotes,
  usefulApps, moneySavingTips, restaurantReservations, culturalVenues, coolBars,
  photographersToFollow,
  type ReservationStatus,
} from '../data/practical'
import { events } from '../data/events'
import { icelandicPhrases } from '../data/resources'

type Tab = 'tickets' | 'restaurants' | 'culture' | 'phrases' | 'guide' | 'packing' | 'car'

export default function Practical() {
  const [tab, setTab] = useState<Tab>('tickets')
  const [checked, setChecked] = useState<Set<string>>(new Set())

  function toggle(key: string) {
    setChecked(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-5 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="section-label mb-4">Before you go</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">Practical</h1>
        <p className="text-cream/55">Everything you need to know before landing in Keflavík.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-stone/30 pb-4">
        {([
          ['tickets', '🎟  Tickets & tours'],
          ['restaurants', '🍽  Restaurants'],
          ['culture', '🎭  Culture'],
          ['phrases', '🗣  Phrases'],
          ['guide', '🧭  Local guide'],
          ['packing', '🎒  Pack'],
          ['car', '🚗  Car'],
        ] as [Tab, string][]).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all
              ${tab === id ? 'bg-glacier text-obsidian' : 'text-cream/55 hover:text-cream'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'tickets' && <TicketsTab />}
      {tab === 'restaurants' && <RestaurantsTab />}
      {tab === 'culture' && <CultureTab />}
      {tab === 'phrases' && <PhrasesTab />}
      {tab === 'guide' && <GuideTab />}
      {tab === 'packing' && <PackingTab checked={checked} onToggle={toggle} />}
      {tab === 'car' && <CarTab />}
    </div>
  )
}

// =============================================================================
//  TICKETS — sightseeing + tour reservations only
// =============================================================================

function TicketsTab() {
  return (
    <div className="space-y-4">
      <p className="text-cream/55 text-sm mb-2 leading-relaxed">
        Sightseeing + tours. Restaurant reservations live on the next tab. Book the red-flagged ones first.
      </p>
      {ticketsToBuy.map(ticket => (
        <div key={ticket.name} className="card-glass p-5 flex items-start gap-4">
          <div className={`w-2 h-2 rounded-full mt-2 shrink-0
            ${ticket.urgency === 'book-now' ? 'bg-red-400 animate-pulse' :
              ticket.urgency === 'book-soon' ? 'bg-amber-400' : 'bg-stone'}`}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <h3 className="font-medium text-cream text-sm">{ticket.name}</h3>
                <p className="text-cream/45 text-xs mt-0.5">{ticket.location}</p>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full font-body shrink-0
                ${ticket.urgency === 'book-now' ? 'bg-red-400/20 text-red-300' :
                  ticket.urgency === 'book-soon' ? 'bg-amber-400/20 text-amber-300' :
                  'bg-stone/30 text-cream/50'}`}>
                {ticket.urgency === 'book-now' ? '⚠ Book now' :
                 ticket.urgency === 'book-soon' ? '→ Book soon' : 'Optional'}
              </span>
            </div>
            <p className="text-cream/65 text-xs mt-2 leading-relaxed">{ticket.note}</p>
            <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
              <span className="text-cream/35 text-xs">{ticket.estimated}</span>
              <a
                href={ticket.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-glacier text-xs hover:text-glacier-light transition-colors"
              >
                Book <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// =============================================================================
//  RESTAURANTS — reservations grouped by status
// =============================================================================

function RestaurantsTab() {
  const groups: { status: ReservationStatus; label: string; tone: string; description: string }[] = [
    { status: 'booked',    label: 'Booked',     tone: 'border-aurora/40 bg-aurora/5',     description: 'Confirmed reservations. Just show up.' },
    { status: 'book-now',  label: 'Book now',   tone: 'border-red-400/40 bg-red-400/5',   description: 'Urgent — these book out 2-12 weeks ahead.' },
    { status: 'book-soon', label: 'Book soon',  tone: 'border-amber-400/40 bg-amber-400/5', description: '1-3 weeks ahead is safe.' },
    { status: 'walk-in',   label: 'Walk-in',    tone: 'border-stone/40 bg-charcoal/30',   description: 'Show up without a reservation. Or call same-day if anxious.' },
    { status: 'declined',  label: 'Declined / dropped', tone: 'border-stone/30 bg-charcoal/20 opacity-70', description: 'Not happening this trip — listed for reference.' },
  ]
  return (
    <div className="space-y-10">
      <div className="flex items-start gap-3 bg-glacier/5 border border-glacier/20 rounded-xl p-4">
        <Utensils size={16} className="text-glacier mt-1 shrink-0" />
        <p className="text-cream/70 text-sm leading-relaxed">
          Two confirmed bookings: <strong className="text-aurora">Apotek (Jun 8)</strong> and <strong className="text-aurora">Hótel Vík (Jun 10)</strong>. Everything else is below by status.
        </p>
      </div>
      {groups.map(group => {
        const items = restaurantReservations.filter(r => r.status === group.status)
        if (items.length === 0) return null
        return (
          <section key={group.status}>
            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
              <h3 className="display-title text-2xl">{group.label}</h3>
              <span className="text-cream/45 text-xs">{group.description}</span>
            </div>
            <div className={`rounded-2xl border ${group.tone} p-3 sm:p-4 space-y-2`}>
              {items.map(r => (
                <div key={r.name} className="bg-obsidian/30 rounded-lg p-3 sm:p-4">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-cream font-medium text-sm">{r.name}</p>
                      <p className="text-cream/50 text-[11px] mt-0.5">{r.day} · {r.cityOrArea}</p>
                    </div>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-body shrink-0
                      ${r.vibe === 'fine' ? 'bg-glacier/20 text-glacier' :
                        r.vibe === 'casual' ? 'bg-moss/20 text-moss-light' :
                        'bg-stone/30 text-cream/55'}`}>
                      {r.vibe === 'fine' ? '✦ Fine' : r.vibe === 'quick' ? '⚡ Quick' : '◎ Casual'}
                    </span>
                  </div>
                  {r.address && (
                    <p className="text-cream/40 text-[11px] mt-1.5 flex items-center gap-1.5">
                      <MapPin size={10} /> {r.address}
                    </p>
                  )}
                  {r.note && <p className="text-cream/65 text-xs mt-1.5 leading-relaxed">{r.note}</p>}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[11px] font-body">
                    {r.url && (
                      <a href={r.url} target="_blank" rel="noopener noreferrer"
                        className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                        <ExternalLink size={10} /> Website
                      </a>
                    )}
                    {r.phone && (
                      <a href={`tel:${r.phone.replace(/\s/g, '')}`}
                        className="text-glacier hover:text-glacier-light inline-flex items-center gap-1">
                        <Phone size={10} /> {r.phone}
                      </a>
                    )}
                    {r.estimated && <span className="text-cream/40">{r.estimated}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

// =============================================================================
//  CULTURE — venues + festivals during our window
// =============================================================================

function CultureTab() {
  return (
    <div className="space-y-12">
      <div className="flex items-start gap-3 bg-aurora/5 border border-aurora/20 rounded-xl p-4">
        <Theater size={16} className="text-aurora mt-1 shrink-0" />
        <p className="text-cream/70 text-sm leading-relaxed">
          Festivals + theatre + film + music venues for Reykjavík nights. Programmes for 2026 typically publish March-April — confirm closer to the trip.
        </p>
      </div>

      {/* Festivals & shows during the window */}
      <section>
        <h3 className="display-title text-2xl mb-3">During our trip · Jun 7-14, 2026</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {events.map(ev => (
            <div key={ev.title} className="card-glass p-4">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-widest text-aurora/80 font-body">{ev.date}</span>
                <span className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full font-body
                  ${ev.status === 'confirmed' ? 'bg-aurora/20 text-aurora' :
                    ev.status === 'expected' ? 'bg-glacier/15 text-glacier' :
                    'bg-stone/30 text-cream/50'}`}>
                  {ev.status}
                </span>
                <span className="text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-stone/30 text-cream/50 font-body">
                  {ev.tag}
                </span>
              </div>
              <h4 className="text-cream text-sm font-medium leading-snug mb-1">{ev.title}</h4>
              <p className="text-cream/45 text-xs mb-2">{ev.where}</p>
              <p className="text-cream/65 text-xs leading-relaxed">{ev.blurb}</p>
              {ev.url && (
                <a href={ev.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-glacier hover:text-glacier-light text-xs mt-2">
                  Details <ExternalLink size={10} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Photographers to follow */}
      <section>
        <h3 className="display-title text-2xl mb-1">Photographers to follow</h3>
        <p className="text-cream/45 text-xs mb-4">Pre-load Instagram refs for the trip — angles, weather, golden-hour timing.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {photographersToFollow.map(p => (
            <a
              key={p.handle}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-4 hover:border-aurora/30 transition-colors group"
            >
              <div className="flex items-baseline justify-between gap-2 mb-1 flex-wrap">
                <h4 className="text-cream font-medium text-sm group-hover:text-aurora transition-colors">{p.name}</h4>
                <span className="text-glacier text-[10px] font-mono">{p.handle}</span>
              </div>
              <p className="text-cream/50 text-[10px] uppercase tracking-widest font-body mb-2">{p.specialty}</p>
              <p className="text-cream/65 text-xs leading-relaxed">{p.blurb}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Cool bars */}
      <section>
        <h3 className="display-title text-2xl mb-1">Cool bars in Reykjavík</h3>
        <p className="text-cream/45 text-xs mb-4">Ranked by vibe, not by hype. All walk-in unless flagged.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {coolBars.map(b => (
            <a
              key={b.name}
              href={b.url || '#'}
              target={b.url ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`card-glass p-4 transition-colors group ${b.url ? 'hover:border-aurora/30' : 'cursor-default'}`}
            >
              <div className="flex items-baseline justify-between gap-2 mb-1 flex-wrap">
                <h4 className="text-cream font-medium text-sm group-hover:text-aurora transition-colors">{b.name}</h4>
                <span className={`text-[10px] uppercase tracking-widest font-body shrink-0
                  ${b.vibe === 'speakeasy' ? 'text-aurora' :
                    b.vibe === 'cocktail' ? 'text-glacier' :
                    b.vibe === 'craft beer' ? 'text-moss-light' :
                    b.vibe === 'wine' ? 'text-amber-300' :
                    b.vibe === 'dance' ? 'text-aurora' :
                    b.vibe === 'live music' ? 'text-glacier-light' :
                    'text-cream/45'}`}>
                  {b.vibe}
                </span>
              </div>
              <p className="text-cream/45 text-[11px] flex items-center gap-1.5 mb-2"><MapPin size={10} /> {b.address}</p>
              <p className="text-cream/65 text-xs leading-relaxed">{b.blurb}</p>
              {b.bookAhead && (
                <p className="text-aurora/80 text-[10px] uppercase tracking-widest font-body mt-2">
                  Book ahead
                </p>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Standing venues */}
      <section>
        <h3 className="display-title text-2xl mb-1">Standing venues</h3>
        <p className="text-cream/45 text-xs mb-4">Open year-round. Check their site the morning-of for the night's bill.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {culturalVenues.map(v => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glass p-4 hover:border-aurora/30 transition-colors group"
            >
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h4 className="text-cream font-medium text-sm group-hover:text-aurora transition-colors">{v.name}</h4>
                <span className="text-[10px] uppercase tracking-widest text-cream/40 font-body shrink-0">{v.type}</span>
              </div>
              <p className="text-cream/45 text-[11px] flex items-center gap-1.5 mb-2"><MapPin size={10} /> {v.address}</p>
              <p className="text-cream/65 text-xs leading-relaxed">{v.blurb}</p>
              {v.whenInPlan && (
                <p className="text-aurora/80 text-[10px] uppercase tracking-widest font-body mt-2">
                  {v.whenInPlan}
                </p>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

// =============================================================================
//  PHRASES — Icelandic vocabulary, given more space
// =============================================================================

function PhrasesTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 bg-moss/5 border border-moss/20 rounded-xl p-4">
        <Languages size={16} className="text-moss-light mt-1 shrink-0" />
        <p className="text-cream/70 text-sm leading-relaxed">
          Icelanders speak excellent English but light up when you try. The "ð" (eth) sounds like "th" in <em>the</em>; "þ" (thorn) like "th" in <em>thin</em>.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {icelandicPhrases.map(p => (
          <div key={p.phrase} className="card-glass p-5">
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <p className="font-display text-2xl text-cream leading-tight">{p.phrase}</p>
              <span className="font-mono text-glacier text-xs whitespace-nowrap">{p.pronunciation}</span>
            </div>
            <p className="text-cream/85 font-medium text-sm">{p.meaning}</p>
            <p className="text-cream/55 text-xs mt-1.5 leading-relaxed">{p.note}</p>
          </div>
        ))}
      </div>
      <p className="text-cream/40 text-xs text-center mt-6">
        Want more? <a href="https://icelandiconline.com" target="_blank" rel="noopener noreferrer"
          className="text-glacier hover:text-glacier-light underline underline-offset-2">
          Free Icelandic Online from the University of Iceland</a>.
      </p>
    </div>
  )
}

// =============================================================================
//  GUIDE — must-do experiences, hotels, apps, money tips (existing content)
// =============================================================================

function GuideTab() {
  return (
    <div className="space-y-14">
      <section>
        <p className="section-label mb-3">Recommendations</p>
        <h3 className="display-title text-3xl mb-3">Must-do this summer</h3>
        <p className="text-cream/55 text-sm leading-relaxed mb-6">{summerNotes.weather}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {summerNotes.activities.map(a => (
            <span key={a} className="text-xs bg-moss/15 text-moss-light px-3 py-1 rounded-full font-body">
              {a}
            </span>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {mustDoExperiences.map(rec => {
            const inPlan = rec.whenInPlan?.toLowerCase().includes('in plan')
            return (
              <div key={rec.title} className="card-glass p-4">
                <div className="flex items-start gap-2">
                  <Star size={14} className={`shrink-0 mt-1 ${inPlan ? 'text-aurora' : 'text-glacier/60'}`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-cream text-sm font-medium">{rec.title}</h4>
                    <p className="text-cream/55 text-xs mt-1 leading-relaxed">{rec.note}</p>
                    {rec.whenInPlan && (
                      <p className={`text-[10px] mt-2 uppercase tracking-widest font-body ${inPlan ? 'text-aurora' : 'text-cream/40'}`}>
                        {rec.whenInPlan}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section>
        <p className="section-label mb-3">Bookmark before you fly</p>
        <h3 className="display-title text-3xl mb-6">Apps & sites</h3>
        <div className="space-y-2">
          {usefulApps.map(a => (
            <a
              key={a.name}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 p-4 rounded-xl bg-charcoal/40 hover:bg-charcoal/70 border border-stone/20 hover:border-glacier/40 transition-colors group"
            >
              <ExternalLink size={13} className="text-glacier mt-1 shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-cream text-sm font-medium group-hover:text-glacier transition-colors">{a.name}</h4>
                <p className="text-cream/55 text-xs mt-1 leading-relaxed">{a.note}</p>
                <p className="text-cream/30 text-[10px] mt-1 truncate">{a.url}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section>
        <p className="section-label mb-3">Stretch the krónur</p>
        <h3 className="display-title text-3xl mb-6">Money-saving tips</h3>
        <div className="space-y-6">
          {moneySavingTips.map(group => (
            <div key={group.category} className="card-glass p-5">
              <h4 className="font-display text-lg text-cream mb-3 flex items-center gap-2">
                <span>{group.icon}</span> {group.category}
              </h4>
              <ul className="space-y-2">
                {group.tips.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-cream/65 text-sm">
                    <span className="text-glacier mt-0.5 shrink-0">—</span>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// =============================================================================
//  PACKING (existing content)
// =============================================================================

function PackingTab({ checked, onToggle }: { checked: Set<string>; onToggle: (k: string) => void }) {
  return (
    <div className="space-y-8">
      <p className="text-cream/55 text-sm">Click items to check them off as you pack.</p>
      {Object.entries(packingList).map(([category, items]) => (
        <div key={category}>
          <h3 className="section-label mb-4 capitalize">{category}</h3>
          <div className="space-y-2">
            {items.map((item, i) => {
              const key = `${category}-${i}`
              const done = checked.has(key)
              return (
                <button
                  key={key}
                  onClick={() => onToggle(key)}
                  className={`w-full text-left flex items-start gap-3 p-3 rounded-xl transition-all duration-200
                    ${done ? 'opacity-40' : 'hover:bg-ash/80'}`}
                >
                  <div className={`w-5 h-5 rounded-md border shrink-0 mt-0.5 flex items-center justify-center transition-all
                    ${done ? 'bg-glacier border-glacier' : 'border-stone/50'}`}>
                    {done && <Check size={12} className="text-obsidian" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-sm ${done ? 'line-through text-cream/30' : 'text-cream'}`}>
                        {item.item}
                      </span>
                      {item.priority === 'essential' && !done && (
                        <span className="text-xs bg-glacier/15 text-glacier px-2 py-0.5 rounded-full">essential</span>
                      )}
                    </div>
                    {item.note && !done && (
                      <p className="text-cream/45 text-xs mt-0.5">{item.note}</p>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

// =============================================================================
//  CAR (existing content)
// =============================================================================

function CarTab() {
  return (
    <div className="space-y-4">
      <div className="card-glass p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Car size={20} className="text-glacier" />
          <h3 className="font-display text-xl text-cream">Car Rental Tips</h3>
        </div>
        <p className="text-cream/55 text-sm leading-relaxed">
          For 5 people + luggage, book a <strong className="text-cream">large SUV</strong> (Toyota Land Cruiser, Dacia Duster 4x4, or similar).
          Iceland roads are generally good, but gravel protection insurance is worth it.
        </p>
      </div>
      {carRentalTips.map((tip, i) => (
        <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${tip.important ? 'card-glass border-glacier/20' : 'bg-charcoal/30 border border-stone/10'}`}>
          {tip.important
            ? <AlertTriangle size={14} className="text-amber-400 shrink-0 mt-0.5" />
            : <span className="text-stone text-sm shrink-0 mt-0.5">·</span>
          }
          <p className={`text-sm ${tip.important ? 'text-cream/85' : 'text-cream/55'}`}>{tip.tip}</p>
        </div>
      ))}

      <div className="mt-8 card-glass p-6">
        <h4 className="section-label mb-4">Recommended rental companies</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { name: 'Lagoon Car Rental', note: 'Competitive prices, good fleet', url: 'https://lagooncarrental.is' },
            { name: 'Northbound', note: 'Great for larger vehicles', url: 'https://northbound.is' },
            { name: 'Blue Car Rental', note: 'Transparent pricing', url: 'https://www.bluecarrental.is' },
          ].map(co => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal/50 rounded-xl p-4 hover:border-mist/30 border border-stone/20 transition-colors group"
            >
              <p className="text-cream text-sm font-medium group-hover:text-glacier transition-colors">{co.name}</p>
              <p className="text-cream/45 text-xs mt-1">{co.note}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
