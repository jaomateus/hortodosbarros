import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { plants_url as url } from "../utils/constants";
import { styled } from "styled-components";

// components
import { PlantList, Sort, Filters } from "../components";

// export const loader = async () => {
//   const searchTerm = "";
//   const response = await axios.get(url);
//   return { plants: response.data, searchTerm };
// };

const PlantShop = () => {
  // const { plants, searchTerm } = useLoaderData();

  return (
    <main>
      <Wrapper className="page">
        <div className="section-center plants">
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
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .plants {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default PlantShop;
