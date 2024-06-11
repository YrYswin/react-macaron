import React from "react";
import Banner from "../components/home/Banner";
import Container from "../components/UI/Container";
import SetsList from "../components/home/SetsList";
import EventShop from "../components/home/EventShop";
import Holidays from "../components/home/Holidays";

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Banner />
        <SetsList />
        <EventShop />
        <Holidays />
      </Container>
    </div>
  );
};

export default Home;
