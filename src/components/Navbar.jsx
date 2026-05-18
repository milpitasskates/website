import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="navbar-inner container">
        <a href="#home" className="navbar-logo" aria-label="Milpitas Skates home">
          <img src={logo} alt="Milpitas Skates logo" width="56" height="56" />
          <span className="navbar-brand">Milpitas Skates</span>
        </a>

        <nav className={`navbar-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link" onClick={handleNavClick}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary nav-cta"
            onClick={handleNavClick}
          >
            Contact Us 🛼
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
