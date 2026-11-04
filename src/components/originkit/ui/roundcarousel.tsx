/* eslint-disable */
// Originkit — props baked into the default export.
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight, Eye, Info, X } from "lucide-react";

export interface RoundCarouselItem {
  src: string;
  id?: string;
  name?: string;
  tagline?: string;
  description?: string;
  price?: string;
  badge?: string;
  flavorNotes?: string[];
  product?: any;
}

export interface RoundCarouselProps {
  images?: RoundCarouselItem[];
  items?: RoundCarouselItem[];
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  speed?: number;
  autoRotate?: boolean;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  innerDim?: number;
  background?: string;
  style?: React.CSSProperties;
  onItemClick?: (item: RoundCarouselItem, index: number) => void;
}

const DEFAULT_IMAGES: RoundCarouselItem[] = [
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/e60dd7f7-a44f-40a7-df62-095b19cd8700/w=800", name: "Rose Milk Cake", price: "£42.00", badge: "Signature" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/eec164e9-23f8-4f87-b48a-a208fa806100/w=800", name: "Belgian Chocolate Truffle", price: "£45.00", badge: "Bestseller" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/859c75ea-953e-489e-be61-91a03a35d700/w=800", name: "Strawberry Dream Cake", price: "£44.00", badge: "Seasonal" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/933a7615-f4b6-4eae-8ed1-705fa0e24400/w=800", name: "Pistachio Rose Cake", price: "£48.00", badge: "Artisanal" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/7d4d2641-d6a8-4fef-e85c-b12ed100d500/w=800", name: "Lotus Biscoff Brownies", price: "£26.00", badge: "Fudge Box" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/ed7b1c40-3332-43d8-a9eb-4615ef341b00/w=800", name: "Vanilla Berry Cupcakes", price: "£28.00", badge: "Box of 6" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/31afae9c-5ba3-4ec3-2534-ed8198ed1100/w=800", name: "Salted Caramel Pecan", price: "£28.00", badge: "Gourmet" },
  { src: "https://imagedelivery.net/IEUjvl3YUlxY-MrTpOAWDQ/bd541261-75be-469c-7dc0-dae0ce81c400/w=800", name: "White Peach & Jasmine", price: "£46.00", badge: "Limited" },
];

function __OriginkitBase_RoundCarousel({
  images = DEFAULT_IMAGES,
  items: itemsProp,
  imageWidth = 300,
  imageHeight = 360,
  spacing = 2.6,
  speed = 0,
  autoRotate = false,
  direction = "right",
  drag = true,
  sensitivity = 5,
  tilt = -6,
  perspective = 2800,
  cornerRadius = 24,
  innerDim = 3.5,
  background = "transparent",
  style = {},
  onItemClick,
}: RoundCarouselProps) {
  const items = itemsProp && itemsProp.length > 0 ? itemsProp : (images.length > 0 ? images : DEFAULT_IMAGES);
  const count = items.length;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0 });
  const pointerStartRef = useRef({ x: 0, y: 0, time: 0 });
  const isDraggingRef = useRef(false);

  const angle = 360 / count;
  const factor = 1 + spacing * 0.15;
  const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
  const radiusPx = cornerRadius;
  // If autoRotate is false or speed is 0, auto-rotation is completely stopped!
  const degPerSec = autoRotate ? (speed || 5) * 6 * (direction === "left" ? -1 : 1) : 0;

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    const apply = () =>
      (ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`);
    apply();

    const draw = (now: number) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;
      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else if (degPerSec !== 0) {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, degPerSec, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!drag) return;
    pointerStartRef.current = { x: e.clientX, y: e.clientY, time: Date.now() };
    isDraggingRef.current = false;
    dragRef.current = { active: true, x: e.clientX };
    velRef.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    if (!isDraggingRef.current && Math.abs(e.clientX - pointerStartRef.current.x) > 6) {
      isDraggingRef.current = true;
      try {
        e.currentTarget.setPointerCapture?.(e.pointerId);
      } catch (err) {}
    }
    d.x = e.clientX;
    const k = 0.3 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch (err) {}
    dragRef.current.active = false;
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 80);
  };

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: radiusPx,
    overflow: "hidden",
    backfaceVisibility: "hidden",
  };

  return (
    <div
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? "grab" : "default",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt}deg)`,
        }}
      >
        <div
          ref={ringRef}
          style={{
            position: "relative",
            width: imageWidth,
            height: imageHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((img, i) => {
            const src = img?.src;
            const isHovered = hoveredIndex === i;
            const isActive = activeCardIndex === i;
            const showDetails = isHovered || isActive;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  if (isDraggingRef.current) return;
                  setActiveCardIndex((prev) => (prev === i ? null : i));
                }}
                className="transition-transform duration-300 group cursor-pointer"
              >
                {/* FRONT FACE */}
                <div
                  style={{
                    ...faceBase,
                    boxShadow: showDetails
                      ? "0 22px 50px rgba(84, 38, 56, 0.45)"
                      : "0 12px 35px rgba(0, 0, 0, 0.22)",
                    border: showDetails
                      ? "2px solid rgba(232, 183, 193, 0.85)"
                      : "1px solid rgba(255, 255, 255, 0.35)",
                  }}
                  className="relative flex flex-col justify-between overflow-hidden bg-[#2A1720]"
                >
                  {/* Product Background Image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out ${
                      showDetails
                        ? "scale-110 filter brightness-[0.35]"
                        : "scale-100 filter brightness-100"
                    }`}
                    style={{
                      backgroundImage: src ? `url(${src})` : undefined,
                    }}
                  />

                  {/* RESTING STATE (Not Hovered / Not Active) */}
                  {!showDetails && (
                    <>
                      {/* Top Badge Pill */}
                      <div className="relative z-10 p-3.5 flex items-start justify-between">
                        {img.badge ? (
                          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#542638] text-[10px] font-bold uppercase tracking-wider shadow-sm border border-white/60">
                            <Sparkles className="w-2.5 h-2.5 text-[#A64D65]" />
                            <span>{img.badge}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white/90 text-[10px] tracking-wider font-medium">
                            Boutique Bake
                          </span>
                        )}

                        <div className="w-7 h-7 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-[#542638] shadow-sm">
                          <Info className="w-3.5 h-3.5 text-[#A64D65]" />
                        </div>
                      </div>

                      {/* Bottom Title & Price Gradient Pill */}
                      <div className="relative z-10 mt-auto p-4 bg-gradient-to-t from-black/85 via-black/45 to-transparent pt-12">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="font-serif text-white font-medium text-base sm:text-lg leading-snug drop-shadow-sm truncate">
                            {img.name || "Handcrafted Bake"}
                          </h3>
                          {img.price && (
                            <span className="font-sans text-xs sm:text-sm font-bold text-[#FFD6DF] shrink-0 drop-shadow-sm">
                              {img.price}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/80 font-light truncate mt-0.5">
                          {img.tagline || "Click or hover for tasting notes"}
                        </p>
                      </div>
                    </>
                  )}

                  {/* HOVER / ACTIVE STATE DETAILS OVERLAY */}
                  {showDetails && (
                    <div className="relative z-20 h-full p-5 flex flex-col justify-between text-white animate-fadeIn">
                      <div>
                        {/* Top row with badge and dismiss */}
                        <div className="flex items-center justify-between mb-2">
                          {img.badge ? (
                            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-[#E8B7C1]/30 border border-[#E8B7C1]/40 text-[#FFD6DF] text-[10px] font-bold uppercase tracking-wider">
                              <Sparkles className="w-2.5 h-2.5 text-[#FFD6DF]" />
                              <span>{img.badge}</span>
                            </span>
                          ) : (
                            <span className="text-[10px] uppercase tracking-wider text-[#FFD6DF]/90 font-bold">
                              Boutique Signature
                            </span>
                          )}

                          {isActive && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveCardIndex(null);
                              }}
                              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                              title="Close details"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {/* Product Name */}
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-tight mb-1">
                          {img.name || "Handcrafted Bake"}
                        </h3>

                        {/* Price */}
                        {img.price && (
                          <div className="text-sm font-semibold text-[#FFD6DF] mb-2.5">
                            {img.price}
                          </div>
                        )}

                        {/* Tagline */}
                        {img.tagline && (
                          <p className="text-xs text-white/95 leading-relaxed font-light mb-2.5 line-clamp-2 italic">
                            "{img.tagline}"
                          </p>
                        )}

                        {/* Description */}
                        {img.description && (
                          <p className="text-[11px] text-white/80 leading-relaxed line-clamp-3 mb-3 font-light">
                            {img.description}
                          </p>
                        )}

                        {/* Flavor Notes Tags */}
                        {img.flavorNotes && img.flavorNotes.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {img.flavorNotes.slice(0, 3).map((note, nIdx) => (
                              <span
                                key={nIdx}
                                className="px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] text-white/90"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Action CTA Button */}
                      <div className="pt-3 border-t border-white/20">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onItemClick) {
                              onItemClick(img, i);
                            }
                          }}
                          className="w-full py-2.5 px-4 rounded-full bg-[#FFF8F8] hover:bg-white text-[#542638] text-xs font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-between group/btn cursor-pointer"
                        >
                          <span className="flex items-center space-x-1.5">
                            <Eye className="w-3.5 h-3.5 text-[#A64D65]" />
                            <span>Full Details & Order</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#A64D65] group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* BACK FACE (dimmed background in 3D circle) */}
                <div
                  style={{
                    ...faceBase,
                    transform: "rotateY(180deg)",
                    backgroundColor: src ? "transparent" : "#181818",
                    backgroundImage: src ? `url(${src})` : undefined,
                    filter: `brightness(${innerDim / 10})`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const __originkitPresetProps: RoundCarouselProps = {
  drag: true,
  tilt: -6,
  speed: 0,
  autoRotate: false,
  images: DEFAULT_IMAGES,
  spacing: 2.6,
  innerDim: 3.5,
  direction: "right",
  background: "transparent",
  imageWidth: 300,
  imageHeight: 360,
  perspective: 2800,
  sensitivity: 5,
  cornerRadius: 24,
};

export default function RoundCarousel(props: RoundCarouselProps) {
  return <__OriginkitBase_RoundCarousel {...__originkitPresetProps} {...props} />;
}
