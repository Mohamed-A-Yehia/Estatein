import LinkButton from "../components/LinkButton";
import SectionIntro from "../components/SectionIntro";

function CtaSection() {
  return (
    <section className="border-grey-15 m-auto border-b bg-[url('/images/CtaSectionBgC.webp')] bg-cover bg-center px-5 py-16 md:px-16 lg:container">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <SectionIntro
          title="Start Your Real Estate Journey Today"
          description="Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."
          stars={false}
          fontsize="text-3xl"
        />

        <LinkButton buttonType="primary" to="/properties">
          Explore Properties
        </LinkButton>
      </div>
    </section>
  );
}

export default CtaSection;
