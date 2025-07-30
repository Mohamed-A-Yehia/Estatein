function Announcement() {
  return (
    <div className="text-white-99 relative flex h-13 w-full items-center justify-center bg-[url('/images/announcement-bg.png')] bg-cover bg-center">
      <p>
        ✨ Discover Your Dream Property With Estatein{" "}
        <a href="" className="underline">
          Learn More
        </a>
      </p>
      <button className="bg-grey-40 absolute right-4 cursor-pointer rounded-full px-4 py-2 opacity-80">
        &#x2715;
      </button>
    </div>
  );
}

export default Announcement;
