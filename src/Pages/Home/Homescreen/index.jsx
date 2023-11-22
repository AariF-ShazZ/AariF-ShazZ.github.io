import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";
import GitHub from "../Github";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <GitHub />
      <ContactMe />
    </>

  );
}
