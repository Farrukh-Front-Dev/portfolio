"use client";

/**
 * Performance monitoring utilities for the portfolio
 * Tracks Core Web Vitals and reports scroll performance
 */

export function initPerformanceMonitoring() {
  if (typeof window === "undefined") return;

  // Monitor Largest Contentful Paint (LCP)
  if ("PerformanceObserver" in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        if (process.env.NODE_ENV === "development") {
          console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }

  // Monitor First Input Delay (FID)
  if ("PerformanceObserver" in window) {
    try {
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry: any) => {
          if (process.env.NODE_ENV === "development") {
            console.log("FID:", entry.processingDuration);
          }
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
    } catch (e) {
      // PerformanceObserver not supported
    }
  }

  // Monitor scroll performance
  let lastScrollTime = 0;
  let scrollFrameCount = 0;

  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScrollTime > 1000) {
      if (process.env.NODE_ENV === "development") {
        console.log("Scroll FPS:", scrollFrameCount);
      }
      scrollFrameCount = 0;
      lastScrollTime = now;
    }
    scrollFrameCount++;
  });
}
