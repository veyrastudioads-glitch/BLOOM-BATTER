import React from 'react';
import { MessageCircle, Sparkles, Heart, Cake } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface FinalCTAProps {
  onOpenCustomEnquiry: () => void;
  onExploreCollection?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenCustomEnquiry,
}) => {
  return (
    <section className="py-28 sm:py-40 bg-gradient-to-b from-[#FFF8F8] via-[#F8E5E8] to-[#F8E5E8] relative overflow-hidden border-t border-[#E8B7C1]/30">
      
      {/* Decorative Rose Atmosphere Blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E8B7C1]/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#FFFDF8]/80 blur-3xl pointer-events-none" />

      {/* Decorative Watermark Floral Pattern */}
      <div className="absolute left-1/2 -top-20 -translate-x-1/2 opacity-10 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="#542638" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
          <path d="M50 5 C30 25, 30 75, 50 95 C70 75, 70 25, 50 5" />
          <path d="M5 50 C25 30, 75 30, 95 50 C75 70, 25 70, 5 50" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFFDF8] border border-[#C98291]/40 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
          <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
            Handcrafted To Order • Limited Daily Slots
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#542638] font-normal tracking-tight mb-6 leading-[1.05]">
          Let's Make Something Sweet.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-[#57434A]/85 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Have a celebration coming up? We'd love to help you make it special. Send us your date and design inspiration directly on WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
              "Hello Bloom & Batter, I'm planning an upcoming celebration and would love to place an order!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#542638] text-[#FFFDF8] hover:bg-[#3D1B28] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-lifted hover:shadow-float hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#E8B7C1]" />
            <span>Place Your Order</span>
          </a>

          <button
            onClick={onOpenCustomEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[#FFFDF8] border border-[#C98291] text-[#542638] hover:bg-[#F8E5E8] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-sm"
          >
            <Cake className="w-4 h-4 text-[#A64D65]" />
            <span>Create Custom Cake</span>
          </button>
        </div>

        {/* Subtle Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#8C7079]">
          <span className="flex items-center space-x-1.5">
            <Heart className="w-3.5 h-3.5 text-[#A64D65]" />
            <span>Freshly Baked For Your Date</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C98291]" />
          <span>Bespoke Hand-Piped Styling</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C98291]" />
          <span>Personal WhatsApp Coordination</span>
        </div>

      </div>
    </section>
  );
};
