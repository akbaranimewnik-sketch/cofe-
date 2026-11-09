import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const noiseSourceRef = useRef(null);

  const startCafeSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      // Create brown/pink noise buffer for warm rain & gentle cafe background
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise filter
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Gain adjustment
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Gentle lowpass filter for deep soothing room ambiance
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      whiteNoise.start();
      noiseSourceRef.current = whiteNoise;
      gainNodeRef.current = gainNode;
      setIsPlaying(true);
    } catch (e) {
      console.error('Audio could not be initialized:', e);
    }
  };

  const stopCafeSound = () => {
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopCafeSound();
    } else {
      startCafeSound();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 90 }}>
      <button
        onClick={toggleSound}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: isPlaying ? 'rgba(217, 119, 6, 0.95)' : 'rgba(27, 18, 12, 0.85)',
          color: isPlaying ? '#0f0a07' : '#fcf9f2',
          border: '1px solid rgba(229, 152, 55, 0.4)',
          backdropFilter: 'blur(12px)',
          padding: '10px 16px',
          borderRadius: '9999px',
          cursor: 'pointer',
          fontWeight: 600,
          fontSize: '0.82rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          transition: 'all 0.3s ease'
        }}
        title="Kafe sokinlik ovozi (Lo-Fi Ambiance)"
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} />
            <span>Kafe Ovozi: Yoqilgan</span>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', animation: 'pulseSlow 1.5s infinite' }}></span>
          </>
        ) : (
          <>
            <VolumeX size={16} color="#d97706" />
            <span>Kafe Muhit Ovozi</span>
          </>
        )}
      </button>
    </div>
  );
}

