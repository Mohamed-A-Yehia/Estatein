import Lists from "./PropertiesLists";
import SectionIntro from "../components/SectionIntro";
import { useProperties } from "../hooks/useProperties";
import { BeatLoader } from "react-spinners";

function PropertiesSection() {
  const { isLoading, data } = useProperties();

  return (
    <section className="border-grey-15 m-auto border-b p-5 pt-16 pb-1 lg:container">
      <SectionIntro
        title="Featured Properties"
        description="Explore Our Handpicked Selection of featured Properties. Each listing
          offers a glimpse into exceptionl homes and investments avialable
          through Estatein."
      />

      {isLoading ? (
        <BeatLoader color="#7520E9" size={100} />
      ) : (
        <Lists properties={data} />
      )}
    </section>
  );
}

export default PropertiesSection;
