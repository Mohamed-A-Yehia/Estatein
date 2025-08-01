import SectionIntro from "../components/SectionIntro";
import Testimonials from "./Testimonials";

function TestimonialsSection() {
  return (
    <section className="m-auto p-5 pt-16 lg:container">
      <SectionIntro
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      />

      <Testimonials />
    </section>
  );
}

export default TestimonialsSection;
