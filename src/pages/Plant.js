import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`http://localhost:3000/plant/${id}`);
  console.log(response.data.data);
  return { plant: response.data.data, id };
};

const Plant = () => {
  const plantData = useLoaderData();

  if (!plantData) return <h2>something went wrong...</h2>;

  const {
    family,
    genus,
    hybrids,
    main_species,
    scientific_name,
    common_name,
    subspecies,
    varieties,
    vegetable,
    image_url,
  } = plantData.plant;
  const id = plantData.id;

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
        <h3>{scientific_name}</h3>
      </header>
      <div className="plant">
        <img src={image_url} alt={scientific_name} />
        <div className="plant-info">
          <p>
            <span className="plant-data">common name: </span>
            {common_name}
          </p>
          <p>
            <span className="plant-data">scientific name: </span>
            {scientific_name}
          </p>
          <p>
            <span className="plant-data">family: </span>
            {family.name}
          </p>
          <p>
            <span className="plant-data">genus: </span>
            {genus.name}
          </p>
          <p>
            <span className="plant-data">genus: </span>
            {genus.name}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: var(--radius);
  }

  .plant-info {
    padding-top: 2rem;
  }

  .plant p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }

  .plant-data {
    margin: 0.5rem;
    font-weight: 900;
    padding: 0.25rem 0.5rem;
    color: var(--clr-grey-2);
    letter-spacing: var(--spacing);
  }

  @media (min-width: 992px) {
    .plant {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
  }
`;

export default Plant;
