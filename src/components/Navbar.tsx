import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface NavbarProps {
  onOpenCustomEnquiry: () => void;
  onOpenQuickOrder?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FFF8F8]/90 backdrop-blur-md py-3.5 shadow-[0_4px_24px_rgba(166,77,101,0.06)] border-b border-[#E8B7C1]/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex flex-col items-start transition-opacity hover:opacity-90"
            >
              <span className="font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.18em] font-medium text-[#542638] uppercase">
                Bloom &amp; Batter
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#A64D65] font-sans font-semibold -mt-1 group-hover:text-[#542638] transition-colors">
                Boutique Home Patisserie
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              {SITE_CONFIG.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-[13px] tracking-[0.08em] font-medium text-[#57434A] hover:text-[#542638] transition-colors uppercase py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C98291] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenCustomEnquiry}
                className="text-[12px] uppercase tracking-[0.14em] font-semibold px-4 py-2.5 rounded-full border border-[#C98291]/50 text-[#542638] hover:bg-[#F8E5E8] hover:border-[#A64D65] transition-all duration-300 shadow-sm"
              >
                Custom Cake
              </button>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                  SITE_CONFIG.whatsapp.defaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 text-[12px] uppercase tracking-[0.14em] font-semibold px-4 py-2.5 rounded-full bg-[#542638] text-[#FFFDF8] hover:bg-[#3D1B28] transition-all duration-300 shadow-[0_8px_20px_rgba(84,38,56,0.18)] hover:shadow-lifted hover:-translate-y-0.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#E8B7C1] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Order</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full text-[#542638] bg-[#F8E5E8]/80 hover:bg-[#F8E5E8] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#542638]/40 backdrop-blur-sm"
          onClick={closeMobile}
        />

        {/* Content Drawer */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-[#FFF8F8] p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-500 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E8B7C1]/30">
              <div>
                <span className="font-serif text-xl tracking-[0.15em] font-medium text-[#542638] uppercase">
                  Bloom &amp; Batter
                </span>
                <p className="text-[10px] tracking-[0.2em] text-[#A64D65] uppercase font-semibold">
                  Boutique Home Patisserie
                </p>
              </div>
              <button
                onClick={closeMobile}
                className="p-2 rounded-full text-[#542638] hover:bg-[#F8E5E8] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              {SITE_CONFIG.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="text-base tracking-[0.06em] font-medium text-[#57434A] hover:text-[#542638] hover:translate-x-1 transition-all py-1.5 flex items-center justify-between border-b border-[#E8B7C1]/15"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C98291]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#E8B7C1]/30">
            <button
              onClick={() => {
                closeMobile();
                onOpenCustomEnquiry();
              }}
              className="w-full text-center text-xs uppercase tracking-[0.14em] font-semibold py-3.5 rounded-full border border-[#C98291] text-[#542638] hover:bg-[#F8E5E8] transition-colors"
            >
              Custom Cake Enquiry
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
                SITE_CONFIG.whatsapp.defaultMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-[0.14em] font-semibold py-3.5 rounded-full bg-[#542638] text-[#FFFDF8] hover:bg-[#3D1B28] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#E8B7C1]" />
              <span>Order on WhatsApp</span>
            </a>
            <p className="text-center text-[10px] tracking-wider text-[#8C7079] pt-2">
              {SITE_CONFIG.studioCredit}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

