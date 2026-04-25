"use client";

import CTAButton from "./CTAButton";
import ResumeButton from "./ResumeButton";
import RotatingText from "@components/effects/RotatingText";

interface HeroTextProps {
  title: string;
  subtitlePrefix: string;
  subtitleSuffix: string;
  ctaText: string;
  resumeHref: string;
}

export default function HeroText({
  title,
  subtitlePrefix,
  subtitleSuffix,
  ctaText,
  resumeHref,
}: HeroTextProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-start order-2 md:order-2 w-full md:w-auto gap-4 mt-8 md:mt-0">
      {/* Title */}
      <h1
        className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-bold
                   text-gray-900 dark:bg-linear-to-r dark:from-white dark:via-gray-100 dark:to-gray-300
                   dark:bg-clip-text dark:text-transparent
                   animate-fadeInUp pb-2"
      >
        {title}
      </h1>

      {/* Subtitle with rotating text */}
      <p
        className="text-sm sm:text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed
                   animate-fadeInUp animation-delay-200"
      >
        <span>{subtitlePrefix} </span>
        
        <RotatingText
          texts={[
            "modern interfaces",
            "scalable UI architecture",
            "high-performance React apps",
            "interactive experiences",  
          ]}
          mainClassName="inline-block px-3 sm:px-4 py-1 sm:py-2
                            bg-gray-100 dark:bg-gradient-to-r dark:from-cyan-700 dark:via-blue-600 dark:to-purple-500
                            text-gray-900 dark:text-white
                            font-semibold rounded-lg shadow-sm
                            dark:bg-opacity-50 dark:backdrop-blur-sm"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />

        <span> {subtitleSuffix}</span>
      </p>

      {/* Buttons */}
      <div className="flex flex-row gap-3 mt-2 flex-wrap">
        <CTAButton href="#about" text={ctaText} />
        <ResumeButton href={resumeHref} text="Resume" />
      </div>
    </div>
  );
}
