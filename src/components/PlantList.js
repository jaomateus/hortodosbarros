import React from "react";
import { styled } from "styled-components";
import PlantCard from "./PlantCard";

const PlantList = ({ plants }) => {
  if (!plants) {
    return (
      <h4 style={{ textAlign: "center" }}>
        Sorry, we still don't have that plant on our collection.
      </h4>
    );
  }

  return (
    <Wrapper>
      {plants.map((plant) => {
        const { id, scientific_name, common_name, family, image_url } = plant;
        return <PlantCard key={plant.id} {...plant} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
`;

export default PlantList;
