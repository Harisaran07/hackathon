import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check, Clock, Calendar, Shield, Zap, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CLEANSE_PLANS } from '../data/juiceData';

export const CleansePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(CLEANSE_PLANS[1]);
  const { addToCart } = useCart();

  const handleOrderCleanse = (plan) => {
    addToCart({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      image: '/images/signature-box.jpg',
      category: 'Cleanse Plan',
      nutrition: { volume: `${plan.bottlesCount} Cold-Pressed Bottles` }
    }, 1);
  };

  return (
    <section
      id="cleanse-plans"
      style={{
        padding: '110px 24px',
        background: 'linear-gradient(180deg, #F3ECE1 0%, #FAF7F2 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <div
            className="tag-badge tag-forest"
            style={{ marginBottom: '14px', fontSize: '0.82rem', padding: '7px 18px' }}
          >
            <Sparkles size={15} color="#047857" />
            <span>NUTRITIONIST-DESIGNED PROTOCOLS</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 900,
              color: 'var(--color-forest-dark)',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}
          >
            DEEP CELLULAR <br />
            <span style={{ color: 'var(--color-leaf-green)' }}>DETOX & CLEANSE PLANS.</span>
          </h2>

          <p style={{ fontSize: '1.12rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Give your digestive system a pure metabolic holiday. Replenish with living raw enzymes, electrolytes, and targeted herbal botanicals.
          </p>
        </div>

        {/* 3 Interactive Plan Selector Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {CLEANSE_PLANS.map((plan) => {
            const isSelected = selectedPlan.id === plan.id;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                style={{
                  background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.65)',
                  borderRadius: '28px',
                  padding: '30px',
                  border: isSelected ? '2px solid var(--color-leaf-green)' : '1.5px solid var(--color-cream-border)',
                  boxShadow: isSelected ? '0 16px 40px -8px rgba(16, 185, 129, 0.25)' : 'var(--shadow-subtle)',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isSelected ? 'translateY(-4px)' : 'none'
                }}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                      color: '#FFFFFF',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '5px 16px',
                      borderRadius: 'var(--radius-pill)',
                      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    ★ Most Recommended
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 800,
                        color: 'var(--color-leaf-green)',
                        background: 'rgba(16, 185, 129, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '12px'
                      }}
                    >
                      {plan.days} {plan.days === 1 ? 'Day Reset' : 'Days Protocol'}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      {plan.bottlesCount} Cold-Pressed Bottles
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--color-forest-dark)',
                      marginBottom: '8px'
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '18px' }}>
                    {plan.tagline}
                  </p>

                  <div
                    style={{
                      background: 'var(--color-cream-base)',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      fontSize: '0.85rem',
                      color: 'var(--color-forest-dark)',
                      fontWeight: 600,
                      lineHeight: 1.45,
                      marginBottom: '16px',
                      border: '1px solid var(--color-cream-border)'
                    }}
                  >
                    🌱 <strong>Target Goal:</strong> {plan.benefit}
                  </div>

                  {plan.bonus && (
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: '#B45309',
                        background: '#FEF3C7',
                        padding: '8px 14px',
                        borderRadius: '12px',
                        fontWeight: 700,
                        marginBottom: '16px'
                      }}
                    >
                      🎁 {plan.bonus}
                    </div>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--color-cream-border)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                      Total Cleanse
                    </div>
                    <div style={{ fontSize: '1.65rem', fontWeight: 900, color: 'var(--color-forest-dark)' }}>
                      ₹{plan.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOrderCleanse(plan);
                    }}
                    style={{
                      background: isSelected ? 'var(--color-forest-deep)' : 'var(--color-leaf-green)',
                      color: '#FFFFFF',
                      padding: '11px 20px',
                      borderRadius: 'var(--radius-pill)',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                    }}
                  >
                    <span>Start Cleanse</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Plan Daily Schedule Timeline View */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '30px',
            padding: '36px',
            border: '1.5px solid var(--color-cream-border)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--color-leaf-green)', letterSpacing: '0.08em' }}>
                CLEANSE PROTOCOL SCHEDULE
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                Your Daily Rhythm for {selectedPlan.name}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              <Clock size={16} color="var(--color-sun-orange)" />
              <span>Drink 1 bottle every 2.5 - 3 hours with 500ml water</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px'
            }}
          >
            {selectedPlan.timeline.map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-cream-base)',
                  borderRadius: '18px',
                  padding: '18px',
                  border: '1px solid var(--color-cream-border)',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    color: 'var(--color-sun-orange)',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Clock size={13} />
                  <span>{step.time}</span>
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-forest-dark)', marginBottom: '4px' }}>
                  {step.juice}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>
                  {step.purpose}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
