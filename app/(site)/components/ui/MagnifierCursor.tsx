"use client";

import { JSX, useEffect, useRef } from "react";

const LERP = 0.12; // smoothlik darajasi
const SIZE = 56;  // tashqi cursor diametri

export default function MagnifierCursor(): JSX.Element {
  const glassRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    // Accessibility: reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent): void => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = (): void => {
      current.current.x += (mouse.current.x - current.current.x) * LERP;
      current.current.y += (mouse.current.y - current.current.y) * LERP;

      const x = current.current.x;
      const y = current.current.y;

      if (glassRef.current) {
        glassRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <>
      {/* Glass / Magnifier */}
      <div
        ref={glassRef}
        className="fixed pointer-events-none z-9999
                   rounded-full border border-white/30
                   mix-blend-difference"
        style={{
          width: SIZE,
          height: SIZE,
        }}
      />

      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-10000
                   w-2 h-2 rounded-full
                   bg-white shadow"
      />
    </>
  );
}
