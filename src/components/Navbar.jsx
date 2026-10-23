import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X, Sun, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { totalItems, setIsCartOpen, setIsLoginOpen, subtotal } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Ambient Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #071E14 0%, #0D2C1E 50%, #071E14 100%)',
        color: '#FAF7F2',
        fontSize: '0.8rem',
        fontWeight: '600',
        letterSpacing: '0.06em',
        padding: '8px 16px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        borderBottom: '1px solid rgba(255, 184, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#FFB800', display: 'inline-flex' }}>
            <Sun size={14} className="animate-spin-slow" />
          </span>
          <span>100% RAW COLD-PRESSED ORGANIC JUICES</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span style={{ color: '#FFB800' }}>FREE EXPRESS CHILLED SHIPPING ON ₹499+</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span style={{
            background: 'rgba(255, 184, 0, 0.2)',
            color: '#FFB800',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '0.75rem',
            fontWeight: '700'
          }}>CODE: SUNSHINE15</span>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.95)' : 'rgba(253, 251, 247, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(232, 222, 207, 0.8)' : '1px solid rgba(232, 222, 207, 0.4)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(12, 43, 30, 0.08)' : 'none'
        }}
      >
        <div
          style={{
            maxWidth: '1360px',
            margin: '0 auto',
            padding: isScrolled ? '14px 28px' : '22px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.3s ease'
          }}
        >
          {/* Brand Logo Section with Generous Breathing Space */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textDecoration: 'none',
              marginRight: '36px',
              padding: '4px 0',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6B00 0%, #FFB800 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 6px 20px rgba(255, 107, 0, 0.35)',
                color: '#FFFFFF',
                flexShrink: 0
              }}
            >
              <Sun size={26} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.48rem',
                  fontWeight: '900',
                  letterSpacing: '0.08em',
                  color: 'var(--color-forest-dark)',
                  lineHeight: '1.05'
                }}
              >
                LIQUID <span style={{ color: 'var(--color-sun-orange)' }}>SUNSHINE</span>
              </div>
              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'var(--color-leaf-green)',
                  paddingLeft: '1px'
                }}
              >
                Cold-Pressed Vitality
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px'
            }}
            className="desktop-nav"
          >
            {[
              { label: 'Home', target: 'hero' },
              { label: 'Shop', target: 'shop' },
              { label: 'Juice Splash', target: 'juice-splash' },
              { label: 'Signature Blends', target: 'signature-blends' },
              { label: 'Cleanse Plans', target: 'cleanse-plans' },
              { label: 'Why Us', target: 'why-us' },
              { label: 'About', target: 'about' },
              { label: 'Contact', target: 'contact' }
            ].map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: '600',
                  color: 'var(--color-forest-dark)',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s ease',
                  padding: '6px 0',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-sun-orange)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-forest-dark)';
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Login Button */}
            <button
              onClick={() => setIsLoginOpen(true)}
              aria-label="User Account"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 16px',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--color-cream-border)',
                background: 'rgba(255, 255, 255, 0.8)',
                color: 'var(--color-forest-dark)',
                fontSize: '0.85rem',
                fontWeight: '600',
                transition: 'all 0.2s ease'
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
              <User size={17} />
              <span className="btn-label-text">Login</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Cart"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '9px',
                padding: '9px 18px',
                borderRadius: 'var(--radius-pill)',
                background: 'linear-gradient(135deg, var(--color-forest-deep) 0%, var(--color-forest-mid) 100%)',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                fontWeight: '700',
                letterSpacing: '0.02em',
                boxShadow: '0 6px 18px rgba(7, 30, 20, 0.25)',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(7, 30, 20, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(7, 30, 20, 0.25)';
              }}
            >
              <div style={{ position: 'relative' }}>
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-10px',
                      background: 'var(--color-sun-orange)',
                      color: '#FFFFFF',
                      fontSize: '0.7rem',
                      fontWeight: '800',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #0D2C1E'
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="btn-label-text">Cart</span>
              {subtotal > 0 && (
                <span
                  style={{
                    marginLeft: '2px',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    fontSize: '0.8rem',
                    fontWeight: '700'
                  }}
                >
                  ₹{subtotal.toFixed(0)}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-nav-toggle"
              aria-label="Toggle Menu"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--color-cream-border)',
                color: 'var(--color-forest-dark)'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '72px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(250, 247, 242, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 39,
            padding: '30px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--color-cream-border)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { label: 'Home', target: 'hero' },
              { label: 'Shop Juices', target: 'shop' },
              { label: 'Juice Splash Animation', target: 'juice-splash' },
              { label: 'Signature Blends', target: 'signature-blends' },
              { label: 'Cleanse Plans', target: 'cleanse-plans' },
              { label: 'Why Choose Us', target: 'why-us' },
              { label: 'Our Story & Farm', target: 'about' },
              { label: 'Customer Reviews', target: 'testimonials' },
              { label: 'Contact Us', target: 'contact' }
            ].map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                style={{
                  textAlign: 'left',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--color-forest-dark)',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--color-cream-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                <ArrowRight size={18} color="var(--color-sun-orange)" />
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '30px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoginOpen(true);
              }}
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--color-cream-border)',
                fontWeight: '700',
                color: 'var(--color-forest-dark)',
                background: '#FFFFFF'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              style={{
                flex: 1,
                padding: '14px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--color-sun-orange)',
                color: '#FFFFFF',
                fontWeight: '700'
              }}
            >
              View Cart ({totalItems})
            </button>
          </div>
        </div>
      )}

      {/* Style hook for responsive navbar */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
          .btn-label-text {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
