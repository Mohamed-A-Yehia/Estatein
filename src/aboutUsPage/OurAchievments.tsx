import SectionIntro from "../components/SectionIntro";

function OurAchievments() {
  return (
    <section className="container m-auto px-4 py-8 sm:py-16 lg:px-0 xl:px-10">
      <SectionIntro
        stars={true}
        title="Our Achievments"
        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
      />

      <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3">
        <div className="ring-grey-15 border-grey-60 bg-grey-10 rounded-lg border p-6 ring-6 lg:p-10">
          <h4 className="mb-2.5 text-[20px] font-semibold">
            3+ Years of Excllence
          </h4>
          <p className="text-grey-60 text-sm">
            With over 3 years in the industry, we've amassed a wealth of
            knowledge and experience, becoming a go-to resource for all things
            real estate.
          </p>
        </div>
        <div className="border-grey-60 bg-grey-10 ring-grey-15 rounded-lg border p-6 ring-6 lg:p-10">
          <h4 className="mb-2.5 text-[20px] font-semibold">Happy Clients</h4>
          <p className="text-grey-60 text-sm">
            Our greatest achievement is the satisfaction of our clients. Their
            success stories fuel our passion for what we do.
          </p>
        </div>
        <div className="border-grey-60 bg-grey-10 ring-grey-15 rounded-lg border p-6 ring-6 lg:p-10">
          <h4 className="mb-2.5 text-[20px] font-semibold">
            Industry Recognition
          </h4>
          <p className="text-grey-60 text-sm">
            We've earned the respect of our peers and industry leaders, with
            accolades and awards that reflect our commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurAchievments;
