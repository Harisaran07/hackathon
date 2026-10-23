import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/juiceData';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div
            className="tag-badge tag-sun"
            style={{ marginBottom: '14px', fontSize: '0.82rem', padding: '7px 18px' }}
          >
            <Sparkles size={15} color="#FF7A00" />
            <span>REAL WORDS FROM REAL SIP-LOVERS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              fontWeight: 900,
              color: 'var(--color-forest-dark)',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}
          >
            LOVED BY OVER <br />
            <span style={{ color: 'var(--color-sun-orange)' }}>12,000+ DAILY DRINKERS.</span>
          </h2>
        </div>

        {/* Testimonial Stage Card */}
        <div
          style={{
            position: 'relative',
            background: '#FAF7F2',
            borderRadius: '36px',
            padding: '50px 40px',
            border: '2px solid var(--color-cream-border)',
            boxShadow: 'var(--shadow-card)',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="testimonial-card-frame"
        >
          {/* Large Decorative Quote Icon */}
          <div
            style={{
              position: 'absolute',
              top: '30px',
              right: '40px',
              color: 'rgba(255, 107, 0, 0.12)',
              pointerEvents: 'none'
            }}
          >
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              {/* Star Rating & Verified Tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#FFB800' }}>
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFB800" stroke="#FFB800" />
                  ))}
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    color: 'var(--color-leaf-green)',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 700
                  }}
                >
                  <CheckCircle size={13} /> Verified Purchase
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-light)' }}>
                  {current.date}
                </span>
              </div>

              {/* Review Body */}
              <p
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1.6,
                  color: 'var(--color-forest-dark)',
                  fontStyle: 'italic',
                  maxWidth: '850px'
                }}
              >
                "{current.text}"
              </p>

              {/* Customer Profile */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
                <img
                  src={current.avatar}
                  alt={current.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                />
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                    {current.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                    {current.role} • <span style={{ color: 'var(--color-sun-orange)' }}>{current.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Bottom Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '36px',
              paddingTop: '24px',
              borderTop: '1px solid var(--color-cream-border)'
            }}
          >
            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  style={{
                    width: currentIndex === idx ? '28px' : '10px',
                    height: '10px',
                    borderRadius: '10px',
                    background: currentIndex === idx ? 'var(--color-sun-orange)' : '#D1C5B2',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1.5px solid var(--color-cream-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-forest-dark)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-sun-orange)';
                  e.currentTarget.style.color = 'var(--color-sun-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-cream-border)';
                  e.currentTarget.style.color = 'var(--color-forest-dark)';
                }}
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--color-forest-dark)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 14px rgba(13, 44, 30, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-sun-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-forest-dark)';
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-card-frame {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};
