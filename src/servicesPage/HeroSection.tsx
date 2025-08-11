import Info from "../components/Info";
import SectionIntro from "../components/SectionIntro";

function HeroSection() {
  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 xl:px-16">
      <SectionIntro
        title="Elevate Your Real Estate Experience"
        description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        stars={false}
      />

      <Info />
    </section>
  );
}

export default HeroSection;
