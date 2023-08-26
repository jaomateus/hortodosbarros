import React from "react";
import { Featured, LandingHero, Contact, Services } from "../components";
import { useLoaderData } from "react-router-dom";
import { featured_url as url } from "../utils/constants";
import axios from "axios";

export const loader = async () => {
  const response = await axios.get(url);
  return response.data;
};

const Landing = () => {
  const featured = useLoaderData();
  return (
    <main>
      <LandingHero />
      <Featured featured={featured} />
      <Services />
      <Contact />
    </main>
  );
};

export default Landing;
