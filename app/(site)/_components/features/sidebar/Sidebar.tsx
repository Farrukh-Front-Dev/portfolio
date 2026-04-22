"use client";
import { useState, useEffect } from "react";
import ToggleButton from "@components/ui/ToggleButton";
import { sidebar as sidebarContent } from "@content/content.json";
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
    <>
      {/* Mobile Bottom Navigation */}
      <aside className="fixed bottom-0 left-0 right-0 h-20 md:hidden flex justify-center items-center p-2 bg-white/10 dark:bg-white/5 backdrop-blur-md border-t border-white/20 z-50 pointer-events-auto">
        <div className="flex gap-4 pointer-events-auto">
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
      </aside>

      {/* Desktop Right Sidebar */}
      <aside className="hidden md:fixed md:right-0 md:top-0 md:bottom-0 md:flex md:flex-col md:justify-center md:items-center md:w-20 lg:w-24 md:p-4 md:pt-8 text-gray-900 dark:text-white z-50 pointer-events-auto">
        <div className="flex flex-col gap-5 lg:gap-7 pointer-events-auto">
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
      </aside>

      {/* Theme Toggle Button */}
      <div className="fixed bottom-24 right-4 md:top-4 md:right-4 z-50 pointer-events-auto">
        <ToggleButton />
      </div>
    </>
  );
}
