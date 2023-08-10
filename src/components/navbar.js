import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <span className="logo">Horto dos Barros</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/plants" className="nav-link">
            Plantas
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
