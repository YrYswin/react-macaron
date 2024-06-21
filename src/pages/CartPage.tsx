import React from "react";
import Container from "../components/UI/Container";
import CurrentPage from "../components/UI/CurrentPage";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material";

const CartPage: React.FC = () => {
  const location = useLocation();
  return (
    <Container>
      <CurrentPage thisPage={location.pathname} />
      <div style={{ textAlign: "center" }}>
        <h1>Ваша корозина</h1>
        <span>3 товара / 1030 руб.</span>
      </div>

      <Content>
        <ProductList>
          {[...new Array(3)].map((obj, i) => (
            <ProductItem key={i}>
              <TitleProduct>
                <img src="/image/eventImage1.png" alt="cartImage" />
                <div>
                  <h1>Набор Макарон 12шт.{obj}</h1>
                  <ul>
                    <li>Трюфель 2шт.</li>
                    <li>Розмарин 3шт.</li>
                    <li>Ананас 1шт.</li>
                    <li>Кокос 4шт.</li>
                  </ul>
                  <span>Скидка по акций "Эклер в подарок"</span>
                </div>
              </TitleProduct>
              <CountBox>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </CountBox>
              <PriceBox>
                <h5>Цена: 950руб.</h5>
                <p>Скидка: 30руб.</p>
              </PriceBox>

              <img src="/icon/existIcon.svg" alt="delete" />
            </ProductItem>
          ))}
          <ProductItem
            style={{ border: "none", alignItems: "center", padding: "0 30px" }}
          >
            <p>Стоимость вашей услуги с учетом доставки</p>
            <span>
              <TextStyle size={22} color={"#e7426a"} line={"none"}>
                1100 руб.
              </TextStyle>
              <TextStyle size={16} color={"gray"} line={"line-through"}>
                1000 руб.
              </TextStyle>
            </span>
          </ProductItem>
        </ProductList>

        <OrderList></OrderList>
      </Content>
    </Container>
  );
};

export default CartPage;

const Content = styled("div")({
  display: "flex",
});

const ProductList = styled("div")({
  width: "60%",
  border: "2px solid #ededf0",
  backgroundColor: "white",
  borderRadius: "10px",
  padding: "0",
});
const ProductItem = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  margin: "15px 0",
  borderBottom: "2px solid #ededf0",
  position: "relative",

  ">img": {
    position: "absolute",
    top: "0px",
    right: "10px",
    cursor: "pointer",
  },
});
const TitleProduct = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "0 20px",
  gap: "20px",

  img: {
    width: "80px",
    height: "80px",
  },

  div: {
    h1: {
      fontSize: "14px",
      margin: "0",
      padding: "0",
    },
    ul: {
      margin: "0",
      padding: "0",

      li: {
        color: "#6a6a6a",
        listStyle: "none",
        fontSize: "12px",
      },
    },
    span: {
      color: "#e7426a",
      fontSize: "12px",
    },
  },
});

const CountBox = styled("div")({
  display: "flex",
  alignItems: "start",
  gap: "5px",

  button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "20px",
    height: "20px",
    backgroundColor: "transparent",
    border: "1px solid gray",
    borderRadius: "5px",
    cursor: "pointer",
  },
});
const PriceBox = styled("div")({
  margin: "0 50px 0 0",
  textAlign: "start",
});

const TextStyle = styled("p")<{ size: number; line: string; color: string }>(
  ({ size, line, color }) => ({
    fontSize: `${size}px`,
    textDecoration: line,
    color: color,
  })
);

const OrderList = styled("div")({});
