import React from "react";

import AnimatedBox from "../components/UI/AnimatedBox";

import Banner from "../components/home/Banner";
import Container from "../components/UI/Container";
import SetsList from "../components/home/SetsList";
import EventShop from "../components/home/EventShop";
import Holidays from "../components/home/Holidays";
import PopularSets from "../components/home/PopularSets";
import NewsList from "../components/home/NewsList";
import AboutUs from "../components/home/AboutUs";

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <AnimatedBox>
          <Banner />
        </AnimatedBox>

        <AnimatedBox>
          <SetsList />
        </AnimatedBox>

        <AnimatedBox>
          <EventShop />
        </AnimatedBox>

        <AnimatedBox>
          <Holidays />
        </AnimatedBox>

        <AnimatedBox>
          <PopularSets />
        </AnimatedBox>

        <AnimatedBox>
          <NewsList />
        </AnimatedBox>

        <AnimatedBox>
          <AboutUs />
        </AnimatedBox>
      </Container>
    </div>
  );
};

export default Home;
