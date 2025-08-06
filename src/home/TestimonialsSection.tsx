import { BeatLoader } from "react-spinners";
import SectionIntro from "../components/SectionIntro";
import { useTestimonials } from "../hooks/useTestimonial";
import Testimonials from "./Testimonials";

function TestimonialsSection() {
  const { isLoading } = useTestimonials();

  return (
    <section className="border-grey-15 m-auto border-b p-5 pt-16 pb-1 lg:container">
      <SectionIntro
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />

      {isLoading ? <BeatLoader color="#7520E9" size={50} /> : <Testimonials />}
    </section>
  );
}

export default TestimonialsSection;
