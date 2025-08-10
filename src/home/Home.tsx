import CtaSection from "../components/CtaSection";
import FaqSection from "../components/FaqSection";
import HeroSection from "./HeroSection";
import PropertiesSection from "./PropertiesSection";
import TestimonialsSection from "./TestimonialsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <PropertiesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}

export default Home;
