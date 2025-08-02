import { Link } from "react-router";

type props = {
  buttonType: string;
  children: string;
  to: string;
};

function NormalLink({ children, to = "" }: props) {
  return (
    <Link className="text-sm" to={to}>
      {children}
    </Link>
  );
}

export default NormalLink;
