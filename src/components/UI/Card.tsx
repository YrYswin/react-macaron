import { Button, CardContent, Typography, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ProductKit } from "../../utils/types";

interface elProps {
  el: ProductKit;
}

const CardProduct: React.FC<elProps> = ({ el }) => {
  return (
    <Card
      sx={{
        maxWidth: "370px",
        maxHeight: "459px",
        borderRadius: "5px",
      }}
    >
      <Link to={`/kits/${el.id}`}>
        <img style={{ objectFit: "cover", width: "100%" }} src={el.img} alt="product image" />
      </Link>
      <CardContent>
        <Typography
          component="h2"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "21px",
            marginBottom: "14px",
          }}
        >
          {el.title}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "#292929",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "17px",
            opacity: "80%",
          }}
        >
          {el.descriprion}
        </Typography>
      </CardContent>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "50px",
          padding: "0 20px",
          borderTop: "1px solid #EDEDF0",
        }}
      >
        <Typography
          component="span"
          sx={{
            color: "#E7426A",
            fontSize: "18px",
            fontWeight: "600",
            width: "200px",
            height: "100%",
            borderRight: "1px solid #EDEDF0",
            display: "flex",
            alignItems: "center",
          }}
        >
          {el.price} руб
        </Typography>
        <Button sx={{ display: "flex", alignItems: "end" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="15"
              height="21"
              viewBox="0 0 15 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2911 5.37109H1V20.0002H14.2911V5.37109Z"
                stroke="black"
                strokeWidth="1.4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493"
                stroke="black"
                strokeWidth="1.4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Typography
            component="p"
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#000000",
              marginLeft: "11px",
            }}
          >
            В корзину
          </Typography>
        </Button>
      </div>
    </Card>
  );
};

export default CardProduct;
