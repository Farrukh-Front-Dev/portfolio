import { SkillGroup } from "@content/skills";

type Props = {
  groups?: SkillGroup[];
};

export default function TechStack({ groups }: Props) {
  if (!groups?.length) return null;

  return (
    <section className="mb-16 sm:mb-20 md:mb-24">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 md:mb-10">Skills</h3>

      <div className="space-y-8 sm:space-y-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 sm:mb-4 font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {group.title}
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="relative p-3 sm:p-4 rounded-xl flex flex-col items-center gap-2
                             group transition-all duration-500 ease-out
                             hover:scale-105 hover:-translate-y-1 overflow-hidden
                             bg-gray-100 dark:bg-transparent"
                  style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {/* Glass background - only dark mode */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden hidden dark:block">
                    <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl 
                                   border border-white/50 dark:border-white/40 
                                   shadow-xl dark:shadow-2xl transition-all duration-400 
                                   group-hover:bg-white/30 dark:group-hover:bg-white/15" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500
                                   bg-gradient-radial from-blue-500/15 via-purple-500/10 to-transparent" />
                  </div>

                  {/* Light mode - simple background */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden dark:hidden">
                    <div className="absolute inset-0 bg-white transition-all duration-400" />
                  </div>

                  {/* Shine effect - only dark mode */}
                  <span className="absolute -top-1 -left-8 w-16 h-32 bg-white/30 dark:bg-white/20 
                                  rounded-full blur-2xl transform rotate-45 scale-150 dark:animate-pulse 
                                  pointer-events-none hidden dark:block" />

                  {/* Content */}
                  <div className="text-2xl sm:text-3xl relative z-10">{item.icon}</div>
                  <span className="text-xs sm:text-sm font-medium relative z-10 text-gray-900 dark:text-white text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
