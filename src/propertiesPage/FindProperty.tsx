import SectionIntro from "../components/SectionIntro";
import FindPropertyForm from "./FindPropertyForm";

function FindProperty() {
  return (
    <section className="container m-auto px-4 py-8 text-white md:py-16 xl:px-16">
      <SectionIntro
        title="Let's Make it Happen"
        description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
        stars={true}
      />

      <FindPropertyForm />
    </section>
  );
}

export default FindProperty;
