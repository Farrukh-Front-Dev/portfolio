"use client";

import GlassSurface from "../../components/GlassSurface";

export interface TimelineItemData {
  type: "education" | "experience";
  title: string;
  subtitle: string;
  period: string;
  description: string[];
}

export default function TimelineItem({ item }: { item: TimelineItemData }) {
  return (
    <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-10 md:pb-12">
      {/* Line */}
      <span className="absolute left-[7px] top-0 h-full w-px bg-gray-300 dark:bg-white/20" />

      {/* Dot */}
      <span className="absolute left-0 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full
                      bg-cyan-400 dark:bg-cyan-500
                      shadow-md shadow-cyan-400/40
                      transition-transform duration-300
                      hover:scale-110" />

      {/* Card */}
      <div className="relative z-10 group transition-all duration-500 ease-out
                     hover:scale-[1.02] sm:hover:scale-105 hover:-translate-y-1">
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={20}
          borderWidth={0.08}
          brightness={50}
          opacity={0.93}
          blur={12}
          displace={0}
          backgroundOpacity={0.08}
          saturation={1.1}
          distortionScale={-200}
          redOffset={0}
          greenOffset={12}
          blueOffset={24}
          xChannel="R"
          yChannel="G"
          mixBlendMode="difference"
          className="shadow-lg hover:shadow-xl transition-all duration-700"
        >
          {/* Content */}
          <div className="p-3 sm:p-4 md:p-5 space-y-1 sm:space-y-2">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {item.subtitle} · {item.period}
            </p>
            <ul className="mt-2 sm:mt-3 space-y-1 list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              {item.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
}
