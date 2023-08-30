import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { styled } from "styled-components";
import { formatPrice } from "../utils/helpers";
// components
import { PlantImages, Stars, AddToCart } from "../components";
import { plants_url } from "../utils/constants";

export const loader = async ({ params }) => {
  const response = await axios.get(`${plants_url}/${params.id}`);
  return { plant: response.data };
};

const Plant = () => {
  const { plant } = useLoaderData();

  if (!plant) return <h2>something went wrong...</h2>;
  const {
    sun_requirements,
    drought_tolerance,
    scientific_name,
    common_name,
    image_url,
    price,
    stock,
    stars,
    reviews,
  } = plant;

  const description =
    "Chinook Hops (Humulus lupulus) is a versatile variety, known for its spicy, piney aroma. Ideal for craft brewing, this hop adds a robust flavor profile to ales and lagers. Its vibrant green cones not only promise a rich brew but also add a touch of beauty to gardens.";

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/plantshop" className="btn">
          back to plants
        </Link>
        <div className="product-center">
          <PlantImages images={image_url} />
          <section className="content">
            <h2>{scientific_name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{common_name}</p>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>Sun requirements :</span>
              {sun_requirements}
            </p>
            <p className="info">
              <span>Drought tolerance :</span>
              {drought_tolerance}
            </p>
            <hr />
            {stock > 0 && <AddToCart plant={plant} />}
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
    width: 500px;
    display: grid;
    grid-template-columns: 200px 1fr;
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
