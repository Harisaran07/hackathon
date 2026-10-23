import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sunrise, ShieldCheck, Recycle, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/juiceData';

const iconMap = {
  Leaf: Leaf,
  Sunrise: Sunrise,
  ShieldCheck: ShieldCheck,
  Recycle: Recycle
};

export const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      style={{
        padding: '110px 24px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Leaf Accent */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div
            className="tag-badge tag-sun"
            style={{ marginBottom: '14px', fontSize: '0.82rem', padding: '7px 18px' }}
          >
            <Award size={15} color="#FF7A00" />
            <span>THE LIQUID SUNSHINE STANDARD</span>
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
            WHY CHOOSE <br />
            <span style={{ color: 'var(--color-sun-orange)' }}>LIQUID SUNSHINE?</span>
          </h2>

          <p style={{ fontSize: '1.12rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            We believe beverage craftsmanship should nourish every cell in your body while treading lightly on the earth. Here is our solemn four-pillar promise.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}
        >
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Leaf;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                style={{
                  background: '#FAF7F2',
                  borderRadius: '26px',
                  padding: '36px 28px',
                  border: '1.5px solid var(--color-cream-border)',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                  e.currentTarget.style.borderColor = 'var(--color-sun-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                  e.currentTarget.style.borderColor = 'var(--color-cream-border)';
                }}
              >
                <div>
                  {/* Icon Frame */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, var(--color-forest-dark) 0%, var(--color-forest-mid) 100%)',
                      color: 'var(--color-sun-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 8px 20px rgba(13, 44, 30, 0.15)'
                    }}
                  >
                    <IconComponent size={30} />
                  </div>

                  {/* Highlight pill */}
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-leaf-green)',
                      marginBottom: '8px'
                    }}
                  >
                    {pillar.highlight}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: 'var(--color-forest-dark)',
                      lineHeight: 1.25,
                      marginBottom: '14px'
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.6
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Metric footer */}
                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--color-cream-border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-leaf-green)" />
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--color-forest-dark)'
                    }}
                  >
                    {pillar.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
