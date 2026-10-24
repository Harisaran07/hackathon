import React, { useState } from 'react';
import { Sun, Mail, ArrowRight, Shield, Leaf, Heart, CheckCircle2 } from 'lucide-react';
import { CinematicSunLogo } from './CinematicSunLogo';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 }
      });
    } catch {}
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: elPos, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#071E14',
        color: '#FAF7F2',
        padding: '90px 24px 40px',
        borderTop: '1px solid rgba(255, 184, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 184, 0, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.4fr',
            gap: '50px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <CinematicSunLogo size={44} />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.45rem',
                    fontWeight: '900',
                    letterSpacing: '0.08em',
                    color: '#FFFFFF'
                  }}
                >
                  LIQUID <span style={{ color: 'var(--color-sun-orange)' }}>SUNSHINE</span>
                </div>
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--color-bright-lime)'
                  }}
                >
                  Cold-Pressed Vitality
                </div>
              </div>
            </div>

            <p style={{ color: 'rgba(250, 247, 242, 0.7)', fontSize: '0.94rem', lineHeight: 1.6, maxWidth: '360px' }}>
              Handcrafted organic cold-pressed juices pressed daily at 38°F with zero thermal pasteurization. Pure living vitality delivered to your doorstep.
            </p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              {[
                { icon: InstagramIcon, href: '#' },
                { icon: TwitterIcon, href: '#' },
                { icon: YoutubeIcon, href: '#' }
              ].map((s, idx) => {
                const SIcon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    aria-label="Social Link"
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-sun-orange)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    }}
                  >
                    <SIcon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.04em' }}>
              EXPLORE
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home Environment', target: 'hero' },
                { label: 'Shop All Juices', target: 'shop' },
                { label: 'Kinetic Juice Splash', target: 'juice-splash' },
                { label: 'Signature Blends', target: 'signature-blends' },
                { label: 'Detox Cleanse Plans', target: 'cleanse-plans' },
                { label: 'Why Choose Us', target: 'why-us' },
                { label: 'Our Organic Farm', target: 'about' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.target)}
                    style={{
                      color: 'rgba(250, 247, 242, 0.7)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                      padding: 0
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--color-sun-orange)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(250, 247, 242, 0.7)';
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Wellness & Standards */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '20px', letterSpacing: '0.04em' }}>
              STANDARDS
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                '38°F Cold Extraction',
                'Zero Thermal Processing',
                'USDA Organic Certified',
                'Glass Bottle Circularity',
                'Dawn Delivery Logistics',
                'Corporate Subscriptions',
                'Customer Reviews'
              ].map((item, idx) => (
                <li key={idx} style={{ color: 'rgba(250, 247, 242, 0.7)', fontSize: '0.9rem', fontWeight: 500 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.04em' }}>
              JOIN THE SUNSHINE CLUB
            </h4>
            <p style={{ color: 'rgba(250, 247, 242, 0.7)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Subscribe for wellness tips, seasonal press drops, and an instant <strong>15% OFF coupon</strong>.
            </p>

            {subscribed ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1.5px solid var(--color-leaf-green)',
                  borderRadius: '16px',
                  padding: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={24} color="var(--color-leaf-green)" />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFFFFF' }}>You're In!</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-sun-gold)' }}>
                    Use code <strong>SUNSHINE15</strong> at checkout!
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    style={{
                      width: '100%',
                      padding: '14px 48px 14px 18px',
                      borderRadius: 'var(--radius-pill)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      color: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    style={{
                      position: 'absolute',
                      right: '6px',
                      top: '6px',
                      bottom: '6px',
                      width: '38px',
                      borderRadius: '50%',
                      background: 'var(--color-sun-orange)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'rgba(250, 247, 242, 0.45)' }}>
                  No spam ever. Unsubscribe anytime with one tap.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Badges */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'rgba(250, 247, 242, 0.5)' }}>
            © {new Date().getFullYear()} LIQUID SUNSHINE INC. All rights reserved. Cold-pressed with gratitude.
          </div>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', color: 'rgba(250, 247, 242, 0.5)' }}>
            <a href="#" style={{ transition: 'color 0.2s' }}>Privacy Policy</a>
            <span>•</span>
            <a href="#" style={{ transition: 'color 0.2s' }}>Terms of Service</a>
            <span>•</span>
            <a href="#" style={{ transition: 'color 0.2s' }}>Cleanse Safety</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
