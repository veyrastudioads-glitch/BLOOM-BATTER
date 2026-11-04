import React from 'react';
import { Sparkles, Heart, ArrowRight, Cake, CheckCircle2 } from 'lucide-react';

interface CustomCakesSectionProps {
  onOpenEnquiry: () => void;
}

export const CustomCakesSection: React.FC<CustomCakesSectionProps> = ({ onOpenEnquiry }) => {
  const occasionList = [
    { title: 'Intimate Weddings', detail: 'Romantic 2-3 tier botanicals with edible florals' },
    { title: 'Milestone Birthdays', detail: 'Vintage Lambeth piping, pearls & signature sponges' },
    { title: 'Romantic Anniversaries', detail: 'Heart-shaped gateaux & custom calligraphy' },
    { title: 'Baby Welcomes & Showers', detail: 'Soft pastel tones, macaron towers & cupcake sets' },
    { title: 'Special Celebrations', detail: 'Unique custom themes tailored to your aesthetic' },
  ];

  return (
    <section id="custom-cakes" className="py-24 sm:py-32 bg-[#FFF8F8] relative overflow-hidden">
      
      {/* Decorative Blush Atmosphere */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F8E5E8] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Container with Two-Tone Styling */}
        <div className="bg-[#FFFDF8] rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 lg:p-16 border border-[#E8B7C1]/30 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
                <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
                  Bespoke Patisserie Atelier
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#542638] font-normal tracking-tight mb-6 leading-[1.1]">
                Made Especially for Your Moments
              </h2>

              <p className="text-base sm:text-lg text-[#57434A]/80 font-light leading-relaxed mb-8 max-w-xl">
                Have a dream design or a cherished theme in mind? Every bespoke cake begins with a friendly consultation. We harmonize your aesthetic, palette, and flavour cravings into an unforgettable centerpiece.
              </p>

              {/* Occasions Check List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
                {occasionList.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-3 p-3.5 rounded-2xl bg-[#FFF8F8] border border-[#E8B7C1]/20 hover:border-[#A64D65]/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A64D65] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-base text-[#542638] font-medium">{item.title}</h4>
                      <p className="text-xs text-[#8C7079] font-light mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-[#542638] text-[#FFFDF8] hover:bg-[#3D1B28] text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-lifted hover:shadow-float hover:-translate-y-0.5"
                >
                  <Cake className="w-4 h-4 text-[#E8B7C1]" />
                  <span>Create Your Cake</span>
                  <ArrowRight className="w-4 h-4 text-[#E8B7C1]" />
                </button>
                <span className="text-xs text-[#8C7079] text-center sm:text-left self-center font-light">
                  Simple WhatsApp Enquiry • No obligation
                </span>
              </div>
            </div>

            {/* Right Large Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(84,38,56,0.18)] border-4 border-[#FFFDF8] group">
                <img
                  src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=1200&auto=format&fit=crop"
                  alt="Bloom & Batter custom designed celebration tiered cake"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#542638]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-[#FFFDF8]">
                  <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#E8B7C1] block mb-1">
                    Custom Commission
                  </span>
                  <p className="font-serif text-2xl">
                    Pressed Garden Florals &amp; Blush Velvet
                  </p>
                  <p className="text-xs text-[#FFFDF8]/80 font-light mt-1">
                    Bespoke for an intimate countryside wedding
                  </p>
                </div>
              </div>

              {/* Floating review/note pill */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#FFFDF8] border border-[#E8B7C1]/60 px-4 py-2.5 rounded-2xl shadow-lifted flex items-center space-x-2.5">
                <Heart className="w-4 h-4 text-[#A64D65] fill-[#A64D65]" />
                <span className="text-xs font-serif text-[#542638] font-semibold">
                  Tailored to Your Celebration
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

