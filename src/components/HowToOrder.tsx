import React from 'react';
import { Compass, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface HowToOrderProps {
  onExploreCollection: () => void;
  onOpenCustomEnquiry: () => void;
}

export const HowToOrder: React.FC<HowToOrderProps> = ({
  onExploreCollection,
  onOpenCustomEnquiry,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Explore the Collection',
      description: 'Browse our signature cakes, decadent chocolate brownies, and botanical cupcakes to find your craving.',
      actionLabel: 'Browse Bakes',
      action: onExploreCollection,
    },
    {
      num: '02',
      title: 'Choose Your Favourite',
      description: 'Select your preferred size, servings (from 6 to 25+ guests), and note any special personalized requests.',
      actionLabel: 'See Portions',
      action: onExploreCollection,
    },
    {
      num: '03',
      title: 'Share Your Details',
      description: 'Provide your target celebration date and occasion so our kitchen can reserve your bespoke baking slot.',
      actionLabel: 'Custom Form',
      action: onOpenCustomEnquiry,
    },
    {
      num: '04',
      title: 'Confirm via WhatsApp',
      description: 'We connect directly on WhatsApp to confirm availability, finalize decorative accents, and provide care tips.',
      actionLabel: 'Chat Now',
      isWhatsApp: true,
    },
  ];

  return (
    <section id="how-to-order" className="py-24 sm:py-32 bg-[#FFF8F8] relative overflow-hidden">
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F8E5E8]/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#A64D65]" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
              Seamless Experience
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#542638] font-normal tracking-tight mb-4">
            How to Order
          </h2>
          <p className="text-base sm:text-lg text-[#57434A]/80 font-light max-w-xl mx-auto leading-relaxed">
            Direct, personal, and delightfully easy. From first inquiry to the sweet reveal.
          </p>
        </div>

        {/* 4 Animated Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#FFFDF8] rounded-[28px] p-6 sm:p-7 border border-[#E8B7C1]/30 shadow-subtle hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E8B7C1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#C98291]/50 group-hover:text-[#A64D65] transition-colors block mb-4">
                  {step.num}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl text-[#542638] font-normal mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57434A]/80 font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8B7C1]/20">
                {step.isWhatsApp ? (
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                      SITE_CONFIG.whatsapp.defaultMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-[#A64D65] hover:text-[#542638] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    onClick={step.action}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-semibold text-[#542638] hover:text-[#A64D65] transition-colors"
                  >
                    <span>{step.actionLabel}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Centralised Order Now Action Banner */}
        <div className="bg-gradient-to-r from-[#F8E5E8] via-[#FFFDF8] to-[#F8E5E8] rounded-3xl p-8 sm:p-10 border border-[#E8B7C1]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-2xl text-[#542638] font-medium mb-1">
              Ready to schedule your bake?
            </h4>
            <p className="text-xs sm:text-sm text-[#57434A]/80 font-light">
              We recommend placing custom celebration orders at least 48 to 72 hours in advance.
            </p>
          </div>
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenCustomEnquiry}
              className="px-6 py-3 rounded-full bg-[#FFFDF8] border border-[#C98291] text-[#542638] text-xs uppercase tracking-wider font-semibold hover:bg-[#F8E5E8] transition-colors"
            >
              Custom Enquiry
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                SITE_CONFIG.whatsapp.defaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#542638] text-[#FFFDF8] text-xs uppercase tracking-wider font-semibold hover:bg-[#3D1B28] transition-colors inline-flex items-center space-x-1.5 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#E8B7C1]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
