import LinkButton from "../components/LinkButton";

function InitialCosts() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Total Initial Costs</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Listing Price</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$1.250.000</span>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Additional Fees</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$29.700</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Property transfer tax, legal fees, inspection, insurance
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Down Payment</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$250.000</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            20%
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Mortgge Amount</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$1.000.000</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            If applicable
          </p>
        </div>
      </div>
    </div>
  );
}

export default InitialCosts;
