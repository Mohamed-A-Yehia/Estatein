import SectionIntro from "../components/SectionIntro";

function OurTeam() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 lg:px-0 xl:px-10">
      <SectionIntro
        title="Meet The Estatein Team"
        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        stars={true}
      />

      <div className="grid grid-cols-1 text-white">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default OurTeam;
