import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_CONFIG } from '../config/site';

interface CustomCakeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomCakeModal: React.FC<CustomCakeModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('Birthday');
  const [preferredDate, setPreferredDate] = useState('');
  const [servings, setServings] = useState('10-15 Servings');
  const [flavour, setFlavour] = useState('Rose Milk Tres Leches');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please share your name.';
    if (!phone.trim()) errs.phone = 'Please provide your WhatsApp number for communication.';
    if (!preferredDate) errs.preferredDate = 'Please select a preferred celebration date.';
    if (!description.trim() || description.length < 5) {
      errs.description = 'Please provide a brief idea or theme for the cake design.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E8B7C1', '#A64D65', '#FFFDF8'],
      });
    } catch {
      // ignore
    }

    // Build the formatted WhatsApp message
    const message = `*Custom Cake Commission Enquiry — BLOOM & BATTER*\n\n` +
      `*Client Name:* ${name}\n` +
      `*Client WhatsApp:* ${phone}\n` +
      `*Occasion:* ${occasion}\n` +
      `*Target Date:* ${preferredDate}\n` +
      `*Estimated Servings:* ${servings}\n` +
      `*Preferred Flavour / Base:* ${flavour}\n` +
      `*Design Concept & Notes:*\n${description}\n\n` +
      `_Sent via Bloom & Batter custom cake enquiry portal_`;

    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#542638]/50 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-[32px] sm:rounded-[40px] shadow-2xl border border-[#E8B7C1]/50 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 pb-4 border-b border-[#E8B7C1]/30 flex items-center justify-between bg-[#FFF8F8]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-[#F8E5E8] flex items-center justify-center text-[#A64D65]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#542638] font-normal">
                  Design Your Custom Cake
                </h3>
                <p className="text-xs text-[#8C7079]">
                  Tell us about your celebration. We'll connect directly on WhatsApp.
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#FFFDF8] border border-[#E8B7C1]/40 flex items-center justify-center text-[#542638] hover:bg-[#F8E5E8] transition-colors"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form Content */}
          <div className="overflow-y-auto p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-[#A64D65] mx-auto mb-4" />
                <h4 className="font-serif text-2xl text-[#542638] mb-2">
                  Enquiry Prepared!
                </h4>
                <p className="text-sm text-[#57434A]/80 max-w-md mx-auto mb-6">
                  We've opened WhatsApp with all your details formatted. If WhatsApp didn't open automatically, click the button below.
                </p>
                <button
                  onClick={handleSubmit}
                  className="px-8 py-3.5 rounded-full bg-[#542638] text-[#FFFDF8] text-xs uppercase tracking-wider font-semibold inline-flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8B7C1]" />
                  <span>Open WhatsApp Conversation</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Charlotte Hayes"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#57434A] focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-400 bg-red-50/50'
                          : 'border-[#E8B7C1]/50 bg-[#FFFDF8] focus:border-[#542638]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                      WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +44 7123 456789"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#57434A] focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-400 bg-red-50/50'
                          : 'border-[#E8B7C1]/50 bg-[#FFFDF8] focus:border-[#542638]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Occasion & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                      Celebration Occasion
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8B7C1]/50 bg-[#FFFDF8] text-xs text-[#57434A] focus:outline-none focus:border-[#542638]"
                    >
                      <option value="Birthday">Birthday Milestone</option>
                      <option value="Wedding / Elopement">Wedding / Elopement</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Baby Shower / Welcome">Baby Shower / Welcome</option>
                      <option value="Graduation / Achievement">Graduation / Achievement</option>
                      <option value="Dinner Party / Gathering">Dinner Party / Gathering</option>
                      <option value="Other Celebration">Other Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => {
                        setPreferredDate(e.target.value);
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#57434A] focus:outline-none transition-colors ${
                        errors.preferredDate
                          ? 'border-red-400 bg-red-50/50'
                          : 'border-[#E8B7C1]/50 bg-[#FFFDF8] focus:border-[#542638]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-[10px] text-red-500 mt-1">{errors.preferredDate}</p>
                    )}
                  </div>
                </div>

                {/* Servings & Flavour */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                      Guest Servings
                    </label>
                    <select
                      value={servings}
                      onChange={(e) => setServings(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8B7C1]/50 bg-[#FFFDF8] text-xs text-[#57434A] focus:outline-none focus:border-[#542638]"
                    >
                      <option value="6-8 Servings (Single Tier 6 inch)">6-8 Servings (Single Tier 6")</option>
                      <option value="10-15 Servings (Single Tier 8 inch)">10-15 Servings (Single Tier 8")</option>
                      <option value="20-25 Servings (Single Tier 10 inch)">20-25 Servings (Single Tier 10")</option>
                      <option value="25-35 Servings (Two Tier 6 & 8 inch)">25-35 Servings (Two Tier 6" & 8")</option>
                      <option value="45-60+ Servings (Three Tier Wedding)">45-60+ Servings (Three Tier Wedding)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                      Preferred Flavour Profile
                    </label>
                    <select
                      value={flavour}
                      onChange={(e) => setFlavour(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8B7C1]/50 bg-[#FFFDF8] text-xs text-[#57434A] focus:outline-none focus:border-[#542638]"
                    >
                      <option value="Rose Milk Tres Leches & Pistachio">Rose Milk Tres Leches &amp; Pistachio</option>
                      <option value="70% Belgian Dark Chocolate Truffle">70% Belgian Dark Chocolate Truffle</option>
                      <option value="Strawberries & Mascarpone Cream">Strawberries &amp; Mascarpone Cream</option>
                      <option value="Sicilian Pistachio & Raspberry Curd">Sicilian Pistachio &amp; Raspberry Curd</option>
                      <option value="Madagascar Bourbon Vanilla & Blackberry">Madagascar Vanilla &amp; Blackberry</option>
                      <option value="White Peach & Jasmine Tea">White Peach &amp; Jasmine Tea</option>
                      <option value="Custom Flavour Request">Custom Flavour Request</option>
                    </select>
                  </div>
                </div>

                {/* Design Description */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] font-bold text-[#542638] mb-1.5">
                    Design Concept, Palette &amp; Details *
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your desired theme, colour palette (e.g. blush pink & ivory), floral accents, piping style (vintage/minimalist), or personal topper text..."
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description) setErrors({ ...errors, description: '' });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs text-[#57434A] focus:outline-none transition-colors ${
                      errors.description
                        ? 'border-red-400 bg-red-50/50'
                        : 'border-[#E8B7C1]/50 bg-[#FFFDF8] focus:border-[#542638]'
                    }`}
                  />
                  {errors.description && (
                    <p className="text-[10px] text-red-500 mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#542638] hover:bg-[#3D1B28] text-[#FFFDF8] font-sans font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-lifted hover:shadow-float flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8B7C1]" />
                    <span>Send Custom Cake Enquiry via WhatsApp</span>
                  </button>
                  <p className="text-center text-[10px] text-[#8C7079] tracking-wider uppercase mt-2 font-medium">
                    Fast response within 24 hours with custom design sketch &amp; quotation.
                  </p>
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
