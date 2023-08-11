import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">Horto dos Barros</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/plantshop" className="nav-link">
            Plants
          </NavLink>
          <NavLink to="/bookshop" className="nav-link">
            Books
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--clr-white);
  .nav-center {
    width: 90vw;
    /* max-width: var(--max-width); */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--clr-primary-1);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--clr-grey-6);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--clr-primary-1);
  }
  .active {
    color: var(--clr-primary-1);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default navbar;
