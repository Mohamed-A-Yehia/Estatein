import { NavLink } from "react-router";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={`${logo}`} alt="Esttein Logo" className="w-10" />
      <NavLink to="/" className="text-2xl font-semibold">
        Estatein
      </NavLink>
    </div>
  );
}

export default Logo;
