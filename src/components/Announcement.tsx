import { useState } from "react";

function Announcement() {
  const [showed, setShowed] = useState<boolean>(true);

  return (
    showed && (
      <div className="bg-grey-10 border-b-grey-20 flex h-16 w-full items-center justify-around border-b bg-[url('/images/announcement-bg.png')] bg-cover bg-center font-light text-white md:justify-center md:gap-5 md:text-[18px]">
        <p>
          ✨ Discover Your Dream Property With Estatein{" "}
          <a href="" className="underline md:inline">
            Learn More
          </a>
        </p>
        <button
          onClick={() => setShowed((show) => !show)}
          className="bg-grey-40 cursor-pointer rounded-full px-2.5 py-1 opacity-80"
        >
          &#x2715;
        </button>
      </div>
    )
  );
}

export default Announcement;
