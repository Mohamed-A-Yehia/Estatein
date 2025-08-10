import LinkButton from "../components/LinkButton";

function MonthlyCosts() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Monthly Costs</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Property Taxes</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$1.250</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Approximate monthly property tax based on the sale price and local
            rates
          </p>
        </div>
      </div>
      <div className="text-grey-60 flex flex-col gap-2.5 pb-5">
        <p className="block">Homeowners' Association Fee</p>
        <div className="flex items-center gap-5">
          <span className="text-white">$300</span>
          <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
            Monthly fee for common area maintenance and security
          </p>
        </div>
      </div>
    </div>
  );
}

export default MonthlyCosts;
