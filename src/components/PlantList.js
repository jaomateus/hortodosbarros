import React from "react";
import { styled } from "styled-components";
import { useFilterContext } from "../context/filter_context";

// COMPONENTS
import { PlantCard, PlantGridView, PlantListView } from "../components";

const PlantList = () => {
  const { filtered_plants: plants } = useFilterContext();

  // if (!plants) {
  //   return (
  //     <h4 style={{ textAlign: "center" }}>
  //       Sorry, we still don't have that plant on our collection.
  //     </h4>
  //   );
  // }

  return <PlantGridView plants={plants}>Plant list</PlantGridView>;
};

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 3rem;
// `;

export default PlantList;
