import React from "react";
import Container from "../UI/Container";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import { KitText } from "../../utils/Kit";
import { Product } from "../../utils/ProductKit";
import { useNavigate } from "react-router-dom";

const MadeKits: React.FC = () => {
  const navigate = useNavigate();

  const handleId = (id: number) => {
    navigate(`kits/${id}`);
  };
  return (
    <StyledContainer>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "36px",
            marginBottom: "38px",
          }}
        >
          Готовые наборы
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "41px",
          }}
        >
          {KitText.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "inline",
                px: 2.5,
                py: 1.5,
                borderRadius: "100px",
                bgcolor: "#F7EBE5",
                color: alpha("#292929", 0.7),
                fontSize: "14px",
                fontWeight: 400,
                cursor: "pointer",
              }}
            >
              {item.text}
            </Box>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "68px" }}>
          {Product.map((el) => (
            <Card
              sx={{
                maxWidth: "370px",
                maxHeight: "459px",
                borderRadius: "5px",
              }}
              onClick={() => handleId(el.id)}
            >
              <div>
                <img
                  style={{ objectFit: "cover" }}
                  src={el.img}
                  alt="product image"
                />
              </div>
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
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "293px",
            height: "50px",
            border: "1px solid #4E9DD3",
            borderRadius: "3px",
            margin: "0 auto",
            marginTop: "41px",
          }}
        >
          <Typography
            component="p"
            sx={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "17px",
            }}
          >
            Показать ещё
          </Typography>
        </div>
      </Container>
    </StyledContainer>
  );
};

export default MadeKits;

const StyledContainer = styled("div")({
  background: "#EDEDF0",
  padding: "41px 0px 80px 0",
});
