import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink className='headerLink' to='/testtask_beer_recipes_zustand/'>Homepage</NavLink>
    </header>
  )
}

export default Header;