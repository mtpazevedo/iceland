import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/itinerary', label: 'Itinerary' },
  { to: '/simple', label: 'Quick Sheet' },
  { to: '/map', label: 'Map' },
  { to: '/crew', label: 'The Crew' },
  { to: '/practical', label: 'Practical' },
  { to: '/playlist', label: 'Playlist' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isHome ? 'bg-transparent' : 'bg-obsidian/90 backdrop-blur-md border-b border-stone/20'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-display text-lg text-cream/80 hover:text-cream transition-colors italic">
          Iceland '26
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.slice(1).map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'text-cream' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-cream/60 hover:text-cream">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-obsidian/95 backdrop-blur-md border-b border-stone/20 px-6 pb-6">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-3 nav-link text-base"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
