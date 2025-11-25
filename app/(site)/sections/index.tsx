"use client";

import { memo } from "react";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechSection from "./sections/TechSection";
import ContactSection from "./sections/ContactSection";

// Memoize expensive sections to prevent unnecessary re-renders
const MemoizedHeroSection = memo(HeroSection);
const MemoizedProjectsSection = memo(ProjectsSection);
const MemoizedTechSection = memo(TechSection);
const MemoizedContactSection = memo(ContactSection);

export {
  MemoizedHeroSection,
  MemoizedProjectsSection,
  MemoizedTechSection,
  MemoizedContactSection,
};
