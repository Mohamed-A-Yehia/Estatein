import SectionIntro from "../components/SectionIntro";

function OurProcess() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 lg:px-0 xl:px-10">
      <SectionIntro
        title=" Navigating the Estatein Experience"
        description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        stars={true}
      />

      <div className="mt-15 grid grid-cols-1 gap-20 pt-5 text-white md:grid-rows-1">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-10 xl:grid-cols-3">
          <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5 lg:p-5">
            <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px] md:top-[-15%] xl:top-[-25%]">
              Step 01
            </span>
            <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-3%] before:h-[1px] before:w-20 before:md:ml-[-4%]">
              Discover a World Of Possibilities
            </h4>
            <p className="text-grey-60 text-[15px]">
              Your journey begins with exploring our carefully curated property
              listings. Use our intuitive search tools to filter properties
              based on your preferences, including location,
            </p>
          </div>
          <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5 lg:p-5">
            <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px] md:top-[-15%] xl:top-[-25%]">
              Step 02
            </span>
            <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-3%] before:h-[1px] before:w-20 before:md:ml-[-4%]">
              Narrowing Down Your Choices
            </h4>
            <p className="text-grey-60 text-[15px]">
              Once you've found properties that catch your eye, save them to
              your account or make a shortlist. This allows you to compare and
              revisit your favorites as you make your decision.
            </p>
          </div>
          <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5 lg:p-5">
            <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px] sm:top-[-15%] xl:top-[-25%]">
              Step 03
            </span>
            <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-3%] before:h-[1px] before:w-20 before:md:ml-[-4%]">
              Personalized Guidance
            </h4>
            <p className="text-grey-60 text-[15px]">
              Have questions about a property or need more information? Our
              dedicated team of real estate experts is just a call or message
              away.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-10 xl:grid-cols-3">
            <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5 lg:p-5">
              <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px] md:top-[-15%] xl:top-[-25%]">
                Step 04
              </span>
              <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-3%] before:h-[1px] before:w-20 before:md:ml-[-4%]">
                See It for Yourself
              </h4>
              <p className="text-grey-60 text-[15px]">
                Arrange viewings of the properties you're interested in. We'll
                coordinate with the property owners and accompany you to ensure
                you get a firsthand look at your potential new home.
              </p>
            </div>
            <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5 lg:p-5">
              <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px] md:top-[-15%] xl:top-[-25%]">
                Step 05
              </span>
              <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-3%] before:h-[1px] before:w-20 before:md:ml-[-4%]">
                Making Informed Decisions
              </h4>
              <p className="text-grey-60 text-[15px]">
                Before making an offer, our team will assist you with due
                diligence, including property inspections, legal checks, and
                market analysis. We want you to be fully informed.
              </p>
            </div>
            <div className="border-grey-20 relative rounded-lg rounded-tl-none border p-2.5 lg:p-5">
              <span className="before:bg-primary-65 absolute top-[-25%] left-0 pl-2.5 before:absolute before:top-[-5px] before:ml-[-11px] before:h-20 before:w-[1px] md:top-[-15%] xl:top-[-25%]">
                Step 06
              </span>
              <h4 className="before:bg-primary-65 mb-2.5 text-[20px] font-semibold before:absolute before:top-[-1px] before:ml-[-3%] before:h-[1px] before:w-20 before:md:ml-[-4%]">
                Getting The Best Deal
              </h4>
              <p className="text-grey-60 text-[15px]">
                We'll help you negotiate the best terms and prepare your offer.
                Our goal is to secure the property at the right price and on
                favorable terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
