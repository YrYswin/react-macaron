import { styled } from "@mui/material";
import React from "react";
import { aboutUsArray } from "../../utils/constans";

const AboutUs: React.FC = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "600",
          margin: "80px auto 40px",
        }}
      >
        Мы обо все позаботились
      </h1>
      <Container>
        {aboutUsArray.map((obj, i) => (
          <ItemBox key={i}>
            <ImageBox>
              <img src={obj.image} alt="avtandil" />
            </ImageBox>
            <TitleBox>
              <h1>{obj.title}</h1>
              <p>{obj.text}</p>
            </TitleBox>
          </ItemBox>
        ))}
      </Container>
    </>
  );
};

export default AboutUs;

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ItemBox = styled("div")({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});
const ImageBox = styled("div")({
  width: "100%",
  overflow: "hidden",
  position: "relative",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    transform: "scale(1.01)",

    ":hover": {
      transform: "scale(1.08)",
    },
  },
});
const TitleBox = styled("div")({
  width: "100%",
  padding: "4px 10px 20px",

  h1: {
    fontSize: "22px",
  },
  p: {
    fontSize: "14px",
    width: "80%",
  },
});
