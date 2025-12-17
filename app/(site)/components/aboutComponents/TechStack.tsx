type SkillGroup = {
  title: string;
  items: string[];
};

type Props = {
  groups?: SkillGroup[];
};

export default function TechStack({ groups }: Props) {
  if (!groups || groups.length === 0) return null;

  return (
    <div className="mb-24">
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
                  key={item}
                  className="p-4 rounded-xl text-center
                             bg-white/10 dark:bg-white/5
                             border border-gray-300/30 dark:border-white/20
                             backdrop-blur
                             transition-transform duration-300 ease-out
                             hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
