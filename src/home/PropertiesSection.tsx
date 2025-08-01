import Lists from "../components/Lists";
import { useData } from "../context/DataProvider";
import { PuffLoader } from "react-spinners";

function PropertiesSection() {
  const { isLoading, data } = useData();

  return (
    <section className="m-auto p-5 pt-16 lg:container">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-grey-20 size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-grey-20 size-5"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="text-grey-20 size-4"
        >
          <path
            fillRule="evenodd"
            d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="mb-10 sm:mb-10">
        <h2 className="my-3 text-4xl font-semibold text-white">
          Featured Properties
        </h2>
        <p className="text-grey-60 text-[14px] font-medium">
          Explore Our Handpicked Selection of featured Properties. Each listing
          offers a glimpse into exceptionl homes and investments avialable
          through Estatein.
        </p>
      </div>

      {isLoading ? (
        <PuffLoader color="#7520E9" size={100} />
      ) : (
        <Lists properties={data} />
      )}
    </section>
  );
}

export default PropertiesSection;
