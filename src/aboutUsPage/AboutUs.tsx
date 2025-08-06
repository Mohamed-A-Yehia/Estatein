import CtaSection from "../components/CtaSection";
import HeroSection from "./HeroSection";
import OurAchievments from "./OurAchievments";
import OurClients from "./OurClients";
import OurProcess from "./OurProcess";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";

function AboutUs() {
  return (
    <>
      <HeroSection />
      <OurValues />
      <OurAchievments />
      <OurProcess />
      <OurTeam />
      <OurClients />
      <CtaSection />
    </>
  );
}

export default AboutUs;
