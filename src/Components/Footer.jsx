import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="asos">
            <NavLink to="/home">
              {" "}
              <img src="logo.png" alt="" />
            </NavLink>
          </div>
          <hr className="hr" />
          <img src="footer.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
