import React from "react";
import "./styles.scss";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="header__nav-links">
        <div className="header__logo">
          <Link to="/">LOGO</Link>
        </div>
        <div className="header__right-links">
          <Link to="/add-products"> AddProducts</Link>
          <Link to="/books">Books</Link>
          <Link to="/about-us">About Us</Link>
          <FaRegUserCircle  className="header__icon"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
