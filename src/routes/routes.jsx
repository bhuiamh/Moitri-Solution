import Main from "../components/Main";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/pages/Navbar";
import About from "../components/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
