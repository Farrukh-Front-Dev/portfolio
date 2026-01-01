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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group relative p-6 rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute inset-0 rounded-2xl backdrop-blur-3xl bg-white/10 border border-white/30" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4">{link.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{link.label}</h3>
            <p className="text-sm opacity-80 break-all">{link.value}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
