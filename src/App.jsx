import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, ProjectDetails } from "./pages/pages";
import "./App.css";
import "./utils.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
