import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const CartContext = createContext();

const CART_STORAGE_KEY = 'liquid_sunshine_cart_v1';
const DISCOUNT_STORAGE_KEY = 'liquid_sunshine_discount_v1';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toast, setToast] = useState(null);
  
  const [discountCode, setDiscountCode] = useState(() => {
    try {
      return localStorage.getItem(DISCOUNT_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [discountPercent, setDiscountPercent] = useState(() => {
    try {
      const code = localStorage.getItem(DISCOUNT_STORAGE_KEY);
      if (code === 'SUNSHINE15') return 15;
      if (code === 'GLOW20') return 20;
      return 0;
    } catch {
      return 0;
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Save discount to localStorage
  useEffect(() => {
    try {
      if (discountCode) {
        localStorage.setItem(DISCOUNT_STORAGE_KEY, discountCode);
      } else {
        localStorage.removeItem(DISCOUNT_STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save discount to localStorage', e);
    }
  }, [discountCode]);

  // Toast trigger
  const triggerToast = (title, subtitle, image) => {
    setToast({ title, subtitle, image, id: Date.now() });
    setTimeout(() => {
      setToast((curr) => (curr && curr.id ? null : curr));
    }, 3800);
  };

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category || 'Specialty',
            volume: product.nutrition?.volume || '300ml',
            quantity: qty
          }
        ];
      }
    });

    triggerToast(
      `${product.name} Added!`,
      `Qty: ${qty} added to chilled cart`,
      product.image
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyDiscount = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'SUNSHINE15') {
      setDiscountCode('SUNSHINE15');
      setDiscountPercent(15);
      triggerToast('Promo Applied!', '15% Off SUNSHINE15 code activated');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
      return { success: true, message: 'SUNSHINE15 Applied (15% Off)' };
    } else if (clean === 'GLOW20') {
      setDiscountCode('GLOW20');
      setDiscountPercent(20);
      triggerToast('VIP Code Applied!', '20% Off GLOW20 code activated');
      return { success: true, message: 'GLOW20 Applied (20% Off)' };
    }
    return { success: false, message: 'Invalid promo code. Try SUNSHINE15' };
  };

  const removeDiscount = () => {
    setDiscountCode('');
    setDiscountPercent(0);
  };

  // Calculations
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const freeShippingThreshold = 499.0;
  const isFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 49;
  const taxRate = 0.05; // 5% GST
  const taxableSubtotal = Math.max(0, subtotal - discountAmount);
  const estimatedTax = taxableSubtotal * taxRate;
  const grandTotal = taxableSubtotal + shippingFee + estimatedTax;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isLoginOpen,
        setIsLoginOpen,
        quickViewProduct,
        setQuickViewProduct,
        toast,
        setToast,
        triggerToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
