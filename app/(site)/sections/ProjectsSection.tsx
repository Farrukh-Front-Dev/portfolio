"use client";

import content from "../content/content.json";

export default function ProjectsSection() {
  const { projects, labels } = content;

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 tracking-tight bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeInUp">
        {labels.projects}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-300/30 dark:border-white/20 shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fadeInUp flex flex-col"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="h-48 sm:h-56 bg-linear-to-br from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-800/50" />

            <div className="p-6 space-y-4 grow flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>

              <p className="text-gray-700 dark:text-gray-400 text-sm grow">
                {project.description}
              </p>

              <div className="flex gap-3 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-200/50 dark:bg-white/10 text-sm text-center"
                >
                  {labels.viewCode}
                </a>
                <a
                  href={project.demo}
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-900/10 dark:bg-white/5 text-sm text-center"
                >
                  {labels.viewDemo}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
