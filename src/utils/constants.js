import React from "react";
import { PiPlantDuotone, PiButterflyFill } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About",
    url: "/about",
  },
  {
    id: 3,
    text: "Plants",
    url: "/plantshop",
  },
  {
    id: 4,
    text: "Newsletter",
    url: "/newsletter",
  },
];

export const services = [
  {
    id: 1,
    icon: <PiPlantDuotone />,
    title: "mission",
    text:
      "Revitalize land, nurture life. At Hortos dos Barros, we're architects of renewal, cultivating flourishing ecosystems for a sustainable future.",
  },
  {
    id: 2,
    icon: <PiButterflyFill />,
    title: "vision",
    text:
      "Seeding a vibrant future, Hortos dos Barros envisions lush landscapes, harmonizing nature and humanity through sustainable restoration and growth.",
  },
  {
    id: 3,
    icon: <GiWorld />,
    title: "history",
    text:
      "In three years, Hortos dos Barros transformed barren soil into thriving land, embracing restoration, diversity, and a sustainable journey.",
  },
];

export const plants_url = "http://localhost:3000/plants";

export const plant_url = "http://localhost:3000/plant/";
