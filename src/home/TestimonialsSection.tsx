import { BeatLoader } from "react-spinners";
import SectionIntro from "../components/SectionIntro";
import Testimonials from "./Testimonials";
import { useTestimonial } from "../hooks/useTestimonial";

function TestimonialsSection() {
  const { isLoading } = useTestimonial();

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
