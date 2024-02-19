import { Button } from "bootstrap";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = ({ setUser }) => {
  const [GetUser, setGetUser] = useState("");
  return (
    <>
      <div className="container2">
        <div className="ll">
          <a href="#">
            <img src="logo2.png" alt="" className="logo2" />
          </a>
          <div className="f">
            <form>
              <p className="ju">Sign Up To eatly</p>
              <input
                type="email"
                name=""
                id=""
                placeholder="EMAIL"
                className="mail"
                onChange={(e) => setGetUser(e.target.value)}
              />
              <br></br>
              <input
                type="text"
                name=""
                id=""
                placeholder="PASSWORD"
                className="password icon"
              />
              <img src="Icon.png" alt="" className="Icon" />
              <div className="forget">
                <a href="#">
                  <NavLink to="/">Forget Password ?</NavLink>
                </a>
              </div>

              <NavLink
                to="/home"
                type="button"
                className="button1"
                onClick={() => setUser(GetUser)}
              >
                SIGN IN
              </NavLink>
              <p className="for">
                Create A New Account?{" "}
                <a href="#">
                  <NavLink to="/">Sign Up</NavLink>
                </a>
              </p>
            </form>
          </div>
          <div className="pastt">
            <p>Privacy Policy</p>
            <p>Copyright 2022</p>
          </div>
        </div>
        <div className="rr">
          <img src="logg.png" alt="" />
          <p className="kuk">Find Foods With Love</p>
          <p className="lul">
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
