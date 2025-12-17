"use client";

import CTAButton from "./CTAButton";
import ResumeButton from "./ResumeButton";
import RotatingText from "../components/RotatingText";

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
    <div className="flex-1 flex flex-col justify-center items-start order-2 md:order-2 w-full md:w-auto gap-4">
      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold
                   bg-linear-to-r from-gray-900 via-gray-800 to-gray-700
                   dark:from-white dark:via-gray-100 dark:to-gray-300
                   bg-clip-text text-transparent animate-fadeInUp pb-2"
      >
        {title}
      </h1>

      {/* Subtitle with rotating text */}
      <p
        className="text-base font-medium sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed
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
                            bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400
                            dark:from-cyan-700 dark:via-blue-600 dark:to-purple-500
                            text-black dark:text-white
                            font-semibold rounded-lg shadow-sm
                            bg-opacity-70 dark:bg-opacity-50 backdrop-blur-sm"
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
        <CTAButton href="#tech" text={ctaText} />
        <ResumeButton href={resumeHref} text="Resume" />
      </div>
    </div>
  );
}
