import React from 'react';
import { MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface FooterProps {
  onOpenCustomEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCustomEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFDF8] text-[#57434A] border-t border-[#E8B7C1]/30 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#E8B7C1]/20">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex flex-col items-start mb-4">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] font-medium text-[#542638] uppercase">
                Bloom &amp; Batter
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#A64D65] font-sans font-semibold -mt-1">
                Boutique Home Patisserie
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#57434A]/80 font-light leading-relaxed max-w-sm mb-6">
              Thoughtfully handcrafted cakes and patisserie treats for life's most special celebrations. Baked in limited batches with organic botanicals, real vanilla, and Belgian chocolate.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                  SITE_CONFIG.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/50 flex items-center justify-center text-[#542638] hover:bg-[#542638] hover:text-[#FFFDF8] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={SITE_CONFIG.social.instagramUrl}
                className="w-10 h-10 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/50 flex items-center justify-center text-[#542638] hover:bg-[#542638] hover:text-[#FFFDF8] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#542638] mb-4">
              Explore Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-[#57434A]">
              <li>
                <a href="#signatures" className="hover:text-[#A64D65] transition-colors">
                  Signature Creations
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#A64D65] transition-colors">
                  Patisserie Menu
                </a>
              </li>
              <li>
                <a href="#custom-cakes" className="hover:text-[#A64D65] transition-colors">
                  Custom Cake Commissions
                </a>
              </li>
              <li>
                <a href="#occasions" className="hover:text-[#A64D65] transition-colors">
                  Celebrations &amp; Occasions
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-[#A64D65] transition-colors">
                  How to Order
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#542638] mb-4">
              Specialities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#57434A]">
              <li>
                <a href="#collection" className="hover:text-[#A64D65] transition-colors">
                  Rose Tres Leches
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#A64D65] transition-colors">
                  Belgian Truffle Cakes
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#A64D65] transition-colors">
                  Biscoff Brownie Boxes
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-[#A64D65] transition-colors">
                  Botanical Cupcakes
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCustomEnquiry}
                  className="hover:text-[#A64D65] transition-colors text-left font-semibold text-[#A64D65]"
                >
                  Custom Enquiry →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#542638] mb-4">
              Order Hours
            </h4>
            <div className="space-y-2 text-xs text-[#57434A]/80 leading-relaxed font-light">
              <p>Home Patisserie Studio</p>
              <p className="font-medium text-[#542638]">WhatsApp Pre-orders Only</p>
              <p>Tue – Sun: 10:00 – 19:00</p>
              <p className="text-[#A64D65] font-medium pt-1">
                48h Advance Notice Required
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Studio Credit and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7079] gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} BLOOM &amp; BATTER. All rights reserved.</p>
            <span className="hidden sm:inline text-[#E8B7C1]">•</span>
            <p className="text-[#A64D65] font-medium">
              Independent website concept by Veyra Studio
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-[11px] text-[#8C7079]">
              Baked with Love. Styled with Elegance.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#E8B7C1]/50 hover:bg-[#F8E5E8] text-[#542638] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
