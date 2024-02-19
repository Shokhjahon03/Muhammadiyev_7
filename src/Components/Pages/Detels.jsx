import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Detels = ({ Detels1 }) => {
  let [Soni, setSoni] = useState(1);
  console.log(Detels1);

  useEffect(() => {
    Detels1;
  }, []);
  return (
    <div className="container">
      <div className="bidhell">
        <p className="huhu">Card detels</p>
        {Detels1.map((product) => (
          <div
            className="hell"
            key={product.id}
            style={{
              backgroundColor: `${product.bg}`,
            }}
          >
            <div className="se">
              <img src={product.img} alt="" />
              <div className="txt">
                <p className="namee">{product.name}</p>
                <p className="narxi">${product.prace}.00</p>
              </div>
            </div>
            <div className="we">
              <p
                className="narxx"
                style={{
                  color: `${product.color}`,
                }}
              >
                {product.brand}
              </p>
            </div>
          </div>
        ))}

        <div className="phell">
          {/* <div className="kul">
            <p className="olx">Subtotal</p>
            <p className="olx">$58.00</p>
          </div> */}
          <img src="Line.png" alt="" />
          <div className="kul">
            {/* <p className="olx">Delivery</p>// */}
            {/* <p className="olx">${product.name}</p> */}
          </div>
          {/* <img src="Line.png" alt="" /> */}
          {/* <div className="kul">
            <p className="total">Total</p>
            <p className="total">{product.time}</p>
          </div> */}
          <NavLink to="/allshop" className="rev">
            Review Payment
          </NavLink>
        </div>
      </div>
      <img src="Banner.png" alt="" className="banner" />
    </div>
  );
};

export default Detels;
