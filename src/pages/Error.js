import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { styled } from "styled-components";
import img from "../assets/not_found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Oooops...</h3>
          <p>
            Looks like the page you're looking for was eaten by one of our
            catterpillars!
          </p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h4>Oooooops... Something went wrong!</h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0%.5rem;
  }
  p {
    line-height: 1.5rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--clr-grey-6);
  }
  a {
    color: var(--clr-primary-5);
    text-transform: capitalize;
  }
`;

export default Error;
