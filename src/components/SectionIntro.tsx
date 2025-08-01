import { TiStarFullOutline } from "react-icons/ti";

type props = {
  title: string;
  description: string;
};

function SectionIntro({ title, description }: props) {
  return (
    <>
      <div className="flex items-center">
        <TiStarFullOutline className="text-grey-40 text-4xl" />
        <TiStarFullOutline className="text-grey-30 text-3xl" />
        <TiStarFullOutline className="text-grey-20 text-2xl" />
      </div>
      <div className="mb-10 sm:mb-10">
        <h2 className="my-3 text-2xl font-semibold text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-grey-60 text-[14px] md:text-lg md:font-medium">
          {description}
        </p>
      </div>
    </>
  );
}

export default SectionIntro;
