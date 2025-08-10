import LinkButton from "../components/LinkButton";

function AdditionalFees() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Additional Fees</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Property Transfer Tax</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$25.000</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Based on the sale price and local regulations
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Legal Fees</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$3.000</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Approximate cost for legal services, including title transfer
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Home Inspection</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$500</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Recommended for due diligence
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Propert Insurance</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$1.200</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Annual cost for comprehensive property insurance
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Morgage Fees</p>
        <div className="flex items-center gap-5">
          <span className="text-white">Varies</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            If applicable, consult with your lender for specific details
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdditionalFees;
