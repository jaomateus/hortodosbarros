import React from "react";
import { Featured, LandingHero, Contact, Services } from "../components";
import { styled } from "styled-components";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  // const response = await axios.get(`http://localhost:3000/plants_featured`);
  // console.log(response.data.data);
  // return { plant: response.data.data, id };
  return "joao";
};

const Landing = () => {
  const featured = useLoaderData();
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
