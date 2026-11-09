import React, { useState } from 'react';
import { Calendar, Clock, Users, Heart, Sparkles, CheckCircle2, Crown, Coffee, Sun } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TABLES } from '../data/coffeeData';

export default function ReservationSection() {
  const [selectedTable, setSelectedTable] = useState('T-3');
  const [guestsCount, setGuestsCount] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  const timeSlots = ['11:00', '13:00', '15:30', '18:00', '19:30', '21:00', '22:15'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Iltimos, ismingiz va telefon raqamingizni kiriting!');
      return;
    }

    const bookingCode = 'AURA-' + Math.floor(1000 + Math.random() * 9000);
    const tableObj = TABLES.find((t) => t.id === selectedTable);

    setBookingConfirmed({
      code: bookingCode,
      name,
      phone,
      date,
      time: timeSlot,
      guests: guestsCount,
      table: tableObj?.name + ` (${tableObj?.type})`,
      specialRequest
    });

    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="reservation" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
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
            <Calendar size={16} />
            <span>Onlayn Rezervatsiya</span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Unutilmas Oqshom Uchun <span className="gold-gradient-text">Stol Band Qilish</span>
          </h2>
          <p style={{ color: '#bfa89b', fontSize: '1rem', lineHeight: 1.6 }}>
            Romantik kechki ovqat, ishbilarmonlik suhbati yoki oilaviy shodiyona uchun o'zingizga ma'qul stol va vaqtni tanlang.
          </p>
        </div>

        {bookingConfirmed ? (
          /* Confirmation Success Card */
          <div
            className="glass-panel"
            style={{
              maxWidth: '650px',
              margin: '0 auto',
              borderRadius: '24px',
              padding: '3rem 2rem',
              textAlign: 'center',
              border: '1px solid rgba(229, 152, 55, 0.4)',
              background: 'linear-gradient(to bottom, #1d130c, #110a06)'
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <CheckCircle2 size={38} color="#10b981" />
            </div>

            <h3 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fcf9f2', marginBottom: '0.5rem' }}>
              Stolingiz Muvaffaqiyatli Band Qilindi!
            </h3>
            <p style={{ color: '#d1c3b8', fontSize: '0.95rem', marginBottom: '2rem' }}>
              Hurmatli {bookingConfirmed.name}, biz sizni kutib olishdan mamnunmiz. Tasdiqlash SMS xabarnomasi yuborildi.
            </p>

            {/* Voucher Details */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                border: '1px dashed rgba(229, 152, 55, 0.35)',
                padding: '1.5rem',
                marginBottom: '2rem',
                textAlign: 'left',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#a89487', display: 'block' }}>Rezervatsiya kodi:</span>
                <span className="font-serif gold-gradient-text" style={{ fontSize: '1.3rem', fontWeight: 800 }}>
                  {bookingConfirmed.code}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#a89487', display: 'block' }}>Sana & Vaqt:</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fcf9f2' }}>
                  {bookingConfirmed.date} • {bookingConfirmed.time}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#a89487', display: 'block' }}>Stol & Mehmonlar:</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fcf9f2' }}>
                  {bookingConfirmed.table} • {bookingConfirmed.guests} kishi
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#a89487', display: 'block' }}>Telefon:</span>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fcf9f2' }}>
                  {bookingConfirmed.phone}
                </span>
              </div>
            </div>

            <button
              onClick={() => setBookingConfirmed(null)}
              className="btn-primary"
              style={{ padding: '0.85rem 2rem' }}
            >
              Yangi stol band qilish
            </button>
          </div>
        ) : (
          /* Interactive Reservation Form & Table Floor Plan */
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3.5vw, 3rem)',
              border: '1px solid rgba(229, 152, 55, 0.25)'
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                
                {/* Column 1: Visual Table Selector */}
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fcf9f2' }}>
                    1. Joy / Stol turini tanlang
                  </h3>
                  <p style={{ color: '#a89487', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    Interaktiv reja bo'yicha o'zingizga yoqqan hududni belgilang:
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {TABLES.map((tbl) => {
                      const isSelected = selectedTable === tbl.id;
                      return (
                        <div
                          key={tbl.id}
                          onClick={() => setSelectedTable(tbl.id)}
                          style={{
                            background: isSelected ? 'rgba(229, 152, 55, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                            border: isSelected ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '16px',
                            padding: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontWeight: 800, color: isSelected ? '#f59e0b' : '#fcf9f2', fontSize: '0.95rem' }}>
                              {tbl.name}
                            </span>
                            <span style={{ fontSize: '0.75rem', color: '#a89487' }}>
                              {tbl.capacity} kishilik
                            </span>
                          </div>
                          <div style={{ fontSize: '0.8rem', color: isSelected ? '#fff' : '#bfa89b' }}>
                            {tbl.type}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Date, Time & Guest Details */}
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fcf9f2' }}>
                    2. Sana, Vaqt va Ma'lumotlar
                  </h3>
                  <p style={{ color: '#a89487', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                    Tashrifingiz tafsilotlarini kiriting:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Date and Guests in row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                          Tashrif sanasi:
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
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
                          Mehmonlar soni:
                        </label>
                        <select
                          value={guestsCount}
                          onChange={(e) => setGuestsCount(Number(e.target.value))}
                          style={{
                            width: '100%',
                            background: '#1b120c',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            padding: '10px 14px',
                            color: '#fcf9f2',
                            fontSize: '0.9rem',
                            outline: 'none'
                          }}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                            <option key={num} value={num}>
                              {num} kishi
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                        Tashrif vaqti:
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {timeSlots.map((ts) => (
                          <button
                            key={ts}
                            type="button"
                            onClick={() => setTimeSlot(ts)}
                            style={{
                              padding: '8px 14px',
                              borderRadius: '10px',
                              fontSize: '0.82rem',
                              cursor: 'pointer',
                              background: timeSlot === ts ? 'rgba(229, 152, 55, 0.3)' : 'rgba(255, 255, 255, 0.04)',
                              border: timeSlot === ts ? '1px solid #e59837' : '1px solid rgba(255, 255, 255, 0.1)',
                              color: timeSlot === ts ? '#f59e0b' : '#cfc4bb',
                              fontWeight: timeSlot === ts ? 700 : 500
                            }}
                          >
                            {ts}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Phone in row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                          Ismingiz:
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Masalan: Sardor"
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
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', color: '#d1c3b8', marginBottom: '6px' }}>
                        Maxsus istaklar (Tug'ilgan kun dekoratsiyasi, shamlar, va h.k.):
                      </label>
                      <input
                        type="text"
                        placeholder="Masalan: Romantik shamlar qo'yib qo'yilsin..."
                        value={specialRequest}
                        onChange={(e) => setSpecialRequest(e.target.value)}
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', marginTop: '0.5rem', padding: '1rem', fontSize: '1.05rem' }}
                    >
                      <Calendar size={20} />
                      <span>Stolni Band Qilishni Tasdiqlash</span>
                    </button>
                  </div>
                </div>

              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

