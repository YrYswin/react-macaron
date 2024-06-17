import React from "react";
import Container from "../UI/Container";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { Product } from "../../utils/ProductKit";
import { Button, Typography } from "@mui/material";
import TabUI from "../UI/Tab";
import { More } from "../../utils/more";
import MoreProps from "../UI/MoreProps";
import Card_last from "../UI/Card_last";
import PrevSvg from "../../../public/icon/prev.svg";
import NextSvg from "../../../public/icon/next.svg";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <Typography>Invalid product ID</Typography>;
  }

  const product = Product.find((f) => f.id === Number(id));

  if (!product) {
    return <Typography>Product not found</Typography>;
  }
  return (
    <StyledContainer>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "535px",
            marginTop: "36px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "570px",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "100%", height: "450px" }}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={product.img}
                alt="image"
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "15px",
              }}
            >
              <img
                style={{
                  width: "71px",
                  height: "71px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src={product.detailImage["img-1"]}
                alt="image"
              />
              <img
                style={{
                  width: "71px",
                  height: "71px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src={product.detailImage["img-2"]}
                alt="image"
              />
              <img
                style={{
                  width: "71px",
                  height: "71px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                src={product.detailImage["img-3"]}
                alt="image"
              />
            </div>
          </div>
          <div
            style={{
              width: "570px",
              height: "auto",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: "#292929",
                fontSize: "30px",
                fontWeight: 600,
                lineHeight: "36px",
                marginBottom: "11px",
              }}
            >
              {product.title}
            </Typography>
            <Typography
              component="p"
              sx={{
                color: "#292929",
                opacity: "80%",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "19px",
                marginBottom: "20px",
              }}
            >
              {product.text}
            </Typography>
            <div
              style={{
                width: "100%",
                padding: "26px 26px",
                backgroundColor: "#FFFFFF",
                borderRadius: "5px",
                border: "1px solid #EDEDF0",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  marginBottom: "10px",
                  color: "#292929",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "21px",
                }}
              >
                Вкусы:
              </Typography>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "5px 0",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      color: "#292929",
                      opacity: "80%",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Яблоко
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: "#292929",
                      opacity: "80%",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    {product.apple}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "5px 0",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      color: "#292929",
                      opacity: "80%",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Вишня
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: "#292929",
                      opacity: "80%",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    {product.cherry}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "5px 0",
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      color: "#292929",
                      opacity: "80%",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    Кокос{" "}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: "#292929",
                      opacity: "80%",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    {product.coconut}
                  </Typography>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "15px 28px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                border: "1px solid #EDEDF0",
                marginTop: "10px",
              }}
            >
              <Typography
                component="p"
                sx={{
                  color: "#E7426A",
                  fontSize: "24px",
                  fontWeight: "600",
                  lineHeight: "29px",
                }}
              >
                {product.price} руб
              </Typography>
              <Button
                variant="contained"
                sx={{
                  width: "178px",
                  height: "50px",
                  backgroundColor: "#E7426A",
                  borderRadius: "3px",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#E7426A",
                    boxShadow: "none",
                    outline: "none",
                  },
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
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
                    stroke="white"
                    strokeWidth="1.4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.12207 7.15493V3.40845C4.12207 2.07042 5.10329 1 6.26292 1H9.02818C10.1878 1 11.169 2.07042 11.169 3.40845V7.15493"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                В корзину
              </Button>
            </div>
            <div style={{ marginTop: "34px" }}>
              {More.map((item) => (
                <MoreProps item={item} />
              ))}
            </div>
          </div>
        </div>
        <div style={{ height: "309px" }}>
          <TabUI />
        </div>
        <div style={{ marginTop: "60px", position: "relative" }}>
          <Typography
            component="h2"
            sx={{
              fontSize: "30px",
              lineHeight: "38px",
              textAlign: "center",
              marginBottom: "36px",
              fontWeight: "600",
            }}
          >
            Вам могут понравиться
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "55px" }}>
            {Product.slice(6, 10).map((el) => (
              <Card_last el={el} key={el.id} />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#333333",
                opacity: "39%",
                "&:hover": {
                  backgroundColor: "#333333",
                  opacity: "39% ",
                },
                right: "25px",
              }}
            >
              <img src={NextSvg} alt="svg" />
            </Button>
            <Button
              sx={{
                position: "absolute",
                left: "1210px",
                width: "50px",
                height: "50px",
                backgroundColor: "#333333",
                opacity: "39%",
                "&:hover": {
                  backgroundColor: "#333333",
                  opacity: "39% ",
                },
              }}
            >
              <img src={PrevSvg} alt="svg" />
            </Button>
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
              Все готовые наборы
            </Typography>
          </div>
        </div>
      </Container>
    </StyledContainer>
  );
};

export default ProductDetails;

const StyledContainer = styled("div")({
  background: "#EDEDF0",
  padding: "41px 0px 80px 0",
});
