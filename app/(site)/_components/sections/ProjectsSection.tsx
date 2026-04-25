"use client";

import content from "@content/content.json";
import { projects } from "@content/ProjectsContent";
import ProjectCard from "../features/projects/ProjectCard";
import { useScrollAnimation } from "@hooks/useScrollAnimation";

export default function ProjectsSection() {
  const { labels } = content;
  const sectionRef = useScrollAnimation({ threshold: 0.05, rootMargin: "0px 0px -100px 0px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-16 md:py-24 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold 
                     mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-tight
                     text-gray-900
                     dark:bg-linear-to-r dark:from-white dark:to-gray-300
                     dark:bg-clip-text dark:text-transparent animate-fadeInUp">
        {labels.projects}
      </h2>

      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:gap-5 lg:gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.name} 
            className="animate-fadeInUp"
            style={{ animationDelay: `${(100 + index * 100) / 1000}s` }}
          >
            <ProjectCard
              project={project}
              index={index}
              labels={labels}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
