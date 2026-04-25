"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";

export default function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;

    containerRef.current.style.transform =
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  return (
    <div className="flex-1 flex justify-center md:justify-start items-center w-full md:w-auto mt-4 md:mt-0">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onDoubleClick={handleDoubleClick}
        className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72
                   rounded-full overflow-hidden
                   bg-white dark:bg-white/10
                   border-2 border-gray-300 dark:border-white/10
                   shadow-sm dark:shadow-xl
                   dark:backdrop-blur-xl
                   transition-transform duration-500 ease-out
                   transform-style-preserve-3d
                   cursor-zoom-in
                   select-none"
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Image
          src="/image.png"
          alt="Farrukh"
          fill
          sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 288px"
          className="object-cover select-none pointer-events-none"
          priority
          draggable={false}
        />
      </div>
    </div>
  );
}
