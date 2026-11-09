import React, { useState } from 'react';
import { Coffee, MapPin, Phone, Mail, Clock, Send, Instagram, Send as Telegram, Heart, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Check if cafe is currently open (8:00 AM - 11:30 PM)
  const now = new Date();
  const currentHour = now.getHours();
  const isOpenNow = currentHour >= 8 && currentHour < 23;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer style={{ background: '#0a0604', borderTop: '1px solid rgba(229, 152, 55, 0.15)', paddingTop: '80px', paddingBottom: '40px', color: '#bfa89b' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          
          {/* Col 1: Brand Info & Live Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #e59837 0%, #b45309 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Coffee size={22} color="#0f0a07" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-serif gold-gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                  AURA
                </span>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#a89487', textTransform: 'uppercase' }}>
                  Coffee & Bistro
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#cfc4bb', marginBottom: '1.5rem' }}>
              Specialty toifasidagi nozik qahva donalari va Yevropa bosh oshpazining samimiy ijodi bilan yaratilgan unutilmas ta'mlar maskani.
            </p>

            {/* Live Indicator */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: isOpenNow ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                border: `1px solid ${isOpenNow ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.8rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: isOpenNow ? '#10b981' : '#ef4444',
                  boxShadow: `0 0 8px ${isOpenNow ? '#10b981' : '#ef4444'}`
                }}
              />
              <span style={{ color: isOpenNow ? '#34d399' : '#f87171', fontWeight: 600 }}>
                {isOpenNow ? 'Hozir Ochiq (08:00 – 23:30)' : 'Hozir Yopiq (Ertaga 08:00 da ochiladi)'}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation & Links */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fcf9f2', marginBottom: '1.25rem' }}>
              Bo'limlar
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a href="#hero" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Bosh sahifa</a>
              <a href="#menu" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Restoran Menyusi</a>
              <a href="#flavor-finder" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Qahva Tanlash (Smart Quiz)</a>
              <a href="#about" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Biz haqimizda & Qovurish</a>
              <a href="#reservation" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Stol Rezervatsiyasi</a>
              <a href="#gallery" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Foto Galereya</a>
            </div>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fcf9f2', marginBottom: '1.25rem' }}>
              Aloqa & Manzil
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#e59837" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Toshkent sh., Mirobod tumani, Amir Temur shoh ko'chasi, 108-uy</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#e59837" style={{ flexShrink: 0 }} />
                <span>+998 (71) 200-44-88</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#e59837" style={{ flexShrink: 0 }} />
                <span>info@auracoffee.uz</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={18} color="#e59837" style={{ flexShrink: 0 }} />
                <span>Har kuni: 08:00 dan 23:30 gacha</span>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter & Secret Perk */}
          <div>
            <h4 className="font-serif" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fcf9f2', marginBottom: '0.75rem' }}>
              Eksklyuziv Yangiliklar
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#bfa89b', marginBottom: '1rem', lineHeight: 1.5 }}>
              Yangi qovurilgan donalar partiyasi va maxsus degustatsiyalarga taklifnomalarni birinchilardan bo'lib oling:
            </p>

            {subscribed ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#34d399', padding: '10px 14px', borderRadius: '12px', fontSize: '0.82rem' }}>
                ✓ Muvaffaqiyatli obuna bo'ldingiz! Birinchi tashrif uchun promokod: <strong>AURA15</strong>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="email"
                  required
                  placeholder="Elektron pochtangiz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(229, 152, 55, 0.25)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    color: '#fcf9f2',
                    fontSize: '0.85rem',
                    flex: 1,
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #e59837, #b45309)',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    color: '#0f0a07',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Send size={16} />
                </button>
              </form>
            )}

            {/* Social handles */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '1.5rem' }}>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cfc4bb',
                  textDecoration: 'none'
                }}
              >
                <Telegram size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cfc4bb',
                  textDecoration: 'none'
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.8rem',
            color: '#8a766a'
          }}
        >
          <div>
            © {new Date().getFullYear()} AURA Coffee & Bistro. Barcha huquqlar himoyalangan.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Toshkentda mehr bilan yaratilgan</span>
            <Heart size={14} color="#e59837" fill="#e59837" />
          </div>
        </div>
      </div>
    </footer>
  );
}

