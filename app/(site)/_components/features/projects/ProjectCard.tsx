"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlassSurface from "../../components/GlassSurface";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    imageLight: string;
    imageDark?: string;
    link: string;
    demo: string;
  };
  index: number;
  labels: {
    viewCode: string;
    viewDemo: string;
  };
}

export default function ProjectCard({ project, index, labels }: ProjectCardProps) {
  return (
    <article
      style={{ animationDelay: `${index * 0.15}s` }}
      className="group animate-fadeInUp
                 transition-all duration-500 ease-out
                 hover:scale-[1.02] sm:hover:scale-[1.03] md:hover:scale-105 
                 hover:-translate-y-0.5 sm:hover:-translate-y-1 md:hover:-translate-y-2
                 h-full flex flex-col"
    >
      {/* Image Preview - Outside GlassSurface */}
      <div className="relative h-40 sm:h-44 md:h-48 lg:h-56 overflow-hidden rounded-2xl -mb-px">
        <Image
          src={project.imageLight}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover object-top block dark:hidden transition-transform duration-500 
                    group-hover:scale-110"
          {...(index < 2 ? { priority: true } : { loading: "lazy" as const })}
        />

        {project.imageDark && (
          <Image
            src={project.imageDark}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover object-top hidden dark:block transition-transform duration-500 
                      group-hover:scale-110"
            {...(index < 2 ? { priority: true } : { loading: "lazy" as const })}
          />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent z-10" />

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 z-20 flex flex-row items-center justify-center gap-3
                       transition-all duration-300 p-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels.viewCode}
            className="group/btn transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <GlassSurface
              width={56}
              height={56}
              borderRadius={28}
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
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-900 dark:text-white drop-shadow-sm" />
            </GlassSurface>
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels.viewDemo}
            className="group/btn transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <GlassSurface
              width={56}
              height={56}
              borderRadius={28}
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
              <FaExternalLinkAlt className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-900 dark:text-white drop-shadow-sm" />
            </GlassSurface>
          </a>
        </div>
      </div>

      {/* Content with GlassSurface */}
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={20}
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
        className="shadow-lg hover:shadow-xl transition-all duration-700 flex-1 rounded-t-none"
      >
        <div className="p-2.5 sm:p-3 md:p-4 lg:p-6 space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3 flex flex-col h-full">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold 
                        text-gray-900 dark:text-white
                        transition-colors duration-300
                        group-hover:text-blue-600 dark:group-hover:text-blue-400
                        line-clamp-1">
            {project.name}
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 
                       line-clamp-2 sm:line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </GlassSurface>
    </article>
  );
}
