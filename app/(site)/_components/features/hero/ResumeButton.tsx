"use client";

import { BsDownload } from "react-icons/bs";
import GlassSurface from "../../components/GlassSurface";

interface ResumeButtonProps {
  href: string;
  text: string;
}

export default function ResumeButton({ href, text }: ResumeButtonProps) {
  return (
    <a
      href={href}
      download
      className="relative inline-flex items-center justify-center
                 group
                 animate-fadeInUp animation-delay-600
                 transition-all duration-500 ease-out
                 hover:scale-105 hover:-translate-y-1"
    >
      <GlassSurface
        width="auto"
        height="auto"
        borderRadius={50}
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
        {/* Text + Icon */}
        <span className="relative flex items-center justify-center gap-2 
                        px-6 sm:px-8 py-3 sm:py-4
                        text-sm sm:text-base font-semibold 
                        text-gray-900 dark:text-white 
                        drop-shadow-sm whitespace-nowrap z-10">
          {text}
          <BsDownload className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </span>
      </GlassSurface>
    </a>
  );
}
