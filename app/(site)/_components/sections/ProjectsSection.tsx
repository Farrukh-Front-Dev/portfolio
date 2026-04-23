"use client";

import content from "@content/content.json";
import { projects } from "@content/ProjectsContent";
import ProjectCard from "../features/projects/ProjectCard";

export default function ProjectsSection() {
  const { labels } = content;

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                     mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-tight
                     bg-linear-to-r from-gray-900 to-gray-600 
                     dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent animate-fadeInUp">
        {labels.projects}
      </h2>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            labels={labels}
          />
        ))}
      </div>
    </section>
  );
}
