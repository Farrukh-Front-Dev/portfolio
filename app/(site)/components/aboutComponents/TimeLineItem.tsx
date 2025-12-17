"use client";

export interface TimelineItemData {
  type: "education" | "experience";
  title: string;
  subtitle: string; // organization / school
  period: string;
  description: string[];
}

export default function TimelineItem({ item }: { item: TimelineItemData }) {
  return (
    <div className="relative pl-8 pb-12">
      {/* Line */}
      <span className="absolute left-[7px] top-0 h-full w-px bg-gray-300 dark:bg-white/20" />

      {/* Dot */}
      <span className="absolute left-0 top-1 w-4 h-4 rounded-full
                       bg-cyan-400 dark:bg-cyan-500
                       shadow-md shadow-cyan-400/40" />

      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.subtitle} · {item.period}
        </p>

        <ul className="mt-3 space-y-1 list-disc list-inside
                       text-gray-600 dark:text-gray-300">
          {item.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
