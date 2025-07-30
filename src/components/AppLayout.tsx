import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-grey-10">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
