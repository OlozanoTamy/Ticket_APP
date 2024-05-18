import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import Details from "../views/Details";
import Error404 from "../views/ERROR404";
import Profile from "../views/Profile";
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
        element: <h2>My info</h2>,
      },
      {
        path: "liked-events",
        element: <h2>liked events</h2>,
      },
    ],
  },
]);

const Myroutes = () => {
  return <RouterProvider router={router} />;
};
export default Myroutes;
