import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <div>Home</div>,
      },
      {
        path: "create-design",
        element: <div>create</div>,
      },
      {
        path: "discount-day",
        element: <div>discount</div>,
      },
    ],
  },
]);
