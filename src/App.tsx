import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Confession from './pages/Confession'
import Oath from './pages/Oath'
import Temple from './pages/Temple'
import Leaderboard from './pages/Leaderboard'
import Altar from './pages/Altar'

// IMPORTANT: For navigation, always use <Link> from react-router-dom, not <a> tags
// This ensures client-side routing works correctly with the preview URL base path
// Example: <Link to="/about">About</Link> instead of <a href="/about">About</a>

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/confession" element={<Confession />} />
      <Route path="/oath" element={<Oath />} />
      <Route path="/temple" element={<Temple />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/altar" element={<Altar />} />
    </Routes>
  )
}

export default App
