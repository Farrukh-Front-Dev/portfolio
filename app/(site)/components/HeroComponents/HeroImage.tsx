"use client";

import Image from "next/image";
import { useRef } from "react";

export default function HeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (-y / (rect.height / 2)) * 10; // max 10 deg
    const rotateY = (x / (rect.width / 2)) * 10;

    containerRef.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="flex-1 flex justify-center md:justify-start items-center order-1 md:order-1 w-full md:w-auto">
      <div
        ref={containerRef}
        className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72
                   rounded-full overflow-hidden
                   bg-white/5 dark:bg-white/10
                   border border-white/20 dark:border-white/10
                   shadow-lg dark:shadow-xl
                   backdrop-blur-xl
                   transition-transform duration-500 ease-out
                   transform-style-preserve-3d"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src="/farrukhPic.jpeg"
          alt="Farrukh"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
