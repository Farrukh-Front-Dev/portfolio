"use client";

import content from "../content/content.json";
import HeroImage from "../components/HeroComponents/HeroImage";
import HeroText from "../components/HeroComponents/HeroText";

export default function HeroSection() {
  const { hero } = content;

  return (
    <section
      id="hero"
      className="relative min-h-screen"
    >
      {/* ===== Content ===== */}
      <div
        className="relative z-10 min-h-screen flex flex-col md:flex-row
                   justify-between items-center
                   max-w-6xl mx-auto
                   px-4 sm:px-6 lg:px-8
                   gap-8 py-10 sm:py-16 md:py-20"
      >
        <HeroImage />

        <HeroText
          title={hero.title}
          subtitlePrefix={hero.subtitlePrefix}
          subtitleSuffix={hero.subtitleSuffix}
          ctaText={hero.cta}
          resumeHref="/FarrukhsResume.pdf"
        />
      </div>
    </section>
  );
}
