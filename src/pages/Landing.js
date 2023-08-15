import React from "react";
import { Featured, LandingHero, Contact } from "../components";
import { styled } from "styled-components";

const Landing = () => {
  return (
    <main>
      <LandingHero />
      <Featured />
      <Contact />
    </main>
  );
};

const Wrapper = styled.div``;
export default Landing;
