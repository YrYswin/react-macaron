import React from "react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import { smallImages } from "../../utils/constans";

const Banner: React.FC = () => {
  return (
    <Container>
      <RedHighlights />
      <YellowHighlights />
      <PinkHighlights />
      <ImageContainer>
        <img src="/image/macaronLove.svg" alt="macaron" />
      </ImageContainer>
      {smallImages.map((image, index) => (
        <AnimatedImage
          key={index}
          src={image.src}
          top={200}
          left={300}
          animate={{ top: image.initialTop, left: image.initialLeft }}
          width={image.width}
          transition={{ duration: 1.4 }}
          height={image.height}
          rotate={image.rotate}
        />
      ))}
      <TitleContainer>
        <h2>MACARONSHOP</h2>
        <span>--- since 2013 ---</span>
        <h1>Настоящая любовь</h1>
        <p>
          Пирожные макарон и другие десерты
          <br /> из натуральных ингредиентов, приготовленные с любовью
        </p>
      </TitleContainer>
    </Container>
  );
};

export default Banner;

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  alignItems: "center",
  position: "relative",
});

const TitleContainer = styled("div")({
  textAlign: "center",
  zIndex: "10",
  h2: {
    fontSize: "22px",
  },
  span: {
    fontSize: "16px",
  },
  h1: {
    fontSize: "42px",
    letterSpacing: "3px",
  },
  p: {
    fontSize: "18px",
  },
});

const ImageContainer = styled("div")({
  img: {
    zIndex: "30",
    filter:
      "drop-shadow(150px -50px 100px #b3e2f6) drop-shadow(-150px 50px 100px #f6caef)",
  },
});
const AnimatedImage = styled(motion.img)<{
  top: number;
  left: number;
  width: number;
  height: number;
  rotate: number;
}>(({ top, left, width, height, rotate }) => ({
  position: "absolute",
  top: `${top}px`,
  zIndex: "10",
  left: `${left}px`,
  width: `${width}px`,
  height: `${height}px`,
  borderRadius: "10px",
  transform: `rotate(${rotate}deg)`,
}));

const RedHighlights = styled("div")({
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#aeeeca",
  filter: "blur(50px)",
  width: "300px",
  height: "300px",
  top: "150px",
  right: "-50px",
  transform: "translate(-50%, -50%)",
});
const YellowHighlights = styled("div")({
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#f9ff89",
  filter: "blur(50px)",
  width: "250px",
  height: "250px",
  top: "350px",
  right: "-50px",
  transform: "translate(-50%, -50%)",
});
const PinkHighlights = styled("div")({
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#fedbe1",
  filter: "blur(50px)",
  width: "200px",
  height: "200px",
  top: "400px",
  right: "100px",
  transform: "translate(-50%, -50%)",
});
