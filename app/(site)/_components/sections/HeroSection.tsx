"use client";

import content from "@content/content.json";
import HeroImage from "@components/features/hero/HeroImage";
import HeroText from "@components/features/hero/HeroText";

/**
 * HeroSection Component
 * 
 * Responsive hero layout with adaptive spacing and positioning:
 * - Mobile: Vertical stack (image top, text bottom) with generous vertical spacing
 * - Desktop: Horizontal layout (image left, text right) with balanced proportions
 * 
 * Design Rationale:
 * - Mobile-first approach ensures optimal readability on small screens
 * - Responsive gap scaling prevents cramped layouts on mobile while maintaining elegance on desktop
 * - Equal width distribution (w-1/2) on desktop ensures visual balance
 * - Vertical padding increases with screen size for better breathing room
 */
export default function HeroSection() {
  const { hero } = content;

  return (
    <section
      id="hero"
      className="relative min-h-screen"
    >
      {/* Main container with responsive flex layout */}
      <div
        className="relative z-10 min-h-screen flex flex-col md:flex-row
                   justify-around items-center
                   max-w-6xl mx-auto
                   px-4 sm:px-6 lg:px-8
                   gap-8 py-10 sm:py-16 md:py-20"
      >
        {/* 
          Image Container
          - Mobile: Top 50% of screen (h-1/2)
          - Desktop: 50% width, left-aligned
        */}
        <div className="animate-fadeInDown">
          <HeroImage />
        </div>

        {/* 
          Text Container
          - Mobile: Bottom 50% of screen (h-1/2)
          - Desktop: 50% width, right-aligned
          - Animation delay creates staggered entrance effect
        */}
        <div className="animate-fadeInDown animation-delay-200">
          <HeroText
            title={hero.title}
            subtitlePrefix={hero.subtitlePrefix}
            subtitleSuffix={hero.subtitleSuffix}
            ctaText={hero.cta}
            resumeHref="/FarrukhsResume.pdf"
          />
        </div>
      </div>
    </section>
  );
}
