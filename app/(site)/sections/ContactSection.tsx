"use client";

import content from "../content/content.json";
import { useParallax } from "../lib/useParallax";

export default function ContactSection() {
  const { contact, labels } = content;
  const { ref: sectionRef, offset: parallaxOffset } = useParallax({ speed: 0.08 });

  const contactLinks = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
        </svg>
      ),
      label: "Telegram",
      href: contact.telegram,
      value: "@Farrukh_Djumayev",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      ),
      label: "LinkedIn",
      href: contact.linkedin,
      value: "Farrukh",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      href: contact.github,
      value: "Farrukh-Front-Dev",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 sm:py-24 md:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative"
    >
      <h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight
                     bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent
                     animate-fadeInUp"
        style={{
          transform: `translateY(${parallaxOffset * 0.1}px)`,
          willChange: "transform"
        }}
      >
        {labels.getInTouch}
      </h2>

      <p 
        className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 md:mb-16 max-w-2xl leading-relaxed
                    animate-fadeInUp animation-delay-200"
        style={{
          transform: `translateY(${parallaxOffset * 0.08}px)`,
          willChange: "transform"
        }}
      >
        {labels.alwaysOpen}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {contactLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="group p-6 rounded-xl
                       bg-white/10 dark:bg-white/5
                       backdrop-blur-xl
                       border border-gray-300/30 dark:border-white/20
                       hover:border-gray-400/60 dark:hover:border-white/40
                       shadow-md dark:shadow-lg
                       hover:shadow-lg dark:hover:shadow-2xl
                       transition-all duration-300 ease-out
                       hover:bg-white/20 dark:hover:bg-white/10
                       hover:-translate-y-1
                       flex flex-col items-center text-center
                       animate-fadeInUp"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              transform: `translateY(${parallaxOffset * (0.06 - index * 0.01)}px)`,
              willChange: "transform"
            }}
          >
            <div className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors mb-4">
              {link.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
              {link.label}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
              {link.value}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-16 pt-12 border-t border-gray-300/20 dark:border-white/10 text-center
                      animate-fadeInUp animation-delay-400">
        <p className="text-gray-600 dark:text-gray-400">
          {labels.copyright}
        </p>
      </div>
    </section>
  );
}
