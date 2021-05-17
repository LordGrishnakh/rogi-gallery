import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={classes["main-navigation"]}>
      <ul>
          <li>
            <NavLink activeStyle={{ color: "orange" }} exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "orange" }} to="/about">About</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Header
