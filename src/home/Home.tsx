import CtaSection from "../components/CtaSection";
import FaqSection from "./FaqSection";
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
