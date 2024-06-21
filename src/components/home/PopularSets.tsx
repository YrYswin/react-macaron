import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material";

import axios from "axios";
import { PopularSetState } from "../../utils/types";
import { popularSets } from "../../utils/constans";

const PopularSets: React.FC = () => {
  const [array, setArray] = React.useState<PopularSetState[]>();
  React.useEffect(() => {
    getPopularMacaron();
  }, []);
  const getPopularMacaron = async () => {
    try {
      const response = await axios.get("http://localhost:4444/macaronSets");
      setArray(response ? response.data : popularSets);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "600",
          margin: "20px auto 50px",
        }}
      >
        Популярные наборы
      </h1>
      <StyledContainer>
        {array?.map((obj, i) => (
          <ItemBox key={i}>
            <ImageBox>
              <img src={obj.image} alt={obj.name} />
            </ImageBox>
            <TextBox>
              <h1>{obj.name}</h1>
              <p>{obj.text}</p>
              <div>
                <span>{obj.price} руб.</span>
                <button>В корзину</button>
              </div>
            </TextBox>
          </ItemBox>
        ))}
      </StyledContainer>
      <LinkButtonBox>
        <button>Все праздничные наборы</button>
      </LinkButtonBox>
    </>
  );
};

export default PopularSets;

const StyledContainer = styled(Container)({
  margin: "0",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "20px",
});

const ItemBox = styled("div")({
  width: "400px",
  boxShadow: "0 0 150px 50px rgb(170,170,170, .2)",
  position: "relative",
  border: "1px solid #ededf0",
  borderRadius: "10px",
  overflow: "hidden",

  "&::after": {
    content: '""',
    position: "absolute",
    top: "-10px",
    left: "0",
    width: "100%",
    height: "10px",
  },
});

const ImageBox = styled("div")({
  width: "100%",
  borderRadius: "10px 10px 0 0",
  overflow: "hidden",
  position: "relative",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",

    ":hover": {
      transform: "scale(1.08)",
    },
  },
});
const TextBox = styled("div")({
  h1: {
    padding: "5px 10px 2px",
    fontSize: "22px",
  },
  p: {
    padding: "2px 10px 5px",
    fontSize: "16px",
    width: "300px",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #ededf0",

    span: {
      color: "#e7426a",
      fontWeight: "600",
      fontSize: "18px",
      testAlign: "start",
      padding: "10px 30px",
    },

    "*": {
      width: "100%",
      padding: "10px",
      borderRight: "1px solid #ededf0",
    },

    button: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",

      ":hover": {
        color: "#e7426a",
      },
    },
  },
});

const LinkButtonBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "40px auto",

  button: {
    padding: "10px 30px",
    borderColor: "#4e9dd3",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "5px",
    backgroundColor: "transparent",
    transition: "transform 0.3s ease",
    cursor: "pointer",

    ":hover": {
      transform: "scale(1.03)",
      color: "#4e9dd3",
      textShadow: "0 0 2px pink",
    },
  },
});
