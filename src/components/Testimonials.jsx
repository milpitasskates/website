import { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const initialTestimonials = [
  {
    id: 1,
    name: 'Maria G.',
    role: 'Mom of Sofia, age 8',
    avatar: '👩',
    rating: 5,
    text: 'My daughter Sofia went from being terrified of skates to competing in her first tournament — all in one year! The coaches at Milpitas Skates are incredibly patient and encouraging. Sofia absolutely loves going to practice every week.',
    highlight: 'From terrified to competing in one year!',
  },
  {
    id: 2,
    name: 'James T.',
    role: 'Dad of Ethan, age 10',
    avatar: '👨',
    rating: 5,
    text: 'Ethan has been skating with Milpitas Skates for two years now and the progress has been amazing. He won his first medal at the Bay Area Skate Fest and couldn\'t stop smiling. The coaches truly care about each child\'s development.',
    highlight: 'Won his first medal at Bay Area Skate Fest!',
  },
  {
    id: 3,
    name: 'Priya S.',
    role: 'Mom of Aanya, age 7',
    avatar: '👩‍🦱',
    rating: 5,
    text: 'We tried a few skating programs before finding Milpitas Skates and this is by far the best. The environment is so positive and fun. Aanya has gained so much confidence — not just on skates but in everything she does.',
    highlight: 'Best skating program we\'ve tried!',
  },
  {
    id: 4,
    name: 'Carlos M.',
    role: 'Dad of twins, age 9',
    avatar: '👨‍🦲',
    rating: 5,
    text: 'Both my twins joined at the same time and the coaches handled them beautifully — each at their own pace. They\'ve performed at three events this year and every time they step on the rink, I see pure joy on their faces.',
    highlight: 'Three events this year — pure joy!',
  },
  {
    id: 5,
    name: 'Linda K.',
    role: 'Mom of Lily, age 6',
    avatar: '👩‍🦳',
    rating: 5,
    text: 'Lily started at age 5 and now at 6 she\'s already doing spins! The coaches break everything down so well for young kids. The community here is also wonderful — we\'ve made so many friends through this program.',
    highlight: 'Doing spins at age 6!',
  },
  {
    id: 6,
    name: 'Raj P.',
    role: 'Dad of Arjun, age 11',
    avatar: '🧔',
    rating: 5,
    text: 'Arjun was shy and introverted before joining. Skating has completely transformed him. He\'s now a team player, more confident, and has a group of best friends from the skating team. Milpitas Skates changed his life.',
    highlight: 'Skating transformed his confidence!',
  },
];

const avatarOptions = ['👩','👨','👩‍🦱','👨‍🦲','👩‍🦳','🧔','👧','👦','🧑','👩‍🦰'];

function StarRating({ rating }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'star filled' : 'star'} aria-hidden="true">★</span>
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="star-picker" role="group" aria-label="Select star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={`star-pick-btn${(hovered || value) > i ? ' lit' : ''}`}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(i + 1)}
          aria-label={`${i + 1} star${i !== 0 ? 's' : ''}`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const intervalRef = useRef(null);

  const emptyForm = { name: '', role: '', text: '', highlight: '', rating: 5 };
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (idx) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    clearInterval(intervalRef.current);
  };
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Your name is required';
    if (!form.role.trim()) e.role = 'e.g. "Mom of Alex, age 8"';
    if (!form.text.trim() || form.text.trim().length < 20) e.text = 'Please write at least 20 characters';
    if (!form.rating) e.rating = 'Please select a rating';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const newTestimonial = {
      id: Date.now(),
      name: form.name.trim(),
      role: form.role.trim(),
      avatar: avatarOptions[Math.floor(Math.random() * avatarOptions.length)],
      rating: form.rating,
      text: form.text.trim(),
      highlight: form.highlight.trim() || `${form.name.split(' ')[0]}'s experience with Milpitas Skates`,
    };

    setTestimonials(prev => [...prev, newTestimonial]);
    setFormSubmitted(true);
    setIsAutoPlaying(false);
    // Jump to the new testimonial after a beat
    setTimeout(() => {
      setCurrent(testimonials.length); // new one is at the end
    }, 300);
  };

  const handleAddAnother = () => {
    setForm(emptyForm);
    setErrors({});
    setFormSubmitted(false);
  };

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-bg-decoration" aria-hidden="true">
        <div className="t-blob t-blob-1" />
        <div className="t-blob t-blob-2" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="t-eyebrow">What Parents Say</div>
          <h2 id="testimonials-title" className="section-title" style={{ color: 'var(--white)' }}>
            Real Stories, Real Smiles 💬
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Don't just take our word for it — hear from the families who've
            watched their kids grow and shine with Milpitas Skates.
          </p>
        </div>

        {/* Carousel */}
        <div className="testimonials-grid" aria-live="polite" aria-label="Testimonials carousel">
          {visible.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial-card${i === 0 ? ' featured' : ''}`}
              aria-hidden={i !== 0}
            >
              <div className="t-card-top">
                <div className="t-avatar" aria-hidden="true">{t.avatar}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
                <StarRating rating={t.rating} />
              </div>
              <blockquote className="t-text">"{t.text}"</blockquote>
              <div className="t-highlight">
                <span aria-hidden="true">✨</span> {t.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="testimonials-controls">
          <button className="t-nav-btn" onClick={prev} aria-label="Previous testimonial">‹</button>
          <div className="t-dots" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`t-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="t-nav-btn" onClick={next} aria-label="Next testimonial">›</button>
        </div>

        {/* Share your story CTA */}
        <div className="t-share-wrap">
          <div className="t-share-prompt">
            <p>Part of the Milpitas Skates family?</p>
            <button
              className="t-share-btn"
              onClick={() => { setShowForm(f => !f); setFormSubmitted(false); setForm(emptyForm); setErrors({}); }}
              aria-expanded={showForm}
            >
              {showForm ? '✕ Close' : '✍️ Share Your Story'}
            </button>
          </div>

          {/* Inline form */}
          {showForm && (
            <div className="t-form-wrap" role="region" aria-label="Add your testimonial">
              {formSubmitted ? (
                <div className="t-form-success">
                  <div className="t-success-icon" aria-hidden="true">🎉</div>
                  <h4>Thank you!</h4>
                  <p>Your story has been added to our testimonials. We're so grateful for your kind words!</p>
                  <button className="t-add-another-btn" onClick={handleAddAnother}>
                    Add another testimonial
                  </button>
                </div>
              ) : (
                <form className="t-form" onSubmit={handleSubmit} noValidate aria-label="Testimonial submission form">
                  <h4 className="t-form-title">Share Your Experience 🛼</h4>

                  <div className="t-form-row">
                    <div className="t-form-group">
                      <label htmlFor="t-name">Your Name *</label>
                      <input
                        id="t-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={errors.name ? 'error' : ''}
                        aria-required="true"
                      />
                      {errors.name && <span className="t-form-error" role="alert">{errors.name}</span>}
                    </div>
                    <div className="t-form-group">
                      <label htmlFor="t-role">Your Role *</label>
                      <input
                        id="t-role"
                        name="role"
                        type="text"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="Mom of Alex, age 8"
                        className={errors.role ? 'error' : ''}
                        aria-required="true"
                      />
                      {errors.role && <span className="t-form-error" role="alert">{errors.role}</span>}
                    </div>
                  </div>

                  <div className="t-form-group">
                    <label>Your Rating *</label>
                    <StarPicker value={form.rating} onChange={(v) => { setForm(f => ({ ...f, rating: v })); }} />
                    {errors.rating && <span className="t-form-error" role="alert">{errors.rating}</span>}
                  </div>

                  <div className="t-form-group">
                    <label htmlFor="t-text">Your Story *</label>
                    <textarea
                      id="t-text"
                      name="text"
                      rows="4"
                      value={form.text}
                      onChange={handleChange}
                      placeholder="Tell us about your child's experience with Milpitas Skates..."
                      className={errors.text ? 'error' : ''}
                      aria-required="true"
                    />
                    {errors.text && <span className="t-form-error" role="alert">{errors.text}</span>}
                  </div>

                  <div className="t-form-group">
                    <label htmlFor="t-highlight">One-line highlight <span className="t-optional">(optional)</span></label>
                    <input
                      id="t-highlight"
                      name="highlight"
                      type="text"
                      value={form.highlight}
                      onChange={handleChange}
                      placeholder="e.g. Won her first medal at age 7!"
                    />
                  </div>

                  <button type="submit" className="t-form-submit">
                    Submit My Story 🌟
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
