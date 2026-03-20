import { useState, useEffect } from 'react'

const TARGET = new Date('2026-06-07T12:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = TARGET.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, gone: true }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    gone: false,
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (time.gone) {
    return (
      <div className="text-center">
        <p className="font-display text-2xl text-glacier italic">You're in Iceland right now! 🇮🇸</p>
      </div>
    )
  }

  const units = [
    { label: 'days', value: time.days },
    { label: 'hrs', value: time.hours },
    { label: 'min', value: time.minutes },
    { label: 'sec', value: time.seconds },
  ]

  return (
    <div className="flex items-center gap-3 md:gap-5">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-3 md:gap-5">
          <div className="text-center">
            <div className="font-display text-3xl md:text-5xl font-light text-cream tabular-nums w-14 md:w-20 text-center">
              {String(value).padStart(2, '0')}
            </div>
            <div className="section-label text-xs mt-1">{label}</div>
          </div>
          {i < 3 && <span className="font-display text-2xl text-stone mb-4">:</span>}
        </div>
      ))}
    </div>
  )
}
