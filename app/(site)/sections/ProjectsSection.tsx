"use client";

import content from "../content/content.json";
import {projects} from "../content/ProjectsContent";

export default function ProjectsSection() {
   const { labels } = content;

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 tracking-tight
        bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300
        bg-clip-text text-transparent animate-fadeInUp">
        {labels.projects}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
  key={index}
  style={{ animationDelay: `${index * 0.15}s` }}
  className="
    relative group rounded-2xl overflow-hidden
    bg-white/20 dark:bg-white/5
    backdrop-blur-2xl backdrop-saturate-150
    border border-white/40 dark:border-white/15
    shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)]
    transition-all duration-500
    hover:-translate-y-2
    animate-fadeInUp
    flex flex-col
  "
>
  {/* Liquid highlight */}
  <div
    className="
      pointer-events-none absolute inset-0
      bg-linear-to-br from-white/60 via-white/10 to-transparent
      opacity-60 md:group-hover:opacity-90
      transition-opacity duration-500
    "
  />

  {/* Preview area */}
  <div className="relative h-48 sm:h-56 overflow-hidden">
    {/* Preview background */}
    <div
      className="
        absolute inset-0
        bg-linear-to-br from-white/40 to-white/10
        dark:from-white/10 dark:to-transparent
      "
    />

    {/* Overlay: mobile visible, desktop hover */}
    <div
      className="
        absolute inset-0 z-10
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
          px-4 py-2 rounded-lg text-sm
          bg-white/80 text-gray-900
          hover:bg-white
          transition
        "
      >
        {labels.viewCode}
      </a>

      <a
        href={project.demo}
        className="
          px-4 py-2 rounded-lg text-sm
          bg-white/20 text-white
          border border-white/40
          hover:bg-white/30
          transition
        "
      >
        {labels.viewDemo}
      </a>
    </div>
  </div>

  {/* Text content */}
  <div className="relative p-6 space-y-4 grow flex flex-col">
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
