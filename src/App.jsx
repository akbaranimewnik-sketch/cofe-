import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorFinder from './components/FlavorFinder';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import BrewingGuide from './components/BrewingGuide';
import ReservationSection from './components/ReservationSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ItemModal from './components/ItemModal';
import AmbientSound from './components/AmbientSound';
import { MENU_ITEMS } from './data/coffeeData';
import { CheckCircle2, ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Show Toast
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add item to cart
  const handleAddToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      // Check if same item with same customizations exists
      const existingIndex = prevCart.findIndex(
        (ci) =>
          ci.id === item.id &&
          JSON.stringify(ci.customizations || {}) === JSON.stringify(item.customizations || {})
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });

    showToast(`${item.name} savatga qo'shildi!`);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(index);
    } else {
      setCart((prev) => {
        const updated = [...prev];
        updated[index].quantity = newQuantity;
        return updated;
      });
    }
  };

  const handleRemoveItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredItem = MENU_ITEMS[0]; // Signature Velvet Latte

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0f0a07' }}>
      {/* Navigation */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReserve={scrollToReservation}
      />

      {/* Hero Section */}
      <Hero
        onOpenMenu={scrollToMenu}
        onOpenReserve={scrollToReservation}
        onAddToCart={handleAddToCart}
        featuredItem={featuredItem}
      />

      {/* Flavor Finder (Smart Coffee Quiz) */}
      <FlavorFinder
        onAddToCart={handleAddToCart}
        onOpenItemModal={(item) => setModalItem(item)}
      />

      {/* Full Restaurant & Coffee Menu */}
      <MenuSection
        onAddToCart={handleAddToCart}
        onOpenItemModal={(item) => setModalItem(item)}
      />

      {/* About & In-house Roastery Section */}
      <AboutSection />

      {/* Coffee Brewing Masterclass Guide */}
      <BrewingGuide />

      {/* Table Reservation Section */}
      <ReservationSection />

      {/* Gallery Showcase */}
      <GallerySection />

      {/* Reviews & Testimonials Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Item Details & Customization Modal */}
      {modalItem && (
        <ItemModal
          item={modalItem}
          onClose={() => setModalItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Lo-Fi Ambient Cafe Sound Synthesizer */}
      <AmbientSound />

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 90,
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #e59837, #b45309)',
            border: 'none',
            color: '#0f0a07',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(229, 152, 55, 0.4)',
            transition: 'transform 0.2s ease'
          }}
          title="Yuqoriga qaytish"
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </button>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 350,
            background: 'rgba(27, 18, 12, 0.95)',
            border: '1px solid #e59837',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8), 0 0 20px rgba(229, 152, 55, 0.3)',
            borderRadius: '9999px',
            padding: '12px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fcf9f2',
            fontSize: '0.9rem',
            fontWeight: 600,
            backdropFilter: 'blur(12px)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <CheckCircle2 size={20} color="#10b981" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

