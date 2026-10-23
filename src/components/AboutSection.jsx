import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Sun, Award, CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section
      id="about"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FAF7F2',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}
          className="about-split-grid"
        >
          {/* Left Column: Farm & Craft Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hover)',
                border: '3px solid #FFFFFF',
                position: 'relative'
              }}
            >
              <img
                src="/images/farm-harvest.jpg"
                alt="Liquid Sunshine Organic Farm Harvest & Orchards"
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover'
                }}
              />

              {/* In-image Gradient */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 30, 20, 0.7) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Bottom Inset Label */}
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: '#FFFFFF' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sun-gold)' }}>
                  Sunhaven Organic Groves • Certified Regenerative
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '4px' }}>
                  Harvested with love at dawn. Pressed within 3 hours.
                </div>
              </div>
            </div>

            {/* Overlapping Floating Milestone Card */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '16px 22px',
                boxShadow: '0 16px 36px rgba(12, 43, 30, 0.12)',
                border: '1.5px solid var(--color-cream-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
              className="about-stat-pill"
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--color-sun-orange)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Sun size={22} />
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-forest-dark)', lineHeight: 1 }}>
                  100%
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>
                  Solar-Powered Pressing
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engaging Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}
          >
            <div>
              <div
                className="tag-badge tag-sun"
                style={{ marginBottom: '14px', fontSize: '0.8rem', padding: '6px 16px' }}
              >
                <Heart size={14} color="#FF7A00" />
                <span>OUR ROOTS & CRAFTSMANSHIP</span>
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
                WE CRAFTED WHAT <br />
                <span style={{ color: 'var(--color-sun-orange)' }}>OUR OWN BODIES CRAVED.</span>
              </h2>
            </div>

            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              Liquid Sunshine began on a small fourth-generation organic citrus orchard. Tired of supermarket juices disguised as "healthy" while being boiled through thermal pasteurization and stripped of all delicate enzymes, we decided to build something uncompromisingly pure.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>
              Every morning before sunrise, our team hand-sorts Valencia oranges, crisp Granny Smiths, dark lacinato kale, and wild mountain berries. We use hydraulic presses that exert 9 tons of pressure at exactly 38°F—liberating pure micro-nutrients without generating even a fraction of heat.
            </p>

            {/* Checklist of Principles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', margin: '8px 0' }}>
              {[
                'Zero thermal pasteurization',
                'Never diluted with tap water',
                'Zero refined cane sugars',
                '3.2 lbs produce per bottle',
                '100% recyclable glass bottles',
                'Zero chemical preservatives'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>
                  <CheckCircle size={17} color="var(--color-leaf-green)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Founder Quote */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                padding: '20px 24px',
                borderLeft: '4px solid var(--color-sun-orange)',
                boxShadow: 'var(--shadow-subtle)',
                marginTop: '10px'
              }}
            >
              <p style={{ fontStyle: 'italic', color: 'var(--color-forest-dark)', fontSize: '0.98rem', lineHeight: 1.5, marginBottom: '10px' }}>
                "We don't just sell juice. We bottle the radiant, unadulterated vitality of the morning sun so you can thrive every single day."
              </p>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-sun-orange)' }}>
                — Clara & Soren Lindqvist, Founders
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-stat-pill {
            right: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};
