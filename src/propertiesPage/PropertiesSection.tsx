import PropertiesLists from "../components/PropertiesLists";
import SectionIntro from "../components/SectionIntro";

function PropertiesSection() {
  return (
    <section className="container mx-auto my-16">
      <SectionIntro
        title="Discover a World of Possibilities"
        description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        stars={true}
      />

      <PropertiesLists />
    </section>
  );
}

export default PropertiesSection;
