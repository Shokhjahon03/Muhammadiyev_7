import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ setUser, Addcard, Count, x }) => {
  // var x = localStorage.getItem("counter");

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="ong">
            <NavLink to="/home">
              <img src="logo.png" alt="" className="logg" />
            </NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="allshop">Allshop</NavLink>
          </div>
          <div className="chap">
            <div className="tt">{x}</div>
            <NavLink to="/savatcha">
              <img src="shop.png" alt="" />
            </NavLink>
            <NavLink to="/login" onClick={() => setUser("")}>
              Login
            </NavLink>
            <Link to="/" onClick={() => setUser("")} className="btn">
              Sign Up
            </Link>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
