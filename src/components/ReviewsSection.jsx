import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle2, User, Sparkles, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TESTIMONIALS } from '../data/coffeeData';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;

    const newRev = {
      id: Date.now(),
      name,
      role: role || 'Mehmon',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating,
      text,
      date: 'Hozirgina'
    };

    setReviews([newRev, ...reviews]);
    setName('');
    setRole('');
    setText('');
    setShowForm(false);

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="reviews" style={{ padding: '100px 0', position: 'relative', background: 'rgba(22, 14, 9, 0.4)' }}>
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
            <Star size={16} fill="#f59e0b" />
            <span>Mijozlarimiz Bahosi</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Mehmonlarimiz Biz Haqimizda <span className="gold-gradient-text">Nima Deydi?</span>
          </h2>
          <p style={{ color: '#bfa89b', fontSize: '1rem', lineHeight: 1.6 }}>
            2,400 dan ortiq tashrif buyuruvchilarning samimiy fikrlari va yuqori baholari.
          </p>
        </div>

        {/* Overall Rating Banner & Add Review Button */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '1.5rem 2rem',
            marginBottom: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            border: '1px solid rgba(229, 152, 55, 0.25)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div className="font-serif gold-gradient-text" style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>
              4.9
            </div>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#bfa89b' }}>
                Umumiy 2,420+ ta tasdiqlangan baholashlar asosida
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary"
            style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
          >
            <MessageSquarePlus size={18} />
            <span>{showForm ? 'Formani Yopish' : 'Fikr Qoldirish'}</span>
          </button>
        </div>

        {/* Add Review Form Dropdown */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="glass-panel"
            style={{
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '3rem',
              border: '1px solid rgba(229, 152, 55, 0.35)',
              background: 'linear-gradient(to bottom, #1f140e, #140d08)',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#fcf9f2' }}>
              O'z Tajribangiz Bilan O'rtoqlashing
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>Ismingiz:</label>
                <input
                  type="text"
                  required
                  placeholder="Ismingiz"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    color: '#fcf9f2',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>Kasbingiz / Kim siz:</label>
                <input
                  type="text"
                  placeholder="Masalan: Dizayner, Talaba, Mehmon"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    color: '#fcf9f2',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>Bahongiz:</label>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', height: '40px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRating(s)}
                      style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '2px' }}
                    >
                      <Star
                        size={22}
                        fill={s <= rating ? '#f59e0b' : 'transparent'}
                        color={s <= rating ? '#f59e0b' : '#6b574a'}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>Fikringiz:</label>
              <textarea
                rows={3}
                required
                placeholder="Qahva, taomlar va xizmat haqida o'z xulosangizni yozing..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  color: '#fcf9f2',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.8rem' }}>
              Fikrni Chop Etish
            </button>
          </form>
        )}

        {/* Reviews Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel"
              style={{
                borderRadius: '22px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(229, 152, 55, 0.18)',
                position: 'relative'
              }}
            >
              {/* Quote Watermark Icon */}
              <Quote
                size={40}
                color="#e59837"
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  opacity: 0.12,
                  pointerEvents: 'none'
                }}
              />

              <div>
                {/* Rating stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                {/* Review Text */}
                <p style={{ color: '#d6c8be', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e59837' }}
                />
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fcf9f2' }}>
                    {rev.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: '#a89487' }}>
                    {rev.role} • {rev.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

