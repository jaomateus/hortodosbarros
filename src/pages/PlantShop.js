import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { PlantList } from "../components";

// To retrieve a client token in case we need to make http requests from the client side
// const getTrefleClientToken = async () => {
//   try {
//     const response = await axios.post(
//       "http://localhost:3000/get_client_token" // Replace with your backend URL);
//     );
//     const { token } = response.data;
//     return token;
//   } catch (error) {
//     console.error("Error fetching client token:", error);
//     return null;
//   }
// };

export const loader = async () => {
  const searchTerm = "";
  const response = await axios.get("http://localhost:3000/all_plants");
  console.log(response);
  return { plants: response.data.data, searchTerm };
};

const PlantShop = () => {
  const { plants, searchTerm } = useLoaderData();
  return <PlantList plants={plants} />;
};

export default PlantShop;
