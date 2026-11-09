import React, { useState } from 'react';
import { Sparkles, Check, RefreshCw, ShoppingBag, ArrowRight, Coffee, Heart } from 'lucide-react';
import { FLAVOR_QUIZ_QUESTIONS, MENU_ITEMS } from '../data/coffeeData';

export default function FlavorFinder({ onAddToCart, onOpenItemModal }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const handleSelectOption = (questionId, value) => {
    const updatedAnswers = { ...answers, [questionId]: value };
    setAnswers(updatedAnswers);

    if (step < FLAVOR_QUIZ_QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate match
      calculateRecommendation(updatedAnswers);
    }
  };

  const calculateRecommendation = (finalAnswers) => {
    let matchedItem = null;
    const mood = finalAnswers[1];
    const taste = finalAnswers[2];

    if (mood === 'strong' || taste === 'chocolate') {
      matchedItem = MENU_ITEMS.find((i) => i.id === 'hc-2') || MENU_ITEMS[0]; // Cortado or Latte
    } else if (mood === 'refreshing' || taste === 'fruity') {
      matchedItem = MENU_ITEMS.find((i) => i.id === 'cc-1') || MENU_ITEMS[4]; // Cascara Cold brew
    } else if (mood === 'sweet' || taste === 'creamy') {
      matchedItem = MENU_ITEMS.find((i) => i.id === 'hc-1') || MENU_ITEMS[0]; // Velvet Latte
    } else if (taste === 'pairing') {
      matchedItem = MENU_ITEMS.find((i) => i.id === 'bf-1') || MENU_ITEMS.find((i) => i.id === 'ds-1');
    } else {
      matchedItem = MENU_ITEMS[0];
    }

    setRecommendation(matchedItem);
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const currentQ = FLAVOR_QUIZ_QUESTIONS[step];

  return (
    <section id="flavor-finder" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container-custom">
        <div
          className="glass-panel"
          style={{
            borderRadius: '28px',
            padding: 'clamp(1.5rem, 4vw, 3.5rem)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(229, 152, 55, 0.25)',
            background: 'radial-gradient(circle at top right, rgba(229, 152, 55, 0.08) 0%, rgba(27, 18, 12, 0.85) 60%)'
          }}
        >
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
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
              <Sparkles size={16} />
              <span>Smart Barista Yordamchisi</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Qanday Qahva Sizga <span className="gold-gradient-text">Bugun Mos Keladi?</span>
            </h2>
            <p style={{ color: '#bfa89b', fontSize: '0.95rem', lineHeight: 1.6 }}>
              2 ta oddiy savolga javob bering va kayfiyatingizga 100% mos keladigan qahva yoki desert tavsiyasini oling.
            </p>
          </div>

          {!recommendation ? (
            /* Quiz Questions */
            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
              {/* Progress bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', fontSize: '0.82rem', color: '#bfa89b' }}>
                <span>Savol {step + 1} / {FLAVOR_QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((step + 1) / FLAVOR_QUIZ_QUESTIONS.length) * 100)}% to'ldirildi</span>
              </div>
              <div style={{ height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden', marginBottom: '2rem' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${((step + 1) / FLAVOR_QUIZ_QUESTIONS.length) * 100}%`,
                    background: 'linear-gradient(90deg, #e59837, #f59e0b)',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>

              {/* Question Text */}
              <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fcf9f2', marginBottom: '1.5rem', textAlign: 'center' }}>
                {currentQ.question}
              </h3>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(currentQ.id, opt.value)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1.1rem 1.4rem',
                      borderRadius: '16px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(229, 152, 55, 0.2)',
                      color: '#fcf9f2',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(229, 152, 55, 0.15)';
                      e.currentTarget.style.borderColor = '#e59837';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(229, 152, 55, 0.2)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{opt.text}</span>
                    <ArrowRight size={18} color="#e59837" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Recommendation Card */
            <div
              style={{
                maxWidth: '750px',
                margin: '0 auto',
                background: 'rgba(15, 10, 7, 0.75)',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid rgba(229, 152, 55, 0.35)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.7)'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div style={{ borderRadius: '18px', overflow: 'hidden', height: '260px', position: 'relative' }}>
                  <img
                    src={recommendation.image}
                    alt={recommendation.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 10, 7, 0.85)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      color: '#f59e0b',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      border: '1px solid rgba(229, 152, 55, 0.4)'
                    }}
                  >
                    Sizga Tavsiya!
                  </div>
                </div>

                <div>
                  <div style={{ color: '#e59837', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {recommendation.badge}
                  </div>
                  <h3 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 800, marginTop: '4px', marginBottom: '8px' }}>
                    {recommendation.name}
                  </h3>
                  <p style={{ color: '#bfa89b', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {recommendation.description}
                  </p>

                  <div className="font-serif gold-gradient-text" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                    {recommendation.price.toLocaleString()} so'm
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <button
                      onClick={() => onAddToCart(recommendation)}
                      className="btn-primary"
                      style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
                    >
                      <ShoppingBag size={18} />
                      <span>Savatga Qo'shish</span>
                    </button>
                    <button
                      onClick={() => onOpenItemModal(recommendation)}
                      className="btn-secondary"
                      style={{ padding: '0.75rem 1.2rem', fontSize: '0.9rem' }}
                    >
                      Batafsil
                    </button>
                    <button
                      onClick={resetQuiz}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#a89487',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        fontSize: '0.85rem'
                      }}
                    >
                      <RefreshCw size={15} />
                      <span>Qaytadan boshlash</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

