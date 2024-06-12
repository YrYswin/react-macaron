import React from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../utils/ProductKit";
import { Typography } from "@mui/material";

const ProductDetails: React.FC = () => {
  const { kitId } = useParams<{ kitId: string }>();

  if (!kitId) {
    return <Typography>Invalid product ID</Typography>;
  }

  const product = Product.find((f) => f.id === parseInt(kitId, 10));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }
  return <div>{product?.title}</div>;
};

export default ProductDetails;
