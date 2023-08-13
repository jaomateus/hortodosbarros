import React from "react";
import { useLoaderData } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

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
// };1

const getAllPlants = async () => {
  try {
    const response = await axios.get("http://localhost:3000/all_plants");
    const data = response.data;
  } catch (error) {
    console.error("Error fetching plants:", error);
    return null;
  }
};

export const loader = async () => {
  const searchTerm = "Arbutus unedo";
  const response = await axios.get("http://localhost:3000/all_plants");
  return { plants: response.data.data, searchTerm };
};

const PlantShop = () => {
  const { plants, searchTerm } = useLoaderData();
  console.log(plants);
  console.log(searchTerm);
  return (
    <Wrapper>
      <h4>J</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PlantShop;
