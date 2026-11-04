import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkles, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';

export const BehindTheBaking: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const stepItems = stepsContainerRef.current?.querySelectorAll('.process-step-item');
      if (stepItems) {
        stepItems.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="py-24 sm:py-36 bg-[#FFFDF8] relative overflow-hidden border-t border-[#E8B7C1]/20"
    >
      {/* Decorative Warm Blobs */}
      <div className="absolute top-1/4 right-5 w-80 h-80 rounded-full bg-[#F8E5E8]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-[#E8B7C1]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
              The Artisanal Method
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#542638] font-normal tracking-tight mb-4">
            From Our Kitchen, With Love
          </h2>
          <p className="text-base sm:text-lg text-[#57434A]/80 font-light max-w-xl mx-auto leading-relaxed">
            Every creation is prepared in small, careful batches where time, temperature, and botanical aromas are nurtured with patient devotion.
          </p>
        </div>

        {/* Staggered Alternating Editorial Steps */}
        <div ref={stepsContainerRef} className="space-y-16 sm:space-y-24">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.step}
                className={`process-step-item grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-lifted border-4 border-[#FFFDF8] group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl bg-[#542638]/90 backdrop-blur-md text-[#FFFDF8] font-serif text-lg font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65] block mb-2">
                    {step.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl sm:text-4xl text-[#542638] font-normal tracking-tight mb-4">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#57434A]/85 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#E8B7C1]/30">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center space-x-2 text-xs text-[#57434A]">
                        <Check className="w-3.5 h-3.5 text-[#A64D65] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

