import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import { formatPrice } from "../utils/helpers";
// components
import { PlantImages } from "../components";

export const loader = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`http://localhost:3000/plants/${id}`);
  return { plant: response.data, id };
};

const Plant = () => {
  const plantData = useLoaderData();
  console.log(plantData.plant);

  if (!plantData) return <h2>something went wrong...</h2>;

  const {
    family,
    genus,
    scientific_name,
    common_name,
    image_url,
    price,
    stock,
  } = plantData.plant;

  const id = plantData.id;

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/plants" className="btn">
          back to plants
        </Link>
        <div className="product-center">
          <PlantImages images={image_url} />
          <section className="content">
            <h2>{scientific_name}</h2>
            {/* <Stars stars={stars} reviews={reviews} /> */}
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{common_name}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              {/* <span>SKU :</span>
              {sku} */}
            </p>
            <p className="info">
              {/* <span>Brand :</span>
              {company} */}
            </p>
            <hr />
            {/* {stock > 0 && <AddToCart product={product} />} */}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default Plant;
