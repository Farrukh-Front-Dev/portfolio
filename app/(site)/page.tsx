"use client";
import Sidebar from "@components/SidebarComponents/Sidebar";
import HeroSection from "@sections/HeroSection";
import ProjectsSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import AboutSection from './sections/AboutSection';
import Footer from "@sections/Footer";
import LightRays from "@components/components/LightRays";
import Particles from "@components/components/Particles";
import { useTheme } from "./context/ThemeContext"; // agar tema kerak bo‘lsa

export default function Page() {
  const { darkMode } = useTheme(); // light/dark mode

  // Particle ranglarini theme bo‘yicha o‘zgartirish
  const particleColors = darkMode ? ["#ffffff", "#aaaaaa"] : ["#000000", "#555555"];

  return (
    <>
      {/* ===== Sidebar ===== */}
      <Sidebar />

      {/* ===== Particles background (fixed) ===== */}
      <div style={{ position: "fixed", inset: 0, zIndex: -20 }}>
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

      {/* ===== LightRays overlay (fixed, Particles ustida) ===== */}
      <div className="fixed inset-0 z-10 pointer-events-none">
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

      {/* ===== Main content ===== */}
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
