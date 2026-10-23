import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Lock, Sparkles, Sun } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export const CheckoutModal = () => {
  const {
    cart,
    grandTotal,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    shippingFee,
    discountAmount
  } = useCart();

  const [step, setStep] = useState('form'); // 'form' | 'processing' | 'success'
  const [shippingInfo, setShippingInfo] = useState({
    firstName: 'Jordan',
    lastName: 'Lee',
    address: '1024 Ocean Boulevard',
    city: 'Santa Monica',
    zip: '90401',
    deliverySlot: 'Tomorrow Morning (6:00 AM - 9:00 AM Dawn Press)'
  });

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setStep('processing');

    setTimeout(() => {
      setStep('success');
      clearCart();
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {}
    }, 1600);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => setStep('form'), 400);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
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
          maxWidth: '560px',
          background: '#FFFFFF',
          borderRadius: '32px',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1.5px solid var(--color-cream-border)',
          zIndex: 111,
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Close Checkout"
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
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {step === 'processing' && (
          <div style={{ textAlign: 'center', padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '4px solid var(--color-sun-orange)',
                borderTopColor: 'transparent',
                animation: 'spinSlow 1s linear infinite'
              }}
            />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
              Booking Your Chilled Press...
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
              Communicating with our dawn pressing facility in Santa Monica.
            </p>
          </div>
        )}

        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--color-leaf-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle size={44} />
            </div>

            <span className="tag-badge tag-sun">ORDER #LS-8294 CONFIRMED</span>

            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-forest-dark)' }}>
              Sunshine Is On The Way!
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px' }}>
              Your cold-pressed blends will be pressed tomorrow at dawn and packed in our insulated chilled box. Confirmation email sent to your inbox!
            </p>

            <div
              style={{
                background: 'var(--color-cream-base)',
                borderRadius: '18px',
                padding: '16px 20px',
                width: '100%',
                textAlign: 'left',
                border: '1px solid var(--color-cream-border)'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-forest-dark)', textTransform: 'uppercase', marginBottom: '6px' }}>
                Delivery Summary:
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-text-main)', fontWeight: 600 }}>
                📍 {shippingInfo.address}, {shippingInfo.city} {shippingInfo.zip}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-leaf-green)', fontWeight: 700, marginTop: '4px' }}>
                🚚 Scheduled: {shippingInfo.deliverySlot}
              </div>
            </div>

            <button
              onClick={handleClose}
              className="btn-primary"
              style={{ width: '100%', marginTop: '10px' }}
            >
              Back to Liquid Sunshine
            </button>
          </div>
        )}

        {step === 'form' && (
          <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'var(--color-sun-orange)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Lock size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                  Express Chilled Checkout
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-leaf-green)', fontWeight: 700 }}>
                  256-Bit Encrypted & Temperature Guaranteed
                </span>
              </div>
            </div>

            {/* Total Callout Banner */}
            <div
              style={{
                background: 'var(--color-cream-base)',
                padding: '14px 18px',
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid var(--color-cream-border)'
              }}
            >
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>
                Total to Pay ({cart.reduce((a, b) => a + b.quantity, 0)} bottles)
              </span>
              <span style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--color-sun-orange)' }}>
                ₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </span>
            </div>

            {/* Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>First Name</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.firstName}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-cream-border)', background: 'var(--color-cream-base)', marginTop: '4px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>Last Name</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.lastName}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-cream-border)', background: 'var(--color-cream-base)', marginTop: '4px' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>Street Address</label>
              <input
                type="text"
                required
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-cream-border)', background: 'var(--color-cream-base)', marginTop: '4px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>City</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-cream-border)', background: 'var(--color-cream-base)', marginTop: '4px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>ZIP Code</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.zip}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-cream-border)', background: 'var(--color-cream-base)', marginTop: '4px' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>Preferred Delivery Slot</label>
              <select
                value={shippingInfo.deliverySlot}
                onChange={(e) => setShippingInfo({ ...shippingInfo, deliverySlot: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--color-cream-border)', background: 'var(--color-cream-base)', marginTop: '4px', cursor: 'pointer' }}
              >
                <option>Tomorrow Morning (6:00 AM - 9:00 AM Dawn Press)</option>
                <option>Tomorrow Afternoon (1:00 PM - 4:00 PM Fresh Batch)</option>
                <option>Weekend Morning Wellness Delivery (Saturday 7:00 AM)</option>
              </select>
            </div>

            {/* Payment Simulator */}
            <div style={{ background: '#FAF7F2', borderRadius: '16px', padding: '14px', border: '1px solid var(--color-cream-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>
                  Payment Method
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-leaf-green)', fontWeight: 700 }}>
                  ✓ Demo Mode Enabled
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--color-forest-dark)', fontWeight: 600 }}>
                <CreditCard size={18} color="var(--color-sun-orange)" />
                <span>•••• •••• •••• 4242 (Instant Demonstration)</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', padding: '16px', fontSize: '1.02rem', marginTop: '6px' }}
            >
              <span>COMPLETE CHILLED ORDER • ₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
