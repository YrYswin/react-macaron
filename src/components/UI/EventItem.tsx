import React from "react";
import { EventItemState } from "../../utils/types";
import { styled } from "@mui/material";

const EventItem: React.FC<EventItemState> = ({ title, text, image, color }) => {
  return (
    <Container>
      <DiscountText color={color}>{title.toUpperCase()}</DiscountText>
      <ImageContainer>
        <img src={image} alt="image" />
      </ImageContainer>
      <TextBox color={color}>
        <p>{text}</p>
      </TextBox>
    </Container>
  );
};

export default EventItem;

const Container = styled("div")({
  position: "relative",
  width: "300px",
  borderRadius: "10px",
});

const DiscountText = styled("div")<{ color: string }>(({ color }) => ({
  position: "absolute",
  backgroundColor: color,
  top: "30px",
  color: "white",
  padding: "1px 15px",
}));
const ImageContainer = styled("div")({
  width: "100%",
  height: "300px",
  borderRadius: "10px 10px 0 0",
  overflow: "hidden",
  position: "relative",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",

    ":hover": {
      transform: "scale(1.1)",
    },
  },
});

const TextBox = styled("div")<{ color: string }>(({ color }) => ({
  backgroundColor: color,
  color: "white",
  width: "100%",
  padding: "20px",
  borderRadius: "0 0 10px 10px",
}));
