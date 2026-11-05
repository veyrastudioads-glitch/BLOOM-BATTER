
# BLOOM & BATTER — Premium Boutique Home Bakery

> **"Baked with love. Styled with elegance."**  
> *An independent portfolio concept art-directed and developed by Pixel by Geo.*

A luxury boutique home bakery website designed with editorial elegance, romantic rose-inspired aesthetics, smooth GSAP and Lenis motion design, and WhatsApp ordering workflows.

---

## 🌸 Creative Direction & Art Direction

- **Brand Aesthetic:** Luxury boutique patisserie meets modern editorial fashion design.
- **Colour System:**
  - Primary Background: `#FFF8F8` (Rose White)
  - Soft Blush: `#F8E5E8`
  - Rose Pink: `#E8B7C1`
  - Dusty Rose: `#C98291`
  - Deep Rose: `#A64D65`
  - Burgundy: `#542638` (Primary typography & luxury CTAs)
  - Warm Ivory: `#FFFDF8`
  - Soft Beige: `#EDE0D8`
  - Body Text: `#57434A`
- **Typography:** Display serif (*Playfair Display*, *Cormorant Garamond*) paired with clean geometric sans (*Manrope*).
- **Motion Design:** Lenis smooth scrolling, GSAP ScrollTrigger timeline reveals, Framer Motion filter layouts, and delicate hover depth.

---

## ✨ Features & Sections

1. **Cinematic Hero:** Line-by-line editorial reveal, masked cake photography reveal, micro-batch status badge, and immediate WhatsApp & collection CTAs.
2. **Signature Collection (with Originkit Smooth Scroll Slider):** Asymmetrical editorial layout combined with the Originkit kinetic Smooth Scroll Slider rail on dark burgundy featuring:
   - *Rose Milk Cake* (House signature Tres Leches with Damascus rose water)
   - *Belgian Chocolate Truffle* (70% Callebaut dark chocolate)
   - *Strawberry Dream Cake* (Blush mascarpone & heritage strawberries)
   - *Pistachio Rose Cake* (Bronte pistachio frangipane)
   - *Lotus Biscoff Brownies* (Belgian fudge brownies with speculoos marble)
   - *Vanilla Berry Cupcakes* (Tahitian vanilla bean with blackberry core)
3. **Interactive Menu & Category Filter:** Real-time animated filtering across *All*, *Cakes*, *Brownies*, and *Cupcakes*, plus full-text flavor search and price sorting.
4. **Product Detail Modal:** High-resolution zoom, tasting profile tags, serving size selector, quantity adjuster, custom cake message input, and one-click WhatsApp pre-filled order link.
5. **Bespoke Custom Cakes Section:** Occasions overview (Weddings, Birthdays, Anniversaries, Baby Showers, Celebrations) + functional modal enquiry form with instant WhatsApp message generation.
6. **Occasions Collection:** Image-led editorial showcase tailored to weddings, milestones, and intimate teatimes.
7. **How to Order:** 4 intuitive visual steps (01 to 04) with direct WhatsApp integration.
8. **Instagram & Atelier Gallery:** Staggered visual diary with full-screen lightbox preview.
9. **Demonstration Testimonials:** Refined editorial cards clearly identified as portfolio sample content.
10. **Final Closing CTA:** Rose-tinted statement section for celebration orders.
11. **Minimal Luxury Footer:** Studio credit to Pixel by Geo, quick atelier navigation, and contact hours.
12. **Sticky WhatsApp Floating Action Pill:** Quick-access ordering button with subtle notification pulse.

---

## 🛠️ Technology Stack

- **React 18** + **TypeScript**
- **Vite 6** (Optimized chunking: vendor, animations, main)
- **Tailwind CSS 3** with custom rose/burgundy design tokens
- **GSAP 3** + **ScrollTrigger**
- **Lenis** smooth scrolling
- **Framer Motion 11**
- **Lucide React** icons
- **Canvas Confetti**

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration

The WhatsApp ordering phone number, studio credit, and social links can be configured in:
```typescript
// src/config/site.ts
export const SITE_CONFIG = {
  name: 'BLOOM & BATTER',
  tagline: 'Baked with love. Styled with elegance.',
  whatsapp: {
    number: '447000000000', // Update with your international WhatsApp number
    displayNumber: '+44 7000 000000',
    defaultMessage: "Hello Bloom & Batter! I'd love to enquire about ordering...",
  },
  // ...
};
```

---

*Independent website concept created by Pixel by Geo.*

