"use client";

import { memo } from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import TechSection from "./TechSection";
import ContactSection from "./ContactSection";

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
