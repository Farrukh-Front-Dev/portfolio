"use client";


import content from "../content/content.json";
import { useParallax } from "../lib/useParallax";
import HeroImage from "../components/HeroImage";
import { BsDownload } from "react-icons/bs";


export default function HeroSection() {
  const { hero } = content;
  const { ref: sectionRef, offset: parallaxOffset } = useParallax({ speed: 0.08 });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 py-10 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Parallax gradient blobs - background layer */}
      <div 
        className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          willChange: "transform"
        }}
      />
      <div 
        className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          willChange: "transform"
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-pink-500/20 dark:bg-pink-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"
        style={{
          transform: `translateY(${parallaxOffset * 0.4}px) translate(-50%, -50%)`,
          willChange: "transform"
        }}
      />

      {/* Left: Image (mobile tepada) - Parallax effect */}
      <HeroImage parallaxOffset={parallaxOffset} />

      {/* Right: Text (mobile pastda) - Parallax effect */}
      <div 
        className="flex-1 flex flex-col justify-center items-start order-2 md:order-2 w-full md:w-auto"
        style={{
          transform: `translateY(${parallaxOffset * 0.08}px)`,
          willChange: "transform"
        }}
      >
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
        
        {/* Resume Download Button - Liquid Glass Style */}
        <a
          href="/Farrukh'sResume.pdf"
          download
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base
                     bg-linear-to-br from-cyan-400/20 via-blue-400/10 to-purple-400/20
                     dark:from-cyan-400/15 dark:via-blue-400/5 dark:to-purple-400/15
                     backdrop-blur-xl
                     border border-cyan-300/40 dark:border-cyan-300/30
                     text-gray-900 dark:text-white
                     shadow-lg dark:shadow-2xl
                     hover:shadow-2xl dark:hover:shadow-3xl
                     hover:from-cyan-400/30 dark:hover:from-cyan-400/25
                     hover:via-blue-400/20 dark:hover:via-blue-400/15
                     hover:to-purple-400/30 dark:hover:to-purple-400/25
                     hover:border-cyan-300/60 dark:hover:border-cyan-300/50
                     hover:-translate-y-1
                     transition-all duration-300 ease-out
                     group
                     animate-fadeInUp animation-delay-600"
        >
          <span className="flex items-center gap-2">
            Resume
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <BsDownload />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
