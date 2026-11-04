import React from 'react';
import { Star, MessageSquareQuote, Info } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FFF8F8] relative overflow-hidden border-t border-[#E8B7C1]/20">
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F8E5E8] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#A64D65]" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
              Celebration Feedback
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#542638] font-normal tracking-tight mb-4">
            Kind Words From Sweet Days
          </h2>
          
          {/* Demonstration Notice Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#C98291]/30 text-[11px] text-[#8C7079] mb-4">
            <Info className="w-3.5 h-3.5 text-[#A64D65]" />
            <span>Sample placeholder testimonials for portfolio demonstration concept</span>
          </div>
        </div>

        {/* 3 Refined Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF8] rounded-[32px] p-8 border border-[#E8B7C1]/30 shadow-subtle hover:shadow-lifted transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-6 text-[#A64D65]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#A64D65]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif italic text-lg sm:text-xl text-[#542638] leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 border-t border-[#E8B7C1]/20">
                <p className="font-serif text-base text-[#542638] font-semibold">
                  {item.clientName}
                </p>
                <p className="text-xs text-[#A64D65] font-medium mt-0.5">
                  {item.occasion}
                </p>
                <p className="text-[11px] text-[#8C7079] font-light mt-1">
                  Ordered: {item.bakePurchased}
                </p>
                <span className="inline-block mt-3 text-[9px] uppercase tracking-wider text-[#8C7079]/70 bg-[#F8E5E8]/60 px-2 py-0.5 rounded">
                  Demonstration Content
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
