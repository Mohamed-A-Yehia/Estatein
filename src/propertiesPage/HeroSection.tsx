import SectionIntro from "../components/SectionIntro";
import SearchForm from "./SearchForm";

function HeroSection() {
  return (
    <section className="container m-auto px-4 py-8 text-white md:py-16 xl:px-16">
      <div className="border-grey-20 border-b pb-32">
        <SectionIntro
          stars={false}
          title="Find Your Dream Property"
          description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
        />
      </div>
      <SearchForm />
    </section>
  );
}

export default HeroSection;
