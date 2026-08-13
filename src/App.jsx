import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import IndustrialPage from './pages/IndustrialPage'
import SoftwarePage from './pages/SoftwarePage'
import IndustriesPage from './pages/SectotsWeServe'
import ContactPage from './pages/ContactPage'

function App() {
  
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
  const blockContextMenu = (e) => {
    e.preventDefault()
  }

  const blockCopy = (e) => {
    e.preventDefault()
  }

  const blockCut = (e) => {
    e.preventDefault()
  }

  const blockDrag = (e) => {
    e.preventDefault()
  }

  const blockKeys = (e) => {
    const key = e.key.toLowerCase()

    // Ctrl/Cmd + C, X, U, S
    if (
      (e.ctrlKey || e.metaKey) &&
      ['c', 'x', 'u', 's'].includes(key)
    ) {
      e.preventDefault()
    }

    // F12
    if (e.key === 'F12') {
      e.preventDefault()
    }

    // Ctrl/Cmd + Shift + I/J/C
    if (
      (e.ctrlKey || e.metaKey) &&
      e.shiftKey &&
      ['i', 'j', 'c'].includes(key)
    ) {
      e.preventDefault()
    }
  }

  document.addEventListener('contextmenu', blockContextMenu)
  document.addEventListener('copy', blockCopy)
  document.addEventListener('cut', blockCut)
  document.addEventListener('dragstart', blockDrag)
  document.addEventListener('keydown', blockKeys)

  return () => {
    document.removeEventListener('contextmenu', blockContextMenu)
    document.removeEventListener('copy', blockCopy)
    document.removeEventListener('cut', blockCut)
    document.removeEventListener('dragstart', blockDrag)
    document.removeEventListener('keydown', blockKeys)
  }
}, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/industrial-automation" element={<IndustrialPage />} />
      <Route path="/software-development" element={<SoftwarePage />} />
      <Route path="/sectorsweserve" element={<IndustriesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
