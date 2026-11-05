import React, { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { Product } from '../types';
import RoundCarousel from './originkit/ui/roundcarousel';

interface SignatureCollectionProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onOpenCustomEnquiry: () => void;
}

export const SignatureCollection: React.FC<SignatureCollectionProps> = ({
  products,
  onSelectProduct,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  // We take the signature products
  const signatureItems = products.filter((p) => p.isSignature);

  // Prepare images for Originkit RoundCarousel
  const carouselImages = signatureItems.map((p) => ({
    src: p.image,
  }));

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="signatures"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-[#FFF8F8] relative overflow-hidden"
    >
      {/* Background Soft Blobs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#F8E5E8]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#E8B7C1]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
              Handcrafted With Devotion
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#542638] font-normal tracking-tight mb-4">
            Made to Make You Smile
          </h2>
          <p className="text-base sm:text-lg text-[#57434A]/80 font-light max-w-xl mx-auto leading-relaxed">
            Little indulgences, crafted for unforgettable moments. Glide through our signature creations below.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ORIGINKIT 3D ROUND CAROUSEL STAGE FOR SIGNATURE BAKES */}
        {/* ========================================================================= */}
        <div className="mb-10">
          <div className="relative w-full overflow-hidden">
            {/* 3D Round Carousel Viewport Container with Transparent Background */}
            <div className="w-full h-[480px] sm:h-[520px] md:h-[580px] relative select-none">
              <RoundCarousel
                images={carouselImages}
                imageWidth={280}
                imageHeight={320}
                spacing={2.6}
                speed={3}
                direction="left"
                drag={true}
                sensitivity={4}
                tilt={-6}
                perspective={2800}
                cornerRadius={22}
                innerDim={3.5}
                background="transparent"
              />
            </div>

            {/* Bottom Gentle Hint */}
            <div className="text-center pt-2">
              <p className="font-serif italic text-xs text-[#8C7079]">
                Hover and drag left or right to glide through each handcrafted layer
              </p>
            </div>
          </div>
        </div>

        {/* Quick Signature Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 max-w-4xl mx-auto">
          {signatureItems.slice(0, 6).map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectProduct(item)}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#FFFDF8] border border-[#E8B7C1]/50 text-xs font-serif text-[#542638] hover:bg-[#F8E5E8] hover:border-[#A64D65] transition-all shadow-subtle hover:scale-105 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A64D65] group-hover:scale-125 transition-transform" />
              <span className="font-medium">{item.name}</span>
              <span className="text-[10px] text-[#A64D65] font-sans font-semibold">({item.price})</span>
              <ArrowRight className="w-3 h-3 text-[#A64D65] opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
