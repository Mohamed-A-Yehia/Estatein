import { createBrowserRouter, RouterProvider } from "react-router";
import { TestimonialsData } from "./context/TestimonialsData";
import { DataProvider } from "./context/PropertiesData";
import { FaqsProvider } from "./context/FaqsData";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

import { lazy } from "react";

const Home = lazy(() => import("./home/Home"));
const AboutUs = lazy(() => import("./aboutUsPage/AboutUs"));
const Properties = lazy(() => import("./propertiesPage/Properties"));
const Services = lazy(() => import("./servicesPage/Services"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/properties", element: <Properties /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);

function App() {
  return (
    <DataProvider>
      <TestimonialsData>
        <FaqsProvider>
          <RouterProvider router={router} />
        </FaqsProvider>
      </TestimonialsData>
    </DataProvider>
  );
}

export default App;
