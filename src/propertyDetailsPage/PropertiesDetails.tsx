import { useParams } from "react-router";
import { useProperties } from "../hooks/useProperties";
import type { Property } from "../types/property";
import HeroSection from "./HeroSection";
import InquirySection from "./InquirySection";
import PricingDetails from "./PricingDetails";
import FaqSection from "../components/FaqSection";
import CtaSection from "../components/CtaSection";
import LoadingSpinner from "../components/LoadingSpinner";

function PropertiesDetails() {
  const { propertyId } = useParams();
  const { data, isLoading } = useProperties();

  if (isLoading) return <LoadingSpinner />;

  const selectedProperty = data?.find(
    (property: Property) => String(property.id) === propertyId,
  );

  if (!selectedProperty) return <div>Property not found</div>;

  return (
    <>
      <HeroSection selectedProperty={selectedProperty} />
      <InquirySection selectedProperty={selectedProperty} />
      <PricingDetails selectedProperty={selectedProperty} />
      <FaqSection />
      <CtaSection />
    </>
  );
}

export default PropertiesDetails;
