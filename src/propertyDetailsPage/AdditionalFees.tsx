import LinkButton from "../components/LinkButton";

const additionalFeesData = [
  {
    title: "Property Transfer Tax",
    amount: "$25.000",
    description: "Based on the sale price and local regulations",
  },
  {
    title: "Legal Fees",
    amount: "$3.000",
    description:
      "Approximate cost for legal services, including title transfer",
  },
  {
    title: "Home Inspection",
    amount: "$500",
    description: "Recommended for due diligence",
  },
  {
    title: "Propert Insurance",
    amount: "$1.200",
    description: "Annual cost for comprehensive property insurance",
  },
  {
    title: "Morgage Fees",
    amount: "Varies",
    description: "If applicable, consult with your lender for specific details",
  },
];

function AdditionalFees() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Additional Fees</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      {additionalFeesData.map((fee, index) => (
        <div key={index} className="text-grey-60 flex flex-col gap-2.5 pb-5">
          <p className="block">{fee.title}</p>
          <div className="flex items-center gap-5">
            <span className="text-white">{fee.amount}</span>
            <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
              {fee.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdditionalFees;
