import LinkButton from "../components/LinkButton";

const monthlyExpensesData = [
  {
    title: "Property Taxes",
    amount: "$1.250",
    description: "",
  },
  {
    title: "Homeowners' Association Fee",
    amount: "$300",
    description: "",
  },
  {
    title: "Mortgage Payment",
    amount: "$250.000",
    description: "Varies based on terms and interest rate",
  },
  {
    title: "Property Insurance",
    amount: "$100",
    description: "Approximate Monthly Cost",
  },
];

function MonthlyExpenses() {
  return (
    <div className="border-grey-15 divide-grey-15 flex flex-col gap-5 divide-y rounded-lg border p-5">
      <div className="flex items-center justify-between pb-5">
        <p>Monthly Expenses</p>
        <LinkButton to="" buttonType="">
          Learn More
        </LinkButton>
      </div>
      {monthlyExpensesData.map((expense, index) => (
        <div key={index} className="text-grey-60 flex flex-col gap-2.5 pb-5">
          <p className="block">{expense.title}</p>
          <div className="flex items-center gap-5">
            <span className="text-white">{expense.amount}</span>
            {expense.description && (
              <p className="bg-grey-10 border-grey-15 rounded-lg border p-2.5">
                {expense.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MonthlyExpenses;
