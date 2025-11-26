"use client";

import Image from "next/image";

interface HeroImageProps {
  parallaxOffset: number;
}

export default function HeroImage({ parallaxOffset }: HeroImageProps) {
  return (
    <div 
      className="flex-1 flex justify-center md:justify-start items-center order-1 md:order-1 w-full md:w-auto"
      style={{
        transform: `translateY(${parallaxOffset * 0.15}px)`,
        willChange: "transform"
      }}
    >
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                      backdrop-blur-3xl 
                      bg-white/10 dark:bg-white/5
                      border border-white/40 dark:border-white/20
                      shadow-2xl dark:shadow-3xl
                      hover:shadow-3xl dark:hover:shadow-4xl
                      hover:bg-white/20 dark:hover:bg-white/10
                      hover:border-white/60 dark:hover:border-white/40
                      transition-all duration-500 ease-out
                      group
                      animate-float">
        <Image
          src="/farrukhPic.jpeg"
          alt="Farrukh"
          fill
          className="object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
          priority
        />
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/10 dark:from-white/10 dark:to-black/20 rounded-3xl pointer-events-none"></div>
      </div>
    </div>
  );
}
