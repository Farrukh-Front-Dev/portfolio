import { SkillGroup } from "@content/skills";

type Props = {
  groups?: SkillGroup[];
};

export default function TechStack({ groups }: Props) {
  if (!groups?.length) return null;

  return (
    <section className="mb-24">
      <h3 className="text-2xl font-semibold mb-10">Skills</h3>

      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 font-medium text-gray-700 dark:text-gray-300">
              {group.title}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="relative p-4 rounded-xl flex flex-col items-center gap-2
                             group
                             transition-all duration-500 ease-out
                             hover:scale-105 hover:-translate-y-1
                             overflow-hidden"
                >
                  {/* Base + Gradient + Glow */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
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
                  <div className="text-3xl relative z-10">{item.icon}</div>
                  <span className="text-sm font-medium relative z-10 text-gray-900 dark:text-white">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
