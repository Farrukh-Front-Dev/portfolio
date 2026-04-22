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
          className="group relative w-14 md:w-16 aspect-square rounded-full transition-all duration-500 hover:-translate-y-1 hover:scale-[1.05]"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {/* Glass base */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500" />

            {/* Liquid highlight */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-700"
              style={{
                background:
                  "radial-gradient(140% 140% at 50% 0%, rgba(59,130,246,0.22) 0%, rgba(168,85,247,0.14) 45%, transparent 100%)",
              }}
            />
          </div>

          {/* Rotating icon */}
          <div className="relative z-10 flex h-full items-center justify-center text-gray-800 dark:text-gray-100">
            <div className="text-2xl md:text-3xl animate-spin-slow">{link.icon}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
