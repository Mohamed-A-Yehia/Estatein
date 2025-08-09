import { useState } from "react";

function ImagesSlider() {
  // 1) Store The Image In let Var
  const [image, setImage] = useState<string>("/images/property-1.webp");
  const imgs: string[] = [
    "property-2",
    "property-3",
    "property-4",
    "property-5",
  ];
  // 2) Create A handleClick Function
  function handleClick(e: React.MouseEvent) {
    const target = e.target as HTMLImageElement;
    if (target.tagName === "IMG") setImage(target.src);
  }
  // 3) If One Of The Images Clicked, Make The let Var = The New Image

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
      <div></div>
    </div>
  );
}

export default ImagesSlider;
