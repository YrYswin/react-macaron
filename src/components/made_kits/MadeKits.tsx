import React from "react";
import Container from "../UI/Container";
import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { KitText } from "../../utils/Kit";
import { Product } from "../../utils/ProductKit";

import CardProduct from "../UI/Card";

const MadeKits: React.FC = () => {
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
          {Product.slice(0, 6).map((el) => (
            <CardProduct el={el} />
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
