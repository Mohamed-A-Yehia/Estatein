import heroImg from "../assets/hero-image.png";

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
            <button className="bg-grey-15 border-grey-20 cursor-pointer rounded-md border-1 p-3">
              Learn More
            </button>
            <button className="bg-primary-60 cursor-pointer rounded-md p-3">
              Browse Properties
            </button>
          </div>
          <div className="mt-10 mb-5 grid grid-cols-2 justify-center gap-2.5 text-center md:flex lg:mt-12 lg:justify-start xl:gap-5">
            <div className="bg-grey-10 text-grey-60 border-grey-20 rounded-md border-1 px-7 py-3.5">
              <span className="block text-3xl font-medium text-white">
                200+
              </span>
              Happy Customers
            </div>
            <div className="bg-grey-10 text-grey-60 border-grey-20 rounded-md border-1 px-7 py-3.5">
              <span className="block text-3xl font-medium text-white">
                10k+
              </span>
              Properties For Clients
            </div>
            <div className="bg-grey-10 text-grey-60 border-grey-20 col-span-2 rounded-md border-1 px-7 py-3.5">
              <span className="block text-3xl font-medium text-white">16+</span>
              Years Of Experience
            </div>
          </div>
        </div>
        <div className="bg-grey-15 row-span-full w-full lg:row-auto">
          <img src={heroImg} alt="" className="w-full" />
        </div>
      </div>
      <div className="border-grey-10 grid grid-cols-2 gap-2.5 border-8 p-2.5 text-center lg:grid-cols-4 lg:gap-5 lg:p-5">
        <div className="bg-grey-10 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-65 size-9"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>

          <p className="mt-5 text-white">Find Your Drem Home</p>
        </div>
        <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-65 size-9"
          >
            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            <path
              fillRule="evenodd"
              d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z"
              clipRule="evenodd"
            />
            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
          </svg>

          <p className="mt-5 text-white">Unlock Property Value</p>
        </div>
        <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-65 size-9"
          >
            <path
              fillRule="evenodd"
              d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
              clipRule="evenodd"
            />
          </svg>

          <p className="mt-5 text-white">Effortless Property Management</p>
        </div>
        <div className="bg-grey-10 text-grey-60 border-grey-20 flex flex-col items-center rounded-md border-1 px-5 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-65 size-9"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>

          <p className="mt-5 text-white">
            Smart Investments, Informed Descisions
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
