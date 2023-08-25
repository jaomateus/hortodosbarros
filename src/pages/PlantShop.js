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
