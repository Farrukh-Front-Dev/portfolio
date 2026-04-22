"use client";

import TimelineItem, { TimelineItemData } from "./TimeLineItem";

interface TimelineProps {
  items: TimelineItemData[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <section className="mt-24">
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-12
                     bg-linear-to-r from-gray-900 to-gray-700
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
