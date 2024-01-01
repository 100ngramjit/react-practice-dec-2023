import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./components/profile.jsx";
import HomePage from "./components/homePage.jsx";
import { routes } from "./routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={routes} />
  // </React.StrictMode>
);
