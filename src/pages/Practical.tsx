import { useState } from 'react'
import { Check, AlertTriangle, ExternalLink, Car } from 'lucide-react'
import { packingList, ticketsToBuy, carRentalTips } from '../data/practical'

type Tab = 'packing' | 'tickets' | 'car'

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
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="section-label mb-4">Before you go</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">Practical</h1>
        <p className="text-cream/50">Everything you need to know before landing in Keflavík.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-stone/30 pb-4">
        {([
          ['tickets', '🎟  Book ahead'],
          ['packing', '🎒  What to pack'],
          ['car', '🚗  Car rental'],
        ] as [Tab, string][]).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all
              ${tab === id ? 'bg-glacier text-obsidian' : 'text-cream/50 hover:text-cream'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tickets tab */}
      {tab === 'tickets' && (
        <div className="space-y-4">
          <p className="text-cream/40 text-sm mb-6">
            These should be booked NOW. Iceland's popular experiences sell out weeks to months ahead.
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
                    <p className="text-cream/40 text-xs mt-0.5">{ticket.location}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-body shrink-0
                    ${ticket.urgency === 'book-now' ? 'bg-red-400/20 text-red-300' :
                      ticket.urgency === 'book-soon' ? 'bg-amber-400/20 text-amber-300' :
                      'bg-stone/30 text-cream/40'}`}>
                    {ticket.urgency === 'book-now' ? '⚠ Book now' :
                     ticket.urgency === 'book-soon' ? '→ Book soon' : 'Optional'}
                  </span>
                </div>
                <p className="text-cream/60 text-xs mt-2 leading-relaxed">{ticket.note}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-cream/30 text-xs">{ticket.estimated}</span>
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
      )}

      {/* Packing tab */}
      {tab === 'packing' && (
        <div className="space-y-8">
          <p className="text-cream/40 text-sm">Click items to check them off as you pack.</p>
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
                      onClick={() => toggle(key)}
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
                          <p className="text-cream/40 text-xs mt-0.5">{item.note}</p>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Car tab */}
      {tab === 'car' && (
        <div className="space-y-4">
          <div className="card-glass p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Car size={20} className="text-glacier" />
              <h3 className="font-display text-xl text-cream">Car Rental Tips</h3>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
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
              <p className={`text-sm ${tip.important ? 'text-cream/80' : 'text-cream/50'}`}>{tip.tip}</p>
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
                  <p className="text-cream/40 text-xs mt-1">{co.note}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
