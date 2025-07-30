import Announcement from "./Announcement";

function Header() {
  return (
    <header>
      <Announcement />

      <nav>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
