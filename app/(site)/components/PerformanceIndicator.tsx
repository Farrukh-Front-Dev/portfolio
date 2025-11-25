"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Performance indicator component - Shows real-time FPS and scroll performance
 * Only visible in development mode
 */
export default function PerformanceIndicator() {
  const [fps, setFps] = useState(60);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    let rafId: number;
    let fpsInterval: NodeJS.Timeout;

    // Update FPS every 100ms
    fpsInterval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastTimeRef.current;
      const currentFps = Math.round((frameCountRef.current / elapsed) * 1000);
      setFps(Math.min(currentFps, 60));
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }, 100);

    // Measure frames
    const countFrames = () => {
      frameCountRef.current++;
      rafId = requestAnimationFrame(countFrames);
    };

    // Track scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    countFrames();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Toggle with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === "KeyP") {
        setIsVisible((v) => !v);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(fpsInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  if (process.env.NODE_ENV !== "development" || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 left-4 bg-black/80 text-green-400 font-mono text-xs p-3 rounded-lg border border-green-400/30 backdrop-blur-md z-50"
      style={{
        fontFamily: "Monaco, Courier New, monospace",
      }}
    >
      <div className="text-green-400 mb-2 text-[10px]">
        Press Ctrl+Shift+P to hide
      </div>
      <div className="space-y-1">
        <div>FPS: {fps.toFixed(0)}</div>
        <div>Scroll: {scrollY.toFixed(0)}px</div>
        <div className={fps >= 50 ? "text-green-400" : "text-yellow-400"}>
          Status: {fps >= 50 ? "✓ Good" : "⚠ Low"}
        </div>
      </div>
    </div>
  );
}
