import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { SetsArrayState } from "../../utils/types";

const SetsItem: React.FC<SetsArrayState> = ({
  icon,
  title,
  text,
  color1,
  color2,
  rotate,
  shadow,
}) => {
  return (
    <StyledContainer
      color1={color1}
      color2={color2}
      rotate={rotate}
      shadow={shadow}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="white"
        borderRadius="50%"
        width="100px"
        height="100px"
      >
        <img src={icon} alt="icon" />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        width="100%"
      >
        <Typography variant="h6" fontSize="22px" fontWeight="600">
          {title}
        </Typography>
        <img src="/icon/enterIcon.svg" alt="arrow" />
      </Box>
      <Typography fontSize="16px" width="500px">
        {text}
      </Typography>
    </StyledContainer>
  );
};

export default SetsItem;

const StyledContainer = styled(Container)<{
  color1: string;
  color2: string;
  shadow: string;
  rotate: number;
}>(({ color1, color2, rotate, shadow }) => ({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  padding: "30px 50px",
  border: "1px solid transparent",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(${rotate}deg, ${color2} 50%, ${color1} 50%)`,
    zIndex: -1,
  },

  "> *": {
    position: "relative",
    zIndex: 1,
  },

  transition: "all easy-in-out",
  transitionDuration: ".18s",
  cursor: "pointer",

  ":hover": {
    transform: "scale(1.03)",
    boxShadow: `0px 0px 20px 2px ${shadow}`,
    border: "1px solid #fff",
  },
}));
