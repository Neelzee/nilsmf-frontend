import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";

import { Root } from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage, MissingProject } from "./error-page";
import { About } from "./routes/about";
import { Projects } from "./routes/projects";
import { Contact } from "./routes/contact";
import { Project } from "./routes/project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <MissingProject />,
  },
  {
    path: "/projects/:file",
    element: <Project />,
    errorElement: <MissingProject />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
