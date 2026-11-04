import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';

export const InstagramGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#FFFDF8] relative overflow-hidden border-t border-[#E8B7C1]/20">
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F8E5E8]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F8E5E8] border border-[#E8B7C1]/60 mb-4">
            <Camera className="w-3.5 h-3.5 text-[#A64D65]" />
            <span className="text-[11px] uppercase tracking-[0.24em] font-bold text-[#A64D65]">
              Visual Patisserie Diary
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#542638] font-normal tracking-tight mb-4">
            A Little Peek Into Our Sweet World
          </h2>
          <p className="text-base sm:text-lg text-[#57434A]/80 font-light max-w-xl mx-auto leading-relaxed">
            From oven-warm brownie trays to intricately piped floral tiered celebrations. Click any image to view details.
          </p>
        </div>

        {/* Staggered Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-3xl overflow-hidden bg-[#FFF8F8] border border-[#E8B7C1]/30 shadow-subtle hover:shadow-lifted cursor-pointer transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Hover overlay with typography and details */}
                <div className="absolute inset-0 bg-[#542638]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E8B7C1] bg-[#542638]/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {item.tag}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFFDF8]/20 flex items-center justify-center">
                      <Maximize2 className="w-4 h-4 text-[#FFFDF8]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#FFFDF8]/80 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#542638]/80 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#FFFDF8] rounded-3xl overflow-hidden shadow-2xl border border-[#E8B7C1]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#542638]/70 text-white flex items-center justify-center hover:bg-[#542638] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-[#A64D65] block mb-1">
                {activePhoto.tag}
              </span>
              <h3 className="font-serif text-2xl text-[#542638] font-normal mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#57434A]/85 font-light leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
