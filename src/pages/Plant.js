import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";

export const loader = async (data) => {
  const { id } = params;
};

const Plant = () => {
  const plant = useLoaderData();
  return <div>PlantPage</div>;
};

const Wrapper = styled.div``;
export default Plant;
