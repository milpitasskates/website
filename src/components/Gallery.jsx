import { useState } from 'react';
import './Gallery.css';

// Curated set — replace src/thumb with real Instagram photo URLs when available
const photos = [
  {
    id: 1,
    src:   'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=500&q=75',
    alt:   'Kids skating at a Bay Area event',
    caption: 'Bay Area Skate Fest 2024',
  },
  {
    id: 2,
    src:   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=75',
    alt:   'Group skating session',
    caption: 'Group Training Session',
  },
  {
    id: 3,
    src:   'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&q=75',
    alt:   'Young skater receiving award',
    caption: 'Award Ceremony 2024',
  },
  {
    id: 4,
    src:   'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=800&q=85',
    thumb: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=500&q=75',
    alt:   'Skating performance on stage',
    caption: 'Spring Showcase 2024',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const open  = (photo) => setLightbox(photo);
  const close = () => setLightbox(null);
  const navigate = (dir) => {
    const idx  = photos.findIndex(p => p.id === lightbox.id);
    const next = (idx + dir + photos.length) % photos.length;
    setLightbox(photos[next]);
  };

  return (
    <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-header">
          <div className="gallery-eyebrow">Photo Gallery</div>
          <h2 id="gallery-title" className="section-title">
            Moments That Matter 📸
          </h2>
          <p className="section-subtitle">
            A glimpse into the joy, hard work, and achievements of our skaters.
            Follow us on Instagram for the full story.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="gallery-grid" role="list">
          {photos.map((photo) => (
            <button
              key={photo.id}
              className="gallery-item"
              role="listitem"
              onClick={() => open(photo)}
              aria-label={`View photo: ${photo.caption}`}
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                width="500"
                height="375"
              />
              <div className="gallery-item-overlay">
                <p className="gallery-item-caption">{photo.caption}</p>
                <span className="gallery-item-zoom" aria-hidden="true">🔍</span>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="gallery-ig-cta">
          <div className="gallery-ig-inner">
            <span className="gallery-ig-icon" aria-hidden="true">📸</span>
            <div>
              <p className="gallery-ig-label">Want to see more?</p>
              <p className="gallery-ig-sub">
                We post photos and videos from every event, practice, and milestone on Instagram.
              </p>
            </div>
            <a
              href="https://www.instagram.com/milpitas_skates/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gallery-ig-btn"
            >
              Follow @milpitas_skates
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo: ${lightbox.caption}`}
          onClick={close}
        >
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={close} aria-label="Close lightbox">✕</button>
            <button className="lightbox-nav lightbox-prev" onClick={() => navigate(-1)} aria-label="Previous photo">‹</button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p className="lightbox-caption-text">{lightbox.caption}</p>
            <button className="lightbox-nav lightbox-next" onClick={() => navigate(1)} aria-label="Next photo">›</button>
          </div>
        </div>
      )}
    </section>
  );
}
