function Announcement() {
  return (
    <div className="bg-grey-10 border-b-grey-20 relative flex h-16 w-full items-center justify-center border-b bg-[url('/images/announcement-bg.png')] bg-cover bg-center text-[18px] font-light text-white">
      <p>
        ✨ Discover Your Dream Property With Estatein{" "}
        <a href="" className="underline">
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
