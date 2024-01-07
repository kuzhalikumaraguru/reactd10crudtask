import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import CreateBlog from "../components/CreateBlog";
import EditBlog from "../components/EditBlog";
import { Navigate } from "react-router-dom";

const AppRoutes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/create",
    exact: true,
    element: <CreateBlog />,
  },
  {
    path: "/edit/:id",
    exact: true,
    element: <EditBlog />,
  },
  {
    path: "*",
    exact: false,
    element: <Navigate to="/" />,
  },
];

export default AppRoutes