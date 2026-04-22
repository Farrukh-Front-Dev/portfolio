"use client";

interface Link {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
}

interface SocialLinksProps {
  links: Link[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex justify-center items-center space-x-2 md:space-x-3">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group relative w-14 md:w-16 aspect-square rounded-full transition-all duration-500 hover:-translate-y-1 hover:scale-[1.05] overflow-hidden"
          style={{ animationDelay: `${index * 0.1}s` }}
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

          {/* Liquid shine effect */}
          <span className="absolute -top-1 -left-8 w-16 h-32 bg-white/30 dark:bg-white/20 rounded-full blur-2xl
                           transform rotate-45 scale-150 animate-pulse pointer-events-none"></span>

          {/* Icon */}
          <div className="relative z-10 flex h-full items-center justify-center text-gray-800 dark:text-gray-100">
            <div className="text-2xl md:text-3xl">{link.icon}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
