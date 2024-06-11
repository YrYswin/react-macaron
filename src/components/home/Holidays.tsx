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
    icon: "/icon/doughnut1",
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
    <Container>
      {holidayArray.map((obj, i) => (
        <div key={i}>{obj.date}</div>
      ))}
    </Container>
  );
};

export default Holidays;

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
