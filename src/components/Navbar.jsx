import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingBag, Menu as MenuIcon, X, CalendarCheck, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#hero' },
    { label: 'Menyu', href: '#menu' },
    { label: 'Ta\'m Tanlash', href: '#flavor-finder' },
    { label: 'Damlash Usullari', href: '#brewing-guide' },
    { label: 'Biz haqimizda', href: '#about' },
    { label: 'Stol Band Qilish', href: '#reservation' },
    { label: 'Galereya', href: '#gallery' },
    { label: 'Fikrlar', href: '#reviews' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(15, 10, 7, 0.92)'
          : 'linear-gradient(to bottom, rgba(15, 10, 7, 0.8), rgba(15, 10, 7, 0))',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(229, 152, 55, 0.15)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none'
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        {/* Brand Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #e59837 0%, #b45309 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(229, 152, 55, 0.35)'
            }}
          >
            <Coffee size={24} color="#0f0a07" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '0.12em', lineHeight: 1 }}>
              <span className="gold-gradient-text">AURA</span>
            </div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', color: '#bfa89b', textTransform: 'uppercase', marginTop: '3px' }}>
              Coffee & Bistro
            </div>
          </div>
        </a>

        {/* Live Open Status Pill (Desktop) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '6px 14px',
            borderRadius: '9999px',
            fontSize: '0.78rem'
          }}
          className="lg-flex"
        >
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }}></span>
          <span style={{ color: '#d1fae5', fontWeight: 500 }}>Hozir Ochiq: 08:00 – 23:30</span>
        </div>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'none', alignItems: 'center', gap: '24px' }} className="nav-desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: '#e6ded7',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#e59837')}
              onMouseLeave={(e) => (e.target.style.color = '#e6ded7')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Reservation Button */}
          <button
            onClick={onOpenReserve}
            className="btn-secondary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
          >
            <CalendarCheck size={16} color="#e59837" />
            <span className="hidden-sm">Stol Band Qilish</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            style={{
              position: 'relative',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(229, 152, 55, 0.12)',
              border: '1px solid rgba(229, 152, 55, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#e59837',
              transition: 'all 0.2s ease'
            }}
            title="Savat"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(229, 152, 55, 0.25)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(229, 152, 55, 0.12)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: '#fff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #0f0a07',
                  animation: 'pulseSlow 2s infinite'
                }}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: 'none',
              color: '#fcf9f2',
              cursor: 'pointer'
            }}
            className="mobile-burger"
          >
            {mobileMenuOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(15, 10, 7, 0.98)',
            borderBottom: '1px solid rgba(229, 152, 55, 0.2)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backdropFilter: 'blur(20px)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#fcf9f2',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.6rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              <CalendarCheck size={18} />
              Stol Band Qilish
            </button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 992px) {
          .nav-desktop-links { display: flex !important; }
          .lg-flex { display: flex !important; }
          .mobile-burger { display: none !important; }
        }
        @media (max-width: 640px) {
          .hidden-sm { display: none; }
        }
      `}</style>
    </nav>
  );
}

