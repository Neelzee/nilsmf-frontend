import React from "react";
import ReactDOM from "react-dom/client";

import { Root } from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error-page";
import { About } from "./routes/about";
import { Projects } from "./routes/projects";
import { Contact } from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
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
