"use client";
import dynamic from "next/dynamic";
import Sidebar from "@components/features/sidebar/Sidebar";
import { HeroSection, ProjectsSection, ContactSection, AboutSection, Footer } from "@components/sections";
import { useTheme } from "@context/ThemeContext";
import { useSectionScroll } from "@hooks/useSectionScroll";

// Lazy load heavy components
const LightRays = dynamic(() => import("@components/effects/LightRays"), {
  loading: () => null,
  ssr: false,
});

const Particles = dynamic(() => import("@components/effects/Particles"), {
  loading: () => null,
  ssr: false,
});

export default function Page() {
  const { darkMode } = useTheme();
  useSectionScroll();

  const particleColors = darkMode ? ["#ffffff", "#aaaaaa"] : ["#000000", "#555555"];

  return (
    <>
      <Sidebar />

      {/* Global Background - only in dark mode */}
      {darkMode && (
        <>
          <div style={{ position: "fixed", inset: 0, zIndex: -10 }}>
            <Particles
              particleColors={particleColors}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          <div className="fixed inset-0 z-0 pointer-events-none">
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="w-full h-full"
            />
          </div>
        </>
      )}

      {/* Light mode background - simple white */}
      {!darkMode && (
        <div className="fixed inset-0 z-0 bg-white pointer-events-none" />
      )}

      <main className="relative z-20">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
