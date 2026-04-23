import { SkillGroup } from "@content/skills";
import GlassSurface from "../../components/GlassSurface";

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
                  className="group transition-all duration-500 ease-out
                             hover:scale-105 hover:-translate-y-1"
                >
                  <GlassSurface
                    width="auto"
                    height="auto"
                    borderRadius={16}
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
                    <div className="p-3 sm:p-4 flex flex-col items-center gap-2">
                      {/* Content */}
                      <div className="text-2xl sm:text-3xl relative z-10">{item.icon}</div>
                      <span className="text-xs sm:text-sm font-medium relative z-10 text-gray-900 dark:text-white text-center">
                        {item.name}
                      </span>
                    </div>
                  </GlassSurface>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
