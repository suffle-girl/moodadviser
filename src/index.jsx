import { createRoot } from "react-dom/client";
import "./global.css";
import "./i18n";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { HomePage } from "./pages/HomePage";
import Sound from "./components/Sound";
import Quiz from "./components/Quiz";
import { ErrorPage } from "./pages/ErrorPage";
import { Navbar } from "./components/Navbar";

// import npm install react-router-dom

export const App = () => {
  return (
    <Suspense fallback="loading">
      <Navbar />
      {/* <HomePage /> */}
      <Outlet />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/music",
        element: <Sound />,
      },
      {
        path: "/breath",
        element: <Sound />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
