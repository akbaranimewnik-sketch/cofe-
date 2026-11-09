import React, { useState } from 'react';
import { X, Star, Clock, Flame, Check, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function ItemModal({ item, onClose, onAddToCart }) {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState(item.options?.milk?.[0] || '');
  const [selectedSugar, setSelectedSugar] = useState(item.options?.sugar?.[0] || '');
  const [selectedShot, setSelectedShot] = useState(item.options?.shot?.[0] || '');
  const [extraNote, setExtraNote] = useState('');

  // Calculate dynamic price adjustments
  let calculatedPrice = item.price;
  if (selectedMilk.includes('6 000')) calculatedPrice += 6000;
  if (selectedMilk.includes('8 000')) calculatedPrice += 8000;
  if (selectedMilk.includes('7 000')) calculatedPrice += 7000;
  if (selectedSugar.includes('4 000')) calculatedPrice += 4000;
  if (selectedShot.includes('6 000')) calculatedPrice += 6000;
  if (selectedShot.includes('18 000')) calculatedPrice += 18000;

  const handleAdd = () => {
    const customizedItem = {
      ...item,
      price: calculatedPrice,
      customizations: {
        milk: selectedMilk,
        sugar: selectedSugar,
        shot: selectedShot,
        note: extraNote
      }
    };
    onAddToCart(customizedItem, quantity);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          borderRadius: '24px',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          padding: '2rem',
          border: '1px solid rgba(229, 152, 55, 0.3)',
          background: 'linear-gradient(to bottom, #1d130c, #120b07)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#fcf9f2',
            width: '38px',
            height: '38px',
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

        {/* Modal Image */}
        <div style={{ position: 'relative', height: '260px', borderRadius: '18px', overflow: 'hidden', marginBottom: '1.5rem' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: 'rgba(15, 10, 7, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '6px 14px',
              borderRadius: '9999px',
              color: '#f59e0b',
              fontSize: '0.8rem',
              fontWeight: 700,
              border: '1px solid rgba(229, 152, 55, 0.3)'
            }}
          >
            {item.badge}
          </div>
        </div>

        {/* Title & Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <div>
            <h2 className="font-serif" style={{ fontSize: '1.55rem', fontWeight: 800, color: '#fcf9f2' }}>
              {item.name}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px', fontSize: '0.85rem', color: '#bfa89b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fcd34d' }}>
                <Star size={15} fill="#fcd34d" /> {item.rating} ({item.reviewsCount} sharh)
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={15} color="#e59837" /> {item.prepTime}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Flame size={15} color="#f97316" /> {item.calories}
              </span>
            </div>
          </div>
          <div className="font-serif gold-gradient-text" style={{ fontSize: '1.65rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
            {(calculatedPrice * quantity).toLocaleString()} so'm
          </div>
        </div>

        {/* Description */}
        <p style={{ color: '#d6c8be', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {item.description}
        </p>

        {/* Ingredients */}
        {item.ingredients && (
          <div style={{ marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ fontSize: '0.82rem', color: '#e59837', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              Tarkibi & Mahsulotlar:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {item.ingredients.map((ing, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(229, 152, 55, 0.1)',
                    border: '1px solid rgba(229, 152, 55, 0.25)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    color: '#fcf9f2'
                  }}
                >
                  ✓ {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Customization Options */}
        {item.options && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
            {/* Milk Option */}
            {item.options.milk && (
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fcf9f2', marginBottom: '6px' }}>
                  Sut turini tanlang:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.options.milk.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedMilk(opt)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        background: selectedMilk === opt ? 'rgba(229, 152, 55, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                        border: selectedMilk === opt ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: selectedMilk === opt ? '#f59e0b' : '#cfc4bb',
                        fontWeight: selectedMilk === opt ? 700 : 500
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sugar Option */}
            {item.options.sugar && (
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fcf9f2', marginBottom: '6px' }}>
                  Shakar miqdori:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.options.sugar.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSugar(opt)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        background: selectedSugar === opt ? 'rgba(229, 152, 55, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                        border: selectedSugar === opt ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: selectedSugar === opt ? '#f59e0b' : '#cfc4bb',
                        fontWeight: selectedSugar === opt ? 700 : 500
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Shot / Doneness / Extras */}
            {item.options.shot && (
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#fcf9f2', marginBottom: '6px' }}>
                  Espresso kuchi / Porsiya:
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.options.shot.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedShot(opt)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        background: selectedShot === opt ? 'rgba(229, 152, 55, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                        border: selectedShot === opt ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.1)',
                        color: selectedShot === opt ? '#f59e0b' : '#cfc4bb',
                        fontWeight: selectedShot === opt ? 700 : 500
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Quantity and Add Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(229, 152, 55, 0.2)' }}>
          {/* Quantity Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(229, 152, 55, 0.2)',
              borderRadius: '9999px',
              padding: '4px'
            }}
          >
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              style={{
                width: '36px',
                height: '36px',
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
              <Minus size={16} />
            </button>
            <span style={{ minWidth: '32px', textAlign: 'center', fontWeight: 700, fontSize: '1rem' }}>
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              style={{
                width: '36px',
                height: '36px',
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
              <Plus size={16} />
            </button>
          </div>

          {/* Add to Cart Submit Button */}
          <button
            onClick={handleAdd}
            className="btn-primary"
            style={{ flex: 1, padding: '0.9rem 1.5rem', fontSize: '1rem' }}
          >
            <ShoppingBag size={20} />
            <span>Savatga Qo'shish — {(calculatedPrice * quantity).toLocaleString()} so'm</span>
          </button>
        </div>
      </div>
    </div>
  );
}

