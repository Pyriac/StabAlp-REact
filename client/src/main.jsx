import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Home.jsx";
import "./index.css";
import Prestations from "./pages/Prestations.jsx";
import Réalisations from "./pages/Réalisations.jsx";
import Innovations from "./pages/Innovations.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/prestations", element: <Prestations /> },
      {
        path: "/realisations",
        element: <Réalisations />,
      },
      { path: "/innovations", element: <Innovations /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
