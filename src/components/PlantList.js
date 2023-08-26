import React from "react";
import { useFilterContext } from "../context/filter_context";

// COMPONENTS
import { PlantGridView, PlantListView } from "../components";

const PlantList = () => {
  const { filtered_plants: plants, grid_view } = useFilterContext();

  if (!plants) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (grid_view === false) {
    return <PlantListView plants={plants} />;
  }

  return <PlantGridView plants={plants}>Plant list</PlantGridView>;
};

export default PlantList;
