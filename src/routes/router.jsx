import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Reset from "../pages/Reset";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <PrivateRoute><Users /></PrivateRoute>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path:"signup",
    element:<SignUp/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"reset",
    element:<Reset/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
