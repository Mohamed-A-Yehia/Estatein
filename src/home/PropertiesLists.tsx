import { useEffect, useState } from "react";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import LinkButton from "../components/LinkButton";
import PrevNextButtons from "../components/PrevNextButtons";

interface Property {
  id: string;
  title: string;
  tag: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
}

interface ListsProps {
  properties: Property[];
}

function Lists({ properties }: ListsProps) {
  const [index, setIndex] = useState(0);

  const getVisibleCount = () => {
    if (window.innerWidth >= 800) return 3;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, properties.length - visibleCount);
  const start = Math.min(index, maxIndex);
  const visible = properties.slice(start, start + visibleCount);

  return (
    <div className="relative w-full text-white">
      <div className="flex gap-4 transition-all duration-300">
        {visible.map((property) => (
          <div
            key={property.id}
            className="border-grey-20 flex w-full flex-col justify-between gap-3 rounded-md border-1 p-6 lg:w-1/3"
          >
            <img
              src={property.imageUrl}
              loading="lazy"
              alt={property.title}
              className="w-full rounded-md"
            />
            <h2 className="text-lg font-semibold sm:text-2xl">
              {property.title}
            </h2>
            <p className="text-grey-60">{property.shortDescription}</p>
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-grey-15 flex items-center gap-2.5 rounded-full px-2 py-1">
                <LuBedDouble />
                <p>{property.bedrooms} Bedrooms</p>
              </div>
              <div className="bg-grey-15 flex items-center gap-2.5 rounded-full px-2 py-1">
                <LuBath />
                <p>{property.bathrooms} Bathrooms</p>
              </div>
              <div className="bg-grey-15 flex items-center gap-2.5 rounded-full px-2 py-1">
                <HiOutlineBuildingOffice />
                <p>{property.type}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 md:flex-row md:items-start md:gap-2.5">
              <p className="text-grey-60">
                Price<span className="block text-white">{property.price}</span>
              </p>
              <LinkButton buttonType="primary" to="">
                View Property Details
              </LinkButton>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around py-4 text-white">
        <PrevNextButtons
          maxIndex={maxIndex}
          setIndex={setIndex}
          start={start}
          index={index}
        />
      </div>
    </div>
  );
}

export default Lists;
