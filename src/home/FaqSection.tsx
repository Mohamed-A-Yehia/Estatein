import { BeatLoader } from "react-spinners";
import SectionIntro from "../components/SectionIntro";
import { useFaqs } from "../hooks/useFaqs";
import Faqs from "./Faqs";

function FaqSection() {
  const { isLoading, data } = useFaqs();

  return (
    <section className="border-grey-15 m-auto border-b p-5 pt-16 pb-8 lg:container">
      <SectionIntro
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      />

      {isLoading ? (
        <BeatLoader color="#7520E9" size={50} />
      ) : (
        <Faqs faqs={data} />
      )}
    </section>
  );
}

export default FaqSection;
