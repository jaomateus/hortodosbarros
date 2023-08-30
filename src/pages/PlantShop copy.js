import React from "react";
import { useLoaderData } from "react-router-dom";
import { styled } from "styled-components";
import { customFetch } from "../utils/helpers";

// components
import { PlantsContainer, Sort, Filters } from "../components";

const url = "/plants";
export const loader = async ({ request }) => {
  const response = await customFetch(url);
  return { plants: response.data };
};

const PlantShop = () => {
  const { plants, searchTerm } = useLoaderData();

  return (
    <main>
      <Wrapper>
        <div className="section-center plants page">
          <Filters />
          <div>
            <Sort />
            <PlantsContainer />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .plants {
    display: grid;
    gap: 3rem 5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .plants {
      grid-template-columns: 250px 1fr;
    }
  }
`;

export default PlantShop;
