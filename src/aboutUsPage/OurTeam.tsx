import ContactInput from "../components/ContactInput";
import SectionIntro from "../components/SectionIntro";

function OurTeam() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 lg:px-0 xl:px-10">
      <SectionIntro
        title="Meet The Estatein Team"
        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        stars={true}
      />

      <ContactInput emailIcon={false} placeholder="Say Hey 👋" rounded={100} />
    </section>
  );
}

export default OurTeam;
