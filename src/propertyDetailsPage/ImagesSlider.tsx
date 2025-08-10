import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import type { Property } from "../types/property";

interface ImagesSliderProps {
  selectedProperty: Property;
}

function ImagesSlider({ selectedProperty }: ImagesSliderProps) {
  const imgs: string[] = [
    "/images/property-2.webp",
    "/images/property-3.webp",
    "/images/property-4.webp",
    "/images/property-5.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [image, setImage] = useState<string>(imgs[0]);

  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLImageElement;
    if (target.tagName === "IMG") {
      const clickedIndex = imgs.indexOf(target.src);
      if (clickedIndex !== -1) {
        setCurrentImageIndex(clickedIndex);
        setImage(target.src);
      }
    }
  }

  function goToPreviousImage() {
    const newIndex =
      currentImageIndex === 0 ? imgs.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setImage(imgs[newIndex]);
  }

  function goToNextImage() {
    const newIndex =
      currentImageIndex === imgs.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setImage(imgs[newIndex]);
  }

  return (
    <div className="bg-grey-10 border-grey-15 flex flex-col gap-5 rounded-lg border p-5">
      <div>
        <img src={image} className="w-full" alt={selectedProperty.title} />
      </div>
      <div className="bg-grey-08 border-grey-15 flex items-center justify-center gap-2.5 rounded-lg border p-2.5">
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
        <FaArrowLeft className="cursor-pointer" onClick={goToPreviousImage} />
        <div className="flex items-center gap-2.5">
          {imgs.map((_, i) => (
            <span
              key={i}
              className={`${i === currentImageIndex ? "bg-primary-60" : "bg-grey-30"} h-0.5 w-5`}
            ></span>
          ))}
        </div>
        <FaArrowRight className="cursor-pointer" onClick={goToNextImage} />
      </div>
    </div>
  );
}

export default ImagesSlider;
