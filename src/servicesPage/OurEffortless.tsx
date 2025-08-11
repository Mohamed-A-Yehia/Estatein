import { HiMiniSquaresPlus } from "react-icons/hi2";
import LinkButton from "../components/LinkButton";
import SectionIntro from "../components/SectionIntro";
import { GrVmMaintenance } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";

function OurEffortless() {
  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 xl:px-16">
      <SectionIntro
        title="Effortless Property Management"
        description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership."
      />

      <div className="grid gap-5">
        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <HiMiniSquaresPlus size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Tenant Harmony
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Our Tenant Management services ensure that your tenants have a
            smooth and reducing vacancies.
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <GrVmMaintenance size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Maintenance Ease
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Say goodbye to property maintenance headaches. We handle all aspects
            of property upkeep.
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <BsStars size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Financial Peace of Mind
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Managing property finances can be complex. Our financial experts
            take care of rent collection
          </p>
        </div>

        <div className="border-grey-15 rounded-lg border p-5">
          <div className="mb-2.5 flex items-center gap-5">
            <IoSunnySharp size={30} className="text-primary-65" />
            <p className="text-[20px] font-semibold md:text-2xl">
              Legal Guardian
            </p>
          </div>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Stay compliant with property laws and regulations effortlessly.
          </p>
        </div>

        <div className="border-grey-15 flex flex-col gap-5 rounded-lg border bg-[url('/images/images-bg.webp')] bg-cover bg-center p-5">
          <p className="text-[20px] font-semibold md:text-2xl">
            Experience Effortless Property Management
          </p>
          <LinkButton to="" buttonType="">
            Learn More
          </LinkButton>
          <p className="text-grey-60 text-[15px] md:text-lg">
            Ready to experience hassle-free property management? Explore our
            Property Management Service categories and let us handle the
            complexities while you enjoy the benefits of property ownership.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurEffortless;
