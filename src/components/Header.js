import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/like" className={(nav) => nav.isActive ? "nav-active" : ""}>
            <li>Like</li>
          </NavLink>
        </ul>
      </nav>
      <h1>Movi'flix</h1>
    </div>
  );
};

export default Header;
