import React, { useState } from 'react';
import { Sparkles, Flower2 } from 'lucide-react';

interface BotanicalIngredient {
  id: string;
  name: string;
  origin: string;
  description: string;
  pairing: string;
  color: string;
}

export const TasteNotesExplorer: React.FC = () => {
  const botanicals: BotanicalIngredient[] = [
    {
      id: 'rose',
      name: 'Organic Damascus Rose Distillate',
      origin: 'Kashan / Grasse',
      description: 'Slow hydro-distilled from freshly plucked organic pink roses at dawn. Imparts a lingering, ethereal floral top note without any soapy artificial perfume.',
      pairing: 'Cardamom pods, whole milk cream, and roasted pistachios',
      color: '#A64D65',
    },
    {
      id: 'cocoa',
      name: '70% Callebaut Belgian Cacao',
      origin: 'Wieze, Belgium',
      description: 'Single-origin roasted beans with deep roasted cacao nib undertones, mild red fruit acidity, and silky melt profile.',
      pairing: 'Espresso bloom, Madagascar vanilla, and Fleur de Sel',
      color: '#542638',
    },
    {
      id: 'pistachio',
      name: 'Bronte Green Pistachio Paste',
      origin: 'Sicily, Italy',
      description: 'Volcanic soil-grown emerald pistachios, lightly roasted and stone-milled into a velvety paste preserving pure vegetal sweetness.',
      pairing: 'Rose blossom Swiss meringue and tart raspberry coulis',
      color: '#8C7079',
    },
    {
      id: 'vanilla',
      name: 'Madagascar Bourbon Vanilla Caviar',
      origin: 'Sava Region, Madagascar',
      description: 'Hand-pollinated cured whole vanilla bean pods brimming with fragrant oily seeds for deep, warm amber undertones.',
      pairing: 'Wild blackberries, sweet mascarpone, and butter chiffon',
      color: '#C98291',
    },
  ];

  const [activeIngredient, setActiveIngredient] = useState(botanicals[0]);

  return (
    <section className="py-20 sm:py-28 bg-[#FFF8F8] relative overflow-hidden border-t border-[#E8B7C1]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#FFFDF8] rounded-[36px] p-8 sm:p-12 lg:p-14 border border-[#E8B7C1]/30 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive selection */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
                  Botanical &amp; Flavour Notes
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#542638] font-normal mb-4">
                The Anatomy of Our Flavours
              </h3>
              <p className="text-xs sm:text-sm text-[#57434A]/80 font-light mb-8 leading-relaxed">
                We believe true patisserie luxury lies in the integrity of individual botanical notes. Select an ingredient to discover its origin and pairings.
              </p>

              {/* Selector Tabs */}
              <div className="space-y-2.5">
                {botanicals.map((b) => {
                  const active = activeIngredient.id === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setActiveIngredient(b)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                        active
                          ? 'bg-[#F8E5E8] border-[#A64D65] shadow-sm translate-x-1.5'
                          : 'bg-[#FFFDF8] border-[#E8B7C1]/30 hover:bg-[#FFF8F8]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: b.color }}
                        />
                        <div>
                          <p className="font-serif text-base text-[#542638] font-medium">
                            {b.name}
                          </p>
                          <p className="text-[11px] text-[#8C7079] tracking-wider uppercase">
                            Origin: {b.origin}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#A64D65]">
                        {active ? 'Active' : 'Explore'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Spotlight Panel */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#FFF8F8] to-[#F8E5E8]/60 p-8 sm:p-10 rounded-[32px] border border-[#E8B7C1]/40 shadow-sm relative overflow-hidden">
              <Flower2 className="w-48 h-48 text-[#E8B7C1]/20 absolute -right-10 -bottom-10 pointer-events-none" />

              <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#A64D65] block mb-2">
                Aromatics &amp; Sourcing Spotlight
              </span>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#542638] font-normal mb-3">
                {activeIngredient.name}
              </h4>

              <div className="inline-block px-3 py-1 rounded-full bg-[#FFFDF8] border border-[#E8B7C1]/40 text-xs text-[#542638] font-medium mb-6">
                Ethically Sourced from {activeIngredient.origin}
              </div>

              <p className="text-sm text-[#57434A]/90 font-light leading-relaxed mb-6">
                {activeIngredient.description}
              </p>

              <div className="bg-[#FFFDF8] p-4 rounded-2xl border border-[#E8B7C1]/30">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#542638] block mb-1">
                  Signature Pairing Harmony
                </span>
                <p className="text-sm text-[#A64D65] font-serif italic leading-relaxed">
                  {activeIngredient.pairing}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
