import { FaBuilding, FaHome } from "react-icons/fa";
import heroDesktop from "../assets/hero-image.webp";
import heroLaptop from "../assets/hero-laptop.webp";
import heroPhone from "../assets/hero-phone.webp";
import { FaTableCellsRowUnlock } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import LinkButton from "../components/LinkButton";
import Staticts from "../components/Staticts";

function HeroSection() {
  return (
    <section className="bg-grey-08">
      <div className="grid grid-rows-2 gap-5 p-2.5 md:grid-rows-1 lg:grid-cols-2 xl:gap-15">
        <div className="self-center sm:pl-2 xl:pl-20">
          <div>
            <h1 className="text-3xl font-semibold text-white md:text-6xl">
              Discover Your Dream Property With Estatein
            </h1>
            <p className="text-grey-60 mt-10 text-[17px] font-light md:text-[18px]">
              Your Journey to finding the perfect property begins here. explore
              our listings to find the home that matches your dreams
            </p>
          </div>
          <div className="mt-10 flex flex-col justify-center gap-4 text-white md:flex-row md:gap-8 lg:justify-start xl:mt-12">
            <LinkButton to="" buttonType="">
              Learn More
            </LinkButton>
            <LinkButton to="" buttonType="primary">
              Browse Properties
            </LinkButton>
          </div>
          <Staticts />
        </div>
        <div className="bg-grey-15 row-span-full w-full lg:row-auto">
          <picture>
            <source media="(max-width: 449px)" srcSet={heroPhone} />
            <source
              media="(min-width: 450px) and (max-width: 768px)"
              srcSet={heroLaptop}
            />
            <source media="(min-width: 770px)" srcSet={heroDesktop} />
            <img
              src={heroDesktop}
              alt="Estate Image"
              fetchPriority="high"
              className="w-full"
            />
          </picture>
        </div>
      </div>
      <div className="border-grey-10 grid grid-cols-2 gap-2.5 border-8 p-2.5 text-center lg:grid-cols-4 lg:gap-5 lg:p-5">
        <div className="bg-grey-10 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <FaHome className="text-primary-65 size-9" />
          <p className="mt-5 text-white">Find Your Drem Home</p>
        </div>
        <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <FaTableCellsRowUnlock className="text-primary-65 size-9" />
          <p className="mt-5 text-white">Unlock Property Value</p>
        </div>
        <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <FaBuilding className="text-primary-65 size-9" />
          <p className="mt-5 text-white">Effortless Property Management</p>
        </div>
        <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <FiSun className="text-primary-65 size-9" />
          <p className="mt-5 text-white">
            Smart Investments, Informed Descisions
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
