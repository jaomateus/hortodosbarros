import React from "react";
import { styled } from "styled-components";

// COMPONENTS
import { PlantCard } from "../components";

const PlantGridView = ({ plants }) => {
  return (
    <Wrapper>
      <div className="plants-container">
        {plants.map((plant) => {
          return <PlantCard key={plant.id} {...plant} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .plants-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .plants-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .plants-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default PlantGridView;
