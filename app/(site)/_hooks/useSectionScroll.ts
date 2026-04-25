import { useEffect } from "react";

const SECTION_IDS = ["hero", "about", "projects", "contact"];

export function useSectionScroll() {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;

      const sections = SECTION_IDS.map(id => {
        const element = document.getElementById(id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          id,
          element,
          top: currentScroll + rect.top,
          height: rect.height,
          bottom: currentScroll + rect.top + rect.height,
        };
      }).filter(Boolean) as Array<{
        id: string;
        element: HTMLElement;
        top: number;
        height: number;
        bottom: number;
      }>;

      if (sections.length === 0) return;

      // Find current section - the one that's most visible
      let currentSectionIndex = 0;
      let maxVisibility = 0;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.top;
        const sectionBottom = section.bottom;
        const viewportTop = currentScroll;
        const viewportBottom = currentScroll + windowHeight;

        // Calculate how much of the section is visible
        const visibleTop = Math.max(sectionTop, viewportTop);
        const visibleBottom = Math.min(sectionBottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          currentSectionIndex = i;
        }
      }

      const currentSection = sections[currentSectionIndex];
      const isAtSectionEnd =
        currentScroll + windowHeight >= currentSection.bottom - 50;
      const isAtSectionStart = currentScroll <= currentSection.top + 50;

      let nextSectionIndex = currentSectionIndex;

      if (e.deltaY > 0) {
        // Scrolling down
        if (isAtSectionEnd) {
          nextSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        } else {
          // Allow normal scrolling within section
          return;
        }
      } else {
        // Scrolling up
        if (isAtSectionStart) {
          nextSectionIndex = Math.max(currentSectionIndex - 1, 0);
        } else {
          // Allow normal scrolling within section
          return;
        }
      }

      if (nextSectionIndex !== currentSectionIndex) {
        e.preventDefault();
        isScrolling = true;

        const targetSection = sections[nextSectionIndex];
        window.scrollTo({
          top: targetSection.top,
          behavior: "smooth",
        });

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);
}
