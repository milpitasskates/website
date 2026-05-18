import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#1a1f4b"/>
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo-wrap">
                <img src={logo} alt="Milpitas Skates logo" width="64" height="64" />
                <span className="footer-brand-name">Milpitas Skates</span>
              </div>
              <p className="footer-tagline">Eat, Sleep, Skate, Repeat 🛼</p>
              <p className="footer-desc">
                Professional skating coaching for kids in Milpitas, CA.
                Building confidence and joy — one skate at a time.
              </p>
              <a
                href="https://www.instagram.com/milpitas_skates/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-ig-btn"
                aria-label="Follow Milpitas Skates on Instagram"
              >
                <span aria-hidden="true">📸</span> @milpitas_skates
              </a>
            </div>

            {/* Quick links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Classes */}
            <div className="footer-col">
              <h4>Our Classes</h4>
              <ul>
                <li>🛼 Beginner (Ages 4–7)</li>
                <li>⭐ Intermediate (Ages 8–12)</li>
                <li>🏆 Advanced / Competitive</li>
                <li>👤 Private Coaching</li>
                <li>🎉 Free Trial Class</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li>📍 Milpitas, CA</li>
                <li>🕐 Weekdays: 4pm – 7pm</li>
                <li>🕐 Weekends: 9am – 5pm</li>
              </ul>
              <a href="#contact" className="footer-cta-btn">
                Contact Us 🛼
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {year} Milpitas Skates. All rights reserved.</p>
            <p className="footer-love">Made with ❤️ for our amazing skaters</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
