"use client";

import TimelineItem, { TimelineItemData } from "./TimeLineItem";

interface TimelineProps {
  items: TimelineItemData[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <section className="mt-16 sm:mt-20 md:mt-24">
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10 md:mb-12
                     bg-gradient-to-r from-gray-900 to-gray-700
                     dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent">
        Experience & Education
      </h2>

      <div className="relative">
        {items.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
