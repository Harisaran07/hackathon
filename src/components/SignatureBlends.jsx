import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { SIGNATURE_BLENDS } from '../data/juiceData';

export const SignatureBlends = () => {
  const { addToCart } = useCart();

  const handleOrderCollection = (blend) => {
    addToCart({
      id: blend.id,
      name: blend.name,
      price: blend.price,
      image: blend.image,
      category: 'Signature Trio',
      nutrition: { volume: '3 x 300ml Glass Bottles' }
    }, 1);
  };

  return (
    <section
      id="signature-blends"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div
            className="tag-badge tag-sun"
            style={{ marginBottom: '14px', fontSize: '0.82rem', padding: '7px 18px' }}
          >
            <Sparkles size={15} color="#FF7A00" />
            <span>CURATED APOTHECARY COLLECTIONS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 900,
              color: 'var(--color-forest-dark)',
              lineHeight: 1.1,
              marginBottom: '18px'
            }}
          >
            SIGNATURE CRAFT <br />
            <span style={{ color: 'var(--color-sun-orange)' }}>JUICE COLLECTIONS.</span>
          </h2>

          <p style={{ fontSize: '1.12rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Masterfully paired cold-pressed trios scientifically designed to maximize cellular nutrient absorption and elevate daily energy.
          </p>
        </div>

        {/* 3 Premium Collection Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px'
          }}
          className="signature-grid"
        >
          {SIGNATURE_BLENDS.map((blend, idx) => (
            <motion.div
              key={blend.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#FAF7F2',
                border: '1.5px solid var(--color-cream-border)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="signature-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              {/* Card Image Banner */}
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  overflow: 'hidden',
                  background: blend.bgColor
                }}
              >
                <img
                  src={blend.image}
                  alt={blend.name}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  className="collection-img"
                />

                {/* Gradient tint */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'
                  }}
                />

                {/* Top Badge */}
                <div style={{ position: 'absolute', top: '18px', left: '18px' }}>
                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      color: blend.color,
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      letterSpacing: '0.06em',
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    {blend.badge}
                  </span>
                </div>

                {/* Savings Pill */}
                <div style={{ position: 'absolute', top: '18px', right: '18px' }}>
                  <span
                    style={{
                      background: 'var(--color-sun-orange)',
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-pill)',
                      boxShadow: '0 4px 12px rgba(255, 107, 0, 0.4)'
                    }}
                  >
                    {blend.savings}
                  </span>
                </div>

                {/* Bottom title inside banner */}
                <div style={{ position: 'absolute', bottom: '18px', left: '20px', right: '20px' }}>
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      lineHeight: 1.15
                    }}
                  >
                    {blend.name}
                  </h3>
                </div>
              </div>

              {/* Card Body Content */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.98rem', lineHeight: 1.55 }}>
                  {blend.subtitle}
                </p>

                {/* Bottles Included in this Trio */}
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '16px 20px',
                    border: '1px solid var(--color-cream-border)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest-dark)', marginBottom: '10px' }}>
                    Bottles Included in Trio:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {blend.bottles.map((bottle, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                        <span style={{ color: blend.color, display: 'flex' }}>
                          <Check size={16} />
                        </span>
                        <span>{bottle}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {blend.highlights.map((item, hIdx) => (
                    <span
                      key={hIdx}
                      style={{
                        fontSize: '0.75rem',
                        background: 'rgba(13, 44, 30, 0.05)',
                        color: 'var(--color-forest-dark)',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontWeight: 600
                      }}
                    >
                      • {item}
                    </span>
                  ))}
                </div>

                {/* Price and Order Button */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--color-cream-border)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 900,
                          color: 'var(--color-forest-dark)',
                          fontFamily: 'var(--font-heading)'
                        }}
                      >
                        ₹{blend.price.toLocaleString('en-IN')}
                      </span>
                      <span
                        style={{
                          fontSize: '1rem',
                          color: 'var(--color-text-light)',
                          textDecoration: 'line-through'
                        }}
                      >
                        ₹{blend.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-leaf-green)', fontWeight: 700 }}>
                      ✓ Includes Cold Chilled Box
                    </div>
                  </div>

                  <button
                    onClick={() => handleOrderCollection(blend)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: blend.color,
                      color: '#FFFFFF',
                      padding: '13px 24px',
                      borderRadius: 'var(--radius-pill)',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      boxShadow: `0 8px 20px ${blend.color}40`,
                      transition: 'all 0.25s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span>Order Pack</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .signature-card:hover .collection-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};
