import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { Property } from "../types/property";

interface ImagesSliderProps {
  selectedProperty: Property;
}

function ImagesSlider({ selectedProperty }: ImagesSliderProps) {
  const [image, setImage] = useState<string>(selectedProperty.imageUrl);

  const imgs: string[] = [
    "/images/property-2.webp",
    "/images/property-3.webp",
    "/images/property-4.webp",
    "/images/property-5.webp",
  ];

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLImageElement;
    if (target.tagName === "IMG") setImage(target.src);
  }

  return (
    <div className="bg-grey-10 border-grey-15 flex flex-col gap-5 rounded-lg border p-5">
      <div>
        <img src={image} className="w-full" alt={selectedProperty.title} />
      </div>
      <div className="bg-grey-08 border-grey-15 flex items-center justify-between gap-2.5 rounded-lg border p-2.5">
        {imgs.map((image, index) => (
          <img
            className="w-15 cursor-pointer"
            src={image}
            alt={`${selectedProperty.title} - Image ${index + 1}`}
            key={index}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="bg-grey-08 border-grey-15 flex items-center justify-between rounded-full border p-5">
        <FaArrowLeft className="cursor-pointer" />
        <div className="flex items-center gap-2.5">
          {imgs.map((_, i) => (
            <span
              key={i}
              className={`${imgs[i] === image ? "bg-primary-60" : "bg-grey-30"} h-0.5 w-5`}
            ></span>
          ))}
        </div>
        <FaArrowRight className="cursor-pointer" />
      </div>
    </div>
  );
}

export default ImagesSlider;
