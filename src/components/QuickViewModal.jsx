import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Check, Star, ShieldCheck, Thermometer, Droplets, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAdd = () => {
    addToCart(quickViewProduct, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  const p = quickViewProduct;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setQuickViewProduct(null)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(7, 30, 20, 0.75)',
          backdropFilter: 'blur(10px)'
        }}
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '850px',
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1.5px solid var(--color-cream-border)',
          zIndex: 111,
          maxHeight: '90vh',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr',
          gap: '36px'
        }}
        className="quickview-grid"
      >
        <button
          onClick={() => setQuickViewProduct(null)}
          aria-label="Close Modal"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'var(--color-cream-base)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-forest-dark)',
            cursor: 'pointer',
            zIndex: 5
          }}
        >
          <X size={18} />
        </button>

        {/* Left: Product Image Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'radial-gradient(circle, #FDFCFA 0%, #F5EFE6 100%)',
              border: '1px solid var(--color-cream-border)',
              aspectRatio: '1 / 1'
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: p.id === 'carrot-glow' ? 'center 35%' : 'center'
              }}
            />
            <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
              <span
                style={{
                  background: p.lightColor,
                  color: p.color,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}
              >
                {p.badge}
              </span>
            </div>
          </div>

          <div
            style={{
              background: 'var(--color-cream-base)',
              padding: '12px 16px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              textAlign: 'center',
              border: '1px solid var(--color-cream-border)'
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>PRESS TEMP</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: p.color }}>{p.nutrition.coldPressedTemp}</div>
            </div>
            <div style={{ width: '1px', height: '24px', background: 'var(--color-cream-border)' }} />
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>BOTTLE SIZE</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>{p.nutrition.volume}</div>
            </div>
            <div style={{ width: '1px', height: '24px', background: 'var(--color-cream-border)' }} />
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>CALORIES</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>{p.nutrition.calories}</div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: p.color, letterSpacing: '0.08em' }}>
                {p.category} BLEND
              </span>
              <span style={{ color: 'var(--color-text-light)' }}>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFB800', fontSize: '0.82rem', fontWeight: 800 }}>
                <Star size={14} fill="#FFB800" />
                <span>{p.rating} ({p.reviewsCount} reviews)</span>
              </div>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-forest-dark)', lineHeight: 1.15 }}>
              {p.name}
            </h2>

            <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--color-forest-dark)', marginTop: '6px', fontFamily: 'var(--font-heading)' }}>
              ₹{p.price}
            </div>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            {p.description}
          </p>

          {/* Cold-Pressed Ingredients */}
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest-dark)', marginBottom: '8px' }}>
              Organic Whole Ingredients:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {p.ingredients.map((ing, i) => (
                <span
                  key={i}
                  style={{
                    background: 'var(--color-cream-base)',
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--color-forest-dark)',
                    border: '1px solid var(--color-cream-border)'
                  }}
                >
                  🌿 {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Flavor Profile Bars */}
          <div
            style={{
              background: 'var(--color-cream-base)',
              padding: '16px 20px',
              borderRadius: '20px',
              border: '1px solid var(--color-cream-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-forest-dark)' }}>
              Flavor & Sensation Meter:
            </div>
            {Object.entries(p.flavorProfile).map(([key, val]) => (
              <div key={key}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'capitalize', marginBottom: '3px' }}>
                  <span>{key}</span>
                  <span>{val}%</span>
                </div>
                <div style={{ height: '6px', borderRadius: '6px', background: 'var(--color-cream-border)', overflow: 'hidden' }}>
                  <div style={{ width: `${val}%`, height: '100%', background: p.color, borderRadius: '6px' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Quantity and Add to Cart Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '6px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--color-cream-base)',
                borderRadius: 'var(--radius-pill)',
                padding: '10px 18px',
                border: '1.5px solid var(--color-cream-border)'
              }}
            >
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                style={{ color: 'var(--color-forest-dark)', display: 'flex', cursor: 'pointer' }}
              >
                <Minus size={15} />
              </button>
              <span style={{ fontSize: '1rem', fontWeight: 800, minWidth: '20px', textAlign: 'center' }}>
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                style={{ color: 'var(--color-forest-dark)', display: 'flex', cursor: 'pointer' }}
              >
                <Plus size={15} />
              </button>
            </div>

            <button
              onClick={handleAdd}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 24px',
                borderRadius: 'var(--radius-pill)',
                background: added ? 'var(--color-leaf-green)' : `linear-gradient(135deg, ${p.color} 0%, var(--color-sun-amber) 100%)`,
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.95rem',
                boxShadow: `0 8px 20px ${p.color}40`,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {added ? (
                <>
                  <Check size={18} />
                  <span>Added {qty} to Chilled Cart!</span>
                </>
              ) : (
                <>
                  <Plus size={18} />
                  <span>Add to Cart • ₹{(p.price * qty).toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .quickview-grid {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};
