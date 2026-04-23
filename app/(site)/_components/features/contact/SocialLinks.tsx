"use client";

import GlassSurface from "../../components/GlassSurface";

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
    <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5 flex-wrap">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={link.label}
          className="group transition-all duration-500 
                    hover:-translate-y-2 hover:scale-110 
                    animate-fadeInUp
                    focus:outline-none focus:ring-2 focus:ring-blue-400/60 focus:ring-offset-2"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <GlassSurface
            width={64}
            height={64}
            borderRadius={32}
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
            <div className="flex items-center justify-center text-gray-800 dark:text-gray-100 transition-transform duration-300 group-hover:scale-110">
              {link.icon}
            </div>
          </GlassSurface>
        </a>
      ))}
    </div>
  );
}
