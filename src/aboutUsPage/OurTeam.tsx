import SectionIntro from "../components/SectionIntro";
import team1 from "../assets/team1.webp";
import team2 from "../assets/team2.webp";
import team3 from "../assets/team3.webp";
import team4 from "../assets/team4.webp";

import twitterIcon from "../assets/twitter-icon.png";
import { IoIosSend } from "react-icons/io";

function OurTeam() {
  return (
    <section className="container m-auto px-4 py-8 md:py-16 xl:px-10">
      <SectionIntro
        title="Meet The Estatein Team"
        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
        stars={true}
      />

      <div className="grid grid-cols-1 gap-5 text-white md:grid-cols-2 xl:grid-cols-4">
        <div className="border-grey-20 relative flex flex-col items-center gap-2.5 rounded-lg border p-5">
          <img src={team1} alt="Max Mitchel, The Founder" width="100%" />
          <div className="relative flex flex-col items-center gap-4">
            <button
              className="bg-primary-60 absolute top-[-40px] rounded-full px-7 py-3"
              aria-label="Go to Max Mitchell Twitter"
            >
              <img width="30px" src={twitterIcon} alt="" />
            </button>
            <p className="mt-5 text-lg">Max Mitchell</p>
            <p className="text-grey-60 text-[15px]">Founder</p>
          </div>
          <input
            className="bg-grey-10 border-grey-20 w-full rounded-full border px-5 py-4"
            type="email"
            placeholder="Say Hello 👋"
            name="send-message-to-team"
            id="message-max"
            aria-label="send message to Max Mitchell, The Founder"
          />
          <button
            className="bg-primary-60 absolute right-7 bottom-6.5 cursor-pointer rounded-full p-2 text-white"
            aria-label="send email"
          >
            <IoIosSend size={30} />
          </button>
        </div>

        <div className="border-grey-20 relative flex flex-col items-center gap-2.5 rounded-lg border p-5">
          <img src={team2} alt="Max Mitchel, The Founder" width="100%" />
          <div className="relative flex flex-col items-center gap-4">
            <button
              className="bg-primary-60 absolute top-[-40px] rounded-full px-7 py-3"
              aria-label="Go to Max Mitchell Twitter"
            >
              <img width="30px" src={twitterIcon} alt="" />
            </button>
            <p className="mt-5 text-lg">David Brown</p>
            <p className="text-grey-60 text-[15px]">
              Head of Property Management
            </p>
          </div>
          <input
            className="bg-grey-10 border-grey-20 w-full rounded-full border px-5 py-4"
            type="email"
            placeholder="Say Hello 👋"
            name="send-message-to-team"
            id="message-David"
            aria-label="send message to Max David, The Head of Property Management"
          />
          <button
            className="bg-primary-60 absolute right-7 bottom-6.5 cursor-pointer rounded-full p-2 text-white"
            aria-label="send the message"
          >
            <IoIosSend size={30} />
          </button>
        </div>

        <div className="border-grey-20 relative flex flex-col items-center gap-2.5 rounded-lg border p-5">
          <img
            src={team3}
            alt="Max Mitchel, The Founder"
            className="rounded-lg"
            width="100%"
          />
          <div className="relative flex flex-col items-center gap-4">
            <button
              className="bg-primary-60 absolute top-[-40px] rounded-full px-7 py-3"
              aria-label="Go to Max Mitchell Twitter"
            >
              <img width="30px" src={twitterIcon} alt="" />
            </button>
            <p className="mt-5 text-lg">Sarah Johanson</p>
            <p className="text-grey-60 text-[15px]">
              Cheif Real Estate Officer
            </p>
          </div>
          <input
            className="bg-grey-10 border-grey-20 w-full rounded-full border px-5 py-4"
            type="email"
            placeholder="Say Hello 👋"
            name="send-message-to-team"
            id="message-Sarah"
            aria-label="send message to Sarah, the Cheif Real Estate Officer"
          />
          <button
            className="bg-primary-60 absolute right-7 bottom-6.5 cursor-pointer rounded-full p-2 text-white"
            aria-label="send the message"
          >
            <IoIosSend size={30} />
          </button>
        </div>

        <div className="border-grey-20 relative flex flex-col items-center gap-2.5 rounded-lg border p-5">
          <img
            src={team4}
            alt="Max Mitchel, The Founder"
            className="rounded-lg"
            width="100%"
          />
          <div className="relative flex flex-col items-center gap-4">
            <button
              className="bg-primary-60 absolute top-[-40px] rounded-full px-7 py-3"
              aria-label="Go to Max Mitchell Twitter"
            >
              <img width="30px" src={twitterIcon} alt="" />
            </button>
            <p className="mt-5 text-lg">Michael Turner</p>
            <p className="text-grey-60 text-[15px]">Legal Counsel</p>
          </div>
          <input
            className="bg-grey-10 border-grey-20 w-full rounded-full border px-5 py-4"
            type="email"
            placeholder="Say Hello 👋"
            name="send-message-to-team"
            id="message-Michael"
            aria-label="send message to Michael Turner, Legal Counsel"
          />
          <button
            className="bg-primary-60 absolute right-7 bottom-6.5 cursor-pointer rounded-full p-2 text-white"
            aria-label="send the message"
          >
            <IoIosSend size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
