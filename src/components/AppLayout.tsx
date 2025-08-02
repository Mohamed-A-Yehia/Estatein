import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="bg-grey-10">
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
