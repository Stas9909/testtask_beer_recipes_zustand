import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink className='headerLink' to='/'>Homepage</NavLink>
    </header>
  )
}

export default Header;