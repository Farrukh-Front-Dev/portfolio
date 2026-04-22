"use client";
import { useState, useCallback, useMemo } from "react";
import ToggleButton from "@components/ui/ToggleButton";
import { sidebar as sidebarContent } from "@content/content.json";
import SidebarItem from "./SidebarItem";
import useActiveSection from "@hooks/useActiveSection";

export default function Sidebar() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const activeSection = useActiveSection(["hero", "about", "projects", "contact"]);

  const handleSetHoveredId = useCallback((id: string | null) => {
    setHoveredId(id);
  }, []);

  const sidebarItems = useMemo(
    () =>
      sidebarContent.map((item) => (
        <SidebarItem
          key={item.id}
          item={item}
          activeSection={activeSection}
          hoveredId={hoveredId}
          setHoveredId={handleSetHoveredId}
        />
      )),
    [activeSection, hoveredId, handleSetHoveredId]
  );

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <aside className="fixed bottom-0 left-0 right-0 h-20 md:hidden flex justify-center items-center p-2 z-50 pointer-events-auto">
        <div className="flex gap-4 pointer-events-auto bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {sidebarItems}
        </div>
        {/* Theme Toggle in Mobile Sidebar */}
        <div className="absolute right-4">
          <ToggleButton />
        </div>
      </aside>

      {/* Desktop Right Sidebar */}
      <aside className="hidden md:fixed md:right-0 md:top-0 md:bottom-0 md:flex md:flex-col md:items-center md:w-20 lg:w-24 md:p-4 md:pt-8 text-gray-900 dark:text-white z-50 pointer-events-auto">
        {/* Theme Toggle at Top */}
        <ToggleButton />
        
        {/* Separator */}
        <div className="w-12 h-px bg-white/20 my-4" />
        
        {/* Navigation Items */}
        <div className="flex flex-col gap-5 lg:gap-7 pointer-events-auto items-center flex-1 justify-center">
          {sidebarItems}
        </div>
      </aside>
    </>
  );
}
