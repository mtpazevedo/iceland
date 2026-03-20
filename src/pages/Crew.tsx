import { ExternalLink } from 'lucide-react'
import { participants } from '../data/participants'
import { resources } from '../data/resources'

export default function Crew() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="section-label mb-4">The gang</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">Meet the Crew</h1>
        <p className="text-cream/50 max-w-xl mx-auto">
          Five very different people. One car. 8 days. What could go wrong?
        </p>
      </div>

      {/* Crew cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {participants.map(person => (
          <div key={person.id} className="card-glass p-6 group hover:border-stone/50 transition-all duration-300">
            <div className="w-28 h-28 rounded-full mb-4 border-2 overflow-hidden shrink-0"
              style={{ borderColor: person.color + '60' }}>
              <img src={person.photo} alt={person.name}
                className="w-full h-full object-cover object-center scale-[1.35]" />
            </div>
            <h3 className="font-display text-2xl text-cream mb-1">{person.name}</h3>
            <p className="text-cream/40 text-sm italic mb-4">"{person.tagline}"</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {person.vibe.map(v => (
                <span key={v} className="text-xs px-2.5 py-1 rounded-full border font-body"
                  style={{ borderColor: person.color + '40', color: person.color, backgroundColor: person.color + '10' }}>
                  {v}
                </span>
              ))}
            </div>
            <div className="bg-charcoal/50 rounded-xl p-3 mb-3">
              <div className="flex items-center justify-between">
                <span className="section-label text-xs">Dining style</span>
                <span className={`text-xs font-medium ${person.diningStyle === 'fine' ? 'text-glacier' : person.diningStyle === 'casual' ? 'text-moss-light' : 'text-aurora'}`}>
                  {person.diningStyle === 'fine' ? '✦ Fine dining' : person.diningStyle === 'casual' ? '◎ Casual vibes' : '✦ / ◎ Either'}
                </span>
              </div>
              {!person.drinker && (
                <div className="flex items-center justify-between mt-2">
                  <span className="section-label text-xs">Drinks</span>
                  <span className="text-xs text-cream/40">☕ Non-drinker (mocktail queen)</span>
                </div>
              )}
            </div>
            <p className="text-cream/40 text-xs italic leading-relaxed">{person.funFact}</p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div className="mb-24 text-center">
        <div className="card-glass p-8 max-w-2xl mx-auto">
          <p className="font-display text-xl text-cream/70 italic leading-relaxed">
            "We travel not to escape life, but for life not to escape us.
            And it's always better with the right people."
          </p>
          <p className="section-label mt-4">The golden rule</p>
        </div>
      </div>

      {/* Resources */}
      <div>
        <div className="text-center mb-10">
          <p className="section-label mb-3">Pre-trip homework</p>
          <h2 className="display-title text-4xl md:text-5xl mb-3">Read. Listen. Dream.</h2>
          <p className="text-cream/50 max-w-xl mx-auto text-sm">
            The best books, podcasts and links to get you in the Iceland mindset before you even pack.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="section-label mb-5">📖 Books</p>
            <div className="space-y-4">
              {resources.books.map(b => (
                <div key={b.title} className="card-glass p-4">
                  <span className="text-xs bg-glacier/15 text-glacier px-2 py-0.5 rounded-full font-body">{b.type}</span>
                  <h4 className="font-display text-lg text-cream mt-2 mb-0.5">{b.title}</h4>
                  <p className="text-cream/40 text-sm mb-2">{b.author}</p>
                  <p className="text-cream/55 text-sm leading-relaxed">{b.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label mb-5">🎙 Podcasts</p>
            <div className="space-y-4">
              {resources.podcasts.map(p => (
                <div key={p.title} className="card-glass p-4">
                  <h4 className="font-display text-lg text-cream mb-1">{p.title}</h4>
                  <p className="text-cream/55 text-sm leading-relaxed mb-2">{p.note}</p>
                  <span className="text-xs text-mist/60">{p.where}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label mb-5">🔗 Useful links</p>
            <div className="space-y-3">
              {resources.links.map(l => (
                <a key={l.title} href={l.url} target="_blank" rel="noopener noreferrer"
                  className="card-glass p-4 block hover:border-mist/30 transition-colors group">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-sm text-cream group-hover:text-glacier transition-colors">{l.title}</h4>
                    <ExternalLink size={12} className="text-stone group-hover:text-glacier transition-colors shrink-0 mt-0.5" />
                  </div>
                  <p className="text-cream/45 text-sm mt-1 leading-relaxed">{l.note}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
