import LoadingSpinner from "../components/LoadingSpinner";
import PropertiesLists from "../components/PropertiesLists";
import SectionIntro from "../components/SectionIntro";
import { useProperties } from "../hooks/useProperties";

function PropertiesSection() {
  const { isLoading } = useProperties();

  return (
    <section className="border-grey-15 m-auto border-b p-5 pt-16 pb-1 lg:container">
      <SectionIntro
        title="Featured Properties"
        description="Explore Our Handpicked Selection of featured Properties. Each listing
          offers a glimpse into exceptionl homes and investments avialable
          through Estatein."
      />

      {isLoading ? <LoadingSpinner /> : <PropertiesLists />}
    </section>
  );
}

export default PropertiesSection;
