import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Upload from "../pages/Upload";
import Resume from "../pages/Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "resume/:id",
        element: <Resume />,
      },
    ],
  },
]);