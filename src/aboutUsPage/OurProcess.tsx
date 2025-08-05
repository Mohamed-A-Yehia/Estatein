import SectionIntro from "../components/SectionIntro";

function OurProcess() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 xl:px-0">
      <SectionIntro
        title=" Navigating the Estatein Experience"
        description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        stars={true}
      />

      <div className="mt-15 text-white">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-3">
          <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5">
            <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px]">
              Step 01
            </span>
            <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-11px] before:h-[1px] before:w-20">
              Discover a World Of Possibilities
            </h4>
            <p className="text-grey-60 text-[15px]">
              Your journey begins with exploring our carefully curated property
              listings. Use our intuitive search tools to filter properties
              based on your preferences, including location,
            </p>
          </div>
          <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5">
            <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px]">
              Step 02
            </span>
            <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-11px] before:h-[1px] before:w-20">
              Narrowing Down Your Choices
            </h4>
            <p className="text-grey-60 text-[15px]">
              Once you've found properties that catch your eye, save them to
              your account or make a shortlist. This allows you to compare and
              revisit your favorites as you make your decision.
            </p>
          </div>
          <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5">
            <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px]">
              Step 03
            </span>
            <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-11px] before:h-[1px] before:w-20">
              Personalized Guidance
            </h4>
            <p className="text-grey-60 text-[15px]">
              Have questions about a property or need more information? Our
              dedicated team of real estate experts is just a call or message
              away.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default OurProcess;
