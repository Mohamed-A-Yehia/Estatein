import { NavLink } from "react-router";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2 pl-3 md:pl-0">
      <img
        src={logo}
        alt="Esttein Logo"
        className="h-7 w-7 sm:h-8.5 sm:w-8.5 md:h-12 md:w-12"
      />
      <NavLink to="/" className="text-2xl font-semibold">
        Estatein
      </NavLink>
    </div>
  );
}

export default Logo;
