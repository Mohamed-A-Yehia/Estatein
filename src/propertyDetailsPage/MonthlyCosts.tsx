import LinkButton from "../components/LinkButton";

const monthlyCostsData = [
  {
    title: "Property Taxes",
    amount: "$1.250",
    description:
      "Approximate monthly property tax based on the sale price and local rates",
  },
  {
    title: "Homeowners' Association Fee",
    amount: "$300",
    description: "Monthly fee for common area maintenance and security",
  },
];

function MonthlyCosts() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Monthly Costs</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      {monthlyCostsData.map((cost, index) => (
        <div key={index} className="text-grey-60 flex flex-col gap-2.5 pb-5">
          <p className="text-sm md:text-[20px]">{cost.title}</p>
          <div className="flex items-center gap-5">
            <span className="text-white">{cost.amount}</span>
            <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5 text-sm md:text-[20px]">
              {cost.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MonthlyCosts;
