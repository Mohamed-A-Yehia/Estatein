import { createBrowserRouter, RouterProvider } from "react-router";
import { TestimonialsData } from "./context/TestimonialsData";
import { DataProvider } from "./context/PropertiesData";
import { FaqsProvider } from "./context/FaqsData";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Home from "./home/Home";
import Error from "./components/Error";
import AboutUs from "./aboutUsPage/AboutUs";
import Properties from "./propertiesPage/Properties";
import Services from "./servicesPage/Services";

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
