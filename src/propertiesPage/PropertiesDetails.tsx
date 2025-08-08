import { useParams } from "react-router";

function PropertiesDetails() {
  const { propertyId } = useParams();
  return <h1 className="text-center text-4xl text-white">{propertyId}</h1>;
}

export default PropertiesDetails;
