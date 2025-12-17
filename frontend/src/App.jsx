import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Security from './pages/Security.jsx'
import Audit from './pages/Audit.jsx'
import Health from './pages/Health.jsx'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/health" element={<Health/>} />
      </Routes>
    </Router>
  )
}

export default App