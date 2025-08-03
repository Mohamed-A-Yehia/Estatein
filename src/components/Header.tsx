import Announcement from "./Announcement";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import CtaButton from "./CtaButton";

function ReHeader() {
  return (
    <>
      <Announcement />

      <header className="bg-grey-10 border-b-grey-20 flex h-23 items-center justify-between text-white sm:m-auto sm:border-b-1 md:container md:px-3">
        <Logo />
        <HeaderNav />
        <CtaButton />
      </header>
    </>
  );
}

export default ReHeader;
