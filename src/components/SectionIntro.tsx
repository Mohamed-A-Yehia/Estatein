import { CiStar } from "react-icons/ci";

type props = {
  title: string;
  description: string;
  stars?: boolean;
  fontsize?: string;
};

function SectionIntro({
  title,
  description,
  stars = true,
  fontsize = "text-2xl",
}: props) {
  return (
    <div className="w-fit">
      {stars && (
        <div className="flex items-center">
          <CiStar className="text-grey-20 text-4xl" />
          <CiStar className="text-grey-20 text-3xl" />
          <CiStar className="text-grey-20 text-2xl" />
        </div>
      )}
      <div className="mb-10 max-w-fit sm:mb-10 md:max-w-[700px] lg:max-w-[800px]">
        <h2 className={`my-3 ${fontsize} font-semibold text-white md:text-4xl`}>
          {title}
        </h2>
        <p className="text-grey-60 text-[14px] md:text-lg md:font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionIntro;
