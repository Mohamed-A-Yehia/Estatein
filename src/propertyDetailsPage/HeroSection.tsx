import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import { useProperties } from "../hooks/useProperties";
import { FaLocationDot } from "react-icons/fa6";
import ImagesSlider from "./ImagesSlider";
import { LuBath, LuBedDouble, LuLandPlot } from "react-icons/lu";
import Features from "./Features";

function HeroSection() {
  const { propertyId } = useParams();
  const { data, isLoading } = useProperties();

  if (isLoading) return <BeatLoader color="#7520E9" size={100} />;

  const selecetedProperty = data?.find(
    (property) => String(property.id) === propertyId,
  );
  console.log(selecetedProperty);

  if (!selecetedProperty) return <div>Property not found</div>;

  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 xl:px-16">
      <div className="flex flex-col gap-5">
        <h1 className="text-[20px] font-semibold">
          {selecetedProperty.title} {selecetedProperty.type}
        </h1>
        <div className="flex items-center gap-10 text-[15px]">
          <span className="border-grey-15 flex items-center gap-2.5 rounded-lg border p-2.5">
            <FaLocationDot />
            {selecetedProperty.location}
          </span>
          <span>
            <span className="text-grey-60">Price</span>{" "}
            {selecetedProperty.price}
          </span>
        </div>
      </div>

      <ImagesSlider />

      <div className="border-grey-15 text-grey-60 flex flex-col gap-5 rounded-lg border p-5">
        <div className="border-grey-15 border-b pb-5">
          <h4 className="mb-2.5 text-[20px] font-semibold text-white">
            Description
          </h4>
          <p className="text-[15px]">
            Discover your own piece of paradise with the Seaside Serenity Villa.
            T With an open floor plan, breathtaking ocean views from every room,
            and direct access to a pristine sandy beach, this property is the
            epitome of coastal living.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <span className="flex gap-2.5">
              <LuBedDouble className="text-2xl" />
              Bedrooms
            </span>
            <span className="mt-2 block text-white">
              0{selecetedProperty.bedrooms}
            </span>
          </div>
          <div>
            <span className="flex gap-2.5">
              <LuBath className="text-2xl" />
              Bedrooms
            </span>
            <span className="mt-2 block text-white">
              0{selecetedProperty.bathrooms}
            </span>
          </div>
          <div className="border-grey-15 col-span-2 border-t pt-5">
            <span className="flex gap-2.5">
              <LuLandPlot className="text-2xl" />
              Bedrooms
            </span>
            <span className="mt-2 block text-white">
              0{selecetedProperty.area}
            </span>
          </div>
        </div>
      </div>

      <Features />
    </section>
  );
}

export default HeroSection;
