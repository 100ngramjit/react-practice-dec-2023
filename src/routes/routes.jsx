import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/homePage";
import ProfilePage from "../components/profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/details/:Id",
    element: <ProfilePage />,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
]);
