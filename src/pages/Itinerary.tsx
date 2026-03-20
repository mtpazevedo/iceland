import { useState } from 'react'
import { Clock, MapPin, Utensils, Ticket, ChevronDown, ChevronUp, Sunrise } from 'lucide-react'
import { itinerary } from '../data/itinerary'
import { photos } from '../data/photos'

export default function Itinerary() {
  const [expanded, setExpanded] = useState<number | null>(1)

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <p className="section-label mb-4">June 7 — 14 · 2026</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">The Plan</h1>
        <p className="text-cream/50 max-w-xl mx-auto">
          8 days, 1 car, 5 cameras, 0 complaints (probably). Click each day to expand.
        </p>
      </div>

      {/* Sticky day pills */}
      <div className="sticky top-16 z-30 bg-forest/90 backdrop-blur-md py-3 mb-8 -mx-6 px-6 border-b border-stone/20">
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {itinerary.map(day => (
            <button
              key={day.day}
              onClick={() => setExpanded(expanded === day.day ? null : day.day)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-body font-medium transition-all
                ${expanded === day.day
                  ? 'bg-glacier text-obsidian'
                  : 'bg-charcoal text-cream/50 hover:text-cream border border-stone/30'
                }`}
            >
              Day {day.day}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {itinerary.map(day => {
          const isOpen = expanded === day.day
          return (
            <div key={day.day} className={`card-glass overflow-hidden transition-all duration-300`}>
              {/* Header */}
              <button
                className="w-full text-left"
                onClick={() => setExpanded(isOpen ? null : day.day)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={photos.days[day.day] ?? day.heroImage}
                    alt={day.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="section-label">Day {day.day} · {day.date}</span>
                        <h2 className="display-title text-2xl md:text-3xl mt-1">{day.title}</h2>
                        <p className="text-cream/60 text-lg md:text-xl italic font-display mt-1">{day.subtitle}</p>
                      </div>
                      <div className="bg-obsidian/60 rounded-full p-1.5 mt-1">
                        {isOpen ? <ChevronUp size={16} className="text-cream/60" /> : <ChevronDown size={16} className="text-cream/60" />}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-cream/90">
                      <span className="flex items-center gap-1.5"><MapPin size={13} />{day.location}</span>
                      {day.driveTime && <span className="flex items-center gap-1.5"><Clock size={13} />{day.driveTime}</span>}
                      <span className="flex items-center gap-1.5"><Sunrise size={13} />Sleep: {day.overnight}</span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div className="p-6 md:p-8 border-t border-stone/20 grid md:grid-cols-2 gap-8">
                  {/* Left column */}
                  <div className="space-y-6">
                    <div>
                      <p className="section-label mb-3">Highlights</p>
                      <ul className="space-y-2">
                        {day.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-cream/70 text-sm">
                            <span className="text-glacier mt-0.5">—</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="section-label mb-3 flex items-center gap-2">
                        <Utensils size={11} /> Food
                      </p>
                      <div className="space-y-3">
                        {day.meals.map((meal, i) => (
                          <div key={i} className="bg-charcoal/50 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="section-label capitalize">{meal.type}</span>
                              <span className={`text-xs px-2 py-0.5 rounded-full font-body
                                ${meal.vibe === 'fine' ? 'bg-glacier/20 text-glacier' :
                                  meal.vibe === 'casual' ? 'bg-moss/20 text-moss-light' :
                                  'bg-stone/30 text-cream/50'}`}>
                                {meal.vibe === 'fine' ? '✦ Fine dining' : meal.vibe === 'quick' ? '⚡ Quick bite' : '◎ Casual'}
                              </span>
                            </div>
                            <p className="font-medium text-cream text-sm">{meal.name}</p>
                            <p className="text-cream/50 text-xs mt-1 leading-relaxed">{meal.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-6">
                    <div>
                      <p className="section-label mb-3">Must do</p>
                      <ul className="space-y-2">
                        {day.mustDo.map((m, i) => (
                          <li key={i} className="flex items-start gap-2 text-cream/70 text-sm">
                            <span className="text-aurora mt-0.5">✓</span>
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="section-label mb-3">Tips</p>
                      <ul className="space-y-2">
                        {day.tips.map((t, i) => (
                          <li key={i} className="flex items-start gap-2 text-cream/50 text-xs">
                            <span className="text-mist/50 mt-0.5 shrink-0">→</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {day.ticketsNeeded && day.ticketsNeeded.length > 0 && (
                      <div>
                        <p className="section-label mb-3 flex items-center gap-2">
                          <Ticket size={11} /> Book ahead
                        </p>
                        <ul className="space-y-1.5">
                          {day.ticketsNeeded.map((t, i) => (
                            <li key={i} className="text-xs text-cream/60 flex items-start gap-2 bg-glacier/5 border border-glacier/20 rounded-lg px-3 py-2">
                              <span className="text-glacier shrink-0">!</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
