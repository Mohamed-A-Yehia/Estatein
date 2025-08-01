import { BeatLoader } from "react-spinners";
import SectionIntro from "../components/SectionIntro";
import { useTestimonials } from "../hooks/useTestimonial";
import Testimonials from "./Testimonials";

function TestimonialsSection() {
  const { isLoading, data } = useTestimonials();

  return (
    <section className="m-auto p-5 pt-16 lg:container">
      <SectionIntro
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />
      <BeatLoader color="#7520E9" size={50} />
      {isLoading ? (
        <BeatLoader color="#7520E9" size={50} />
      ) : (
        <Testimonials testimonials={data} />
      )}
    </section>
  );
}

export default TestimonialsSection;
