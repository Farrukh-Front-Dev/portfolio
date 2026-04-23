"use client";

interface CTAButtonProps {
  href: string;
  text: string;
}

export default function CTAButton({ href, text }: CTAButtonProps) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base
                 group
                 animate-fadeInUp animation-delay-400
                 overflow-hidden
                 transition-all duration-500 ease-out
                 hover:scale-105 hover:-translate-y-1"
    >
      {/* Base + Gradient + Glow */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-white/20 dark:bg-white/12 backdrop-blur-3xl border border-white/50 dark:border-white/40 shadow-xl dark:shadow-2xl transition-all duration-400 group-hover:bg-white/30 dark:group-hover:bg-white/15" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Liquid glass shine effect */}
      <span className="absolute -top-1 -left-16 w-20 h-40 bg-white/30 dark:bg-white/20 rounded-full blur-2xl
                       transform rotate-45 scale-150 animate-pulse pointer-events-none"></span>

      {/* Text + Icon */}
      <span className="relative flex items-center justify-center gap-2 z-10 text-gray-900 dark:text-white">
        {text}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </a>
  );
}
