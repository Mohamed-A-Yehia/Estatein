import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { LuBath, LuBedDouble } from "react-icons/lu";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
            className="border-grey-20 flex w-full flex-col justify-between gap-4 rounded-md border-1 p-6 lg:w-1/3"
          >
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full rounded-md"
            />
            <h2 className="text-lg font-semibold">{property.title}</h2>
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
            <div className="flex content-end items-center justify-between md:flex-col md:items-start md:gap-2.5">
              <p className="text-grey-60">
                Price<span className="block text-white">{property.price}</span>
              </p>
              <NavLink
                className="bg-primary-60 rounded-md p-2.5 text-[16px]"
                to="/"
              >
                View Property Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-around py-4 text-white">
        <button
          className="bg-grey-15 cursor-pointer rounded-full p-2.5"
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={start === 0}
        >
          <FaArrowLeft />
        </button>
        <p>
          0{index} of 0{maxIndex}
        </p>
        <button
          className="bg-grey-15 cursor-pointer rounded-full p-2.5"
          onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
          disabled={start === maxIndex}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Lists;

// grid gap-3 overflow-hidden md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3
