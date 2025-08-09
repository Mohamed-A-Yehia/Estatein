import Announcement from "./Announcement";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import CtaButton from "./CtaButton";

function ReHeader() {
  return (
    <>
      <Announcement />

      <header className="bg-grey-10 border-b-grey-15 border-b-1">
        <div className="flex h-23 items-center justify-between text-white sm:m-auto md:px-3 lg:container">
          <Logo />
          <HeaderNav />
          <CtaButton />
        </div>
      </header>
    </>
  );
}

export default ReHeader;
