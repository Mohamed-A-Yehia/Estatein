import { FaStar } from "react-icons/fa";
import SectionIntro from "../components/SectionIntro";
import { BsPeopleFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";

function OurValues() {
  return (
    <section className="m-auto flex flex-col items-center gap-5 p-5 py-8 sm:container sm:py-16 xl:flex-row xl:gap-20">
      <div>
        <SectionIntro
          title="Our Values"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          stars={true}
        />
      </div>
      <div className="bg-grey-15 border-grey-15 rounded-lg border-7">
        <div className="border-grey-30 bg-grey-10 rounded-lg border p-5 text-white md:p-10">
          <div className="border-grey-30 mb-5 grid grid-cols-1 grid-rows-1 gap-5 border-0 border-b pb-5 md:mb-10 md:grid-cols-2 md:pb-10">
            <div className="border-grey-30 border-b pb-5 md:border-0 md:pb-0">
              <span className="mb-2.5 flex items-center gap-5 text-lg font-semibold md:text-[20px]">
                <FaStar className="border-primary-60 text-primary-70 inline-block size-10 rounded-full border p-2.5 md:size-15" />
                Truest
              </span>
              <p className="text-grey-60 text-[15px] font-medium md:text-lg md:font-semibold">
                Trust is the cornerstone of every successful real estate
                transaction.
              </p>
            </div>
            <div className="border-grey-30 md:border-l md:pl-10">
              <span className="mb-2.5 flex items-center gap-5 text-lg font-semibold md:text-[20px]">
                <IoMdSchool className="border-primary-60 text-primary-70 inline-block size-10 rounded-full border p-2.5 md:size-15" />
                Excellence
              </span>
              <p className="text-grey-60 text-[15px] font-medium md:text-lg md:font-semibold">
                We set the bar high for ourselves. From the properties we list
                to the services we provide.
              </p>
            </div>
          </div>
          <div className="grid grid-rows-1 gap-2.5 md:grid-cols-2 lg:gap-5">
            <div className="border-grey-30 mb-2.5 border-b pb-5 md:border-0 md:pb-0">
              <span className="mb-2.5 flex items-center gap-5 text-lg font-semibold md:text-[20px]">
                <BsPeopleFill className="border-primary-60 text-primary-70 inline-block size-10 rounded-full border p-2.5 md:size-15" />
                Client-Centric
              </span>
              <p className="text-grey-60 text-[15px] font-medium md:text-lg md:font-semibold">
                Your dreams and needs are at the center of our universe. We
                listen, understand.
              </p>
            </div>
            <div className="border-grey-30 md:border-l md:pb-0 md:pl-10">
              <span className="mb-2.5 flex items-center gap-5 text-lg font-semibold md:text-[20px]">
                <FaStar className="border-primary-60 text-primary-70 inline-block size-10 rounded-full border p-2.5 md:size-15" />
                Our Commitment
              </span>
              <p className="text-grey-60 text-[15px] font-medium md:text-lg md:font-semibold">
                We are dedicated to providing you with the highest level of
                service, professionalism, and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
