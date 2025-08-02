import { NavLink } from "react-router";
import Announcement from "./Announcement";
import Logo from "./Logo";
import { useState } from "react";
import MenuPhone from "./MenuPhone";

function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const activeLink: string =
    "bg-grey-08 border-grey-20 rounded-md border-1 px-5 py-2.5";

  return (
    <>
      <Announcement />

      {showMenu && <MenuPhone setShowMenu={setShowMenu} />}

      <header className="bg-grey-10 border-b-grey-20 border-b-1">
        <div className="m-auto flex h-23 items-center justify-between px-3 font-normal text-white md:container">
          <Logo />
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/properties"
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
          <NavLink
            to="contact-us"
            className="bg-grey-08 border-grey-20 hidden rounded-md border-1 px-5 py-3 md:block"
          >
            Contact Us
          </NavLink>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-9 cursor-pointer"
              onClick={() => setShowMenu((showed) => !showed)}
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
