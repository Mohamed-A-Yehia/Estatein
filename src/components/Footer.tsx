import { MdOutlineEmail } from "react-icons/md";
import Link from "./Link";
import Logo from "./Logo";
import { IoIosSend } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="bg-grey-08 m-auto p-5 pt-10 pb-0 lg:container lg:flex lg:justify-between lg:gap-5">
        <div className="flex flex-col text-white lg:mt-8">
          <Logo />
          <div className="relative w-fit">
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              id=""
              className="border-grey-15 focus:outline-grey-20 mt-5 w-80 rounded-lg border py-2.5 pl-11 focus:bg-transparent focus:outline"
            />
            <MdOutlineEmail
              size={30}
              className="text-grey-60 absolute top-7 left-2.5"
            />
            <button className="absolute top-7 right-2.5 cursor-pointer text-white">
              <IoIosSend size={30} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 self-start pt-10 text-white sm:grid-cols-5 sm:grid-rows-1">
          <div className="border-grey-15 flex flex-col gap-2 border-b pb-4 text-white sm:border-0">
            <p className="text-grey-60 font-medium">Home</p>
            <Link to="" buttonType="">
              Hero Section
            </Link>
            <Link to="" buttonType="">
              Features
            </Link>
            <Link to="" buttonType="">
              Properties
            </Link>
            <Link to="" buttonType="">
              Testimonials
            </Link>
            <Link to="" buttonType="">
              FAQ's
            </Link>
          </div>
          <div className="border-grey-15 flex flex-col gap-2 border-b pb-4 text-white sm:border-0">
            <p className="text-grey-60 font-medium">About Us</p>
            <Link to="" buttonType="">
              Our Story
            </Link>
            <Link to="" buttonType="">
              Our Works
            </Link>
            <Link to="" buttonType="">
              How It Works
            </Link>
            <Link to="" buttonType="">
              Our Team
            </Link>
            <Link to="" buttonType="">
              Our Clients
            </Link>
          </div>
          <div className="flex flex-col gap-2 pb-4 text-white">
            <p className="text-grey-60 font-medium">Properties</p>
            <Link to="" buttonType="">
              Portfolio
            </Link>
            <Link to="" buttonType="">
              Categories
            </Link>
          </div>
          <div className="border-grey-15 flex flex-col gap-2 border-b pb-4 text-white md:border-0">
            <p className="text-grey-60 font-medium">Services</p>
            <Link to="" buttonType="">
              Valuation Mastery
            </Link>
            <Link to="" buttonType="">
              Strategic Marketing
            </Link>
            <Link to="" buttonType="">
              Negotiation Wizardry
            </Link>
            <Link to="" buttonType="">
              Closing Success
            </Link>
            <Link to="" buttonType="">
              Property Management
            </Link>
          </div>
          <div className="border-grey-15 mt-[-95px] flex flex-col gap-2 border-t border-b py-4 text-white sm:mt-0 sm:border-0 md:py-0">
            <p className="text-grey-60 font-medium">Contact Us</p>
            <Link to="" buttonType="">
              Contect Form
            </Link>
            <Link to="" buttonType="">
              Our Offices
            </Link>
          </div>
        </div>
      </footer>
      <div className="bg-grey-10 flex flex-col items-center justify-center gap-3 py-5 text-center text-white">
        <p>Created By Mohamed Ahmed</p>
        <div className="flex gap-5 text-2xl">
          <a
            className="bg-grey-15 hover:bg-grey-20 rounded-full p-3"
            href="https://www.linkedin.com/in/mohamed-ahmed-6a6bb3338/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
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
