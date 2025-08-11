import { IoCellular } from "react-icons/io5";
import SectionIntro from "../components/SectionIntro";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { HiMiniCircleStack } from "react-icons/hi2";
import { PiSpeakerNoneFill } from "react-icons/pi";
import LinkButton from "../components/LinkButton";

function PropertyValue() {
  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 xl:px-16">
      <SectionIntro
        title="Unlock Property Value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is."
      />

      <div className="grid gap-5">
        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <IoCellular size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Valuation Mastery
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Discover the true worth of your property with our expert valuation
            services.
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <BiSolidCircleThreeQuarter size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Strategic Marketing
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Selling a property requires more than just a listing; it demands a
            strategic marketing.
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <HiMiniCircleStack size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Negotiation Wizardry
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Negotiating the best deal is an art, and our negotiation experts are
            masters of it.
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <PiSpeakerNoneFill size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Closing Success
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            A successful sale is not complete until the closing. We guide you
            through the intricate closing process.
          </p>
        </div>

        <div className="border-grey-15 flex flex-col gap-5 rounded-lg border bg-[url('/images/images-bg.webp')] bg-cover bg-center p-5">
          <p className="text-[20px] font-semibold md:text-2xl">
            Unlock The Value of Your Property Today
          </p>
          <LinkButton to="" buttonType="">
            Learn More
          </LinkButton>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Ready to unlock the true value of your property? Explore our
            Property Selling Service categories and let us help you achieve the
            best deal possible for your valuable asset.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PropertyValue;
