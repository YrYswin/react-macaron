import React from "react";
import Banner from "../components/home/Banner";
import Container from "../components/UI/Container";
import SetsList from "../components/home/SetsList";

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Banner />
        <SetsList />
      </Container>
    </div>
  );
};

export default Home;
