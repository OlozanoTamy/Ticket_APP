import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Details from "../views/Details";
import Error404 from "../views/ERROR404";

import Profile from "../views/Profile";
import MyInfo from "../views/Profile/components/MyInfo";
import LikedEvents from "../views/Profile/components/LikedEvents";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/details/:eventId",
    element: <Details />,
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "my-info",
        element: <MyInfo />,
      },
      {
        path: "liked-events",
        element: <LikedEvents />,
      },
    ],
  },
]);

const Myroutes = () => {
  return <RouterProvider router={router} />;
};
export default Myroutes;
