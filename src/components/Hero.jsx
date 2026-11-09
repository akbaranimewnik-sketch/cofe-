import React from 'react';
import { ArrowRight, Star, Award, Coffee, Clock, Heart, Sparkles, ChefHat } from 'lucide-react';

export default function Hero({ onOpenMenu, onOpenReserve, onAddToCart, featuredItem }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '130px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background with Ambient Glow and Photography */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(15, 10, 7, 0.95) 20%, rgba(15, 10, 7, 0.75) 60%, rgba(15, 10, 7, 0.9) 100%),
            url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1
        }}
      />

      {/* Warm Ambient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(229, 152, 55, 0.18) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(50px)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(180, 83, 9, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Hero Text */}
          <div>
            {/* Top Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(229, 152, 55, 0.12)',
                border: '1px solid rgba(229, 152, 55, 0.3)',
                padding: '6px 16px',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#f59e0b',
                letterSpacing: '0.04em'
              }}
            >
              <Sparkles size={16} />
              <span>Toshkentdagi №1 Artisan Qahvaxona & Gourmet Restoran</span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-serif"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}
            >
              Qahvaning Asl Sehri & <br />
              <span className="gold-gradient-text">Oliyjanob Gastronomiya</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#cfc4bb',
                maxWidth: '560px',
                marginBottom: '2.5rem'
              }}
            >
              Efiopiya, Kolumbiya va Braziliya plantatsiyalaridan keltirilgan 100% sara Arabica,
              in-house mikro-qovurish san'ati va Michelin tajribali oshpazlarimizdan betakror taomlar to'plami.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#menu" className="btn-primary" style={{ textDecoration: 'none' }}>
                <span>Menyuni Ko'rish</span>
                <ArrowRight size={18} />
              </a>
              <button onClick={onOpenReserve} className="btn-secondary">
                <span>Stol Band Qilish</span>
              </button>
              <a
                href="#flavor-finder"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#e59837',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  padding: '0.85rem 1rem'
                }}
              >
                <Sparkles size={16} />
                <span>Qahva Tanlash Yordamchisi →</span>
              </a>
            </div>

            {/* Micro Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(229, 152, 55, 0.15)',
                maxWidth: '520px'
              }}
            >
              <div>
                <div className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  4.9★
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a89487', marginTop: '2px' }}>
                  2,400+ Mamnun Mehmonlar
                </div>
              </div>
              <div>
                <div className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  100%
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a89487', marginTop: '2px' }}>
                  Specialty Arabica Donalari
                </div>
              </div>
              <div>
                <div className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                  15+
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a89487', marginTop: '2px' }}>
                  Yillik Xalqaro Tajriba
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Main Featured Visual Card */}
            <div
              className="glass-panel"
              style={{
                borderRadius: '24px',
                padding: '1.25rem',
                width: '100%',
                maxWidth: '440px',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(229, 152, 55, 0.15)',
                border: '1px solid rgba(229, 152, 55, 0.25)'
              }}
            >
              {/* Product Image with Steam effect simulation */}
              <div
                style={{
                  position: 'relative',
                  height: '330px',
                  borderRadius: '18px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
                  alt="Aura Signature Velvet Latte"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Badge Top Left */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(15, 10, 7, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(229, 152, 55, 0.4)',
                    padding: '6px 12px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#f59e0b'
                  }}
                >
                  <Award size={14} />
                  <span>Kunning Xiti</span>
                </div>

                {/* Rating Badge Top Right */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    background: 'rgba(15, 10, 7, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 10px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#fcd34d'
                  }}
                >
                  <Star size={14} fill="#fcd34d" color="#fcd34d" />
                  <span>4.9 (142)</span>
                </div>
              </div>

              {/* Item Info Card Details */}
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcf9f2' }}>
                      Aura Signature Velvet Latte
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#bfa89b', marginTop: '3px' }}>
                      Efiopiya Yirgacheffe • Madagaskar vanili • Oltin karamel
                    </p>
                  </div>
                  <div className="font-serif gold-gradient-text" style={{ fontSize: '1.35rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                    38 000 so'm
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
                  <button
                    onClick={() => featuredItem && onAddToCart(featuredItem)}
                    className="btn-primary"
                    style={{ flex: 1, padding: '0.75rem 1rem', fontSize: '0.9rem' }}
                  >
                    <Coffee size={18} />
                    <span>Savatga Qo'shish</span>
                  </button>
                  <a
                    href="#menu"
                    className="btn-secondary"
                    style={{ padding: '0.75rem 1rem', textDecoration: 'none' }}
                    title="Barcha menyuni ko'rish"
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Floating Mini Badge 1 (Artisan Roastery) */}
            <div
              className="glass-panel animate-float"
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-25px',
                padding: '10px 16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(229, 152, 55, 0.3)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.6)'
              }}
            >
              <div style={{ background: 'rgba(229, 152, 55, 0.2)', padding: '8px', borderRadius: '10px' }}>
                <Coffee size={20} color="#e59837" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fcf9f2' }}>Har tong yangi qovurilgan</div>
                <div style={{ fontSize: '0.7rem', color: '#bfa89b' }}>Specialty Fresh Roast</div>
              </div>
            </div>

            {/* Floating Mini Badge 2 (Gourmet Kitchen) */}
            <div
              className="glass-panel animate-float"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-20px',
                padding: '10px 16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(229, 152, 55, 0.3)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
                animationDelay: '3s'
              }}
            >
              <div style={{ background: 'rgba(229, 152, 55, 0.2)', padding: '8px', borderRadius: '10px' }}>
                <ChefHat size={20} color="#e59837" />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fcf9f2' }}>Gourmet Bistro Menyu</div>
                <div style={{ fontSize: '0.7rem', color: '#bfa89b' }}>Black Angus & Fransuz Pishiriqlari</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

