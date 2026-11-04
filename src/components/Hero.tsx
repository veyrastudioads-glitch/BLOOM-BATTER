import React, { useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle, Sparkles, Award } from 'lucide-react';
import gsap from 'gsap';
import { SITE_CONFIG } from '../config/site';

interface HeroProps {
  onExploreClick: () => void;
  onOpenCustomEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenCustomEnquiry }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLHeadingElement>(null);
  const headlineLine2Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLButtonElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const floatingBadgeRef = useRef<HTMLDivElement>(null);
  const decorativeBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Badge entrance
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.2 }
      );

      // Headline line by line reveal
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.18 },
        '-=0.6'
      );

      // Subtext fade in
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      );

      // CTA group entrance
      tl.fromTo(
        ctaGroupRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        '-=0.7'
      );

      // Image masked reveal & gentle scale down into position
      tl.fromTo(
        imageWrapperRef.current,
        { clipPath: 'inset(10% 10% 10% 10% round 24px)', opacity: 0, scale: 1.08 },
        {
          clipPath: 'inset(0% 0% 0% 0% round 32px)',
          opacity: 1,
          scale: 1,
          duration: 1.4,
          ease: 'power2.inOut',
        },
        '-=1.2'
      );

      // Floating details badge
      tl.fromTo(
        floatingBadgeRef.current,
        { opacity: 0, scale: 0.85, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.4)' },
        '-=0.5'
      );

      // Decorative blob subtle breathing
      gsap.to(decorativeBlobRef.current, {
        x: 18,
        y: -12,
        scale: 1.05,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (clientX - centerX) / 45;
        const moveY = (clientY - centerY) / 45;

        gsap.to(imageRef.current, {
          x: moveX,
          y: moveY,
          duration: 1.5,
          ease: 'power1.out',
        });

        gsap.to(floatingBadgeRef.current, {
          x: -moveX * 1.4,
          y: -moveY * 1.4,
          duration: 1.5,
          ease: 'power1.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#FFF8F8] to-[#FFF8F8]"
    >
      {/* Decorative Rose Atmosphere Blobs */}
      <div
        ref={decorativeBlobRef}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#F8E5E8] opacity-60 blur-3xl pointer-events-none"
      />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#E8B7C1]/20 blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-[#FFFDF8] opacity-80 blur-2xl pointer-events-none" />

      {/* Decorative Botanical Watermark (Delicate line SVG) */}
      <div className="absolute right-5 top-28 opacity-[0.04] pointer-events-none hidden xl:block">
        <svg width="450" height="450" viewBox="0 0 100 100" fill="none" stroke="#542638" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
          <path d="M50 10 C35 30, 35 70, 50 90 C65 70, 65 30, 50 10" />
          <path d="M10 50 C30 35, 70 35, 90 50 C70 65, 30 65, 10 50" />
          <circle cx="50" cy="50" r="18" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            
            {/* Small Brand Label */}
            <button
              type="button"
              ref={badgeRef}
              onClick={onOpenCustomEnquiry}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-6 shadow-sm hover:bg-[#E8B7C1]/40 transition-colors cursor-pointer text-left"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-bold text-[#A64D65]">
                Boutique Patisserie &amp; Custom Atelier
              </span>
            </button>

            {/* Main Editorial Headline */}
            <div className="overflow-hidden mb-6">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal tracking-[-0.01em] text-[#542638] leading-[1.08]">
                <span ref={headlineLine1Ref} className="block">
                  Sweet moments,
                </span>
                <span ref={headlineLine2Ref} className="block italic font-light text-[#A64D65]">
                  beautifully made.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p
              ref={subtextRef}
              className="text-base sm:text-lg text-[#57434A]/90 max-w-xl font-light leading-relaxed mb-8"
            >
              {SITE_CONFIG.heroSubheadline} Hand-blended organic Damascus rose water, 70% Callebaut dark chocolate, and botanical floral styling made fresh for every order.
            </p>

            {/* CTAs */}
            <div
              ref={ctaGroupRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center space-x-3 px-7 py-3.5 rounded-full bg-[#542638] text-[#FFFDF8] font-sans font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300 hover:bg-[#3D1B28] shadow-[0_10px_25px_rgba(84,38,56,0.22)] hover:shadow-float hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Creations</span>
                <span className="w-2 h-2 rounded-full bg-[#E8B7C1] group-hover:scale-125 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                  "Hello Bloom & Batter, I'd like to ask about availability and place a pre-order."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-[#F8E5E8] text-[#542638] border border-[#C98291]/50 font-sans font-semibold text-xs tracking-[0.16em] uppercase hover:bg-[#FFFDF8] hover:border-[#A64D65] transition-all duration-300 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#A64D65]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8B7C1]/30 w-full max-w-lg">
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#542638] font-medium">100%</p>
                <p className="text-[11px] tracking-wider uppercase text-[#8C7079] mt-0.5 font-medium">
                  Fresh Artisanal
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#542638] font-medium">48h</p>
                <p className="text-[11px] tracking-wider uppercase text-[#8C7079] mt-0.5 font-medium">
                  Pre-order Lead
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl text-[#542638] font-medium">Bespoke</p>
                <p className="text-[11px] tracking-wider uppercase text-[#8C7079] mt-0.5 font-medium">
                  Tailored Design
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Large Editorial Cake Photography with Floating Accents */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer Decorative Glow & Borders */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#F8E5E8] to-[#FFFDF8] rounded-[40px] opacity-80 blur-xl -z-10" />

            {/* Main Image Frame */}
            <div
              ref={imageWrapperRef}
              className="relative w-full max-w-[460px] lg:max-w-none aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_30px_70px_rgba(84,38,56,0.18)] border-4 border-[#FFFDF8] group"
            >
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop"
                alt="Bloom & Batter signature Rose Milk Cake with Ispahan rose petals"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 ease-out"
                loading="eager"
              />

              {/* Gentle gradient overlay at the base for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#542638]/70 via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Bottom Image Caption inside the frame */}
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.24em] font-semibold text-[#E8B7C1] block mb-1">
                  Signature Creation
                </span>
                <p className="font-serif text-2xl tracking-wide font-normal">
                  The Rose Milk Tres Leches
                </p>
                <p className="text-xs text-[#FFFDF8]/80 font-light mt-1">
                  Infused with organic rose water, crushed cardamom &amp; pistachios.
                </p>
              </div>
            </div>

            {/* Floating Luxury Badge */}
            <div
              ref={floatingBadgeRef}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FFFDF8]/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lifted border border-[#E8B7C1]/50 flex items-center space-x-3.5 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#F8E5E8] flex items-center justify-center text-[#A64D65]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif text-sm font-semibold text-[#542638]">
                  Handcrafted Micro-Batches
                </p>
                <p className="text-[10px] tracking-wider text-[#8C7079] uppercase font-medium">
                  Baked with Love &amp; Care
                </p>
              </div>
            </div>

            {/* Floating Top Right Badge */}
            <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#542638] text-[#FFFDF8] px-4 py-2.5 rounded-full shadow-lg border border-[#E8B7C1]/30 flex items-center space-x-2 z-20">
              <span className="w-2 h-2 rounded-full bg-[#E8B7C1] animate-ping" />
              <span className="text-[11px] font-medium tracking-wider uppercase">
                Accepting Orders
              </span>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center text-[#8C7079]">
          <span className="text-[10px] uppercase tracking-[0.28em] font-semibold mb-2">
            Scroll to Explore
          </span>
          <button
            onClick={onExploreClick}
            className="w-8 h-8 rounded-full border border-[#C98291]/40 flex items-center justify-center hover:border-[#542638] hover:text-[#542638] transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
