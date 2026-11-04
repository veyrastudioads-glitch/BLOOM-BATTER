import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

export const FeatureStory: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headlinePart1Ref = useRef<HTMLSpanElement>(null);
  const headlinePart2Ref = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);
  const decorativeCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // ScrollTrigger timeline that scrubs image scale and background tone
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 1.15, filter: 'brightness(0.92)' },
        { scale: 1.0, filter: 'brightness(1)', ease: 'none' }
      );

      // Background transition from ivory to warm blush
      tl.to(
        containerRef.current,
        { backgroundColor: '#F8E5E8', ease: 'none' },
        0
      );

      // Subtle decorative float
      tl.to(
        decorativeCircleRef.current,
        { y: -60, rotation: 45, ease: 'none' },
        0
      );

      // Text reveal on trigger
      gsap.fromTo(
        [headlinePart1Ref.current, headlinePart2Ref.current],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 65%',
          },
        }
      );

      gsap.fromTo(
        copyRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 55%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 sm:py-44 bg-[#FFFDF8] overflow-hidden transition-colors duration-700"
    >
      {/* Decorative Rotating Geometric Floral Watermark */}
      <div
        ref={decorativeCircleRef}
        className="absolute -right-24 top-1/4 w-[450px] h-[450px] rounded-full border border-[#C98291]/30 opacity-40 pointer-events-none hidden lg:block"
        style={{
          borderStyle: 'dashed',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Full Campaign Photograph with Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(84,38,56,0.2)] border-4 border-[#FFFDF8]">
              <img
                ref={imageRef}
                src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1400&auto=format&fit=crop"
                alt="Bloom & Batter artisan celebration cake presentation"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#542638]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#E8B7C1] block mb-1">
                  Artisanal Botanical Patisserie
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-light">
                  "Every slice is an intentional celebration."
                </p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-[#542638] text-[#FFFDF8] p-6 rounded-3xl shadow-lifted border border-[#E8B7C1]/30 max-w-xs hidden sm:block">
              <Sparkles className="w-5 h-5 text-[#E8B7C1] mb-2" />
              <p className="font-serif text-base font-normal">
                Natural Botanicals &amp; Rare Flavour Pairings
              </p>
              <p className="text-[11px] text-[#EDE0D8] font-light mt-1">
                Zero artificial flavorings. Only genuine petals, fruit reductions, and Belgian chocolate.
              </p>
            </div>
          </div>

          {/* Right Column: Campaign Statement Headline & Philosophy */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8] border border-[#E8B7C1]/60 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A64D65]" />
              <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
                Our Heart &amp; Philosophy
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl text-[#542638] font-normal tracking-tight leading-[1.08] mb-8">
              <span ref={headlinePart1Ref} className="block">
                A little sweetness.
              </span>
              <span ref={headlinePart2Ref} className="block italic font-light text-[#A64D65]">
                A lot of love.
              </span>
            </h2>

            <div ref={copyRef} className="space-y-6 text-[#57434A]/85 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              <p>
                In our boutique kitchen, baking is never about volume. It is a slow, rhythmic meditation on texture, scent, and beauty.
              </p>
              <p>
                From steeping organic rose water overnight to whipping butter until it resembles silk, we believe celebrations deserve creations as thoughtful and unique as the people celebrating.
              </p>
              
              <div className="pt-4 flex items-center space-x-6 border-t border-[#E8B7C1]/40">
                <div>
                  <span className="font-serif text-3xl font-medium text-[#542638]">48h</span>
                  <p className="text-[11px] uppercase tracking-wider text-[#8C7079]">Advance Craft Time</p>
                </div>
                <div className="w-[1px] h-10 bg-[#E8B7C1]/40" />
                <div>
                  <span className="font-serif text-3xl font-medium text-[#542638]">0%</span>
                  <p className="text-[11px] uppercase tracking-wider text-[#8C7079]">Artificial Flavours</p>
                </div>
                <div className="w-[1px] h-10 bg-[#E8B7C1]/40" />
                <div>
                  <span className="font-serif text-3xl font-medium text-[#542638]">1-on-1</span>
                  <p className="text-[11px] uppercase tracking-wider text-[#8C7079]">Bespoke WhatsApp Care</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
