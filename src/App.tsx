import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Home from "./home/Home";
import Error from "./components/Error";
import { DataProvider } from "./context/PropertiesData";
import { TestimonialsData } from "./context/TestimonialsData";
import { FaqsProvider } from "./context/FaqsData";
import AboutUs from "./aboutUsPage/AboutUs";
import Properties from "./propertiesPage/Properties";
import Services from "./servicesPage/Services";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
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
