import React from "react";
import { useLoaderData } from "react-router-dom";
import { styled } from "styled-components";

const plantsSearchUrl =
  "https://trefle.io/api/v1/plants/search?token=Cv0vN9QXbnUApDN0YlGKAid97FOTiIoO6PeXdw5lq_8&q=";

export const loader = async () => {
  const searchTerm = "Arbutus";
  return "something";
};

const PlantShop = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <Wrapper>
      <h4>Plant Shop</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default PlantShop;
