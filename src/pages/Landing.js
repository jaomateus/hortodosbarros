import React from "react";
import { Featured, LandingHero, Contact, Services } from "../components";
import { customFetch } from "../utils/helpers";

const url = "/featured";

const featuredPlantsQuery = {
  queryKey: ["featuredPlants"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredPlantsQuery);
  const plants = response.data;
  return { plants };
};

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

export default Landing;
