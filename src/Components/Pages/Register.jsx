import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div>
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
                  type="text"
                  name=""
                  id=""
                  placeholder="FULL NAME"
                  className="full"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="EMAIL"
                  className="mail"
                />
                <br></br>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="PASSWORD"
                  className="password icon"
                />
                <img src="Icon.png" alt="" className="Icon1" />
                <div className="forget">
                  {/* <a href="#">Forget Password ?</a> */}
                </div>
                <NavLink to="/login" className="button2">
                  SIGN UP
                </NavLink>
                <p className="for">
                  Already Have An Account? <a href="#"> Log In</a>
                </p>
              </form>
            </div>
            <div className="pastt1">
              <p>Privacy Policy</p>
              <p>Copyright 2022</p>
            </div>
          </div>
          <div className="rr">
            <img src="logg.png" alt="" />
            <p className="kuk">Find Foods With Love</p>
            <p className="lul">
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
