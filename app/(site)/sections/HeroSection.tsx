"use client";

import Image from "next/image";
import content from "../content/content.json";

export default function HeroSection() {
  const { hero } = content;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 py-10 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Left: Image (mobile tepada) */}
      <div className="flex-1 flex justify-center md:justify-start items-center order-1 md:order-1 w-full md:w-auto">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden
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

      {/* Right: Text (mobile pastda) */}
      <div className="flex-1 flex flex-col justify-center items-start order-2 md:order-2 w-full md:w-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight
                       bg-linear-to-r from-gray-900 via-gray-800 to-gray-700
                       dark:from-white dark:via-gray-100 dark:to-gray-300
                       bg-clip-text text-transparent
                       animate-fadeInUp">
          {hero.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-lg leading-relaxed
                      animate-fadeInUp animation-delay-200">
          {hero.subtitle}
        </p>
        <a
          href="#projects"
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base
                     bg-linear-to-r from-gray-200/40 to-gray-300/40 dark:from-white/10 dark:to-white/5
                     backdrop-blur-md
                     border border-gray-400/30 dark:border-white/30
                     text-gray-900 dark:text-white
                     shadow-lg dark:shadow-2xl
                     hover:shadow-2xl dark:hover:shadow-3xl
                     hover:from-gray-200/60 dark:hover:from-white/20 
                     hover:to-gray-300/60 dark:hover:to-white/15
                     hover:border-gray-500/50 dark:hover:border-white/50
                     hover:-translate-y-1
                     transition-all duration-300 ease-out
                     group
                     animate-fadeInUp animation-delay-400"
        >
          <span className="flex items-center gap-2">
            {hero.cta}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
