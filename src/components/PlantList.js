import React from "react";
import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";

// COMPONENTS
import { PlantGridView, PlantListView } from "../components";

const PlantList = () => {
  const { all_plants } = useFilterContext();

  if (!all_plants) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search.
      </h5>
    );
  }

  return <PlantGridView plants={all_plants}>Plant list</PlantGridView>;
};

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 3rem;
// `;

export default PlantList;
