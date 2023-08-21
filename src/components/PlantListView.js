import React from "react";
import { styled } from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const PlantListView = ({ plants }) => {
  // REMOVE AFTER IMPLEMENTING DESCRIPTION
  const description =
    "Chinook Hops (Humulus lupulus) is a versatile variety, known for its spicy, piney aroma. Ideal for craft brewing, this hop adds a robust flavor profile to ales and lagers. Its vibrant green cones not only promise a rich brew but also add a touch of beauty to gardens.";

  return (
    <Wrapper>
      {plants.map((plant) => {
        const { id, image_url, scientific_name, family, price } = plant;
        return (
          <article key={id}>
            <img src={image_url} alt={scientific_name} />
            <div>
              <h4>{scientific_name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>

              {/* FORMAT TEXT SIZE WITH SUBSTRING   */}

              <p>{description.substring(0, 150)}...</p>
              <Link to={`/plants/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
export default PlantListView;
