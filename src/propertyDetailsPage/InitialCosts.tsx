import LinkButton from "../components/LinkButton";

const initialCostsData = [
  {
    title: "Listing Price",
    amount: "$1.250.000",
    description: "",
  },
  {
    title: "Additional Fees",
    amount: "$29.700",
    description: "Property transfer tax, legal fees, inspection, insurance",
  },
  {
    title: "Down Payment",
    amount: "$250.000",
    description: "20%",
  },
  {
    title: "Mortgge Amount",
    amount: "$1.000.000",
    description: "If applicable",
  },
];

function InitialCosts() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Total Initial Costs</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      {initialCostsData.map((cost, index) => (
        <div key={index} className="text-grey-60 flex flex-col gap-2.5 pb-5">
          <p className="text-sm md:text-[20px]">{cost.title}</p>
          <div className="flex items-center gap-5">
            <span className="text-white">{cost.amount}</span>
            {cost.description && (
              <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5 text-sm md:text-[20px]">
                {cost.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InitialCosts;
