import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Bike, Store } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'pickup'
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Promo code validation
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'AURA15' || promoCode.trim().toUpperCase() === 'YANGI2025') {
      setDiscountPercent(15);
      setPromoError('');
    } else {
      setPromoError('Noto\'g\'ri promokod. Sinab ko\'ring: AURA15');
    }
  };

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const deliveryFee = orderType === 'delivery' && subtotal > 0 ? 15000 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 180,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          justifyContent: 'flex-end',
          animation: 'fadeIn 0.2s ease'
        }}
        onClick={onClose}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '460px',
            height: '100%',
            background: 'linear-gradient(to bottom, #18100a, #0f0a07)',
            borderLeft: '1px solid rgba(229, 152, 55, 0.25)',
            boxShadow: '-15px 0 40px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            style={{
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid rgba(229, 152, 55, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShoppingBag size={22} color="#e59837" />
              <h2 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fcf9f2' }}>
                Savatingiz ({cart.reduce((sum, i) => sum + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
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
          </div>

          {/* Delivery or Pickup switcher */}
          <div style={{ padding: '1rem 1.5rem 0.5rem 1.5rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '12px',
                padding: '4px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <button
                onClick={() => setOrderType('delivery')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '8px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: orderType === 'delivery' ? 'rgba(229, 152, 55, 0.25)' : 'transparent',
                  color: orderType === 'delivery' ? '#f59e0b' : '#bfa89b'
                }}
              >
                <Bike size={16} />
                <span>Yetkazib berish</span>
              </button>
              <button
                onClick={() => setOrderType('pickup')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '8px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: orderType === 'pickup' ? 'rgba(229, 152, 55, 0.25)' : 'transparent',
                  color: orderType === 'pickup' ? '#f59e0b' : '#bfa89b'
                }}
              >
                <Store size={16} />
                <span>Borib olish</span>
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                <ShoppingBag size={48} color="#bfa89b" style={{ opacity: 0.3, margin: '0 auto 1rem auto' }} />
                <h3 className="font-serif" style={{ fontSize: '1.2rem', color: '#fcf9f2', marginBottom: '0.5rem' }}>
                  Savatingiz hozircha bo'sh
                </h3>
                <p style={{ color: '#a89487', fontSize: '0.85rem' }}>
                  Menyudan o'zingiz yoqtirgan taom yoki qahvalarni tanlang!
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cart.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      gap: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '16px',
                      padding: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }}
                    />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <h4 className="font-serif" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fcf9f2' }}>
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '2px' }}
                          title="O'chirish"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      {/* Display custom options if any */}
                      {item.customizations && (
                        <div style={{ fontSize: '0.72rem', color: '#bfa89b', marginTop: '2px' }}>
                          {item.customizations.milk && <span>{item.customizations.milk} • </span>}
                          {item.customizations.sugar && <span>{item.customizations.sugar}</span>}
                        </div>
                      )}

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                        <span className="font-serif gold-gradient-text" style={{ fontSize: '0.95rem', fontWeight: 700 }}>
                          {(item.price * item.quantity).toLocaleString()} so'm
                        </span>

                        {/* Quantity Buttons */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(255, 255, 255, 0.06)',
                            borderRadius: '9999px',
                            padding: '2px'
                          }}
                        >
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              background: 'transparent',
                              border: 'none',
                              color: '#fcf9f2',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Minus size={12} />
                          </button>
                          <span style={{ minWidth: '22px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 700 }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              background: 'transparent',
                              border: 'none',
                              color: '#fcf9f2',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderTop: '1px solid rgba(229, 152, 55, 0.15)',
                background: 'rgba(15, 10, 7, 0.95)'
              }}
            >
              {/* Promo Code Input */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '6px 12px',
                    flex: 1
                  }}
                >
                  <Tag size={14} color="#e59837" />
                  <input
                    type="text"
                    placeholder="Promokod (AURA15)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#fcf9f2',
                      fontSize: '0.82rem',
                      width: '100%'
                    }}
                  />
                </div>
                <button
                  onClick={handleApplyPromo}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '10px',
                    background: 'rgba(229, 152, 55, 0.18)',
                    border: '1px solid rgba(229, 152, 55, 0.3)',
                    color: '#f59e0b',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  Qo'llash
                </button>
              </div>

              {promoError && (
                <div style={{ color: '#ef4444', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  {promoError}
                </div>
              )}
              {discountPercent > 0 && (
                <div style={{ color: '#10b981', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  ✓ 15% chegirma muvaffaqiyatli qo'llandi!
                </div>
              )}

              {/* Price Breakdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '1rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#bfa89b' }}>
                  <span>Oraliq summa:</span>
                  <span>{subtotal.toLocaleString()} so'm</span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981' }}>
                    <span>Chegirma (15%):</span>
                    <span>-{discountAmount.toLocaleString()} so'm</span>
                  </div>
                )}
                {orderType === 'delivery' && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#bfa89b' }}>
                    <span>Yetkazib berish xizmati:</span>
                    <span>{deliveryFee.toLocaleString()} so'm</span>
                  </div>
                )}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#fcf9f2',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    paddingTop: '6px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <span>Jami to'lov:</span>
                  <span className="font-serif gold-gradient-text">{grandTotal.toLocaleString()} so'm</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="btn-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <span>Buyurtmani Rasmiylashtirish</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <CheckoutModal
          items={cart}
          total={grandTotal}
          orderType={orderType}
          onClose={() => setIsCheckoutOpen(false)}
          onOrderSuccess={() => {
            onClearCart();
          }}
        />
      )}
    </>
  );
}

