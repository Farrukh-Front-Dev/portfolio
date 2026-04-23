"use client";

import GlassSurface from "../../components/GlassSurface";

interface CTAButtonProps {
  href: string;
  text: string;
}

export default function CTAButton({ href, text }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center
                 group
                 animate-fadeInUp animation-delay-400
                 transition-all duration-500 ease-out
                 hover:scale-105 hover:-translate-y-1
                 focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2"
      aria-label={text}
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
          <svg 
            className="w-5 h-5 transition-transform duration-300 
                      group-hover:translate-x-1 group-hover:scale-110" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </GlassSurface>
    </a>
  );
}
