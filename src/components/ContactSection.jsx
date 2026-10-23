import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: 'General Question',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch {}
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '110px 24px',
        background: 'linear-gradient(180deg, #FAF7F2 0%, #F4ECE0 100%)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div
            className="tag-badge tag-sun"
            style={{ marginBottom: '14px', fontSize: '0.82rem', padding: '7px 18px' }}
          >
            <Sparkles size={15} color="#FF7A00" />
            <span>WE ARE HERE FOR YOU</span>
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
            SAY HELLO TO <br />
            <span style={{ color: 'var(--color-sun-orange)' }}>OUR SUNSHINE TEAM.</span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Have a question about our cold-pressed cleanse schedules, catering for events, or customized subscription deliveries? We'd love to chat.
          </p>
        </div>

        {/* Split Contact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '50px',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left: Contact Form */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '32px',
              padding: '44px 38px',
              border: '1.5px solid var(--color-cream-border)',
              boxShadow: 'var(--shadow-card)',
              position: 'relative'
            }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '18px'
                  }}
                >
                  <div
                    style={{
                      width: '74px',
                      height: '74px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: 'var(--color-leaf-green)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <CheckCircle2 size={42} />
                  </div>

                  <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                    Message Sent with Sunshine!
                  </h3>

                  <p style={{ color: 'var(--color-text-muted)', maxWidth: '420px', lineHeight: 1.6 }}>
                    Thank you, <strong style={{ color: 'var(--color-forest-dark)' }}>{formData.name}</strong>. Our holistic nutritionist team has received your note and will get back to you within 24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', inquiry: 'General Question', message: '' });
                    }}
                    className="btn-secondary"
                    style={{ marginTop: '10px' }}
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-forest-dark)', marginBottom: '4px' }}>
                    Send Us a Message
                  </h3>

                  {/* Name Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest-dark)', marginBottom: '8px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Lin"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '14px',
                        border: errors.name ? '2px solid var(--color-berry-ruby)' : '1.5px solid var(--color-cream-border)',
                        background: 'var(--color-cream-base)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                    />
                    {errors.name && <span style={{ fontSize: '0.78rem', color: 'var(--color-berry-ruby)', fontWeight: 600, marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>

                  {/* Email & Inquiry row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-sub-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest-dark)', marginBottom: '8px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="maya@example.com"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '14px',
                          border: errors.email ? '2px solid var(--color-berry-ruby)' : '1.5px solid var(--color-cream-border)',
                          background: 'var(--color-cream-base)',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                      {errors.email && <span style={{ fontSize: '0.78rem', color: 'var(--color-berry-ruby)', fontWeight: 600, marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest-dark)', marginBottom: '8px' }}>
                        Inquiry Topic
                      </label>
                      <select
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          borderRadius: '14px',
                          border: '1.5px solid var(--color-cream-border)',
                          background: 'var(--color-cream-base)',
                          fontSize: '0.95rem',
                          outline: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <option>General Question</option>
                        <option>Cleanse Plan Consultation</option>
                        <option>Delivery & Shipping Help</option>
                        <option>Wholesale & Studio Catering</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-forest-dark)', marginBottom: '8px' }}>
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need, your cleanse goals, or any feedback..."
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '14px',
                        border: errors.message ? '2px solid var(--color-berry-ruby)' : '1.5px solid var(--color-cream-border)',
                        background: 'var(--color-cream-base)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                    {errors.message && <span style={{ fontSize: '0.78rem', color: 'var(--color-berry-ruby)', fontWeight: 600, marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '1rem',
                      marginTop: '8px'
                    }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Contact Information & Location Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Information Cards */}
            {[
              {
                icon: MapPin,
                title: 'Flagship Juicery & Press',
                content: '742 Sunshine Orchard Way, Santa Monica, CA 90401',
                sub: 'Fresh press pickups daily from 6:30 AM'
              },
              {
                icon: Phone,
                title: 'Call Our Concierge',
                content: '+1 (800) 456-JUICE (5842)',
                sub: 'Mon - Sun: 7:00 AM – 7:00 PM PST'
              },
              {
                icon: Mail,
                title: 'Email Our Nutritionists',
                content: 'hello@liquidsunshine.com',
                sub: 'Average response time: under 2 hours'
              },
              {
                icon: Clock,
                title: 'Delivery Hours',
                content: 'Chilled Express Deliveries 7 Days a Week',
                sub: 'Orders before 2 PM dispatched the following dawn'
              }
            ].map((info, idx) => {
              const IconComp = info.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '24px',
                    padding: '24px 28px',
                    border: '1.5px solid var(--color-cream-border)',
                    boxShadow: 'var(--shadow-subtle)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '18px',
                    transition: 'transform 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '16px',
                      background: 'rgba(255, 107, 0, 0.1)',
                      color: 'var(--color-sun-orange)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <IconComp size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-forest-dark)', marginBottom: '4px' }}>
                      {info.title}
                    </h4>
                    <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-main)', marginBottom: '4px' }}>
                      {info.content}
                    </p>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      {info.sub}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Social Icons Strip */}
            <div
              style={{
                background: 'var(--color-forest-deep)',
                borderRadius: '24px',
                padding: '24px 28px',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800 }}>Connect On Social</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)' }}>Tag #LiquidSunshine for juice perks</div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: InstagramIcon, href: '#' },
                  { icon: TwitterIcon, href: '#' },
                  { icon: YoutubeIcon, href: '#' }
                ].map((s, sIdx) => {
                  const SIcon = s.icon;
                  return (
                    <a
                      key={sIdx}
                      href={s.href}
                      aria-label="Social Link"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-sun-orange)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <SIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-sub-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
