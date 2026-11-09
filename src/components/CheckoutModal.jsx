import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Phone, User, CreditCard, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ items, total, orderType, onClose, onOrderSuccess }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('click');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Iltimos, ismingiz va telefoningizni kiriting!');
      return;
    }
    if (orderType === 'delivery' && !address) {
      alert('Iltimos, yetkazib berish manzilini kiriting!');
      return;
    }

    const generatedId = 'AUR-' + Math.floor(10000 + Math.random() * 90000);
    setOrderId(generatedId);
    setIsSuccess(true);

    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 }
    });

    onOrderSuccess();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          borderRadius: '24px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2rem',
          border: '1px solid rgba(229, 152, 55, 0.3)',
          background: 'linear-gradient(to bottom, #1d130c, #110a06)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#fcf9f2',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}
            >
              <CheckCircle2 size={36} color="#10b981" />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fcf9f2' }}>
              Buyurtmangiz Qabul Qilindi!
            </h3>
            <p style={{ color: '#d1c3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Rahmat, {name}! Baristalarimiz va oshpazlarimiz sizning buyurtmangizni tayyorlashga kirishdi.
            </p>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                border: '1px dashed rgba(229, 152, 55, 0.3)',
                padding: '1.25rem',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#a89487', fontSize: '0.85rem' }}>Buyurtma raqami:</span>
                <span className="font-serif gold-gradient-text" style={{ fontWeight: 800 }}>{orderId}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ color: '#a89487', fontSize: '0.85rem' }}>Turi:</span>
                <span style={{ color: '#fcf9f2', fontWeight: 600, fontSize: '0.85rem' }}>
                  {orderType === 'delivery' ? 'Yetkazib berish (30-40 daqiqa)' : 'Olib ketish (15 daqiqa)'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#a89487', fontSize: '0.85rem' }}>Jami to'lov:</span>
                <span style={{ color: '#f59e0b', fontWeight: 700 }}>{total.toLocaleString()} so'm</span>
              </div>
            </div>

            <button onClick={onClose} className="btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
              Tushunarli, Rahmat!
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem', color: '#fcf9f2' }}>
              Buyurtmani Rasmiylashtirish
            </h3>
            <p style={{ color: '#a89487', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              {orderType === 'delivery' ? 'Yetkazib berish ma\'lumotlari' : 'Borib olib ketish uchun ma\'lumotlar'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                  Ismingiz:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ismingizni kiriting"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: '#fcf9f2',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                  Telefon raqamingiz:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+998 90 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    color: '#fcf9f2',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                    Yetkazib berish manzili:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Toshkent sh., Mirobod t., Amir Temur ko'chasi 45-uy"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      color: '#fcf9f2',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              )}

              {/* Payment Method */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '8px' }}>
                  To'lov usuli:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { id: 'click', label: 'Click' },
                    { id: 'payme', label: 'Payme' },
                    { id: 'cash', label: 'Naqd pul' }
                  ].map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setPaymentMethod(pm.id)}
                      style={{
                        padding: '10px',
                        borderRadius: '12px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        background: paymentMethod === pm.id ? 'rgba(229, 152, 55, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                        border: paymentMethod === pm.id ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: paymentMethod === pm.id ? '#f59e0b' : '#cfc4bb'
                      }}
                    >
                      {pm.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total and Submit */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ color: '#d1c3b8' }}>Jami to'lov:</span>
              <span className="font-serif gold-gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {total.toLocaleString()} so'm
              </span>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.95rem' }}>
              Buyurtmani Tasdiqlash
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

