import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JuiceSplashShowcase } from './components/JuiceSplashShowcase';
import { ShopSection } from './components/ShopSection';
import { SignatureBlends } from './components/SignatureBlends';
import { CleansePlans } from './components/CleansePlans';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { LoginModal } from './components/LoginModal';
import { QuickViewModal } from './components/QuickViewModal';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  return (
    <CartProvider>
      <div className="liquid-sunshine-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main style={{ flex: 1 }}>
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Kinetic Juice Splash Showcase */}
          <JuiceSplashShowcase />

          {/* 3. Shop Section (6 Juices, Filters, Add to Cart) */}
          <ShopSection />

          {/* 4. Signature Blends (3 Curated Collections) */}
          <SignatureBlends />

          {/* 5. Cleanse Plans (1-Day, 3-Day, 5-Day + Schedule) */}
          <CleansePlans />

          {/* 6. Why Choose Us (4 Core Pillars) */}
          <WhyChooseUs />

          {/* 7. About Section (Farm Harvest & Craftsmanship) */}
          <AboutSection />

          {/* 8. Testimonials Carousel */}
          <Testimonials />

          {/* 9. Contact Section */}
          <ContactSection />
        </main>

        {/* 10. Footer */}
        <Footer />

        {/* Global Modals & Drawers */}
        <CartDrawer />
        <CheckoutModal />
        <LoginModal />
        <QuickViewModal />
        <ToastNotification />
      </div>
    </CartProvider>
  );
}

export default App;
