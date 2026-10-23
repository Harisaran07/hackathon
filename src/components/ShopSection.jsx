import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Eye, Star, Sparkles, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { JUICE_PRODUCTS } from '../data/juiceData';

const CATEGORIES = ['All Juices', 'Citrus', 'Green', 'Berry', 'Tropical'];

export const ShopSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Juices');
  const { addToCart, setQuickViewProduct } = useCart();
  const [addedId, setAddedId] = useState(null);

  const filteredProducts = selectedCategory === 'All Juices'
    ? JUICE_PRODUCTS
    : JUICE_PRODUCTS.filter((item) => item.category === selectedCategory);

  const handleAdd = (product, e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId((curr) => (curr === product.id ? null : curr));
    }, 1500);
  };

  return (
    <section
      id="shop"
      style={{
        padding: '100px 24px',
        backgroundColor: 'var(--color-cream-base)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div
            className="tag-badge tag-sun"
            style={{ marginBottom: '14px', fontSize: '0.8rem', padding: '6px 16px' }}
          >
            <Sparkles size={14} color="#FF7A00" />
            <span>DAILY COLD-PRESSED MENU</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.6rem)',
              fontWeight: 900,
              color: 'var(--color-forest-dark)',
              lineHeight: 1.12,
              marginBottom: '16px'
            }}
          >
            DISCOVER YOUR <br />
            <span style={{ color: 'var(--color-sun-orange)' }}>PERFECT MORNING ELIXIR.</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            Raw, unpasteurized, and never heated. Every bottle packs over 3 pounds of organic fruit & botanicals pressed daily at dawn.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '46px'
          }}
        >
          {CATEGORIES.map((cat) => {
            const count = cat === 'All Juices'
              ? JUICE_PRODUCTS.length
              : JUICE_PRODUCTS.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-pill)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  transition: 'all 0.25s ease',
                  background: isSelected ? 'var(--color-forest-dark)' : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : 'var(--color-forest-dark)',
                  border: isSelected ? '1.5px solid var(--color-forest-dark)' : '1.5px solid var(--color-cream-border)',
                  boxShadow: isSelected ? '0 6px 20px rgba(13, 44, 30, 0.2)' : '0 2px 6px rgba(0,0,0,0.02)',
                  cursor: 'pointer'
                }}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    padding: '2px 7px',
                    borderRadius: '10px',
                    background: isSelected ? 'var(--color-sun-orange)' : 'var(--color-cream-alt)',
                    color: isSelected ? '#FFFFFF' : 'var(--color-text-muted)',
                    fontWeight: 800
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          <AnimatePresence>
            {filteredProducts.map((product) => {
              const isJustAdded = addedId === product.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="product-card"
                  onClick={() => setQuickViewProduct(product)}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '26px',
                    padding: '22px',
                    border: '1.5px solid var(--color-cream-border)',
                    boxShadow: 'var(--shadow-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                    e.currentTarget.style.borderColor = product.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                    e.currentTarget.style.borderColor = 'var(--color-cream-border)';
                  }}
                >
                  {/* Card Top: Badges & Category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        background: product.lightColor,
                        color: product.color,
                        padding: '5px 12px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {product.badge}
                    </span>

                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      {product.nutrition.volume}
                    </span>
                  </div>

                  {/* Product Image with Hover Zoom Container */}
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      background: 'radial-gradient(circle, #FDFCFA 0%, #F5EFE6 100%)',
                      aspectRatio: '1 / 1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      border: '1px solid rgba(232, 222, 207, 0.5)'
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="product-img-zoom"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: product.id === 'carrot-glow' ? 'center 35%' : 'center',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />

                    {/* Quick View Hover Pill */}
                    <div
                      className="quick-view-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(13, 44, 30, 0.3)',
                        backdropFilter: 'blur(3px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.25s ease'
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewProduct(product);
                        }}
                        style={{
                          background: '#FFFFFF',
                          color: 'var(--color-forest-dark)',
                          padding: '10px 18px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                        }}
                      >
                        <Eye size={16} /> Quick View
                      </button>
                    </div>
                  </div>

                  {/* Middle Content */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ display: 'flex', color: '#FFB800' }}>
                        <Star size={14} fill="#FFB800" />
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--color-forest-dark)' }}>
                        {product.rating}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        ({product.reviewsCount})
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.45rem',
                        fontWeight: 800,
                        color: 'var(--color-forest-dark)',
                        lineHeight: 1.2
                      }}
                    >
                      {product.name}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {product.description}
                    </p>

                    {/* Nutri Tag */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '4px 0 12px' }}>
                      <span style={{ fontSize: '0.72rem', background: '#F5F0E8', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                        {product.nutrition.calories}
                      </span>
                      <span style={{ fontSize: '0.72rem', background: '#F5F0E8', padding: '3px 8px', borderRadius: '6px', fontWeight: 600 }}>
                        {product.nutrition.sugar}
                      </span>
                      <span style={{ fontSize: '0.72rem', background: '#F5F0E8', padding: '3px 8px', borderRadius: '6px', fontWeight: 600, color: 'var(--color-leaf-green)' }}>
                        {product.nutrition.vitaminC}
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom: Price & Add to Cart Button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--color-cream-border)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Price
                      </div>
                      <div
                        style={{
                          fontSize: '1.45rem',
                          fontWeight: 900,
                          color: 'var(--color-forest-dark)',
                          fontFamily: 'var(--font-heading)'
                        }}
                      >
                        ₹{product.price}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleAdd(product, e)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 22px',
                        borderRadius: 'var(--radius-pill)',
                        background: isJustAdded
                          ? 'var(--color-leaf-green)'
                          : `linear-gradient(135deg, ${product.color} 0%, var(--color-sun-amber) 100%)`,
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        boxShadow: `0 8px 18px -4px ${product.color}50`,
                        transition: 'all 0.25s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.04)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={18} />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus size={18} />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .product-card:hover .product-img-zoom {
          transform: scale(1.06);
        }
        .product-card:hover .quick-view-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};
