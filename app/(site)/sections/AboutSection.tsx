"use client";

import { AboutIntro, TechStack, Timeline } from "../components/aboutComponents";
import content from "../content/content.json";
import { TimelineItemData } from "../components/aboutComponents/TimeLineItem";

export default function AboutSection() {
  const { intro, skills, timeline } = content.about;

  // JSON → TimelineItemData adapter
  const timelineItems: TimelineItemData[] = timeline.map(item => ({
    type: item.type === "experience" ? "experience" : "education",
    title: item.title,
    subtitle: item.organization, // TimelineItemData required field
    period: item.period,
    description: item.description
  }));

  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <AboutIntro title={intro.heading} description={intro.text} />
    
      <TechStack groups={skills?.groups || []} />

      <Timeline items={timelineItems} />
    </section>
  );
}
