import { useState, useEffect } from 'react'
import { Cloud, Thermometer, Wind, Droplets } from 'lucide-react'

interface WeatherDay {
  date: string
  maxTemp: number
  minTemp: number
  precipitation: number
  windspeed: number
  weathercode: number
}

function weatherDescription(code: number): { label: string; emoji: string } {
  if (code === 0) return { label: 'Clear sky', emoji: '☀️' }
  if (code <= 2) return { label: 'Partly cloudy', emoji: '⛅' }
  if (code <= 3) return { label: 'Overcast', emoji: '☁️' }
  if (code <= 49) return { label: 'Fog', emoji: '🌫️' }
  if (code <= 59) return { label: 'Drizzle', emoji: '🌦️' }
  if (code <= 69) return { label: 'Rain', emoji: '🌧️' }
  if (code <= 79) return { label: 'Snow', emoji: '❄️' }
  if (code <= 82) return { label: 'Rain showers', emoji: '🌦️' }
  return { label: 'Stormy', emoji: '⛈️' }
}

export default function Weather() {
  const [forecast, setForecast] = useState<WeatherDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Reykjavík coordinates
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=64.1355&longitude=-21.8954&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=Atlantic%2FReykjavik&forecast_days=7'
    )
      .then(r => r.json())
      .then(data => {
        const days: WeatherDay[] = data.daily.time.map((date: string, i: number) => ({
          date,
          maxTemp: Math.round(data.daily.temperature_2m_max[i]),
          minTemp: Math.round(data.daily.temperature_2m_min[i]),
          precipitation: data.daily.precipitation_sum[i],
          windspeed: Math.round(data.daily.windspeed_10m_max[i]),
          weathercode: data.daily.weathercode[i],
        }))
        setForecast(days)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="card-glass p-6 animate-pulse">
      <div className="h-4 bg-stone/30 rounded w-32 mb-4" />
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, i) => <div key={i} className="h-20 bg-stone/20 rounded-lg" />)}
      </div>
    </div>
  )

  if (error) return (
    <div className="card-glass p-6 text-center">
      <p className="text-cream/40 text-sm">Weather data unavailable — Iceland probably looks dramatic though.</p>
    </div>
  )

  return (
    <div className="card-glass p-6">
      <div className="flex items-center gap-2 mb-4">
        <Cloud size={14} className="text-glacier" />
        <span className="section-label">Reykjavík — 7-day forecast</span>
        <span className="text-cream/30 text-xs ml-auto">Updated live</span>
      </div>

      <div className="grid grid-cols-7 gap-1.5 md:gap-2">
        {forecast.map(day => {
          const { label, emoji } = weatherDescription(day.weathercode)
          const d = new Date(day.date)
          const dayName = d.toLocaleDateString('en', { weekday: 'short' })

          return (
            <div key={day.date} className="bg-charcoal/50 rounded-lg p-2 md:p-3 text-center">
              <div className="section-label text-xs md:text-xs">{dayName}</div>
              <div className="text-xl my-2" title={label}>{emoji}</div>
              <div className="text-cream text-xs font-medium">{day.maxTemp}°</div>
              <div className="text-cream/40 text-xs">{day.minTemp}°</div>
              {day.precipitation > 0.5 && (
                <div className="flex items-center justify-center gap-0.5 mt-1">
                  <Droplets size={9} className="text-glacier" />
                  <span className="text-xs text-glacier">{day.precipitation}mm</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex items-center gap-4 text-cream/30 text-xs">
        <span className="flex items-center gap-1"><Thermometer size={11} /> Celsius</span>
        <span className="flex items-center gap-1"><Wind size={11} /> Expect wind. Always.</span>
        <span className="flex items-center gap-1">☀️ ~23h daylight in June</span>
      </div>
    </div>
  )
}
