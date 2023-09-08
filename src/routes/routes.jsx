import Main from "../components/Main";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/pages/Navbar";
import About from "../components/pages/About";
import ErrorPage from "../components/pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navbar></Navbar>,
      },
      {
        path: "about",
        element: (
          <div>
            <Navbar></Navbar>
            <About></About>
          </div>
        ),
      },
    ],
  },
]);
