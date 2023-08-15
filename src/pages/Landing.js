import React from "react";
import { Featured, LandingHero, Contact, Services } from "../components";
import { styled } from "styled-components";

const Landing = () => {
  return (
    <main>
      <LandingHero />
      <Featured />
      <Services />
      <Contact />
    </main>
  );
};

const Wrapper = styled.div``;
export default Landing;
