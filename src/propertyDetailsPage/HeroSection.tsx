import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import { useProperties } from "../hooks/useProperties";
import { FaLocationDot } from "react-icons/fa6";
import ImagesSlider from "./ImagesSlider";

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
    </section>
  );
}

export default HeroSection;
