import './About.css';

const features = [
  {
    icon: '🛼',
    title: 'All Skill Levels',
    desc: 'From first-timers to competitive skaters — we meet every child where they are.',
  },
  {
    icon: '🏆',
    title: 'Competition Ready',
    desc: 'We prepare kids for local and regional skating competitions with confidence.',
  },
  {
    icon: '❤️',
    title: 'Safe & Fun Environment',
    desc: 'Safety-first coaching in a supportive, encouraging atmosphere kids love.',
  },
  {
    icon: '⭐',
    title: 'Expert Coaches',
    desc: 'Internationally trained coaches dedicated to every child\'s growth and success.',
  },
];

const coaches = [
  {
    name: 'Divya Tated',
    role: 'Founder & Head Coach',
    badge: '🌍 International Skater',
    desc: 'Divya is an international competitive skater who turned her passion into a mission — bringing world-class skating coaching to the kids of Milpitas. Her experience on the international stage gives every student an edge.',
    accent: 'pink',
    initial: 'D',
  },
  {
    name: 'Pratham Tated',
    role: 'Coach',
    badge: '🛼 Skating Coach',
    desc: 'Pratham brings energy, technique, and a deep love for the sport to every session. He specializes in helping kids build strong fundamentals and confidence on wheels.',
    accent: 'cyan',
    initial: 'P',
  },
  {
    name: 'Priyam Tated',
    role: 'Coach',
    badge: '⭐ Skating Coach',
    desc: 'Priyam is known for her patience and ability to connect with young skaters. She makes every child feel seen, supported, and excited to keep improving.',
    accent: 'yellow',
    initial: 'P',
  },
];

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">

        {/* Top: intro */}
        <div className="about-intro-grid">
          <div className="about-visual" aria-hidden="true">
            <div className="about-card-main">
              <div className="about-logo-ring">
                <span className="about-big-icon">🛼</span>
              </div>
              <h3>Milpitas Skates</h3>
              <p className="about-card-tagline">Eat, Sleep, Skate, Repeat</p>
              <div className="about-badges">
                <span className="badge badge-pink">🌍 International Coaches</span>
                <span className="badge badge-cyan">🏆 Award Winning</span>
                <span className="badge badge-yellow">❤️ Kid Friendly</span>
              </div>
            </div>
            <div className="about-card-float about-card-float-1">
              <span>🎉</span>
              <div>
                <strong>200+</strong>
                <small>Kids Coached</small>
              </div>
            </div>
            <div className="about-card-float about-card-float-2">
              <span>🏅</span>
              <div>
                <strong>50+</strong>
                <small>Events</small>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="about-eyebrow">About Us</div>
            <h2 id="about-title" className="section-title">
              Founded by an International Skater,<br />
              <span className="text-pink">Built for Your Kids</span>
            </h2>
            <p className="about-desc">
              Milpitas Skates is a premier skating academy founded by <strong>Divya Tated</strong>,
              an international competitive skater with a passion for nurturing the next generation
              of skaters. What started as a dream became Milpitas's most loved skating program.
            </p>
            <p className="about-desc">
              Based in Milpitas, CA, we offer group and private coaching for children of all ages
              and skill levels. Our family of coaches brings world-class expertise, warmth, and
              dedication to every single session.
            </p>

            <div className="about-features">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="about-feature">
                  <div className="about-feature-icon" aria-hidden="true">{icon}</div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary about-cta">
              Start Your Journey 🛼
            </a>
          </div>
        </div>

        {/* Coaches section */}
        <div className="coaches-section">
          <div className="coaches-header">
            <div className="about-eyebrow">Meet the Team</div>
            <h3 className="coaches-title">The Coaches Behind the Magic</h3>
            <p className="coaches-subtitle">
              A family of passionate skaters dedicated to making every child shine.
            </p>
          </div>

          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.name} className={`coach-card coach-card--${coach.accent}`}>
                <div className={`coach-avatar coach-avatar--${coach.accent}`} aria-hidden="true">
                  {coach.initial}
                </div>
                <div className="coach-badge">{coach.badge}</div>
                <h4 className="coach-name">{coach.name}</h4>
                <p className="coach-role">{coach.role}</p>
                <p className="coach-desc">{coach.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
