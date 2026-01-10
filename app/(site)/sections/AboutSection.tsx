"use client";

import { AboutIntro, TechStack, Timeline } from "../components/aboutComponents";
import { skillGroups } from "../content/skills";
import content from "../content/content.json";
import { TimelineItemData } from "../components/aboutComponents/TimeLineItem";

export default function AboutSection() {
  const { intro, timeline } = content.about;

  const timelineItems: TimelineItemData[] = timeline.map(item => ({
    type: item.type === "experience" ? "experience" : "education",
    title: item.title,
    subtitle: item.organization,
    period: item.period,
    description: item.description
  }));

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutIntro title={intro.heading} description={intro.text} />
    
      <TechStack groups={skillGroups} />

      <Timeline items={timelineItems} />
    </section>
  );
}
