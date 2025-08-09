import { NavLink } from "react-router";

function CtaButton() {
  return (
    <NavLink
      to="contact-us"
      className="bg-grey-08 border-grey-20 rounded-md border-1 px-5 py-3 text-white"
    >
      Contact Us
    </NavLink>
  );
}

export default CtaButton;
