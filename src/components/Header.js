import React from "react";
import { Link } from "react-router-dom";

const Header = ({ contactChange = false }) => {
  return (
    <header>
      <div className="header-logo">Metricks</div>
      <div className="header-links">
        <Link to={"/about"}> About Us </Link>
        <Link to={"/blog"}> Blog </Link>
        <button onClick={() => contactChange(true)}> Contact Us </button>
      </div>
    </header>
  );
};

export default Header;
