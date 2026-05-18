import './EventsScroller.css';

const events = [
  { name: 'Bay Area Skate Fest', icon: '🏆', year: '2024' },
  { name: 'Milpitas Youth Games', icon: '🥇', year: '2024' },
  { name: 'Silicon Valley Skate Cup', icon: '🏅', year: '2023' },
  { name: 'Santa Clara Roller Derby', icon: '⭐', year: '2023' },
  { name: 'Fremont Skate Classic', icon: '🎖️', year: '2024' },
  { name: 'San Jose Skate Showcase', icon: '🌟', year: '2023' },
  { name: 'East Bay Skate Championship', icon: '🏆', year: '2024' },
  { name: 'Tri-City Skate Invitational', icon: '🥈', year: '2023' },
  { name: 'NorCal Skate Open', icon: '🎉', year: '2024' },
  { name: 'Milpitas Spring Skate Show', icon: '🌸', year: '2024' },
];

// Duplicate for seamless loop
const allEvents = [...events, ...events];

export default function EventsScroller() {
  return (
    <section id="events" className="events-section" aria-labelledby="events-title">
      <div className="container">
        <div className="section-header">
          <div className="events-eyebrow">Our Kids Have Performed At</div>
          <h2 id="events-title" className="section-title">
            Events & Competitions 🏆
          </h2>
          <p className="section-subtitle">
            Our skaters have represented Milpitas Skates at events across the Bay Area
            and beyond — and they've shined every time.
          </p>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="events-ticker-wrap" aria-label="Events list (scrolling)">
        <div className="events-ticker">
          {allEvents.map((event, i) => (
            <div key={i} className="event-chip" aria-hidden={i >= events.length}>
              <span className="event-chip-icon" aria-hidden="true">{event.icon}</span>
              <span className="event-chip-name">{event.name}</span>
              <span className="event-chip-year">{event.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row — reverse direction */}
      <div className="events-ticker-wrap events-ticker-wrap-reverse" aria-hidden="true">
        <div className="events-ticker events-ticker-reverse">
          {[...allEvents].reverse().map((event, i) => (
            <div key={i} className="event-chip event-chip-alt">
              <span className="event-chip-icon">{event.icon}</span>
              <span className="event-chip-name">{event.name}</span>
              <span className="event-chip-year">{event.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement cards */}
      <div className="container">
        <div className="achievements">
          <div className="achievement-card">
            <div className="achievement-icon">🥇</div>
            <div className="achievement-num">30+</div>
            <div className="achievement-label">Medals Won</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-num">50+</div>
            <div className="achievement-label">Events Attended</div>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🎉</div>
            <div className="achievement-num">5</div>
            <div className="achievement-label">Years Running</div>
          </div>
        </div>
      </div>
    </section>
  );
}
