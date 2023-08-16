import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import img from "../assets/Image_not_available.png";

const PlantCard = ({ id, scientific_name, common_name, family, image_url }) => {
  // const data = useOutletContext()   To get global loading values . Check HomeLayout for more info.
  const plant_img = image_url !== null ? image_url : img;
  return (
    <Wrapper>
      <div className="card-container">
        <div className="img-container">
          <img src={plant_img} alt={scientific_name} className="img" />
        </div>
        <div className="footer">
          <h4>{scientific_name}</h4>
          <h5>{common_name}</h5>
          <h5>{family}</h5>
          <Link to={`/plant/${id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--radius);

  .card-container {
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    background: var(--white);
  }

  .card-container:hover {
    box-shadow: var(--dark-shadow);
  }

  .img-container {
    width: 100%;
    height: 300px;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: 100%;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--clr-grey-5);
    }
  }
`;

export default PlantCard;
