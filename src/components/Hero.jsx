import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Sun, ShieldCheck, Heart, Droplets } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { HeroJuiceVideoBackground } from './HeroJuiceVideoBackground';

export const Hero = () => {
  const { addToCart } = useCart();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: elPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '95px 24px 90px',
        overflow: 'hidden',
        background: 'linear-gradient(175deg, #FAF7F2 0%, #F5EEE2 60%, #EFE5D3 100%)'
      }}
    >
      {/* Premium Cinematic Juice Video Animation Background (Exclusively on Home Hero) */}
      <HeroJuiceVideoBackground containerRef={heroRef} />

      {/* Ambient Sunbeam Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '5%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 184, 0, 0.28) 0%, rgba(255, 107, 0, 0.12) 45%, rgba(255, 255, 255, 0) 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: '50px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10
        }}
        className="hero-grid"
      >
        {/* Left Column: Editorial Headline & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
        >
          {/* Subtitle Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              className="tag-badge tag-sun"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                fontSize: '0.82rem',
                fontWeight: '800'
              }}
            >
              <Sun size={15} color="#FF7A00" className="animate-spin-slow" />
              <span>COLD-PRESSED LIQUID VITALITY</span>
            </span>
            <span
              style={{
                fontSize: '0.78rem',
                color: 'var(--color-leaf-green)',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <ShieldCheck size={16} /> 100% Organic Certified
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)',
              lineHeight: 1.05,
              fontWeight: 900,
              color: 'var(--color-forest-dark)',
              textTransform: 'uppercase',
              letterSpacing: '-0.025em'
            }}
          >
            BRING HOME <br />
            THE <span style={{
              background: 'linear-gradient(135deg, #FF6B00 20%, #FFB800 80%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(255, 107, 0, 0.15)'
            }}>SUNSHINE.</span>
          </h1>

          {/* Supporting Text */}
          <p
            style={{
              fontSize: '1.18rem',
              lineHeight: 1.65,
              color: 'var(--color-text-muted)',
              maxWidth: '540px',
              fontWeight: 400
            }}
          >
            <strong style={{ color: 'var(--color-forest-dark)', fontWeight: 600 }}>100% Organic, Fresh & Crafted for Joy.</strong> Experience your daily boost of goodness cold-pressed from dawn-harvested citrus, leafy greens, and wild mountain berries. Zero heat, zero preservatives, pure bottled vitality.
          </p>

          {/* Key Stat Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              padding: '14px 0'
            }}
          >
            {[
              { label: '3.2 lbs', desc: 'Raw fruit per bottle' },
              { label: '38°F', desc: 'Zero-heat cold press' },
              { label: '0%', desc: 'Added sugars or water' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  padding: '10px 18px',
                  borderRadius: '16px',
                  boxShadow: '0 4px 15px rgba(12, 43, 30, 0.04)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: 'var(--color-sun-orange)',
                  lineHeight: 1
                }}>
                  {stat.label}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Dual CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              marginTop: '8px'
            }}
          >
            <button
              onClick={() => scrollTo('signature-blends')}
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '1rem'
              }}
            >
              <span>EXPLORE OUR BLENDS</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollTo('shop')}
              className="btn-secondary"
              style={{
                padding: '16px 32px',
                fontSize: '1rem',
                background: '#FFFFFF'
              }}
            >
              <Sun size={18} color="#FF7A00" />
              <span>SHOP ALL SUNSHINE</span>
            </button>
          </div>

          {/* Social Proof Mini */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginTop: '10px'
            }}
          >
            <div style={{ display: 'flex', marginLeft: '6px' }}>
              {[
                '/images/avatar-1.jpg',
                '/images/avatar-2.jpg',
                '/images/avatar-3.jpg',
                '/images/avatar-4.jpg'
              ].map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="Reviewer"
                  onError={(e) => { e.currentTarget.src = '/images/sunrise-orange.jpg'; }}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '2.5px solid #FFFFFF',
                    marginLeft: '-8px',
                    objectFit: 'cover',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: '3px', color: '#FFB800' }}>
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} style={{ fontSize: '1rem' }}>{star}</span>
                ))}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                Loved by <strong style={{ color: 'var(--color-forest-dark)' }}>12,400+</strong> healthy morning routines
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-Res Cinematic Bottle with Splash & Interactive Floating Fruits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Main Visual Frame with Realistic Photography */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -12px rgba(13, 44, 30, 0.25), 0 0 50px rgba(255, 184, 0, 0.2)',
              border: '3px solid rgba(255, 255, 255, 0.85)',
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <img
              src="/images/hero-juice.jpg"
              alt="Liquid Sunshine Cold-Pressed Orange Juice with Golden Splashes"
              onError={(e) => { e.currentTarget.src = '/images/sunrise-orange.jpg'; }}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover'
              }}
            />

            {/* In-image Golden Light Sheen */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 184, 0, 0.1) 40%, rgba(0, 0, 0, 0.25) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Cinematic Floating Badge in Bottom Left */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(13, 44, 30, 0.82)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '12px 20px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Droplets size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.02em' }}>
                  Signature Sunrise Blend
                </div>
                <div style={{ fontSize: '0.75rem', color: '#FFB800', fontWeight: 600 }}>
                  Valencia Orange • Meyer Lemon • Turmeric
                </div>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: Floating Orange Slice & Vitamin C Counter */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 4, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              padding: '14px 20px',
              borderRadius: '22px',
              border: '1.5px solid rgba(255, 184, 0, 0.4)',
              boxShadow: '0 16px 35px -6px rgba(255, 107, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 12
            }}
          >
            <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>🍊</div>
            <div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 800 }}>
                Immunity Power
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-sun-orange)' }}>
                220% Vit C / Bottle
              </div>
            </div>
          </motion.div>

          {/* Floating Widget 2: Zero Pasteurization Badge */}
          <motion.div
            animate={{
              y: [8, -8, 8],
              rotate: [0, -3, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'easeInOut',
              delay: 1
            }}
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '-25px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              padding: '12px 20px',
              borderRadius: '22px',
              border: '1.5px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 16px 35px -6px rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 12
            }}
          >
            <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>🌿</div>
            <div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 800 }}>
                Zero Heat Process
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-leaf-green)' }}>
                100% Living Enzymes
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Style Hook for Hero Grid */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
