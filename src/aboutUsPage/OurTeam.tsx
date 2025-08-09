import SectionIntro from "../components/SectionIntro";
import team1 from "../assets/team1.webp";
import team2 from "../assets/team2.webp";
import team3 from "../assets/team3.webp";
import team4 from "../assets/team4.webp";

import twitterIcon from "../assets/twitter-icon.png";
import { IoIosSend } from "react-icons/io";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  imageClass?: string;
  twitterAriaLabel: string;
  inputId: string;
  inputAriaLabel: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Max Mitchell",
    title: "Founder",
    image: team1,
    imageAlt: "Max Mitchel, The Founder",
    twitterAriaLabel: "Go to Max Mitchell Twitter",
    inputId: "message-max",
    inputAriaLabel: "send message to Max Mitchell, The Founder",
  },
  {
    name: "David Brown",
    title: "Head of Property Management",
    image: team2,
    imageAlt: "Max Mitchel, The Founder",
    twitterAriaLabel: "Go to Max Mitchell Twitter",
    inputId: "message-David",
    inputAriaLabel:
      "send message to Max David, The Head of Property Management",
  },
  {
    name: "Sarah Johanson",
    title: "Cheif Real Estate Officer",
    image: team3,
    imageAlt: "Max Mitchel, The Founder",
    imageClass: "rounded-lg",
    twitterAriaLabel: "Go to Max Mitchell Twitter",
    inputId: "message-Sarah",
    inputAriaLabel: "send message to Sarah, the Cheif Real Estate Officer",
  },
  {
    name: "Michael Turner",
    title: "Legal Counsel",
    image: team4,
    imageAlt: "Max Mitchel, The Founder",
    imageClass: "rounded-lg",
    twitterAriaLabel: "Go to Max Mitchell Twitter",
    inputId: "message-Michael",
    inputAriaLabel: "send message to Michael Turner, Legal Counsel",
  },
];

function OurTeam() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 xl:px-10">
      <SectionIntro
        title="Meet The Estatein Team"
        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        stars={true}
      />

      <div className="grid grid-cols-1 gap-5 text-white md:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map(
          ({
            name,
            title,
            image,
            imageAlt,
            imageClass,
            twitterAriaLabel,
            inputId,
            inputAriaLabel,
          }) => (
            <div
              className="border-grey-15 relative flex flex-col items-center gap-2.5 rounded-lg border p-5"
              key={name}
            >
              <img
                src={image}
                alt={imageAlt}
                className={imageClass}
                width="100%"
              />
              <div className="relative flex flex-col items-center gap-4">
                <button
                  className="bg-primary-60 absolute top-[-40px] rounded-full px-7 py-3"
                  aria-label={twitterAriaLabel}
                >
                  <img width="30px" src={twitterIcon} alt="" />
                </button>
                <p className="mt-5 text-lg">{name}</p>
                <p className="text-grey-60 text-[15px]">{title}</p>
              </div>
              <input
                className="bg-grey-10 border-grey-15 w-full rounded-full border px-5 py-4"
                type="email"
                placeholder="Say Hello 👋"
                name="send-message-to-team"
                id={inputId}
                aria-label={inputAriaLabel}
              />
              <button
                className="bg-primary-60 absolute right-7 bottom-6.5 cursor-pointer rounded-full p-2 text-white"
                aria-label="send the message"
              >
                <IoIosSend size={30} />
              </button>
            </div>
          ),
        )}
      </div>
    </section>
  );
}

export default OurTeam;
