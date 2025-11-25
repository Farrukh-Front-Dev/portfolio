import Image from "next/image";
import content from "../content/content.json";

export default function ProjectsSection() {
  const { projects, labels } = content;

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 tracking-tight
                     bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent
                     animate-fadeInUp">
        {labels.projects}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden
                       bg-white/10 dark:bg-white/5
                       backdrop-blur-xl
                       border border-gray-300/30 dark:border-white/20
                       hover:border-gray-400/60 dark:hover:border-white/40
                       shadow-lg dark:shadow-2xl
                       hover:shadow-2xl dark:hover:shadow-3xl
                       transition-all duration-500 ease-out
                       hover:-translate-y-2
                       animate-fadeInUp
                       flex flex-col"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Project Image - Full width on mobile */}
            <div className="relative w-full h-48 sm:h-56 bg-linear-to-br from-gray-200/50 dark:from-gray-700/50 to-gray-300/50 dark:to-gray-800/50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-white/10 dark:bg-white/5 mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-8 space-y-4 flex flex-col grow">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                  {project.name}
                </h3>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3" />
                </svg>
              </div>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed text-sm md:text-base grow">
                {project.description}
              </p>
              <div className="flex gap-3 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 rounded-lg
                             bg-gray-200/50 dark:bg-white/10
                             hover:bg-gray-300/70 dark:hover:bg-white/20
                             border border-gray-400/30 dark:border-white/20
                             text-gray-900 dark:text-white text-sm font-medium
                             transition-all duration-300 text-center"
                >
                  {labels.viewCode}
                </a>
                <a
                  href={project.demo}
                  className="flex-1 px-4 py-2 rounded-lg
                             bg-gray-900/10 dark:bg-white/5
                             hover:bg-gray-900/20 dark:hover:bg-white/10
                             border border-gray-900/20 dark:border-white/20
                             text-gray-900 dark:text-white text-sm font-medium
                             transition-all duration-300 text-center"
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
