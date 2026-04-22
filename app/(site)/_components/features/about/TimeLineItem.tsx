"use client";

export interface TimelineItemData {
  type: "education" | "experience";
  title: string;
  subtitle: string;
  period: string;
  description: string[];
}

export default function TimelineItem({ item }: { item: TimelineItemData }) {
  return (
    <div className="relative pl-8 pb-12">
      {/* Line */}
      <span className="absolute left-[7px] top-0 h-full w-px bg-gray-300 dark:bg-white/20" />

      {/* Dot */}
      <span
        className="absolute left-0 top-1 w-4 h-4 rounded-full
                   bg-cyan-400 dark:bg-cyan-500
                   shadow-md shadow-cyan-400/40
                   transition-transform duration-300
                   hover:scale-110"
      />

      {/* Liquid glass card */}
      <div
        className="relative z-10 rounded-2xl
                   group
                   transition-all duration-500 ease-out
                   hover:scale-105 hover:-translate-y-1
                   overflow-hidden"
      >
        {/* Base + Gradient + Glow */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-400 group-hover:bg-white/30 dark:group-hover:bg-white/15" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Liquid shine effect */}
        <span className="absolute -top-1 -left-8 w-16 h-32 bg-white/30 dark:bg-white/20 rounded-full blur-2xl
                         transform rotate-45 scale-150 animate-pulse pointer-events-none"></span>

        {/* Content */}
        <div className="relative z-10 p-4 space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {item.subtitle} · {item.period}
          </p>
          <ul className="mt-3 space-y-1 list-disc list-inside text-gray-600 dark:text-gray-300">
            {item.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
