import { styled } from "@mui/material";
import React from "react";
import { newsArray } from "../../utils/constans";

const NewsList: React.FC = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "600",
          margin: "20px auto 30px",
        }}
      >
        Новости
      </h1>
      <ContainerStyle>
        {newsArray.map((obj, i) => (
          <ItemBox key={i}>
            <ImageBox>
              <img src={obj.image} alt="yrys" />
            </ImageBox>
            <TitleBox>
              <span>{obj.date}</span>
              <h1>{obj.title}</h1>
              <p>{obj.text}</p>
            </TitleBox>
          </ItemBox>
        ))}
      </ContainerStyle>
    </>
  );
};

export default NewsList;

const ContainerStyle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ItemBox = styled("div")({
  width: "400px",
  boxShadow: "0 0 150px 50px rgb(170,170,170, .2)",
  borderRadius: "10px",
  overflow: "hidden",
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

  span: {
    fontSize: "16px",
    color: "gray",
  },
  h1: {
    fontSize: "20px",
  },
  p: {
    fontSize: "12px",
    width: "70%",
  },
});
