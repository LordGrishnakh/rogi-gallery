import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger/Hamburger";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <nav className={classes["main-navigation"]}>
        <ul>
          <li>
            <NavLink activeStyle={{ color: "orange" }} exact to="/">
              Домашняя
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "orange" }} to="/about">
              Обо мне
            </NavLink>
          </li>
        </ul>
      </nav>
      <Hamburger />
    </>
  );
};

export default Header;
