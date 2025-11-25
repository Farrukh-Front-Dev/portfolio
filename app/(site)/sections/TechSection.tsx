export default function TechSection() {
  const tech = [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "TailwindCSS",
    "Docker",
  ];

  return (
    <section
      id="tech"
      className="py-32 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-3xl font-bold mb-12 tracking-tight">
        Tech Stack bord
      </h2>

      <div className="flex flex-wrap gap-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-md border border-white/10 bg-white/5 text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

