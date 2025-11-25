"use client";

import content from "../content/content.json";
import { useParallax } from "../lib/useParallax";

export default function TechSection() {
  const { tech, labels } = content;
  const { ref: sectionRef, offset: parallaxOffset } = useParallax({ speed: 0.08 });

  return (
    <section
      ref={sectionRef}
      id="tech"
      className="py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 tracking-tight
                     bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent
                     animate-fadeInUp"
        style={{
          transform: `translateY(${parallaxOffset * 0.1}px)`,
          willChange: "transform"
        }}
      >
        {labels.techStack}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {tech.map((item, index) => (
          <div
            key={item}
            className="group p-4 rounded-xl
                       bg-white/10 dark:bg-white/5
                       backdrop-blur-xl
                       border border-gray-300/30 dark:border-white/20
                       hover:border-gray-400/60 dark:hover:border-white/40
                       shadow-md dark:shadow-lg
                       hover:shadow-lg dark:hover:shadow-2xl
                       transition-all duration-300 ease-out
                       hover:bg-white/20 dark:hover:bg-white/10
                       hover:-translate-y-1
                       text-center
                       animate-fadeInUp"
            style={{ 
              animationDelay: `${index * 0.08}s`,
              transform: `translateY(${parallaxOffset * (0.06 - index * 0.01)}px)`,
              willChange: "transform"
            }}
          >
            <p className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

