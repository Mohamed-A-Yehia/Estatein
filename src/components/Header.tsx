import { NavLink } from "react-router";
import Announcement from "./Announcement";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <Announcement />

      <header className="bg-grey-10 border-b-grey-20 border-b-1">
        <div className="container m-auto flex h-23 items-center justify-between font-normal text-white">
          <Logo />
          <nav>
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to="/"
                  className="bg-grey-08 border-grey-20 rounded-md border-1 px-5 py-3"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
            </ul>
          </nav>
          <NavLink
            to="contact-us"
            className="bg-grey-08 border-grey-20 rounded-md border-1 px-5 py-3"
          >
            Contact Us
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;
