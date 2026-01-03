import Sidebar from "@components/SidebarComponents/Sidebar";
import HeroSection from "@sections/HeroSection";
import ProjectsSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import AboutSection from './sections/AboutSection';
import Footer from "@sections/Footer";

export default function Page() {
  return (
    <>
      <Sidebar />
      <main>
        <HeroSection />
        <AboutSection/>
        <ProjectsSection />
        <ContactSection />
        <Footer/>
      </main>
    </>
  );
}
