import { createRoot } from "react-dom/client";
import "./global.css";
import "./i18n";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import { HomePage } from "./pages/HomePage";
import Sound from "./pages/Sound";
import Quiz from "./components/Quiz";
import { ErrorPage } from "./pages/ErrorPage";
import { Navbar } from "./components/Navbar";
import { Breath } from "./pages/Breath";
import { SoundMenu } from "./pages/SoundMenu";

// import npm install react-router-dom

export const App = () => {
  return (
    <Suspense fallback="loading">
      <Navbar />
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
        path: "/menu-music",
        element: <SoundMenu />,
        children: [
          {
            path:"music",
            element: <Sound />
          }
        ]
      },
      {
        path: "/breath",
        element: <Breath />
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
