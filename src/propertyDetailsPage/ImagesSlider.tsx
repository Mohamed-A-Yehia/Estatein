import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ImagesSlider() {
  const [image, setImage] = useState<string>("/images/property-1.webp");
  const imgs: string[] = [
    "property-2",
    "property-3",
    "property-4",
    "property-5",
  ];
  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLImageElement;
    if (target.tagName === "IMG") setImage(target.src);
  }

  return (
    <div className="bg-grey-10 border-grey-15 flex flex-col gap-5 rounded-lg border p-5">
      <div>
        <img src={image} className="w-full" alt="prop 1" />
      </div>
      <div className="bg-grey-08 border-grey-15 flex items-center justify-between gap-2.5 rounded-lg border p-2.5">
        {imgs.map((image) => (
          <img
            className="w-15 cursor-pointer"
            src={`/images/${image}.webp`}
            alt={image}
            key={image}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="bg-grey-08 border-grey-15 flex items-center justify-between rounded-full border p-5">
        <FaArrowLeft className="cursor-pointer" />
        <div className="flex items-center gap-2.5">
          {imgs.map((i) => (
            <span
              key={i}
              className={`${i === image ? "bg-primary-60" : "bg-grey-30"} h-0.5 w-5`}
            ></span>
          ))}
        </div>
        <FaArrowRight className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ImagesSlider;
