"use client";
import { useState, useEffect } from "react";
import ToggleButton from "../ToggleButton";
import { sidebar as sidebarContent } from "../../content/content.json";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      let currentSection = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed bottom-0 left-0 right-0 md:right-0 md:left-auto md:top-0 md:bottom-auto h-20 w-full md:h-screen md:w-20 lg:w-24 flex flex-row md:flex-col justify-center md:justify-center items-center p-2 md:p-4 md:pt-8 text-gray-900 dark:text-white z-50 pointer-events-none" style={{ perspective: "1000px" }}>
      <div className="flex md:flex-col gap-4 md:gap-5 lg:gap-7 pointer-events-auto">
        {sidebarContent.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            activeSection={activeSection}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </div>

      {/* Theme Toggle Button */}
      <div className="pointer-events-auto">
        <div className="md:hidden fixed bottom-5 right-4 z-50">
          <ToggleButton />
        </div>
        <div className="hidden md:block fixed top-4 right-4 z-50">
          <ToggleButton />
        </div>
      </div>
    </aside>
  );
}
