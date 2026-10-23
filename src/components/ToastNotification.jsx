import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ToastNotification = () => {
  const { toast, setToast, setIsCartOpen } = useCart();

  if (!toast) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 120,
          background: 'rgba(7, 30, 20, 0.95)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 184, 0, 0.4)',
          borderRadius: '20px',
          padding: '14px 18px',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          maxWidth: '380px',
          color: '#FFFFFF'
        }}
      >
        {toast.image ? (
          <img
            src={toast.image}
            alt="Product"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              objectFit: 'cover',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          />
        ) : (
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 107, 0, 0.2)',
              color: 'var(--color-sun-orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <CheckCircle2 size={22} />
          </div>
        )}

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
            {toast.title}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '2px' }}>
            {toast.subtitle}
          </div>
        </div>

        <button
          onClick={() => {
            setToast(null);
            setIsCartOpen(true);
          }}
          style={{
            background: 'var(--color-sun-orange)',
            color: '#FFFFFF',
            padding: '7px 12px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.75rem',
            fontWeight: 800,
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          View Cart
        </button>

        <button
          onClick={() => setToast(null)}
          aria-label="Close Toast"
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            display: 'flex',
            padding: '2px'
          }}
        >
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
