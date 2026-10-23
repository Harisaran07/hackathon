import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Lock, Mail, User, ArrowRight, Sun, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const LoginModal = () => {
  const { isLoginOpen, setIsLoginOpen, triggerToast } = useCart();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isLoginOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    triggerToast(
      isRegister ? 'Welcome to Sunshine Club!' : 'Welcome Back!',
      'Signed in as ' + (name || email.split('@')[0])
    );
    setTimeout(() => {
      setIsLoginOpen(false);
      setLoggedIn(false);
    }, 1200);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsLoginOpen(false)}
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
          maxWidth: '440px',
          background: '#FFFFFF',
          borderRadius: '30px',
          padding: '36px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          border: '1.5px solid var(--color-cream-border)',
          zIndex: 111
        }}
      >
        <button
          onClick={() => setIsLoginOpen(false)}
          aria-label="Close Login"
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

        {loggedIn ? (
          <div style={{ textAlign: 'center', padding: '30px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--color-leaf-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
              {isRegister ? 'Account Created!' : 'Successfully Signed In!'}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Your morning subscription and cart are now synced.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  margin: '0 auto 12px'
                }}
              >
                <Sun size={26} />
              </div>

              <h3 style={{ fontSize: '1.7rem', fontWeight: 900, color: 'var(--color-forest-dark)' }}>
                {isRegister ? 'Join Sunshine Club' : 'Sign in to Sunshine'}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                {isRegister ? 'Unlock member pricing, cleanse tracking & free gifts' : 'Track cold-pressed orders and subscription schedules'}
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {isRegister && (
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Jordan Lee"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--color-cream-border)',
                      background: 'var(--color-cream-base)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      marginTop: '4px'
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--color-cream-border)',
                    background: 'var(--color-cream-base)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    marginTop: '4px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-forest-dark)' }}>Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid var(--color-cream-border)',
                    background: 'var(--color-cream-base)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    marginTop: '4px'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '0.95rem', marginTop: '10px' }}
              >
                <span>{isRegister ? 'Create My Account' : 'Sign In'}</span>
                <ArrowRight size={17} />
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--color-cream-border)' }}>
              <button
                onClick={() => setIsRegister(!isRegister)}
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-forest-dark)',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {isRegister ? (
                  <span>Already have an account? <strong style={{ color: 'var(--color-sun-orange)' }}>Sign in</strong></span>
                ) : (
                  <span>New to Liquid Sunshine? <strong style={{ color: 'var(--color-sun-orange)' }}>Join free</strong></span>
                )}
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
