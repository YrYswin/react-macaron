import { styled } from "@mui/material";
import React from "react";

interface HolidayState {
  date: string;
  description: string;
  icon: string;
  birthday?: boolean;
}

const holidayArray: HolidayState[] = [
  {
    date: "Скоро",
    description: "День рождение бизского человека",
    icon: "/icon/doughnut1.svg",
    birthday: true,
  },
  {
    date: "1 январья",
    description: "Новый год 2025",
    icon: "/icon/doughnut2.svg",
  },
  {
    date: "14 февраля",
    description: "День Святого Валентина",
    icon: "/icon/doughnut3.svg",
  },
  {
    date: "Скоро",
    description: "День рождение бизского человека",
    icon: "/icon/doughnut4.svg",
  },
  {
    date: "Скоро",
    description: "День рождение бизского человека",
    icon: "/icon/doughnut5.svg",
  },
  {
    date: "Скоро",
    description: "День рождение бизского человека",
    icon: "/icon/doughnut6.svg",
  },
];

const Holidays: React.FC = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Ближайшие праздники</h1>
      <Container>
        <Line />
        {holidayArray.map((obj, i) => (
          <ItemDay key={i} style={{ fontWeight: i === 0 ? "bold" : "" }}>
            <ImageBox>
              {obj.birthday && (
                <HatIcon src="/icon/birthdayHat.svg" alt="hat" />
              )}
              <img src={obj.icon} alt="doughnut" />
            </ImageBox>
            <span>{obj.date}</span>
            <p>{obj.description}</p>
          </ItemDay>
        ))}
      </Container>
    </>
  );
};

export default Holidays;

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "50px 0",
  position: "relative",
});
const Line = styled("div")({
  position: "absolute",
  top: "20%",
  left: "5%",
  width: "90%",
  borderTop: "2px dashed",
});

const ItemDay = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "150px",
  cursor: "pointer",
  transition: "ease-in-out .15s",

  ":hover": {
    transform: "scale(1.05)",

    div: {
      filter: "drop-shadow(0px 0px 20px rgb(250,170,130))",
    },
  },

  p: {
    lineHeight: "1.2",
  },
});
const ImageBox = styled("div")({
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const HatIcon = styled("img")({
  position: "absolute",
  top: "-55px",
  right: "-26px",
});
