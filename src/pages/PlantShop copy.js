import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { PlantList } from "../components";
import { plants_url as url } from "../utils/constants";

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get(url);
  return { plants: response.data, searchTerm };
};

const PlantShop = () => {
  const { plants, searchTerm } = useLoaderData();
  return <PlantList plants={plants} />;
};

export default PlantShop;
