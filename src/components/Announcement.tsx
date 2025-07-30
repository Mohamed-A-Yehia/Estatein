function Announcement() {
  return (
    <div className="bg-grey-10 border-b-grey-20 relative flex h-16 w-full items-center justify-between border-b bg-[url('/images/announcement-bg.png')] bg-cover bg-center font-light text-white md:text-[18px]">
      <p>
        ✨ Discover Your Dream Property With Estatein{" "}
        <a href="" className="block underline md:inline">
          Learn More
        </a>
      </p>
      <button className="bg-grey-40 absolute right-4 cursor-pointer rounded-full px-2 py-1 opacity-80">
        &#x2715;
      </button>
    </div>
  );
}

export default Announcement;
