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
                 transition-all duration-500 ease-out
                 hover:scale-105 hover:-translate-y-1
                 dark:shadow-none"
      style={{
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Light mode - solid button */}
      <div className="absolute inset-0 rounded-full overflow-hidden dark:hidden">
        <div className="absolute inset-0 bg-white transition-all duration-400 group-hover:bg-white" />
      </div>

      {/* Dark mode - glass button */}
      <div className="absolute inset-0 rounded-full overflow-hidden hidden dark:block">
        <div className="absolute inset-0 bg-white/12 backdrop-blur-3xl border border-white/40 shadow-2xl transition-all duration-400 group-hover:bg-white/15" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
             style={{
               background: "radial-gradient(135% 135% at 50% 0%, rgba(59,130,246,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)"
             }} />
      </div>

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
