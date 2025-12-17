"use client";

import { memo } from "react";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

// Memoize expensive sections to prevent unnecessary re-renders
const MemoizedHeroSection = memo(HeroSection);
const MemoizedAboutSection = memo(AboutSection);
const MemoizedProjectsSection = memo(ProjectsSection);
const MemoizedContactSection = memo(ContactSection);

export {
  MemoizedHeroSection,
  MemoizedAboutSection,
  MemoizedProjectsSection,
  MemoizedContactSection,
};
