import NormalLink from "./NormalLink";
import Logo from "./Logo";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import ContactInput from "./ContactInput";

function Footer() {
  return (
    <>
      <footer className="bg-grey-08 m-auto p-5 pt-10 pb-0 lg:container lg:flex lg:justify-between lg:gap-5">
        <div className="flex flex-col text-white lg:mt-8">
          <Logo />
          <ContactInput placeholder="Enter Your Email" />
        </div>
        <div className="grid grid-cols-2 gap-5 self-start pt-10 text-white sm:grid-cols-5 sm:grid-rows-1">
          <div className="border-grey-15 flex flex-col gap-2 border-b pb-4 text-white sm:border-0">
            <p className="text-grey-60 font-medium">Home</p>
            <NormalLink to="" buttonType="">
              Hero Section
            </NormalLink>
            <NormalLink to="" buttonType="">
              Features
            </NormalLink>
            <NormalLink to="" buttonType="">
              Properties
            </NormalLink>
            <NormalLink to="" buttonType="">
              Testimonials
            </NormalLink>
            <NormalLink to="" buttonType="">
              FAQ's
            </NormalLink>
          </div>
          <div className="border-grey-15 flex flex-col gap-2 border-b pb-4 text-white sm:border-0">
            <p className="text-grey-60 font-medium">About Us</p>
            <NormalLink to="" buttonType="">
              Our Story
            </NormalLink>
            <NormalLink to="" buttonType="">
              Our Works
            </NormalLink>
            <NormalLink to="" buttonType="">
              How It Works
            </NormalLink>
            <NormalLink to="" buttonType="">
              Our Team
            </NormalLink>
            <NormalLink to="" buttonType="">
              Our Clients
            </NormalLink>
          </div>
          <div className="flex flex-col gap-2 pb-4 text-white">
            <p className="text-grey-60 font-medium">Properties</p>
            <NormalLink to="" buttonType="">
              Portfolio
            </NormalLink>
            <NormalLink to="" buttonType="">
              Categories
            </NormalLink>
          </div>
          <div className="border-grey-15 flex flex-col gap-2 border-b pb-4 text-white md:border-0">
            <p className="text-grey-60 font-medium">Services</p>
            <NormalLink to="" buttonType="">
              Valuation Mastery
            </NormalLink>
            <NormalLink to="" buttonType="">
              Strategic Marketing
            </NormalLink>
            <NormalLink to="" buttonType="">
              Negotiation Wizardry
            </NormalLink>
            <NormalLink to="" buttonType="">
              Closing Success
            </NormalLink>
            <NormalLink to="" buttonType="">
              Property Management
            </NormalLink>
          </div>
          <div className="border-grey-15 mt-[-95px] flex flex-col gap-2 border-t border-b py-4 text-white sm:mt-0 sm:border-0 md:py-0">
            <p className="text-grey-60 font-medium">Contact Us</p>
            <NormalLink to="" buttonType="">
              Contect Form
            </NormalLink>
            <NormalLink to="" buttonType="">
              Our Offices
            </NormalLink>
          </div>
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
