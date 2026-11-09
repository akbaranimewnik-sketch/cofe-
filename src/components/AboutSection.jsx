import React, { useState } from 'react';
import { Award, Flame, Globe2, ShieldCheck, Sparkles, MapPin, Coffee, CheckCircle2 } from 'lucide-react';
import { COFFEE_BEANS } from '../data/coffeeData';

export default function AboutSection() {
  const [selectedBeanIndex, setSelectedBeanIndex] = useState(0);
  const currentBean = COFFEE_BEANS[selectedBeanIndex];

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', background: 'rgba(22, 14, 9, 0.5)' }}>
      <div className="container-custom">
        {/* Top Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center', marginBottom: '5rem' }}>
          
          {/* Images Grid Showcase */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', position: 'relative' }}>
            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '280px' }}>
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80"
                alt="Coffee Roasting"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', height: '280px', marginTop: '2rem' }}>
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
                alt="Barista Latte Art"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Center Floating Seal */}
            <div
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '1rem 1.4rem',
                borderRadius: '18px',
                textAlign: 'center',
                border: '1px solid rgba(229, 152, 55, 0.35)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.8)'
              }}
            >
              <div className="font-serif gold-gradient-text" style={{ fontSize: '1.8rem', fontWeight: 900 }}>
                SCA
              </div>
              <div style={{ fontSize: '0.7rem', color: '#bfa89b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Specialty Standart
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div>
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
              <Award size={16} />
              <span>Bizning Falsafamiz</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Ekishdan Tortib <br />
              <span className="gold-gradient-text">Piyolagacha Bo'lgan Sayohat</span>
            </h2>
            <p style={{ color: '#d1c3b8', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              AURA — shunchaki restoran emas, balki qahva madaniyati va yuqori darajadagi Yevropa oshxonasining uyg'unlik maskani. Biz har bir qahva donasini to'g'ridan-to'g'ri Efiopiya, Kolumbiya va Braziliyadagi sertifikatlangan oilaviy plantatsiyalardan olib kelamiz.
            </p>
            <p style={{ color: '#a89487', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Bizning mikro-roasterimiz har 48 soatda yangi partiyalarni qovuradi, bu esa qahvadagi tabiiy meva kislotaligi, karamel va shokolad notalarining to'liq ochilishini kafolatlaydi.
            </p>

            {/* Quality Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
              {[
                '100% Organik Qahva Donalari',
                'In-house Mikro Qovurish',
                'SCA Diplomi Egalari',
                'Ferma Mahsulotlaridan Taomlar'
              ].map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#fcf9f2' }}>
                  <CheckCircle2 size={16} color="#e59837" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Origin Bean Explorer */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            border: '1px solid rgba(229, 152, 55, 0.25)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ color: '#e59837', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Qahva Donalari Laboratoriyasi
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px' }}>
                Biz Foydalanadigan Sara Qahva Donalari
              </h3>
            </div>

            {/* Bean switcher buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {COFFEE_BEANS.map((b, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedBeanIndex(i)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: selectedBeanIndex === i ? 'linear-gradient(135deg, #e59837 0%, #b45309 100%)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedBeanIndex === i ? '#0f0a07' : '#cfc4bb',
                    border: selectedBeanIndex === i ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {b.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Current Bean Detail */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden', height: '240px' }}>
              <img
                src={currentBean.image}
                alt={currentBean.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div>
              <h4 className="font-serif gold-gradient-text" style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {currentBean.name}
              </h4>
              <p style={{ color: '#d1c3b8', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                <strong style={{ color: '#f59e0b' }}>Ta'm notalari:</strong> {currentBean.notes}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#a89487' }}>Qovurish darajasi</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fcf9f2' }}>{currentBean.roast}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#a89487' }}>Balandlik</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fcf9f2' }}>{currentBean.altitude}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#a89487' }}>Qayta ishlash usuli</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fcf9f2' }}>{currentBean.process}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#a89487' }}>Sifat kafolati</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#10b981' }}>Specialty Grade 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

