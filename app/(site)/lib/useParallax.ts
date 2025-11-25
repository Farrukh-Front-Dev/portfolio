"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface ParallaxConfig {
  speed?: number; // 0-1, lower = more parallax
}

/**
 * Custom hook for parallax scroll effect
 * Optimized with RAF throttling and passive listeners
 * Replaces individual scroll listeners in each component
 */
export function useParallax(config: ParallaxConfig = { speed: 0.5 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const rafId = useRef<number | null>(null);

  // Memoized scroll handler with RAF throttling
  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;

      // Only calculate if element is in or near viewport (performance optimization)
      if (
        scrollY + window.innerHeight >= elementTop - 100 &&
        scrollY <= elementTop + elementHeight + 100
      ) {
        // Calculate parallax offset based on element position and scroll
        const parallaxAmount =
          (window.innerHeight - rect.top) * (config.speed ?? 0.5);
        setOffset(parallaxAmount);
      }
    });
  }, [config.speed]);

  useEffect(() => {
    // Add passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return { ref, offset };
}

/**
 * Hook to get current scroll Y position
 * Useful for scroll-based animations and active section detection
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return scrollY;
}
