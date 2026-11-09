import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coffeeData';

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'atmosphere', label: 'Muhit & Interyer' },
    { id: 'coffee', label: 'Qahva San\'ati' },
    { id: 'food', label: 'Oshpazlik Taomlari' }
  ];

  const filteredGallery = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(229, 152, 55, 0.12)',
              border: '1px solid rgba(229, 152, 55, 0.3)',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#f59e0b',
              marginBottom: '1rem'
            }}
          >
            <Camera size={16} />
            <span>Foto Galereya</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            AURA ning <span className="gold-gradient-text">Sehrli Muhiti</span>
          </h2>
          <p style={{ color: '#bfa89b', fontSize: '1rem', lineHeight: 1.6 }}>
            Har bir burchakda qulaylik, iliqlik va mehmondo'stlik nafasini his eting.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: filter === c.id ? 'linear-gradient(135deg, #e59837 0%, #b45309 100%)' : 'rgba(255, 255, 255, 0.05)',
                color: filter === c.id ? '#0f0a07' : '#cfc4bb',
                border: filter === c.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.2s ease'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '280px',
                cursor: 'pointer',
                border: '1px solid rgba(229, 152, 55, 0.15)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Overlay with details */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15, 10, 7, 0.95) 0%, rgba(15, 10, 7, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                  transition: 'opacity 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fcf9f2' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: '#e59837', marginTop: '2px' }}>
                      {item.subtitle}
                    </p>
                  </div>
                  <div
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(6px)',
                      padding: '8px',
                      borderRadius: '50%',
                      color: '#fff'
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveImage(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 30px 70px rgba(0,0,0,0.9)',
                border: '1px solid rgba(229, 152, 55, 0.4)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.65)',
                  border: 'none',
                  color: '#fff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={20} />
              </button>

              <img
                src={activeImage.image}
                alt={activeImage.title}
                style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', background: '#000' }}
              />

              <div style={{ background: '#18100a', padding: '1.25rem 1.75rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fcf9f2' }}>
                  {activeImage.title}
                </h3>
                <p style={{ color: '#bfa89b', fontSize: '0.9rem', marginTop: '4px' }}>
                  {activeImage.subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

