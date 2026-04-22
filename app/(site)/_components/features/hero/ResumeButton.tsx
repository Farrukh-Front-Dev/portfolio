"use client";

import { BsDownload } from "react-icons/bs";

interface ResumeButtonProps {
  href: string;
  text: string;
}

export default function ResumeButton({ href, text }: ResumeButtonProps) {
  return (
    <a
      href={href}
      download
      className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base
                 bg-white/10 dark:bg-white/5
                 backdrop-blur-xl
                 border border-white/20 dark:border-white/10
                 text-gray-900 dark:text-white
                 shadow-lg dark:shadow-2xl
                 hover:shadow-2xl dark:hover:shadow-3xl
                 hover:bg-white/20 dark:hover:bg-white/10
                 hover:border-white/30 dark:hover:border-white/20
                 transition-all duration-500 ease-out
                 group
                 animate-fadeInUp animation-delay-600
                 overflow-hidden"
    >
      {/* Text + Icon */}
      <span className="relative flex items-center justify-center gap-2 z-10">
        {text}
        <BsDownload className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
      </span>

      {/* Liquid glass shine */}
      <span className="absolute -top-1 -left-16 w-20 h-40 bg-white/30 dark:bg-white/20 rounded-full blur-2xl
                       transform rotate-45 scale-150 animate-pulse pointer-events-none"></span>
    </a>
  );
}
