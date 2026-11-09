import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Coffee,
  CupSoda,
  Sun,
  UtensilsCrossed,
  Cake,
  Search,
  Star,
  Plus,
  Flame,
  Clock,
  Filter
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/coffeeData';

const ICONS = {
  Sparkles,
  Coffee,
  CupSoda,
  Sun,
  UtensilsCrossed,
  Cake
};

export default function MenuSection({ onAddToCart, onOpenItemModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyPopular, setOnlyPopular] = useState(false);
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'price-asc', 'price-desc', 'rating'

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      // Search filter
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients?.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      // Popular filter
      const matchesPopular = !onlyPopular || item.isPopular;

      return matchesCategory && matchesSearch && matchesPopular;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });
  }, [activeCategory, searchQuery, onlyPopular, sortBy]);

  return (
    <section id="menu" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
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
            <Coffee size={16} />
            <span>Artisan Gastronomiya Menyusi</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Har Bir Qultum & Luqmada <span className="gold-gradient-text">Mukammallik</span>
          </h2>
          <p style={{ color: '#bfa89b', fontSize: '1rem', lineHeight: 1.6 }}>
            Klassik qahvalardan tortib zamonaviy mualliflik ichimliklari va Fransuz-Italiya taomlarigacha bo'lgan boy tanlov.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '1.25rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            border: '1px solid rgba(229, 152, 55, 0.2)'
          }}
        >
          {/* Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              padding: '8px 16px',
              minWidth: '260px',
              flex: '1 1 280px'
            }}
          >
            <Search size={18} color="#bfa89b" />
            <input
              type="text"
              placeholder="Qahva yoki taom nomini qidiring..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fcf9f2',
                fontSize: '0.9rem',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ background: 'transparent', border: 'none', color: '#bfa89b', cursor: 'pointer', fontSize: '0.8rem' }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Controls: Popular Toggle & Sort */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={() => setOnlyPopular(!onlyPopular)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: onlyPopular ? 'rgba(229, 152, 55, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                border: onlyPopular ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.1)',
                color: onlyPopular ? '#f59e0b' : '#bfa89b',
                transition: 'all 0.2s ease'
              }}
            >
              <Sparkles size={15} />
              <span>Faqat Xitlar</span>
            </button>

            {/* Sort Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Filter size={15} color="#bfa89b" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px',
                  color: '#cfc4bb',
                  padding: '8px 14px',
                  fontSize: '0.85rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="popular" style={{ background: '#1b120c' }}>Saralash: Ommabop</option>
                <option value="rating" style={{ background: '#1b120c' }}>Baho bo'yicha (Eng yuqori)</option>
                <option value="price-asc" style={{ background: '#1b120c' }}>Narx: Avval arzonroq</option>
                <option value="price-desc" style={{ background: '#1b120c' }}>Narx: Avval qimmatroq</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '1.25rem',
            marginBottom: '2rem',
            scrollbarWidth: 'none'
          }}
        >
          {MENU_CATEGORIES.map((cat) => {
            const IconComp = ICONS[cat.icon] || Sparkles;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  background: isActive
                    ? 'linear-gradient(135deg, #e59837 0%, #b45309 100%)'
                    : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#0f0a07' : '#cfc4bb',
                  border: isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isActive ? '0 4px 15px rgba(229, 152, 55, 0.35)' : 'none'
                }}
              >
                <IconComp size={16} strokeWidth={isActive ? 2.5 : 2} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 1rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '20px',
              border: '1px dashed rgba(229, 152, 55, 0.2)'
            }}
          >
            <Coffee size={40} color="#bfa89b" style={{ margin: '0 auto 1rem auto' }} />
            <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#fcf9f2', marginBottom: '0.5rem' }}>
              Hech qanday mahsulot topilmadi
            </h3>
            <p style={{ color: '#bfa89b', fontSize: '0.9rem' }}>
              Qidiruv so'zini o'zgartirib ko'ring yoki boshqa toifani tanlang.
            </p>
          </div>
        ) : (
          <div className="grid-cols-auto-fit">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-panel"
                style={{
                  borderRadius: '22px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(229, 152, 55, 0.16)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(229, 152, 55, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(229, 152, 55, 0.16)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
              >
                {/* Image Container */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenItemModal(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Badge */}
                  {item.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(15, 10, 7, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: '#f59e0b',
                        border: '1px solid rgba(229, 152, 55, 0.3)'
                      }}
                    >
                      {item.badge}
                    </div>
                  )}

                  {/* Rating */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(15, 10, 7, 0.85)',
                      backdropFilter: 'blur(8px)',
                      padding: '4px 8px',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#fcd34d',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Star size={13} fill="#fcd34d" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#fcf9f2',
                      marginBottom: '6px',
                      cursor: 'pointer'
                    }}
                    onClick={() => onOpenItemModal(item)}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#bfa89b',
                      lineHeight: 1.5,
                      marginBottom: '1rem',
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Meta Specs */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.75rem',
                      color: '#a89487',
                      marginBottom: '1rem'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Clock size={13} color="#e59837" /> {item.prepTime}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Flame size={13} color="#f97316" /> {item.calories}
                    </span>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div className="font-serif gold-gradient-text" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                      {item.price.toLocaleString()} so'm
                    </div>

                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => onOpenItemModal(item)}
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#cfc4bb',
                          borderRadius: '9999px',
                          padding: '6px 12px',
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        Batafsil
                      </button>
                      <button
                        onClick={() => onAddToCart(item)}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #e59837 0%, #b45309 100%)',
                          border: 'none',
                          color: '#0f0a07',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          boxShadow: '0 4px 12px rgba(229, 152, 55, 0.35)',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        title="Savatga qo'shish"
                      >
                        <Plus size={18} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

