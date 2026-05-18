import logo from '../assets/logo.png';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome to Milpitas Skates">
      {/* Animated background blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />
      <div className="hero-blob hero-blob-3" aria-hidden="true" />

      {/* Floating skate icons */}
      <div className="hero-floats" aria-hidden="true">
        {['🛼','⭐','🏆','💫','🎉','🛼','⭐','🏅'].map((icon, i) => (
          <span key={i} className={`float-icon float-icon-${i + 1}`}>{icon}</span>
        ))}
      </div>

      <div className="hero-content container">
        <div className="hero-logo-wrap">
          <img
            src={logo}
            alt="Milpitas Skates logo"
            className="hero-logo"
            width="180"
            height="180"
          />
        </div>

        <h1 className="hero-title">
          Where Kids Learn to
          <span className="hero-title-accent"> Skate & Shine</span>
        </h1>

        <p className="hero-tagline">
          Eat, Sleep, Skate, Repeat 🛼
        </p>

        <p className="hero-desc">
          Professional skating coaching for kids of all skill levels.
          Building confidence, discipline, and joy — one skate at a time.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary hero-btn">
            Get In Touch 💌
          </a>
          <a href="#gallery" className="btn-secondary hero-btn">
            See Our Kids in Action
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-label">Happy Skaters</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Events & Competitions</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">5★</span>
            <span className="stat-label">Parent Reviews</span>
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}
