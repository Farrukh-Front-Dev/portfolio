"use client";

import CTAButton from "./CTAButton";
import ResumeButton from "./ResumeButton";

interface HeroTextProps {
  title: string;
  subtitle: string;
  ctaText: string;
  resumeHref: string;
}

export default function HeroText({ title, subtitle, ctaText, resumeHref }: HeroTextProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-start order-2 md:order-2 w-full md:w-auto gap-4">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold
                     bg-linear-to-r from-gray-900 via-gray-800 to-gray-700
                     dark:from-white dark:via-gray-100 dark:to-gray-300
                     bg-clip-text text-transparent
                     animate-fadeInUp">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed
                    animate-fadeInUp animation-delay-200">
        {subtitle}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <CTAButton href="#tech" text={ctaText} />
        <ResumeButton href={resumeHref} text="Resume" />
      </div>
    </div>
  );
}
