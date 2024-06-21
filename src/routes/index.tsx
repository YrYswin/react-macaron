import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "create-design",
        element: <div>create</div>,
      },
      {
        path: "discount-day",
        element: <div>discount</div>,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);
