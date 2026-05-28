import { itinerary } from '../data/itinerary'

const mealOrder: Record<string, number> = {
  breakfast: 0,
  coffee: 1,
  lunch: 2,
  snack: 3,
  dinner: 4,
}

// Final version. Background = Pantone 18-3917 TCX "Folkstone Gray" (#63676E).
export default function Simple() {
  return (
    <div className="qs-root min-h-screen">
      <style>{`
        .qs-root { background: #63676E; color: #f3f4f6; }
        .qs-muted { color: rgba(243,244,246,0.72); }
        .qs-soft  { color: rgba(243,244,246,0.55); }
        .qs-faint { color: rgba(243,244,246,0.42); }
        .qs-bd    { border-color: rgba(243,244,246,0.22); }
        .qs-bd-l  { border-color: rgba(243,244,246,0.14); }
        .qs-btn   { border: 1px solid rgba(243,244,246,0.4); }
        .qs-btn:hover { background: #f3f4f6; color: #63676E; }
        @media print {
          @page { size: A4; margin: 14mm; }
          .qs-root { background: #fff; color: #000; }
          .qs-muted { color: rgba(0,0,0,0.72); }
          .qs-soft  { color: rgba(0,0,0,0.55); }
          .qs-faint { color: rgba(0,0,0,0.42); }
          .qs-bd    { border-color: rgba(0,0,0,0.2); }
          .qs-bd-l  { border-color: rgba(0,0,0,0.12); }
          .no-print { display: none !important; }
          .day-card { page-break-inside: avoid; break-inside: avoid; }
          .day-card + .day-card { page-break-before: always; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-6 py-10 pt-24">
        <header className="mb-8 border-b qs-bd pb-4">
          <h1 className="text-3xl font-display italic">Iceland '26 — Quick Sheet</h1>
          <p className="text-sm qs-muted mt-1">
            June 7–14, 2026 · 5 friends · Reykjavík base + 1 night Vík
          </p>
          <div className="no-print mt-3 flex gap-3 text-xs">
            <button
              onClick={() => window.print()}
              className="qs-btn px-3 py-1 transition-colors"
            >
              Print / Save as PDF
            </button>
            <a href="#/itinerary" className="qs-btn px-3 py-1 transition-colors">
              ← Full itinerary
            </a>
          </div>
        </header>

        {itinerary.map((day) => {
          const primaryMeals = [...day.meals]
            .filter((m) => !m.alt)
            .sort((a, b) => (mealOrder[a.type] ?? 9) - (mealOrder[b.type] ?? 9))

          const schedule = (day.schedule ?? []).filter((s) => s.time && s.time !== '— OR —')

          return (
            <section key={day.day} className="day-card mb-10">
              <div className="mb-2">
                <div className="text-xs uppercase tracking-widest qs-soft">
                  Day {day.day} · {day.date}
                </div>
                <h2 className="text-xl font-display italic leading-tight">{day.title}</h2>
                <div className="text-sm qs-muted">{day.location}</div>
                {day.totalDriveTime && (
                  <div className="text-xs qs-soft mt-1">{day.totalDriveTime}</div>
                )}
              </div>

              {schedule.length > 0 && (
                <table className="w-full text-sm mb-3 border-t qs-bd-l">
                  <tbody>
                    {schedule.map((s, i) => (
                      <tr key={i} className="border-b qs-bd-l align-top">
                        <td className="py-1 pr-3 font-mono text-xs qs-muted whitespace-nowrap w-16">
                          {s.time}
                        </td>
                        <td className="py-1">
                          <span className={s.highlight ? 'font-semibold' : ''}>
                            {stripTitle(s.title)}
                          </span>
                          {s.duration && (
                            <span className="text-xs qs-faint ml-2">({s.duration})</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {primaryMeals.length > 0 && (
                <div className="text-xs qs-muted">
                  <span className="uppercase tracking-widest qs-faint mr-2">Meals</span>
                  {primaryMeals.map((m, i) => (
                    <span key={i}>
                      {i > 0 ? ' · ' : ''}
                      <span className="qs-soft capitalize">{m.type}: </span>
                      <span>{m.name}</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="text-xs qs-muted mt-1">
                <span className="uppercase tracking-widest qs-faint mr-2">Sleep</span>
                {day.overnight}
              </div>
            </section>
          )
        })}

        <footer className="text-xs qs-faint border-t qs-bd-l pt-4 mt-8">
          Quick sheet view — final version. Full details, drive legs, photo spots and bookings on the main Itinerary tab.
        </footer>
      </div>
    </div>
  )
}

function stripTitle(t: string): string {
  return t.replace(/^★\s*/, '').replace(/\s*\(BOOKED\)$/i, '')
}
