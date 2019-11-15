import React from "react";
import { NavLink } from "react-router-dom";
import "./generic.css";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="generic-backgroud">
      <NavLink
        type="button"
        className="btn btn-default btn-lg"
        to="/"
        activeStyle={activeStyle}
        exact
      >
        Home
      </NavLink>
      {"  "}
      <NavLink
        type="button"
        className="btn btn-default btn-lg"
        to="/sessionBacklog"
        activeStyle={activeStyle}
      >
        Session Backlog
      </NavLink>
    </nav>
  );
};

export default Header;
