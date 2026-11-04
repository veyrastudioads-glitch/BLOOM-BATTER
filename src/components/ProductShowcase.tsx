import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, Eye, MessageCircle, Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { createWhatsAppOrderUrl } from '../config/site';

interface ProductShowcaseProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const categories: { label: string; value: ProductCategory; count: number }[] = [
    { label: 'All Creations', value: 'all', count: products.length },
    { label: 'Cakes', value: 'cakes', count: products.filter((p) => p.category === 'cakes').length },
    { label: 'Brownies', value: 'brownies', count: products.filter((p) => p.category === 'brownies').length },
    { label: 'Cupcakes', value: 'cupcakes', count: products.filter((p) => p.category === 'cupcakes').length },
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.flavorNotes.some((note) =>
            note.toLowerCase().includes(searchQuery.toLowerCase())
          );
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.priceNum - b.priceNum;
        if (sortBy === 'price-desc') return b.priceNum - a.priceNum;
        return (b.isSignature ? 1 : 0) - (a.isSignature ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="collection" className="py-24 sm:py-32 bg-[#FFFDF8] relative overflow-hidden border-t border-[#E8B7C1]/20">
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-[#F8E5E8]/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A64D65]" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
              Patisserie Atelier Menu
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#542638] font-normal tracking-tight mb-4">
            The Full Sweet Collection
          </h2>
          <p className="text-base sm:text-lg text-[#57434A]/80 font-light max-w-xl mx-auto leading-relaxed">
            Filter by delicacy, search for specific floral or chocolate notes, and order directly for your next intimate celebration.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12 bg-[#FFF8F8] p-4 sm:p-5 rounded-3xl border border-[#E8B7C1]/30 shadow-subtle">
          
          {/* Functional Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.12em] font-semibold transition-all duration-300 ${
                    active
                      ? 'bg-[#542638] text-[#FFFDF8] shadow-[0_4px_15px_rgba(84,38,56,0.2)]'
                      : 'bg-[#FFFDF8] text-[#57434A] hover:bg-[#F8E5E8] border border-[#E8B7C1]/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                      active ? 'bg-[#FFFDF8]/20 text-[#FFFDF8]' : 'bg-[#F8E5E8] text-[#8C7079]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Sort Selector */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Box */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-[#8C7079] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search flavours, rose, biscoff..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FFFDF8] border border-[#E8B7C1]/40 text-xs text-[#57434A] placeholder:text-[#8C7079]/70 focus:outline-none focus:border-[#542638] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7079] hover:text-[#542638]"
                >
                  ×
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none pl-3.5 pr-8 py-2.5 rounded-full bg-[#FFFDF8] border border-[#E8B7C1]/40 text-xs uppercase tracking-wider text-[#542638] font-semibold focus:outline-none focus:border-[#542638] cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C7079] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* Dynamic Animated Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-[#FFFDF8] rounded-[28px] overflow-hidden border border-[#E8B7C1]/30 shadow-subtle hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F8E5E8]/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {product.badge && (
                      <span className="absolute top-3.5 left-3.5 bg-[#542638]/90 backdrop-blur-md text-[#FFFDF8] text-[9px] uppercase tracking-[0.18em] font-semibold px-3 py-1 rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3.5 right-3.5 bg-[#FFFDF8]/95 backdrop-blur-md text-[#542638] font-serif font-bold text-base px-3.5 py-1 rounded-full shadow-sm">
                      {product.price}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
                        {product.category}
                      </span>
                      <span className="text-[11px] text-[#8C7079]">
                        {product.servingsOptions[0]}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#542638] font-normal mb-1.5 group-hover:text-[#A64D65] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#57434A]/80 font-light line-clamp-2 leading-relaxed mb-4">
                      {product.tagline}
                    </p>

                    {/* Flavour notes tags */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.flavorNotes.slice(0, 3).map((note) => (
                        <span
                          key={note}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-[#F8E5E8]/80 text-[#542638] font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 pt-0 flex items-center space-x-2.5">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#F8E5E8] hover:bg-[#E8B7C1]/50 text-[#542638] text-xs uppercase tracking-[0.12em] font-semibold transition-colors inline-flex items-center justify-center space-x-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#A64D65]" />
                    <span>View Details</span>
                  </button>
                  <a
                    href={createWhatsAppOrderUrl({
                      productName: product.name,
                      price: product.price,
                      servings: product.servingsOptions[0],
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#542638] hover:bg-[#3D1B28] text-[#FFFDF8] text-xs uppercase tracking-[0.12em] font-semibold transition-colors inline-flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E8B7C1]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when no products match */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#FFF8F8] rounded-3xl border border-[#E8B7C1]/30 max-w-md mx-auto">
            <p className="font-serif text-2xl text-[#542638] mb-2">No delicacies found</p>
            <p className="text-xs text-[#8C7079] mb-4">
              We couldn't find any creations matching "{searchQuery}". Try selecting another category or clear your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-[#542638] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

