import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Home from "./home/Home";
import Error from "./components/Error";
import { DataProvider } from "./context/DataProvider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
