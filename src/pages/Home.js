import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MobileMenu from "../components/MobileMenu"; 

function Home() {
   

  return (
    <main>
      <Navbar  />
      <MobileMenu />
      <Header />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

export default Home;
