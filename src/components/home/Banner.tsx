import React from "react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import { smallImages } from "../../utils/constans";

const Banner: React.FC = () => {
  return (
    <Container>
      <Highlights color={"#b2efcd"} top={100} right={100} size={250} />
      <Highlights color={"#f9f6a6"} top={200} right={-50} size={200} />
      <Highlights color={"#ffde91"} top={300} right={100} size={200} />

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

const Highlights = styled("div")<{
  top: number;
  right: number;
  size: number;
  color: string;
}>(({ top, right, size, color }) => ({
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: color,
  filter: "blur(50px)",
  width: `${size}px`,
  height: `${size}px`,
  top: `${top}px`,
  right: `${right}px`,
  transform: "translate(-50%, -50%)",
}));
