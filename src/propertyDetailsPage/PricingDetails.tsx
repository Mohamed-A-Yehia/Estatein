import SectionIntro from "../components/SectionIntro";
import type { Property } from "../types/property";
import AdditionalFees from "./AdditionalFees";
import InitialCosts from "./InitialCosts";
import MonthlyCosts from "./MonthlyCosts";
import MonthlyExpenses from "./MonthlyExpenses";

interface InquirySectionProps {
  selectedProperty: Property;
}

function PricingDetails({ selectedProperty }: InquirySectionProps) {
  return (
    <section className="container m-auto flex flex-col gap-10 px-4 py-8 text-white md:py-16 xl:px-16">
      <SectionIntro
        title="Comprehensive Pricing Details"
        description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
      />

      <div className="border-grey-15 flex flex-col gap-5 rounded-lg border p-5">
        <span className="border-grey-15 border-b pb-5 text-[20px]">Note</span>
        <p className="text-grey-60">
          The figures provided above are estimates and may vary depending on the
          property, location, and individual circumstances.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="text-grey-60">Listing Price</p>
        <span className="text-2xl">{selectedProperty.price}</span>
      </div>

      <AdditionalFees />
      <MonthlyCosts />
      <InitialCosts />
      <MonthlyExpenses />
    </section>
  );
}

export default PricingDetails;
