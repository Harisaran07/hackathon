import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal,
    discountCode,
    discountPercent,
    discountAmount,
    applyDiscount,
    removeDiscount,
    freeShippingThreshold,
    isFreeShipping,
    shippingFee,
    estimatedTax,
    grandTotal,
    setIsCheckoutOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyDiscount(inputCode);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoError('');
      setInputCode('');
    }
  };

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(7, 30, 20, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      />

      {/* Drawer Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 26, stiffness: 240 }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '460px',
          background: '#FAF7F2',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 101
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px',
            borderBottom: '1px solid var(--color-cream-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 107, 0, 0.12)',
                color: 'var(--color-sun-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-forest-dark)', lineHeight: 1 }}>
                Your Chilled Basket
              </h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                {totalItems} {totalItems === 1 ? 'bottle' : 'bottles'} selected
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-cream-base)',
              color: 'var(--color-forest-dark)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div
          style={{
            background: '#FFFFFF',
            padding: '14px 24px',
            borderBottom: '1px solid var(--color-cream-border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-forest-dark)' }}>
              <Truck size={15} color="var(--color-leaf-green)" />
              {isFreeShipping ? (
                <span style={{ color: 'var(--color-leaf-green)' }}>🎉 You unlocked Free Express Chilled Shipping!</span>
              ) : (
                <span>Add <strong style={{ color: 'var(--color-sun-orange)' }}>₹{Math.ceil(remainingForFreeShipping)}</strong> more for Free Chilled Shipping</span>
              )}
            </div>
            <span style={{ color: 'var(--color-text-muted)' }}>{Math.round(shippingProgress)}%</span>
          </div>

          <div
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '6px',
              background: 'var(--color-cream-border)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${shippingProgress}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--color-leaf-green) 0%, var(--color-bright-lime) 100%)',
                borderRadius: '6px',
                transition: 'width 0.35s ease'
              }}
            />
          </div>
        </div>

        {/* Item List / Empty State */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {cart.length === 0 ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: '16px',
                padding: '40px 20px'
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(255, 107, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem'
                }}
              >
                🍊
              </div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                Your Chilled Basket is Empty
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', maxWidth: '280px', lineHeight: 1.5 }}>
                Fill your day with cold-pressed vitality. Explore our sunrise citrus or organic detox greens!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '0.88rem' }}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid var(--color-cream-border)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '14px',
                      objectFit: 'cover',
                      border: '1px solid var(--color-cream-border)',
                      flexShrink: 0
                    }}
                  />

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <h4 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item"
                        style={{ color: 'var(--color-text-light)', cursor: 'pointer', padding: '2px' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-berry-ruby)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-light)'; }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>
                      {item.volume}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {/* Quantity stepper */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          background: 'var(--color-cream-base)',
                          borderRadius: 'var(--radius-pill)',
                          padding: '4px 10px',
                          border: '1px solid var(--color-cream-border)'
                        }}
                      >
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{ color: 'var(--color-forest-dark)', display: 'flex' }}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{ color: 'var(--color-forest-dark)', display: 'flex' }}
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div
            style={{
              padding: '20px 24px 28px',
              borderTop: '1px solid var(--color-cream-border)',
              background: '#FFFFFF',
              boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Promo Code Input */}
            <div style={{ marginBottom: '14px' }}>
              {discountPercent > 0 ? (
                <div
                  style={{
                    background: '#EDFDF2',
                    border: '1px solid var(--color-leaf-green)',
                    borderRadius: '12px',
                    padding: '8px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--color-leaf-green)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Tag size={14} />
                    <span>Coupon <strong>{discountCode}</strong> applied ({discountPercent}% Off)</span>
                  </div>
                  <button
                    onClick={removeDiscount}
                    style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textDecoration: 'underline' }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Promo code (try SUNSHINE15)"
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: '12px',
                      border: '1.5px solid var(--color-cream-border)',
                      background: 'var(--color-cream-base)',
                      fontSize: '0.85rem',
                      outline: 'none',
                      textTransform: 'uppercase'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '10px 16px',
                      borderRadius: '12px',
                      background: 'var(--color-forest-deep)',
                      color: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 700
                    }}
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && (
                <span style={{ fontSize: '0.72rem', color: 'var(--color-berry-ruby)', fontWeight: 600, marginTop: '4px', display: 'block' }}>
                  {promoError}
                </span>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem', marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-leaf-green)', fontWeight: 700 }}>
                  <span>Discount ({discountPercent}%)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Chilled Eco Delivery</span>
                <span>{shippingFee === 0 ? <strong style={{ color: 'var(--color-leaf-green)' }}>FREE</strong> : `₹${shippingFee}`}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                <span>Estimated Tax (5% GST)</span>
                <span>₹{estimatedTax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.25rem',
                  fontWeight: 900,
                  color: 'var(--color-forest-dark)',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--color-cream-border)'
                }}
              >
                <span>Estimated Total</span>
                <span style={{ color: 'var(--color-sun-orange)' }}>₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
              </div>
            </div>

            {/* Checkout Trigger */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '1rem'
              }}
            >
              <span>PROCEED TO CHILLED CHECKOUT</span>
              <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '12px', fontSize: '0.72rem', color: 'var(--color-text-light)' }}>
              <ShieldCheck size={14} color="var(--color-leaf-green)" />
              <span>Chilled 38°F Insulated Thermal Packaging Guaranteed</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
