import { NavLink } from "react-router";

type props = {
  buttonType: string;
  children: string;
  to: string;
};

function Link({ children, to = "" }: props) {
  return (
    <NavLink className="text-sm" to={to}>
      {children}
    </NavLink>
  );
}

export default Link;
