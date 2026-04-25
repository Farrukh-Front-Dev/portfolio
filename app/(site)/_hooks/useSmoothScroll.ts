"use client";
import { useEffect } from "react";

export default function useSmoothScroll() {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollDirection: "up" | "down" = "down";

    const handleWheel = (e: WheelEvent) => {
      // Only apply on desktop
      if (window.innerWidth < 768) return;

      // If already scrolling, allow normal scroll
      if (isScrolling) return;

      const sections = document.querySelectorAll("section[id]");
      let currentSectionIndex = 0;

      // Find current section
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSectionIndex = i;
        }
      }

      const currentSection = sections[currentSectionIndex] as HTMLElement;
      const currentRect = currentSection.getBoundingClientRect();
      
      // Check if we're at the bottom of current section
      const isAtBottom = currentRect.bottom <= window.innerHeight + 100;
      const isAtTop = currentRect.top >= -100;

      if (e.deltaY > 0) {
        lastScrollDirection = "down";
        // Scrolling down and at bottom of section
        if (isAtBottom && currentSectionIndex < sections.length - 1) {
          e.preventDefault();
          isScrolling = true;
          const nextSection = sections[currentSectionIndex + 1] as HTMLElement;
          // Scroll to top of next section
          nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
          
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
      } else if (e.deltaY < 0) {
        lastScrollDirection = "up";
        // Scrolling up and at top of section
        if (isAtTop && currentSectionIndex > 0) {
          e.preventDefault();
          isScrolling = true;
          const prevSection = sections[currentSectionIndex - 1] as HTMLElement;
          // Scroll to bottom of previous section
          const prevRect = prevSection.getBoundingClientRect();
          const scrollPosition = window.scrollY + prevRect.bottom - window.innerHeight;
          window.scrollTo({ top: scrollPosition, behavior: "smooth" });
          
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);
}
