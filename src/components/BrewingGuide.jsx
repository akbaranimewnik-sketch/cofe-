import React, { useState, useEffect } from 'react';
import { Coffee, Play, Pause, RotateCcw, Flame, Droplet, Clock, Sparkles } from 'lucide-react';

const BREW_METHODS = [
  {
    id: 'v60',
    name: 'V60 Pour Over',
    ratio: 16, // 1:16
    temp: '92°C - 94°C',
    grind: "O'rtacha nozik (Dengiz tuzi kabi)",
    time: 180, // 3 mins in seconds
    steps: [
      { at: 0, text: 'Gullash (Bloom): 50g suv quyib 45 soniya kuting' },
      { at: 45, text: '1-quyuq to\'lqin: Doiraviy harakat bilan 150g gacha yetkazing' },
      { at: 90, text: '2-to\'lqin: Sekinlik bilan to\'liq 250-300g gacha to\'ldiring' },
      { at: 150, text: 'Tushish (Drawdown): Tomchilab tugashini kuting va rohatlaning!' }
    ]
  },
  {
    id: 'french-press',
    name: 'French Press',
    ratio: 15, // 1:15
    temp: '95°C',
    grind: "Yirik maydalangan (Qattiq tuzdek)",
    time: 240, // 4 mins
    steps: [
      { at: 0, text: 'Qahvani soling va barcha qaynoq suvni quying' },
      { at: 60, text: 'Qoshiq bilan yuzasidagi qobiqni yengil aralashtiring' },
      { at: 210, text: 'Qopqog\'ini yoping, lekin hali bosmang' },
      { at: 240, text: 'Sekin pastga bosing va darhol piyolalarga quying' }
    ]
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    ratio: 12, // 1:12
    temp: '85°C - 88°C',
    grind: "Mayin / O'rtacha",
    time: 120, // 2 mins
    steps: [
      { at: 0, text: '15g qahva soling, 200g 85°C li suv quying' },
      { at: 15, text: '10 soniya davomida faol aralashtiring' },
      { at: 60, text: 'Porshenni o\'rnating va bir tekisda pastga bosing' },
      { at: 90, text: 'Hiss etish ovozi kelishi bilan to\'xtating' }
    ]
  },
  {
    id: 'chemex',
    name: 'Chemex',
    ratio: 16.5,
    temp: '93°C',
    grind: "O'rtacha yirik",
    time: 240,
    steps: [
      { at: 0, text: 'Qalin filtrni namlang, 30g qahva soling va 90g suv bilan gullating' },
      { at: 45, text: 'Spiral harakat bilan 300g gacha suv quying' },
      { at: 120, text: 'Oxirgi 500g gacha bo\'lgan suvni quying' },
      { at: 240, text: 'Tiniq, kristalldek xushbo\'y qahva tayyor!' }
    ]
  }
];

export default function BrewingGuide() {
  const [selectedMethodId, setSelectedMethodId] = useState('v60');
  const [coffeeGrams, setCoffeeGrams] = useState(18);
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const currentMethod = BREW_METHODS.find((m) => m.id === selectedMethodId);
  const totalWater = Math.round(coffeeGrams * currentMethod.ratio);

  // Reset timer on method change
  useEffect(() => {
    setSecondsLeft(currentMethod.time);
    setIsTimerRunning(false);
  }, [selectedMethodId]);

  // Timer interval
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsLeft]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const elapsedTime = currentMethod.time - secondsLeft;
  const currentStep = [...currentMethod.steps].reverse().find((st) => elapsedTime >= st.at) || currentMethod.steps[0];

  return (
    <section id="brewing-guide" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
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
            <span>Barista Masterklassi</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Uyda Mukammal Qahva <span className="gold-gradient-text">Damlash Kalkulyatori</span>
          </h2>
          <p style={{ color: '#bfa89b', fontSize: '1rem', lineHeight: 1.6 }}>
            Sevimli usulingizni tanlang, qahva miqdorini belgilang va interaktiv taymer bilan damlang.
          </p>
        </div>

        {/* Method Switcher Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '2.5rem' }}>
          {BREW_METHODS.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMethodId(m.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: selectedMethodId === m.id ? 'linear-gradient(135deg, #e59837, #b45309)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedMethodId === m.id ? '#0f0a07' : '#cfc4bb',
                border: selectedMethodId === m.id ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: selectedMethodId === m.id ? '0 4px 15px rgba(229, 152, 55, 0.35)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Masterclass Board */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            border: '1px solid rgba(229, 152, 55, 0.25)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Recipe Calculator */}
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fcf9f2', marginBottom: '1.25rem' }}>
              {currentMethod.name} Nisbatlari
            </h3>

            {/* Coffee grams slider */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.85rem', color: '#d1c3b8' }}>Qahva miqdori:</span>
                <span className="font-serif gold-gradient-text" style={{ fontSize: '1.1rem', fontWeight: 800 }}>
                  {coffeeGrams} gramm
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="40"
                value={coffeeGrams}
                onChange={(e) => setCoffeeGrams(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#e59837', cursor: 'pointer' }}
              />
            </div>

            {/* Metric badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#60a5fa', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <Droplet size={15} />
                  <span>Kerakli suv hajmi</span>
                </div>
                <div className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fcf9f2' }}>
                  {totalWater} ml
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#f97316', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <Flame size={15} />
                  <span>Suv harorati</span>
                </div>
                <div className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fcf9f2' }}>
                  {currentMethod.temp}
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(229, 152, 55, 0.08)', border: '1px solid rgba(229, 152, 55, 0.2)', padding: '1rem', borderRadius: '14px', fontSize: '0.85rem', color: '#d1c3b8' }}>
              <strong style={{ color: '#f59e0b' }}>Maydalash:</strong> {currentMethod.grind}
            </div>
          </div>

          {/* Right: Live Interactive Brew Timer */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(27, 18, 12, 0.9), rgba(15, 10, 7, 0.95))',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(229, 152, 55, 0.3)',
              textAlign: 'center',
              boxShadow: '0 15px 35px rgba(0,0,0,0.6)'
            }}
          >
            <div style={{ color: '#bfa89b', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Damlanish Taymeri
            </div>

            {/* Big Clock Display */}
            <div className="font-serif gold-gradient-text" style={{ fontSize: '4rem', fontWeight: 900, lineHeight: 1, marginBottom: '1.25rem' }}>
              {formatTime(secondsLeft)}
            </div>

            {/* Current Step Guidance */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px dashed rgba(229, 152, 55, 0.3)',
                padding: '1rem',
                borderRadius: '14px',
                marginBottom: '1.5rem',
                minHeight: '65px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fcf9f2',
                fontSize: '0.88rem',
                fontWeight: 600
              }}
            >
              {secondsLeft === 0 ? '✨ Qahvangiz tayyor! Yoqimli ishtaha!' : currentStep?.text}
            </div>

            {/* Timer Controls */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.6rem' }}
              >
                {isTimerRunning ? <Pause size={18} /> : <Play size={18} />}
                <span>{isTimerRunning ? "To'xtatish" : 'Boshlash'}</span>
              </button>

              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setSecondsLeft(currentMethod.time);
                }}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.2rem' }}
                title="Qayta o'rnatish"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

