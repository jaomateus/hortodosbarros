import React from "react";
import { styled } from "styled-components";
import PlantFeaturedCard from "./PlantFeaturedCard";

const Featured = ({ featured }) => {
  // const { scientific_name, img_url } = featured;
  // console.log(scientific_name);
  // console.log(img_url);
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((plant) => {
          console.log(plant);
          return <PlantFeaturedCard key={plant.id} {...plant} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Featured;
