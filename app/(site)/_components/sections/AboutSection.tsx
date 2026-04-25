"use client";

import { AboutIntro, TechStack, Timeline } from "@components/features/about";
import { skillGroups } from "@content/skills";
import content from "@content/content.json";
import { TimelineItemData } from "@components/features/about/TimeLineItem";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

export default function AboutSection() {
  const { intro, timeline } = content.about;
  const sectionRef = useScrollAnimation({ threshold: 0.05, rootMargin: "0px 0px -100px 0px" });

  const timelineItems: TimelineItemData[] = timeline.map(item => ({
    type: item.type === "experience" ? "experience" : "education",
    title: item.title,
    subtitle: item.organization,
    period: item.period,
    description: item.description
  }));

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="animate-fadeInUp">
        <AboutIntro title={intro.heading} description={intro.text} />
      </div>
    
      <div className="animate-fadeInUp animation-delay-200">
        <TechStack groups={skillGroups} />
      </div>

      <div className="animate-fadeInUp animation-delay-400">
        <Timeline items={timelineItems} />
      </div>
    </section>
  );
}
