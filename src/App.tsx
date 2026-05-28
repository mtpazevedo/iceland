import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Itinerary from './pages/Itinerary'
import Simple from './pages/Simple'
import Crew from './pages/Crew'
import Practical from './pages/Practical'
import Playlist from './pages/Playlist'
import MapPage from './pages/MapPage'

export default function App() {
  return (
    <div className="min-h-screen bg-forest">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/practical" element={<Practical />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  )
}
