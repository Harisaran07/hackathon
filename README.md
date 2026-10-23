# ☀️ LIQUID SUNSHINE | Raw Cold-Pressed Vitality

> A vibrant, production-grade E-Commerce & Interactive Brand Experience for artisanal cold-pressed juices crafted with raw living enzymes, zero pasteurization, and regenerative organic ingredients.

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Currency](https://img.shields.io/badge/Currency-INR_%E2%82%B9-FF7A00)](https://github.com/Harisaran07/hackathon)

---

## 🌟 Key Features

- **🍊 Kinetic Juice Splash Showcase**: Interactive flavor selector with live bubbling particle physics, floating ingredient badges, and dynamic radial lighting.
- **🛒 Rich E-Commerce Shop**:
  - Filter by category (*All, Citrus, Green, Berry, Tropical*).
  - Quick View Modal with dynamic nutrition stats and flavor meters (*Sweetness, Tartness, Freshness*).
  - Real-time cart state persisted to `localStorage`.
- **✨ Signature Blends & Cleanses**:
  - Curated 3-bottle daily packs (*Deep Cleanse, Immunity Power, Super-Berry Shield*).
  - 1-Day, 3-Day, and 5-Day Guided Cleanse Protocols with hourly drinking schedule.
- **💳 Complete Indian Rupee (₹) Pricing & Checkout**:
  - Formatted across all catalog cards, quick view, drawer, and checkout modal.
  - Free chilled delivery threshold calculation (₹499+).
  - GST breakdown and working promo codes (`SUNSHINE15`, `GLOW20`).
- **📱 Fully Responsive & Validated**:
  - Seamless desktop and mobile sliding drawer navigation.
  - Complete form input validation for contact inquiries, user login, and address collection.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Glassmorphism, Fluid Typography)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Architecture**: Custom React Context API (`CartContext`) with local persistence

---

## 📦 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/Harisaran07/hackathon.git

# Navigate to project directory
cd hackathon

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be live at `http://localhost:5173/`.

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```text
contest/
├── public/
│   ├── images/              # High-res juice bottles & ingredients
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx          # Farm-to-bottle harvest story
│   │   ├── CartDrawer.jsx            # Sliding slide-over cart with promo system
│   │   ├── CheckoutModal.jsx         # Multi-step checkout with address validation
│   │   ├── CleansePlans.jsx          # 1/3/5-Day detox plans & timeline
│   │   ├── ContactSection.jsx        # Contact form with regex validation
│   │   ├── Footer.jsx                # Responsive footer & newsletter
│   │   ├── Hero.jsx                  # Brand hero banner with floating stats
│   │   ├── JuiceSplashShowcase.jsx   # Interactive canvas-driven showcase
│   │   ├── LoginModal.jsx            # User authentication modal
│   │   ├── Navbar.jsx                # Sticky glassmorphic navigation
│   │   ├── QuickViewModal.jsx        # Product detail popup
│   │   ├── ShopSection.jsx           # Catalog grid with filtering
│   │   ├── SignatureBlends.jsx       # Curated 3-pack collections
│   │   ├── Testimonials.jsx          # Customer reviews slider
│   │   ├── ToastNotification.jsx     # Floating toast notifications
│   │   └── WhyChooseUs.jsx           # 4 core wellness pillars
│   ├── context/
│   │   └── CartContext.jsx           # Cart state, discounts, and GST logic
│   ├── data/
│   │   └── juiceData.js              # Complete catalog & nutritional facts
│   ├── App.jsx                       # Master page layout
│   ├── index.css                     # Design tokens, variables & typography
│   └── main.jsx                      # App entry point
├── package.json
└── vite.config.js
```

---

## 👤 Author

Developed by **[Harisaran](https://github.com/Harisaran07)**
