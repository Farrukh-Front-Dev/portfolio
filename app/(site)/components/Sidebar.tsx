"use client";
import { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton";
import content from "../content/content.json";
import { FaUser, FaLaptopCode, FaEnvelope, FaHome } from "react-icons/fa";

export default function Sidebar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { sidebar } = content;

  const getLabel = (id: string) => {
    const labelMap: { [key: string]: string } = {
      hero: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    };
    return labelMap[id] || "";
  };

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      let currentSection = "hero";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in the upper half of viewport
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getIcon = (id: string) => {
    const iconProps = {
      className: "w-6 h-6 lg:w-7 lg:h-7 relative z-10",
    };

    switch (id) {
      case "hero":
        return <FaHome {...iconProps} />;
      case "about":
        return <FaUser {...iconProps} />;
      case "projects":
        return <FaLaptopCode {...iconProps} />;
      case "contact":
        return <FaEnvelope {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <aside
      className="fixed bottom-0 left-0 right-0 md:right-0 md:left-auto md:top-0 md:bottom-auto
                 h-20 w-full md:h-screen md:w-20 lg:w-24
                 flex flex-row md:flex-col justify-center md:justify-center items-center p-2 md:p-4 md:pt-8
                 text-gray-900 dark:text-white
                 z-50
                 pointer-events-none"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Navigation Links */}
      <div className="flex md:flex-col gap-4 md:gap-5 lg:gap-7 pointer-events-auto">
        {sidebar.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip - Premium Liquid Glass */}
            <div
              className={`
    absolute bottom-16 md:bottom-auto md:right-24 lg:right-28 left-1/2 
    md:left-auto -translate-x-1/2 md:translate-x-0
    px-4 lg:px-5 py-3 rounded-2xl
    backdrop-blur-2xl 
    border border-white/30 dark:border-white/20
    whitespace-nowrap
    text-xs lg:text-sm font-semibold tracking-wide
    pointer-events-none
    transition-all duration-500 ease-out
    ${
      hoveredId === item.id
        ? "opacity-100 scale-100 visible"
        : "opacity-0 scale-95 invisible"
    }
  `}
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.05) 100%)",
                boxShadow:
                  hoveredId === item.id
                    ? "0 12px 40px rgba(0, 0, 0, 0.22), inset 0 1px 2px rgba(255,255,255,0.5), inset 0 0 25px rgba(255,255,255,0.3)"
                    : "0 6px 20px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255,255,255,0.3)",
                WebkitBackdropFilter: "blur(24px)",
                backdropFilter: "blur(24px)",
                borderRadius: "20px",
              }}
            >
              <span className="block text-gray-900 dark:text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                {getLabel(item.id)}
              </span>

              <div
                className={`
      absolute w-0 h-0
      border-l-[5px] border-y-[5px] border-y-transparent
      -bottom-2 left-1/2 -translate-x-1/2 
      md:bottom-auto md:top-1/2 md:-translate-y-1/2 
      md:left-auto md:right-0 md:translate-x-3
      ${hoveredId === item.id ? "block" : "hidden"}
    `}
                style={{
                  borderLeftColor: "rgba(255,255,255,0.35)",
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
                }}
              ></div>
            </div>

            {/* Navigation Icon - Advanced Liquid Glass */}
            <a
              href={`#${item.id}`}
              className={`relative p-3 lg:p-4 rounded-full
                         transition-all duration-400 ease-out
                         ${
                           activeSection === item.id
                             ? "hover:scale-115 scale-110"
                             : "hover:scale-125"
                         }
                         hover:-translate-y-3
                         group/link
                         block
                         will-change-transform
                         ${
                           activeSection === item.id ? "scale-110" : "scale-100"
                         }`}
              style={{
                transform:
                  activeSection === item.id
                    ? "scale(1.1) translateZ(20px)"
                    : hoveredId === item.id
                    ? "translateZ(20px)"
                    : "translateZ(0px)",
                filter:
                  activeSection === item.id
                    ? "drop-shadow(0 20px 30px rgba(59, 130, 246, 0.5)) drop-shadow(0 8px 20px rgba(168, 85, 247, 0.3))"
                    : hoveredId === item.id
                    ? "drop-shadow(0 25px 35px rgba(59, 130, 246, 0.4)) drop-shadow(0 10px 25px rgba(168, 85, 247, 0.3))"
                    : "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* Background Layer - Liquid Glass */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Base glass layer */}
                <div
                  className="absolute inset-0
                             bg-white/20 dark:bg-white/12
                             backdrop-blur-3xl
                             border border-white/50 dark:border-white/40
                             shadow-xl dark:shadow-2xl
                             transition-all duration-400"
                  style={{
                    boxShadow:
                      activeSection === item.id
                        ? "0 0 40px rgba(59, 130, 246, 0.7), inset 0 1px 0 rgba(255,255,255,0.6), 0 12px 40px rgba(31, 38, 135, 0.5)"
                        : hoveredId === item.id
                        ? "0 0 30px rgba(59, 130, 246, 0.5), inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 32px rgba(31, 38, 135, 0.37)"
                        : "0 8px 32px rgba(31, 38, 135, 0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                />

                {/* Gradient overlay for liquid effect */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeSection === item.id
                      ? "opacity-80"
                      : "opacity-0 group-hover/link:opacity-50"
                  }`}
                  style={{
                    background:
                      "radial-gradient(135% 135% at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)",
                  }}
                />
              </div>

              {/* Icon Container */}
              <div className="relative z-20 flex items-center justify-center text-gray-700 dark:text-gray-200 transition-colors duration-700">
                {getIcon(item.id)}
              </div>

              {/* Enhanced Glow Effect - 3D */}
              <div
                className={`absolute inset-0 rounded-full transition-opacity duration-700 pointer-events-none ${
                  activeSection === item.id
                    ? "opacity-100"
                    : "opacity-0 group-hover/link:opacity-40"
                }`}
                style={{
                  background:
                    activeSection === item.id
                      ? "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.4) 0%, rgba(168, 85, 247, 0.2) 40%, transparent 70%)"
                      : "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />

              {/* Shimmer effect on hover */}
              <div
                className={`absolute inset-0 rounded-full transition-opacity duration-700 pointer-events-none ${
                  hoveredId === item.id
                    ? "opacity-30 animate-shimmer"
                    : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                  backgroundSize: "200% 200%",
                  filter: "blur(1px)",
                }}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Theme Toggle Button - Styled to match */}
      {/* Theme Toggle Button */}
<div className="pointer-events-auto">
  {/* Mobile: fixed bottom-right */}
  <div className="md:hidden fixed bottom-5 right-4 z-50">
    <ToggleButton />
  </div>

  {/* Desktop: fixed top-right */}
  <div className="hidden md:block fixed top-4 right-4 z-50">
    <ToggleButton />
  </div>
</div>

    </aside>
  );
}
