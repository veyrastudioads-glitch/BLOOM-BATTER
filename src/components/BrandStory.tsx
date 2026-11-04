import React from 'react';
import { Flower2, Feather } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-36 bg-[#FFFDF8] relative overflow-hidden border-t border-[#E8B7C1]/20">
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#F8E5E8]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Brand Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            
            {/* Small Decorative Brand Emblem */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full border border-[#C98291]/50 bg-[#F8E5E8] flex items-center justify-center text-[#542638] shadow-sm">
                <Flower2 className="w-6 h-6 text-[#A64D65]" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.26em] font-bold text-[#A64D65] block">
                  Artisanal Atelier Concept
                </span>
                <span className="font-serif text-sm text-[#542638]">
                  Bloom &amp; Batter Philosophy
                </span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#542638] font-normal tracking-tight mb-8 leading-[1.1]">
              Every Bake Has a Story
            </h2>

            {/* Editorial Blockquote */}
            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#A64D65] leading-relaxed mb-8 border-l-2 border-[#E8B7C1] pl-6 py-1">
              "At Bloom &amp; Batter, we believe the sweetest memories are made from little moments. Every creation is thoughtfully prepared to bring a little more joy to your celebrations."
            </blockquote>

            <div className="space-y-5 text-[#57434A]/85 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                What began as a quiet love affair with delicate French patisserie and Middle Eastern rosewater notes has evolved into an intimate home bakery dedicated to heartfelt indulgence.
              </p>
              <p>
                We eschew mass production, factory premixes, and synthetic colouring. Instead, our counters smell of real roasted nuts, caramelizing sugars, and the intoxicating fragrance of organic blossoms infused into velvety creams.
              </p>
            </div>

            {/* Craft Signature / Emblem Sign-off */}
            <div className="pt-6 border-t border-[#E8B7C1]/30 flex items-center space-x-4">
              <div className="font-serif italic text-2xl text-[#542638]">
                Bloom &amp; Batter Studio
              </div>
              <span className="text-xs text-[#8C7079]">
                • Independent Concept by Veyra Studio
              </span>
            </div>

          </div>

          {/* Right Column: High Fashion Bakery Imagery & Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[36px] overflow-hidden shadow-[0_30px_70px_rgba(84,38,56,0.18)] border-4 border-[#FFFDF8] group">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                alt="Baker gently styling floral cake in atelier"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#542638]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#E8B7C1] block mb-1">
                  Atelier Craftsmanship
                </span>
                <p className="font-serif text-xl">
                  Hand-Folded &amp; Freshly Whipped
                </p>
              </div>
            </div>

            {/* Floating Decorative Emblem Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#FFFDF8] border border-[#E8B7C1]/60 px-5 py-3.5 rounded-2xl shadow-lifted flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-[#F8E5E8] flex items-center justify-center text-[#A64D65]">
                <Feather className="w-4 h-4" />
              </div>
              <div>
                <p className="font-serif text-xs font-semibold text-[#542638]">
                  Artisanal Integrity
                </p>
                <p className="text-[10px] text-[#8C7079] tracking-wider uppercase font-medium">
                  Concept Portfolio Piece
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
