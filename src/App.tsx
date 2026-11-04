import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCollection } from './components/SignatureCollection';
import { ProductShowcase } from './components/ProductShowcase';
import { CustomCakesSection } from './components/CustomCakesSection';
import { OccasionCollection } from './components/OccasionCollection';
import { HowToOrder } from './components/HowToOrder';
import { InstagramGallery } from './components/InstagramGallery';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CustomCakeModal } from './components/CustomCakeModal';
import { WhatsAppFloatingPill } from './components/WhatsAppFloatingPill';

// Import the Originkit Smooth Scroll Slider component
import RoundCarousel from './components/originkit/ui/roundcarousel';

import { PRODUCTS } from './data/products';
import { Product } from './types';
import { initSmoothScroll } from './utils/animations';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCustomEnquiryOpen, setIsCustomEnquiryOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'bakery' | 'originkit'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('preview') === 'originkit') return 'originkit';
    }
    return 'bakery';
  });

  useEffect(() => {
    if (viewMode !== 'bakery') return;
    // Initialize Lenis smooth scroll and connect to GSAP ticker
    const scrollInstance = initSmoothScroll();

    return () => {
      scrollInstance.destroy();
    };
  }, [viewMode]);

  const handleExploreClick = () => {
    const section = document.getElementById('signatures');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCollection = () => {
    const section = document.getElementById('collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Full-screen dark preview of the Originkit component as specified in the preview brief
  if (viewMode === 'originkit') {
    return (
      <div className="w-screen h-screen bg-[#000000] flex items-center justify-center overflow-hidden relative">
        <RoundCarousel />
        
        {/* Floating switch to toggle back to the full bakery experience */}
        <div className="absolute top-5 left-5 z-50">
          <button
            onClick={() => setViewMode('bakery')}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium backdrop-blur-md transition-all border border-white/20 flex items-center space-x-1.5"
          >
            <span>← Back to Bakery Website</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F8] text-[#57434A] selection:bg-[#E8B7C1]/30 selection:text-[#542638] font-sans relative">
      
      {/* Top Navbar */}
      <Navbar
        onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Cinematic Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
        />

        {/* 2. Signature Collection (Features the Originkit Smooth Scroll Slider) */}
        <SignatureCollection
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
        />

        {/* 3. Interactive Full Menu Showcase */}
        <ProductShowcase
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* 4. Custom Cakes Section */}
        <CustomCakesSection
          onOpenEnquiry={() => setIsCustomEnquiryOpen(true)}
        />

        {/* 7. Occasions Collection */}
        <OccasionCollection
          onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
          onExploreCollection={handleExploreCollection}
        />

        {/* 8. How to Order Visual Steps */}
        <HowToOrder
          onExploreCollection={handleExploreCollection}
          onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
        />

        {/* 11. Instagram & Atelier Visual Gallery */}
        <InstagramGallery />

        {/* 12. Testimonials (Demonstration Content) */}
        <Testimonials />

        {/* 13. Final Call to Action */}
        <FinalCTA
          onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
          onExploreCollection={handleExploreCollection}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
      />

      {/* Modals & Overlays */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CustomCakeModal
        isOpen={isCustomEnquiryOpen}
        onClose={() => setIsCustomEnquiryOpen(false)}
      />

      {/* Sticky Floating WhatsApp Action Pill */}
      <WhatsAppFloatingPill
        onOpenCustomEnquiry={() => setIsCustomEnquiryOpen(true)}
      />
    </div>
  );
};

export default App;
