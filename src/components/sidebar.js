import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { links } from "../utils/constants";
import NavbarButtons from "./NavbarButtons";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = ({ sidebar, showSidebar }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <SidebarContainer>
      <aside className={sidebar ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <Link to="/">
            <span className="logo">Horto dos Barros</span>
          </Link>
          <button className="close-btn" type="button" onClick={showSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <NavLink to={url} onClick={showSidebar}>
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
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-black);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    .active {
      color: var(--clr-primary-1);
      font-weight: 600;
    }
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
