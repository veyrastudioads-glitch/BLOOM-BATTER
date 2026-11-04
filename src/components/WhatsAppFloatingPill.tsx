import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface WhatsAppFloatingPillProps {
  onOpenCustomEnquiry: () => void;
}

export const WhatsAppFloatingPill: React.FC<WhatsAppFloatingPillProps> = ({
  onOpenCustomEnquiry,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Show tooltip once after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-2">
      {/* Subtle Greeting Bubble */}
      {showTooltip && (
        <div className="bg-[#FFFDF8] border border-[#E8B7C1] p-3 rounded-2xl shadow-lifted max-w-xs text-xs text-[#57434A] relative animate-fade-in flex items-start space-x-2">
          <Sparkles className="w-4 h-4 text-[#A64D65] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#542638]">Have a cake in mind?</p>
            <p className="text-[11px] text-[#8C7079]">
              Chat directly with our baker on WhatsApp for quick date availability.
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8C7079] hover:text-[#542638] ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Pill Button */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onOpenCustomEnquiry}
          className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-3 rounded-full bg-[#FFFDF8] border border-[#C98291] text-[#542638] text-xs uppercase tracking-wider font-semibold shadow-lifted hover:bg-[#F8E5E8] transition-all hover:scale-105"
        >
          <span>Custom Cake</span>
        </button>

        <a
          href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
            SITE_CONFIG.whatsapp.defaultMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center space-x-2.5 px-5 py-3.5 rounded-full bg-[#542638] text-[#FFFDF8] shadow-lifted hover:shadow-float hover:bg-[#3D1B28] transition-all duration-300 hover:scale-105"
          aria-label="Order on WhatsApp"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8B7C1] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E8B7C1]" />
          </span>
          <MessageCircle className="w-4 h-4 text-[#E8B7C1]" />
          <span className="text-xs uppercase tracking-[0.14em] font-semibold">
            Order on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

