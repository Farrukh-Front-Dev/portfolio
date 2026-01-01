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
    <div className="grid grid-cols-4 gap-1 place-items-center">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group relative aspect-square w-16 sm:w-10 md:w-20 rounded-full transition-all duration-500 hover:-translate-y-2 hover:scale-[1.06]"
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

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-3 text-gray-800 dark:text-gray-100">
            <div className="mb-2 text-2xl sm:text-3xl">{link.icon}</div>
            {/* <h3 className="text-xs sm:text-sm font-semibold tracking-wide">
              {link.label}
            </h3> */}
          </div>
        </a>
      ))}
    </div>
  );
}
