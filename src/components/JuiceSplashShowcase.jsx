import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, Sparkles, Wind, Play, Plus, Check, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { JUICE_PRODUCTS } from '../data/juiceData';

const SPLASH_MODES = [
  {
    id: 'all',
    name: 'Full Symphony Splash',
    color: '#FF6B00',
    accent: '#FFB800',
    image: '/images/splash-showcase.jpg',
    title: 'THE QUAD-SPECTRUM VITALITY SPLASH',
    tagline: 'Four distinct nutritional spectrums in harmonious kinetic motion',
    flavorNotes: 'Organic Citrus • Deep Chlorophyll • Berry Polyphenols • Acai Stamina',
    floatingFruits: ['🍊', '🍋', '🍓', '🍏', '🫐', '🌿', '🥕'],
    productId: 'sunrise-orange'
  },
  {
    id: 'citrus',
    name: 'Citrus Sun Splash',
    color: '#FF7A00',
    accent: '#FFB800',
    image: '/images/splash-citrus.jpg',
    title: 'GOLDEN CITRUS WAVE & SUNBURST',
    tagline: 'High-speed cold extraction bursting with bioavailable Vitamin C',
    flavorNotes: 'Valencia Orange • Meyer Lemon • Hawaiian Turmeric',
    floatingFruits: ['🍊', '🍋', '🍊', '✨', '💧'],
    productId: 'sunrise-orange'
  },
  {
    id: 'green',
    name: 'Green Detox Splash',
    color: '#15803D',
    accent: '#4ADE80',
    image: '/images/splash-green.jpg',
    title: 'EMERALD CHLOROPHYLL CASCADE',
    tagline: 'Alkalizing cold rush of crisp green apple, lacinato kale and Persian lime',
    flavorNotes: 'Crisp Apple • English Cucumber • Lacinato Kale • Spearmint',
    floatingFruits: ['🍏', '🥒', '🌿', '🌱', '💧'],
    productId: 'green-detox'
  },
  {
    id: 'berry',
    name: 'Ruby Berry Splash',
    color: '#BE123C',
    accent: '#FB7185',
    image: '/images/splash-berry.jpg',
    title: 'RUBY BERRY ANTIOXIDANT TORRENT',
    tagline: 'Volcanic collision of wild berries, pomegranate arils and Fiji ginger',
    flavorNotes: 'Wild Blackberry • Red Raspberry • Pomegranate • Ginger',
    floatingFruits: ['🍓', '🫐', '🍒', '✨', '💧'],
    productId: 'berry-blast'
  },
  {
    id: 'purple',
    name: 'Purple Vitality Splash',
    color: '#7C3AED',
    accent: '#A78BFA',
    image: '/images/splash-purple.jpg',
    title: 'ROYAL VIOLET BEET & ACAI SURGE',
    tagline: 'Deep cellular oxygenation through dark berries and organic chioggia beet',
    flavorNotes: 'Amazon Acai • Chioggia Beetroot • Concord Grape • Peppermint',
    floatingFruits: ['🫐', '🍇', '💜', '🌿', '💧'],
    productId: 'purple-vitality'
  }
];

export const JuiceSplashShowcase = () => {
  const [activeSplash, setActiveSplash] = useState(SPLASH_MODES[0]);
  const [isPouring, setIsPouring] = useState(false);
  const { addToCart } = useCart();

  const currentProduct = JUICE_PRODUCTS.find(p => p.id === activeSplash.productId) || JUICE_PRODUCTS[0];

  const triggerPourAnimation = () => {
    setIsPouring(true);
    setTimeout(() => setIsPouring(false), 2000);
  };

  return (
    <section
      id="juice-splash"
      style={{
        position: 'relative',
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #071E14 0%, #0D2C1E 50%, #092116 100%)',
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      {/* Background Dynamic Splash Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: `radial-gradient(circle, ${activeSplash.color}40 0%, ${activeSplash.accent}15 45%, rgba(0,0,0,0) 70%)`,
          filter: 'blur(80px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Floating Sparkles & Droplets in Ambient space */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: `${15 + (i * 6)}%`,
              left: `${5 + ((i * 7) % 90)}%`,
              width: `${6 + (i % 6)}px`,
              height: `${6 + (i % 6)}px`,
              borderRadius: '50%',
              background: i % 2 === 0 ? activeSplash.accent : '#FFFFFF',
              boxShadow: `0 0 12px ${activeSplash.color}`
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '8px 20px',
              borderRadius: 'var(--radius-pill)',
              border: `1px solid ${activeSplash.accent}50`,
              color: activeSplash.accent,
              fontSize: '0.85rem',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px',
              transition: 'all 0.4s ease'
            }}
          >
            <Sparkles size={16} />
            <span>KINETIC JUICE SPLASH SHOWCASE</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            NATURE’S LIQUID ENERGY, <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${activeSplash.accent} 0%, #FFFFFF 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'all 0.6s ease'
              }}
            >
              CAPTURED IN MOTION.
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(255, 255, 255, 0.75)',
              lineHeight: 1.6
            }}
          >
            Experience our 38°F hydraulic cold-press technology. Watch fresh orange, emerald greens, ruby berries, and royal purple roots splash in slow-motion suspended clarity.
          </p>
        </div>

        {/* Interactive Splash Flavor Pill Selector */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {SPLASH_MODES.map((mode) => {
            const isActive = activeSplash.id === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveSplash(mode);
                  triggerPourAnimation();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pill)',
                  background: isActive ? mode.color : 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  border: isActive ? `2px solid ${mode.accent}` : '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: isActive ? `0 10px 25px ${mode.color}60` : 'none',
                  transform: isActive ? 'translateY(-3px)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
              >
                <span
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: mode.accent,
                    boxShadow: isActive ? `0 0 10px ${mode.accent}` : 'none'
                  }}
                />
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Kinetic Splash Showcase Canvas */}
        <div
          style={{
            position: 'relative',
            borderRadius: '36px',
            overflow: 'hidden',
            background: 'rgba(10, 32, 22, 0.65)',
            backdropFilter: 'blur(20px)',
            border: `2px solid ${activeSplash.accent}30`,
            boxShadow: `0 30px 80px -10px rgba(0, 0, 0, 0.5), 0 0 50px ${activeSplash.color}30`,
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.9fr',
            gap: '30px',
            alignItems: 'center',
            padding: '40px',
            transition: 'border-color 0.5s ease, box-shadow 0.5s ease'
          }}
          className="splash-canvas-grid"
        >
          {/* Left: Dynamic Splashing Bottles Photography Frame */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <motion.img
              key={activeSplash.id}
              initial={{ scale: 1.05, filter: 'brightness(1.2)' }}
              animate={{ scale: 1, filter: 'brightness(1)' }}
              transition={{ duration: 0.8 }}
              src={activeSplash.image || '/images/splash-showcase.jpg'}
              onError={(e) => { e.currentTarget.src = '/images/splash-showcase.jpg'; }}
              alt="Liquid Sunshine Four Juice Kinetic Splash Showcase"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover'
              }}
            />

            {/* Kinetic Splash Wave Overlay (SVG animated wave at bottom of image) */}
            <svg
              viewBox="0 0 1440 320"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '80px',
                pointerEvents: 'none',
                opacity: 0.8
              }}
            >
              <motion.path
                animate={{
                  d: isPouring
                    ? 'M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,149.3C672,139,768,181,864,208C960,235,1056,245,1152,218.7C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                    : 'M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,218.7C672,224,768,192,864,181.3C960,171,1056,181,1152,192C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                fill={activeSplash.color}
                fillOpacity="0.45"
              />
            </svg>

            {/* Flying Fruit Slices in Slow Motion */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {activeSplash.floatingFruits.map((emoji, idx) => (
                <motion.div
                  key={`${activeSplash.id}-${idx}`}
                  initial={{ y: 80, opacity: 0, rotate: -20 }}
                  animate={{
                    y: [-15, 15, -15],
                    x: [(idx % 2 === 0 ? -12 : 12), (idx % 2 === 0 ? 12 : -12), (idx % 2 === 0 ? -12 : 12)],
                    rotate: [0, idx % 2 === 0 ? 30 : -30, 0],
                    opacity: 1
                  }}
                  transition={{
                    duration: 4 + idx * 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.2
                  }}
                  style={{
                    position: 'absolute',
                    top: `${15 + (idx * 12)}%`,
                    left: `${8 + ((idx * 15) % 80)}%`,
                    fontSize: '2.2rem',
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))'
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </div>

            {/* Interactive "Simulate Pour & Splash" trigger */}
            <button
              onClick={triggerPourAnimation}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                padding: '10px 18px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = activeSplash.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
              }}
            >
              <Play size={14} fill="#FFFFFF" />
              <span>{isPouring ? 'Splashing...' : 'Simulate Splash'}</span>
            </button>
          </div>

          {/* Right: Flavor Breakdown & Instant Order Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: activeSplash.accent,
                  marginBottom: '8px'
                }}
              >
                LIVE EXTRACT SPECTRUM
              </div>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '10px'
                }}
              >
                {activeSplash.title}
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                {activeSplash.tagline}
              </p>
            </div>

            {/* Tasting Notes Bar */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)', fontWeight: 800, marginBottom: '6px' }}>
                Cold-Pressed Ingredients
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>
                {activeSplash.flavorNotes}
              </div>
            </div>

            {/* Quick Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '14px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Temperature</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: activeSplash.accent }}>38°F Chilled</div>
              </div>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  padding: '14px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Preservatives</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#4ADE80' }}>0% Pure Raw</div>
              </div>
            </div>

            {/* Add to Cart CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '10px' }}>
              <button
                onClick={() => addToCart(currentProduct, 1)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: `linear-gradient(135deg, ${activeSplash.color} 0%, ${activeSplash.accent} 100%)`,
                  color: '#FFFFFF',
                  padding: '16px 24px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  letterSpacing: '0.04em',
                  boxShadow: `0 10px 25px ${activeSplash.color}60`,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Plus size={18} />
                <span>ADD {currentProduct.name.toUpperCase()} • ₹{currentProduct.price}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .splash-canvas-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
