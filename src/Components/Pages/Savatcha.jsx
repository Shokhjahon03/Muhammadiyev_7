import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import Tovar from "./Tovar";

const useStore = create(
  devtools(
    persist(
      (set) => ({
        count: 1,
        inc: () =>
          set((state) => {
            if (state.count === 1) return state;
            return {
              ...state,
              count: state.count - 1,
            };
          }),

        inx: () => set((state) => ({ count: state.count + 1 })),
      }),
      { name: "counter" }
    )
  )
);

const Savatcha = ({ User, setCount }) => {
  // const [Count, setCount] = useState(1);
  const [Prace, setParce] = useState(38);
  const { count, inc, inx } = useStore();

  //////////////////////
  let ii = JSON.parse(localStorage.getItem("val"))
    ? JSON.parse(localStorage.getItem("val"))
    : [];
  let [a, setA] = useState(ii);
  let [n, setN] = useState(1);

  /////////////////////
  useEffect(() => {
    setCount(count);
  }, [count]);
  ///////////////////////////////////////////
  if (!User) {
    return <Navigate to="/login" replace />;
    console.log(User);
  }

  return (
    <div>
      <div className="container">
        <div className="bidhell">
          {/* <div className="hell"> */}
          {/* //////////////// */}
          {a.length > 0 ? (
            <div>
              {a.map((e, i) => (
                <Tovar key={i} n={n} setN={setN} data={[e]} />
              ))}
            </div>
          ) : (
            <p className="found">Not found product</p>
          )}
          <div className="phell">
            <div className="kul">
              <p className="olx">Subtotal</p>
              <p className="olx">$58.00</p>
            </div>
            <img src="Line.png" alt="" />
            <div className="kul">
              <p className="olx">Delivery</p>
              <p className="olx">${Prace * count}</p>
            </div>
            <img src="Line.png" alt="" />
            <div className="kul">
              <p className="total">Total</p>
              <p className="total">${Prace * count + 58.0}</p>
            </div>
            <NavLink to="/allshop" className="rev">
              Review Payment
            </NavLink>
          </div>
        </div>
        <img src="Banner.png" alt="" className="banner" />
      </div>
    </div>
  );
};

export default Savatcha;
