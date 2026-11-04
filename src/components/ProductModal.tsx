import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Sparkles, Check, AlertCircle, Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { createWhatsAppOrderUrl } from '../config/site';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedServing, setSelectedServing] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [targetDate, setTargetDate] = useState<string>('');
  const [personalMessage, setPersonalMessage] = useState<string>('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    if (product) {
      setSelectedServing(product.servingsOptions[0] || '');
      setQuantity(1);
      setTargetDate('');
      setPersonalMessage('');
      setSelectedImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) return null;

  const images = [product.image, ...(product.secondaryImage ? [product.secondaryImage] : [])];

  const handleWhatsAppOrder = () => {
    const calculatedPrice = `£${(product.priceNum * quantity).toFixed(2)}`;
    const url = createWhatsAppOrderUrl({
      productName: `${product.name} (Qty: ${quantity})`,
      servings: selectedServing,
      price: calculatedPrice,
      deliveryDate: targetDate || 'Earliest available (48h lead)',
      customNotes: personalMessage,
    });
    window.open(url, '_blank');
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#FFFDF8] rounded-[32px] sm:rounded-[40px] shadow-2xl border border-[#E8B7C1]/50 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#FFFDF8]/90 backdrop-blur-md border border-[#E8B7C1]/40 flex items-center justify-center text-[#542638] hover:bg-[#F8E5E8] hover:scale-105 transition-all shadow-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
              
              {/* Left Column: Gallery & Photography */}
              <div className="md:col-span-6 flex flex-col space-y-4">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lifted border-2 border-[#FFFDF8]">
                  <img
                    src={images[selectedImageIndex] || product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#542638]/90 text-[#FFFDF8] text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Thumbnails if multiple images exist */}
                {images.length > 1 && (
                  <div className="flex space-x-3">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                          selectedImageIndex === idx
                            ? 'border-[#542638] scale-105'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Craftsmanship Note */}
                <div className="bg-[#FFF8F8] p-4 rounded-2xl border border-[#E8B7C1]/30 text-xs text-[#57434A]/80 leading-relaxed">
                  <p className="font-semibold text-[#542638] mb-1 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
                    <span>Micro-Batch Artisanal Guarantee</span>
                  </p>
                  Baked to order with pure French butter, unbleached flour, and natural floral essences. Requires minimum 48h advance notice.
                </div>
              </div>

              {/* Right Column: Delicacy Profile & Order Controls */}
              <div className="md:col-span-6 flex flex-col justify-between">
                <div>
                  
                  {/* Category & Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
                      {product.category}
                    </span>
                    <span className="font-serif text-3xl font-bold text-[#542638]">
                      {product.price}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#542638] font-normal mb-2">
                    {product.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#8C7079] italic mb-4 font-serif">
                    "{product.tagline}"
                  </p>

                  <p className="text-sm text-[#57434A]/90 font-light leading-relaxed mb-6">
                    {product.detailedDescription || product.description}
                  </p>

                  {/* Tasting & Botanical Notes */}
                  <div className="mb-6">
                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#542638] mb-2.5">
                      Flavour Composition
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="text-xs px-3 py-1 rounded-full bg-[#F8E5E8] text-[#542638] font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Portion / Size Selector */}
                  <div className="mb-6">
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-bold text-[#542638] mb-2">
                      Select Size / Servings
                    </label>
                    <div className="space-y-2">
                      {product.servingsOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelectedServing(opt)}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between border ${
                            selectedServing === opt
                              ? 'border-[#542638] bg-[#F8E5E8]/60 text-[#542638]'
                              : 'border-[#E8B7C1]/40 bg-[#FFFDF8] text-[#57434A] hover:bg-[#FFF8F8]'
                          }`}
                        >
                          <span>{opt}</span>
                          {selectedServing === opt && (
                            <Check className="w-4 h-4 text-[#542638]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity and Target Date */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#542638] mb-1.5">
                        Quantity
                      </label>
                      <div className="flex items-center border border-[#E8B7C1]/50 rounded-xl bg-[#FFFDF8] px-3 py-1.5 justify-between">
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                          className="p-1 text-[#542638] hover:text-[#A64D65]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold text-[#542638]">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity((q) => q + 1)}
                          className="p-1 text-[#542638] hover:text-[#A64D65]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#542638] mb-1.5">
                        Target Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={targetDate}
                          onChange={(e) => setTargetDate(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-[#E8B7C1]/50 bg-[#FFFDF8] text-xs text-[#57434A] focus:outline-none focus:border-[#542638]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Note or Cake Message */}
                  <div className="mb-6">
                    <label className="block text-[10px] uppercase tracking-[0.18em] font-bold text-[#542638] mb-1.5">
                      Handwritten Note or Piping Text (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 'Happy 30th Birthday Sophia' or floral color request"
                      value={personalMessage}
                      onChange={(e) => setPersonalMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8B7C1]/50 bg-[#FFFDF8] text-xs text-[#57434A] placeholder:text-[#8C7079]/70 focus:outline-none focus:border-[#542638]"
                    />
                  </div>

                  {/* Allergens Notice */}
                  {product.allergens && (
                    <div className="mb-6 flex items-start space-x-2 text-[11px] text-[#8C7079]">
                      <AlertCircle className="w-3.5 h-3.5 text-[#C98291] shrink-0 mt-0.5" />
                      <span>
                        Contains: {product.allergens.join(', ')}. Handcrafted in an atelier that processes nuts and dairy.
                      </span>
                    </div>
                  )}

                </div>

                {/* Primary WhatsApp Order Button */}
                <div className="pt-4 border-t border-[#E8B7C1]/30">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-4 px-6 rounded-full bg-[#542638] hover:bg-[#3D1B28] text-[#FFFDF8] font-sans font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300 shadow-lifted hover:shadow-float flex items-center justify-center space-x-2.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#E8B7C1]" />
                    <span>Enquire &amp; Order via WhatsApp</span>
                  </button>
                  <p className="text-center text-[10px] text-[#8C7079] tracking-wider uppercase mt-2 font-medium">
                    Pre-orders confirmed directly via WhatsApp with our head baker.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
