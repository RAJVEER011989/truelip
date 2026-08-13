import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/truelip-logo.jpg'
import { FaWhatsapp } from 'react-icons/fa'

const navItems = [
  { to: '/home', label: 'Home' },
  { to: '/software-development', label: 'Software' },
  { to: '/industrial-automation', label: 'Industrial automation' },
  { to: '/sectorsweserve', label: 'Sectors We Serve' },
  { to: '/about', label: 'About' },
  { to: '/solutions', label: 'Solutions' },  
]

export default function PageShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="gradient-line" />
      <header className="site-header">
        <div className="container nav">
          <Link aria-label="Truelip Technocrates home" className="brand" to="/">
            <span className="brand-mark">
              <img alt="" decoding="async" loading="eager" src={logo} />
            </span>
            <span className="brand-copy">
              <strong>TRUELIP</strong>
              <small>TECHNOCRATES</small>
            </span>
          </Link>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink className="nav-cta" to="/contact" onClick={() => setMenuOpen(false)}>
                Get in touch
              </NavLink>
            </li>
          </ul>
          <button
            aria-expanded={menuOpen}
            aria-label="Open menu"
            className="menu"
            id="menu"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="page-main">{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Link className="brand" to="/">
              <span className="brand-mark">
                <img alt="" decoding="async" loading="eager" src={logo} />
              </span>
              <span className="brand-copy">
                <strong>TRUELIP</strong>
                <small>TECHNOCRATES</small>
              </span>
            </Link>
            <nav className="footer-nav">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/solutions">Solutions</NavLink>
              <NavLink to="/industrial-automation">Industrial automation</NavLink>
              <NavLink to="/software-development">Software</NavLink>
              <NavLink to="/sectorsweserve">Sectors We Serve</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Truelip Technocrates. All rights reserved.</span>
            <span>Bhilai · Chhattisgarh · Pan-India</span>
          </div>
        </div>
      </footer>
      <a
  className="float-wa"
  href="https://wa.me/918770217959"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat with us on WhatsApp"
>
  <FaWhatsapp />
</a>
    </>
  )
}
