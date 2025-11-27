"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex-1 flex justify-center md:justify-start items-center order-1 md:order-1 w-full md:w-auto">
      {/* Liquid Glass Capsule */}
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                      bg-white/10 dark:bg-white/5
                      backdrop-blur-3xl
                      border border-white/30 dark:border-white/20
                      shadow-2xl dark:shadow-3xl
                      hover:shadow-3xl dark:hover:shadow-4xl
                      hover:bg-white/20 dark:hover:bg-white/10
                      hover:border-white/50 dark:hover:border-white/30
                      transition-all duration-500 ease-out
                      group
                      animate-float">

        {/* Hero Image */}
        <Image
          src="/farrukhPic.jpeg"
          alt="Farrukh"
          fill
          className="object-cover rounded-3xl group-hover:scale-110 transition-transform duration-500"
          priority
        />

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none
                        bg-linear-to-br from-white/5 via-transparent to-black/10
                        dark:from-white/10 dark:to-black/20"></div>

        {/* Shine effect */}
        <span className="absolute -top-1 -left-16 w-20 h-40 bg-white/30 dark:bg-white/20 
                         rounded-full blur-2xl transform rotate-45 scale-150 animate-pulse pointer-events-none"></span>
      </div>
    </div>
  );
}
