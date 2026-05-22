import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom'

import { Home, About, Projects, Contact } from './pages'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const AppContent = () => {
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <main
      className={
        isHome
          ? 'bg-black min-h-screen'
          : 'bg-slate-300/20 min-h-screen'
      }
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App