import SectionIntro from "../components/SectionIntro";
import Staticts from "../components/Staticts";

import aboutDesktop from "../assets/about-desktop.webp";
import aboutLatptop from "../assets/about-laptop.webp";
import aboutPhone from "../assets/about-phone.webp";

function HeroSection() {
  return (
    <section className="m-auto grid w-full grid-rows-2 flex-col items-center gap-10 p-4 py-8 md:container md:grid-rows-1 lg:grid-cols-2 lg:gap-15 lg:py-16 xl:px-10">
      <div>
        <SectionIntro
          title="Our Journey"
          description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
          stars={true}
        />
        <Staticts />
      </div>
      <div className="border-grey-15 row-span-full rounded-lg border bg-[url('/images/images-bg.webp')] bg-cover bg-center lg:row-auto">
        <picture>
          <source media="(max-width: 449px)" srcSet={aboutPhone} />
          <source
            media="(min-width: 450px) and (max-width: 768px)"
            srcSet={aboutLatptop}
          />
          <source media="(min-width: 770px)" srcSet={aboutDesktop} />
          <img
            src={aboutDesktop}
            alt="Estate Image"
            fetchPriority="high"
            className="w-full"
          />
        </picture>
      </div>
    </section>
  );
}

export default HeroSection;
