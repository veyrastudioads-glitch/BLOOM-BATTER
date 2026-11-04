import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const initSmoothScroll = () => {
  // Check if reduced motion is requested
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return { lenis: null, destroy: () => {} };
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  // Connect Lenis to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return {
    lenis,
    destroy: () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    },
  };
};

export const respectsReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

