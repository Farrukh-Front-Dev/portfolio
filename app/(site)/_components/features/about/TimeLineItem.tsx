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
    <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-10 md:pb-12 animate-fadeInUp">
      {/* Line */}
      <span className="absolute left-[7px] top-0 h-full w-px bg-gray-300 dark:bg-white/20" />

      {/* Dot */}
      <span className="absolute left-0 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full
                      bg-gray-800 dark:bg-gray-200
                      transition-transform duration-300
                      hover:scale-110 animate-fadeInUp" />

      {/* Card */}
      <div className="relative z-10 rounded-xl sm:rounded-2xl
                     group transition-all duration-500 ease-out
                     hover:scale-[1.02] sm:hover:scale-105 hover:-translate-y-1
                     overflow-hidden
                     bg-gray-100 dark:bg-transparent animate-fadeInUp"
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Glass background - only dark mode */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden hidden dark:block">
          <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl 
                         border border-white/50 dark:border-white/40 
                         shadow-xl dark:shadow-2xl transition-all duration-400 
                         group-hover:bg-white/30 dark:group-hover:bg-white/15" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500
                         bg-gradient-radial from-blue-500/15 via-purple-500/10 to-transparent" />
        </div>

        {/* Light mode - simple background */}
        <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden dark:hidden">
          <div className="absolute inset-0 bg-white transition-all duration-400" />
        </div>

        {/* Shine effect - only dark mode */}
        <span className="absolute -top-1 -left-8 w-16 h-32 bg-white/30 dark:bg-white/20 
                        rounded-full blur-2xl transform rotate-45 scale-150 dark:animate-pulse 
                        pointer-events-none hidden dark:block" />

        {/* Content */}
        <div className="relative z-10 p-3 sm:p-4 md:p-5 space-y-1 sm:space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white animate-fadeInUp animation-delay-100">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 animate-fadeInUp animation-delay-200">
            {item.subtitle} · {item.period}
          </p>
          <ul className="mt-2 sm:mt-3 space-y-1 list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            {item.description.map((point, index) => (
              <li key={index} className="animate-fadeInUp" style={{ animationDelay: `${200 + index * 50}ms` }}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
