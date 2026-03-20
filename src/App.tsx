import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Itinerary from './pages/Itinerary'
import Crew from './pages/Crew'
import Polls from './pages/Polls'
import Practical from './pages/Practical'
import Playlist from './pages/Playlist'

export default function App() {
  return (
    <div className="min-h-screen bg-forest">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/practical" element={<Practical />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  )
}
