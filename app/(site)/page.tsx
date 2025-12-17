import Sidebar from "@components/Sidebar";
import PerformanceIndicator from "@components/PerformanceIndicator";
import HeroSection from "@sections/HeroSection";
import ProjectsSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import AboutSection from './sections/AboutSection';

export default function Page() {
  return (
    <>
      <Sidebar />
      <PerformanceIndicator />
      <main>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
