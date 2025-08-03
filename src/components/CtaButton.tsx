import { NavLink } from "react-router";

function CtaButton() {
  return (
    <NavLink
      to="contact-us"
      //   onClick={() => setShowMenu((showed) => !showed)}
      className="bg-grey-08 border-grey-20 hidden rounded-md border-1 px-5 py-3 text-white md:block"
    >
      Contact Us
    </NavLink>
  );
}

export default CtaButton;
