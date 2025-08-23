import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <div className="bg-grey-08">
      <Header />

      <main>
        <Suspense fallback={<LoadingSpinner fallback={true} />}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
