import { MdOutlineEmail } from "react-icons/md";
import NormalLink from "./NormalLink";
import Logo from "./Logo";
import { IoIosSend } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

type FooterLink = { label: string; to: string };
type FooterColumnData = {
  title: string;
  links: FooterLink[];
  className?: string;
};

const FOOTER_COLUMNS: FooterColumnData[] = [
  {
    title: "Home",
    className:
      "border-grey-15 flex flex-col gap-5 border-b pb-4 text-white sm:border-0",
    links: [
      { label: "Hero Section", to: "" },
      { label: "Features", to: "" },
      { label: "Properties", to: "" },
      { label: "Testimonials", to: "" },
      { label: "FAQ's", to: "" },
    ],
  },
  {
    title: "About Us",
    className:
      "border-grey-15 flex flex-col gap-5 border-b pb-4 text-white sm:border-0",
    links: [
      { label: "Our Story", to: "" },
      { label: "Our Works", to: "" },
      { label: "How It Works", to: "" },
      { label: "Our Team", to: "" },
      { label: "Our Clients", to: "" },
    ],
  },
  {
    title: "Properties",
    className: "flex flex-col gap-5 pb-4 text-white",
    links: [
      { label: "Portfolio", to: "" },
      { label: "Categories", to: "" },
    ],
  },
  {
    title: "Services",
    className:
      "border-grey-15 flex flex-col gap-5 border-b pb-4 text-white md:border-0",
    links: [
      { label: "Valuation Mastery", to: "" },
      { label: "Strategic Marketing", to: "" },
      { label: "Negotiation Wizardry", to: "" },
      { label: "Closing Success", to: "" },
      { label: "Property Management", to: "" },
    ],
  },
  {
    title: "Contact Us",
    className:
      "border-grey-15 mt-[-95px] flex flex-col gap-5 border-t border-b py-4 text-white sm:mt-0 sm:border-0 md:py-0",
    links: [
      { label: "Contact Form", to: "" },
      { label: "Our Offices", to: "" },
    ],
  },
];

function FooterColumn({ title, links, className = "" }: FooterColumnData) {
  return (
    <div className={className}>
      <p className="text-grey-60 font-medium">{title}</p>
      {links.map((link) => (
        <NormalLink key={`${title}-${link.label}`} to={link.to}>
          {link.label}
        </NormalLink>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer className="m-auto px-5 py-10 lg:container lg:flex lg:justify-between lg:gap-5">
        <div className="flex flex-col text-white lg:mt-8">
          <Logo />
          <div className="relative w-fit">
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              id="footer-email"
              autoComplete="email"
              className="border-grey-15 focus:outline-grey-15 mt-5 w-60 rounded-lg border py-2.5 pl-11 focus:bg-transparent focus:outline sm:w-80"
            />
            <MdOutlineEmail
              size={30}
              className="text-grey-60 absolute top-7 left-2.5"
            />
            <button
              className="absolute top-7 right-2.5 cursor-pointer text-white"
              aria-label="send email"
            >
              <IoIosSend size={30} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 self-start pt-10 text-white sm:grid-cols-5 sm:grid-rows-1">
          {FOOTER_COLUMNS.map((col) => (
            <FooterColumn
              key={col.title}
              title={col.title}
              links={col.links}
              className={col.className}
            />
          ))}
        </div>
      </footer>
      <div className="bg-grey-10 flex flex-col items-center justify-center gap-3 py-5 text-center text-white">
        <p>Created By Mohamed Ahmed</p>
        <div className="flex gap-5 text-2xl">
          <a
            aria-label="Go To My LinkedIn"
            className="bg-grey-15 hover:bg-grey-20 rounded-full p-3"
            href="https://www.linkedin.com/in/mohamed-ahmed-6a6bb3338/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            aria-label="Go To My GutHub"
            className="bg-grey-15 hover:bg-grey-20 rounded-full p-3"
            href="https://github.com/Mohamed-A-Yehia"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
