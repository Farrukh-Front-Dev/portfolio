"use client";

import content from "@content/content.json";
import { projects } from "@content/ProjectsContent";

export default function ProjectsSection() {
  const { labels } = content;

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2
        className="
          text-3xl sm:text-4xl md:text-5xl font-bold mb-12 tracking-tight
          bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300
          bg-clip-text text-transparent animate-fadeInUp
        "
      >
        {labels.projects}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
            className="
              relative group rounded-2xl overflow-hidden
              animate-fadeInUp
              flex flex-col
              transition-all duration-500 ease-out
              hover:scale-105 hover:-translate-y-2
            "
          >
            {/* Base + Gradient + Glow */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
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
                             transform rotate-45 scale-150 animate-pulse pointer-events-none z-0"></span>

            {/* Preview area */}
            <div className="relative h-48 sm:h-56 overflow-hidden z-10">
              {/* Light image */}
              <img
                src={project.imageLight}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover block dark:hidden"
              />

              {/* Dark image (agar mavjud bo'lsa) */}
              {project.imageDark && (
                <img
                  src={project.imageDark}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover hidden dark:block"
                />
              )}

              {/* Overlay: mobile always visible, desktop hover */}
              <div
                className="
                  absolute inset-0 z-20
                  flex items-center justify-center gap-4
                  bg-black/30 backdrop-blur-md

                  opacity-100 scale-100
                  md:opacity-0 md:scale-95
                  md:group-hover:opacity-100 md:group-hover:scale-100

                  transition-all duration-300
                "
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-2 rounded-lg text-sm font-semibold
                    bg-white/20 dark:bg-white/10
                    backdrop-blur-xl
                    border border-white/50 dark:border-white/40
                    text-gray-900 dark:text-white
                    hover:bg-white/30 dark:hover:bg-white/20
                    transition-all duration-300
                  "
                >
                  {labels.viewCode}
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-2 rounded-lg text-sm font-semibold
                    bg-white/20 dark:bg-white/10
                    backdrop-blur-xl
                    border border-white/50 dark:border-white/40
                    text-gray-900 dark:text-white
                    hover:bg-white/30 dark:hover:bg-white/20
                    transition-all duration-300
                  "
                >
                  {labels.viewDemo}
                </a>
              </div>
            </div>

            {/* Text content */}
            <div className="relative p-6 space-y-4 grow flex flex-col z-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
