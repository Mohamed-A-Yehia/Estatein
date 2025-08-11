import { IoCellular } from "react-icons/io5";
import LinkButton from "../components/LinkButton";
import SectionIntro from "../components/SectionIntro";
import { FaFireAlt, FaLightbulb } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Investments() {
  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 xl:px-16">
      <SectionIntro
        title="Smart Investments, Informed Decisions"
        description="Building a real estate portfolio requires a strategic approach."
      />

      <div className="grid gap-5">
        <div className="border-grey-15 flex flex-col gap-5 rounded-lg border bg-[url('/images/images-bg.webp')] bg-cover bg-center p-5">
          <p className="text-[20px] font-semibold md:text-2xl">
            Unlock Your Investment Potential
          </p>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Explore our Property Management Service categories and let us handle
            the complexities while you enjoy the benefits of property ownership.
          </p>
          <LinkButton to="" buttonType="">
            Learn More
          </LinkButton>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <IoCellular size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Market Insight
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Stay ahead of market trends with our expert Market Analysis. We
            provide in-depth insights into real estate market conditions
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <FaFireAlt size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              ROI Assessment
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Make investment decisions with confidence. Our ROI Assessment
            services evaluate the potential returns on your investments
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <FaLightbulb size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Customized Strategies
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Every investor is unique, and so are their goals. We develop
            Customized Investment Strategies tailored to your specific needs
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <MdSunny size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Diversification Mastery
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Diversify your real estate portfolio effectively. Our experts guide
            you in spreading your investments across various property types and
            locations
          </p>
        </div>
      </div>
    </section>
  );
}

export default Investments;
