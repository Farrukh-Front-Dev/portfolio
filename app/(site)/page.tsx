import Sidebar from "@components/Sidebar";
import PerformanceIndicator from "@components/PerformanceIndicator";
import HeroSection from "@sections/HeroSection";
import ProjectsSection from "@sections/ProjectsSection";
import TechSection from "@sections/TechSection";
import ContactSection from "@sections/ContactSection";

export default function Page() {
  return (
    <>
      <Sidebar />
      <PerformanceIndicator />
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechSection />
        <ContactSection />
      </main>
    </>
  );
}
