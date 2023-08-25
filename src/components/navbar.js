import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import { NavbarButtons } from ".";
import Sidebar from "./Sidebar";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const { isAuthenticated } = useAuth0();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <span className="logo">Horto dos Barros</span>
          </Link>
          <button type="button" className="nav-toggle" onClick={showSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink to={url} className="nav-link">
                  {text}
                </NavLink>
              </li>
            );
          })}
          {isAuthenticated && (
            <li>
              <NavLink to="/checkout" className="nav-link">
                checkout
              </NavLink>
            </li>
          )}
        </ul>
        <NavbarButtons />
      </div>
      <div className="sidebar">
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  background: var(--clr-white);
  .nav-center {
    width: 90vw;
    /* max-width: var(--max-width); */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: var(--clr-primary-1);
    font-weight: 700;
    letter-spacing: 2px;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-1);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }

  .nav-links {
    display: none;
  }

  .navbar-btn-wrapper {
    display: none;
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

  /* media queries */
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
      }
      .active {
        color: var(--clr-primary-1);
        font-weight: 600;
      }
    }

    .nav-toggle {
      display: none;
    }

    .navbar-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
