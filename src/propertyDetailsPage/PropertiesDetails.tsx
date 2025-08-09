import { useParams } from "react-router";
import { useProperties } from "../hooks/useProperties";
import { BeatLoader } from "react-spinners";

function PropertiesDetails() {
  const { propertyId } = useParams();
  const { data, isLoading } = useProperties();

  if (isLoading) return <BeatLoader color="#7520E9" size={100} />;

  const selecetedProperty = data?.find(
    (property) => String(property.id) === propertyId,
  );
  console.log(selecetedProperty);

  return <h1 className="text-center text-4xl text-white">{propertyId}</h1>;
}

export default PropertiesDetails;
