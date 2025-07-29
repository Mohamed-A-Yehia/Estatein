import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Home from "./home/Home";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [{ path: "/", element: <Home /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
