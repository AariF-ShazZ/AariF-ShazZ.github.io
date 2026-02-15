import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import MyProjects from "../MyProjects";
import MySkills from "../MySkills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyProjects />
      {/* <GitHub /> */}
      <ContactMe />
    </>

  );
}
