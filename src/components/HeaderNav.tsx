import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";

// relative m-auto flex min-h-screen w-full items-center justify-center font-normal text-white backdrop-blur-2xl sm:static sm:m-0 sm:block sm:min-h-fit sm:w-fit sm:px-3 sm:backdrop-blur-none

function HeaderNav() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const activeLink: string =
    "bg-grey-08 border-grey-20 rounded-md border-1 px-5 py-2.5";

  return (
    <>
      <nav
        className={`${showMenu ? "absolute top-0 z-10 flex h-screen w-full items-center justify-center backdrop-blur-2xl" : ""} ${!showMenu && "hidden"} md:static md:block md:h-fit md:w-fit md:backdrop-blur-none`}
      >
        <ul
          className={`${showMenu && "flex-col"} flex items-center gap-6 md:flex-row`}
        >
          <li>
            <NavLink
              to="/"
              onClick={() => setShowMenu((showed) => !showed)}
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              onClick={() => setShowMenu((showed) => !showed)}
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              onClick={() => setShowMenu((showed) => !showed)}
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => setShowMenu((showed) => !showed)}
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Services
            </NavLink>
          </li>
        </ul>

        {showMenu && (
          <IoMdClose
            className="absolute top-5 right-3 size-10 cursor-pointer"
            onClick={() => setShowMenu((showed) => !showed)}
          />
        )}
      </nav>

      <IoMenu
        className="size-14 cursor-pointer pr-3 sm:pr-0 md:hidden"
        onClick={() => setShowMenu((showed) => !showed)}
      />
    </>
  );
}

export default HeaderNav;
