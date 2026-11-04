import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { OCCASIONS } from '../data/occasions';

interface OccasionCollectionProps {
  onOpenCustomEnquiry: () => void;
  onExploreCollection: () => void;
}

export const OccasionCollection: React.FC<OccasionCollectionProps> = ({
  onOpenCustomEnquiry,
  onExploreCollection,
}) => {
  return (
    <section id="occasions" className="py-24 sm:py-32 bg-[#FFF8F8] relative overflow-hidden">
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#F8E5E8] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
              <Heart className="w-3.5 h-3.5 text-[#A64D65]" />
              <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
                Curated For Life's Milestones
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#542638] font-normal tracking-tight">
              Occasions We Celebrate
            </h2>
          </div>
          <button
            onClick={onOpenCustomEnquiry}
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#542638] hover:text-[#A64D65] border-b border-[#542638] pb-1 w-max transition-colors"
          >
            <span>Plan a Bespoke Occasion</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Image-Led Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OCCASIONS.slice(0, 5).map((occ, idx) => {
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={occ.id}
                className={`group relative rounded-[32px] overflow-hidden bg-[#FFFDF8] border border-[#E8B7C1]/30 shadow-subtle hover:shadow-lifted transition-all duration-500 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Image Frame */}
                <div
                  className={`relative overflow-hidden w-full ${
                    isWide ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={occ.image}
                    alt={occ.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#542638]/70 via-[#542638]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-[#FFFDF8]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-[#542638]">
                    {occ.subtitle}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#542638] font-normal mb-2 group-hover:text-[#A64D65] transition-colors">
                      {occ.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57434A]/80 font-light leading-relaxed mb-4">
                      {occ.description}
                    </p>

                    {/* Recommended Bakes */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {occ.recommendedBakes.map((bake) => (
                        <span
                          key={bake}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-[#F8E5E8] text-[#542638] font-medium"
                        >
                          {bake}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E8B7C1]/20 flex items-center justify-between">
                    <button
                      onClick={onOpenCustomEnquiry}
                      className="text-xs uppercase tracking-[0.14em] font-semibold text-[#542638] hover:text-[#A64D65] flex items-center space-x-1 transition-colors"
                    >
                      <span>Enquire for {occ.title.split(' ')[0]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onExploreCollection}
                      className="text-xs text-[#8C7079] hover:text-[#542638] transition-colors"
                    >
                      Browse Menu →
                    </button>
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
