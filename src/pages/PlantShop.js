import React from "react";
import { styled } from "styled-components";
import { plants_url } from "../utils/constants";

// components
import { PlantList, Sort, Filters } from "../components";

export const loader = async ({ request }) => {
  // const response = await axios.get(`${plants_url}/${params.id}`);
  // return { plant: response.data };
};

const PlantShop = () => {
  return (
    <main>
      <Wrapper>
        <div className="section-center plants page">
          <Filters />
          <div>
            <Sort />
            <PlantList />
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
