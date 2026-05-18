import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Your name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.message.trim()) e.message = 'Please write a message';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-header">
          <div className="contact-eyebrow">Get In Touch</div>
          <h2 id="contact-title" className="section-title">
            Let's Connect! 🛼
          </h2>
          <p className="section-subtitle">
            Have a question or want to learn more? Reach out — we'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left: contact info */}
          <div className="contact-info">

            {/* Instagram — primary CTA */}
            <div className="contact-ig-hero">
              <div className="ig-hero-icon" aria-hidden="true">📸</div>
              <div className="ig-hero-text">
                <h3>Reach us on Instagram</h3>
                <p>
                  The fastest way to get in touch! DM us on Instagram for questions,
                  schedules, and everything Milpitas Skates.
                </p>
                <a
                  href="https://www.instagram.com/milpitas_skates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary ig-dm-btn"
                >
                  <span aria-hidden="true">📩</span> DM @milpitas_skates
                </a>
                <a
                  href="https://www.instagram.com/milpitas_skates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-handle-link"
                  aria-label="Visit Milpitas Skates on Instagram"
                >
                  @milpitas_skates
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="contact-info-card">
              <div className="contact-info-icon" aria-hidden="true">📍</div>
              <div>
                <h4>Location</h4>
                <p>Milpitas, CA</p>
                <p>Bay Area, California</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon" aria-hidden="true">🕐</div>
              <div>
                <h4>Class Schedule</h4>
                <p>Weekdays: 4pm – 7pm</p>
                <p>Weekends: 9am – 5pm</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon" aria-hidden="true">🎉</div>
              <div>
                <h4>Free Trial</h4>
                <p>First class is on us!</p>
                <p>No experience needed.</p>
              </div>
            </div>
          </div>

          {/* Right: simple contact form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" role="alert">
                <div className="success-icon" aria-hidden="true">🎉</div>
                <h3>Message sent!</h3>
                <p>
                  Thanks for reaching out! We'll get back to you soon.
                  You can also DM us on Instagram for a faster response.
                </p>
                <a
                  href="https://www.instagram.com/milpitas_skates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  📸 Visit us on Instagram
                </a>
                <button
                  className="send-another-btn"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <h3 className="form-title">Send us a Message</h3>
                <p className="form-subtitle">
                  Or reach us directly on Instagram — we respond faster there! 😊
                </p>

                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi! I'd love to know more about your skating classes..."
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary form-submit">
                  Send Message 💌
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
