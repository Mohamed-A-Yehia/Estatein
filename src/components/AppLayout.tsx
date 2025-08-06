import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";

function AppLayout() {
  return (
    <div className="bg-grey-10">
      <Header />

      <main>
        <Suspense
          fallback={
            <div className="text-center text-4xl text-white">Loading</div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
