import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import MadeKits from "../components/made_kits/MadeKits";
import ProductDetails from "../components/ProductDetails/ProductDetails";

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
        path: "kits",
        element: <MadeKits />,
      },
      {
        path: "kits/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);
