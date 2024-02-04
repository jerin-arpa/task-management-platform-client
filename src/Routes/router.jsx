import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Root/dashboard";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Board from "../Pages/Dashboard/Board/Board";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";
import PreviousTask from "../Pages/Dashboard/PreviousTask/PreviousTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "board",
        element: <Board></Board>,
        loader: () => fetch("http://localhost:5000/board"),
      },
      {
        path: "createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "previousTask",
        element: <PreviousTask></PreviousTask>,
      },
    ],
  },
]);

export default router;
