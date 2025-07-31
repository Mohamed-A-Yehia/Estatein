import { NavLink } from "react-router";

type props = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuPhone({ setShowMenu }: props) {
  return (
    <header className="relative">
      <nav className="absolute m-auto flex min-h-screen w-full items-center justify-center px-3 font-normal text-white backdrop-blur-2xl">
        <ul className="flex flex-col items-center gap-6">
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
          <li>
            <NavLink to="contact-us" className="md:block">
              Contact Us
            </NavLink>
          </li>
        </ul>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute top-5 right-3 size-10 cursor-pointer"
          onClick={() => setShowMenu((showed) => !showed)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </nav>
    </header>
  );
}

export default MenuPhone;
