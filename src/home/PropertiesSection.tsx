import Lists from "./PropertiesLists";
import { PuffLoader } from "react-spinners";
import SectionIntro from "../components/SectionIntro";
import { useProperties } from "../hooks/useProperties";

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
        <PuffLoader color="#7520E9" size={100} />
      ) : (
        <Lists properties={data} />
      )}
    </section>
  );
}

export default PropertiesSection;
