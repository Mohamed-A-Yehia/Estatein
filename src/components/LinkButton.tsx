import { Link } from "react-router";

type props = {
  buttonType: string;
  children: string;
  to: string;
};

function LinkButton({ children, buttonType = "", to }: props) {
  const color =
    buttonType === "primary"
      ? "bg-primary-60 "
      : "bg-grey-15 border-grey-20 border-1";

  return (
    <Link
      to={to}
      className={`${color} cursor-pointer rounded-md p-3 text-center text-[16px] text-white sm:text-lg`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
