import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";

const Allshop = ({ User, setX, x, setDetels1 }) => {
  const [Products, setProducts] = useState([]);

  const [Search, setSearch] = useState("");
  const [Select, setSelect] = useState("");
  const [Yurak, setYurak] = useState(false);
  //////////////////////////////////
  let [heart, setHeart] = useState(true);

  let ii = JSON.parse(localStorage.getItem("val"))
    ? JSON.parse(localStorage.getItem("val"))
    : [];

  const korz = (id) => {
    setX(x + 1);

    const news = Products.filter((product) => product.id === id);
    localStorage.setItem("val", JSON.stringify([...ii, ...news]));
  };
  //////////////////////

  const fechProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/prodacts`);
      const str = await res.data;
      setProducts(str);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetels = (id) => {
    let tovar = Products.filter((e) => e.id === id);
    setDetels1(tovar);
    console.log(tovar);
  };

  useEffect(() => {
    fechProducts();
  }, [Yurak]);
  console.log(x);
  /////////////////////
  if (!User) {
    return <Navigate to="/login" replace />;
    console.log(User);
  }
  return (
    <div>
      {" "}
      <section>
        <div className="container">
          <div className="orta">
            <div className="search">
              <input
                type="email"
                name=""
                id=""
                placeholder="Searching..."
                className="search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                name="select"
                id="select"
                className="select"
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="">All</option>
                <option value="Healthy">Healthy</option>
                <option value="Trending">Trending</option>
                <option value="Supreme">Supreme</option>
              </select>
            </div>
            <div className="cards">
              {Products.filter((product) => {
                if (Search === "" && Select === "") {
                  return product;
                } else if (
                  product.name.toLowerCase().includes(Search.toLowerCase()) &&
                  product.brand.toLowerCase().includes(Select.toLowerCase())
                ) {
                  return product;
                }
              }).map((product) => (
                <a className="card" key={product.id}>
                  <div className="yurak" onClick={() => setYurak(!Yurak)}>
                    {!Yurak ? "🤍" : "❤️"}
                  </div>
                  <NavLink to="/detels">
                    <img
                      src={product.img}
                      alt=""
                      className="images"
                      onClick={() => handleDetels(product.id)}
                    />
                  </NavLink>
                  <div className="text">
                    <div
                      className="rang"
                      style={{
                        backgroundColor: `${product.bg}`,
                      }}
                    >
                      <p style={{ color: `${product.color}` }}>
                        {product.brand}
                      </p>
                    </div>
                    <p className="name">{product.name}</p>
                    <div className="titlee">
                      <p className="r">{product.time} •</p>
                      <img src="star.png" alt="" />
                      <p className="l">{product.ball}</p>
                    </div>
                    <div className="prace">
                      <div className="k">
                        <p className="j">${product.prace}</p>
                        <p className="g">.99</p>
                      </div>
                      <button onClick={() => korz(product.id)}>
                        {" "}
                        <img src="Add.png" alt="" />
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <hr />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="cond">
            <p className="xs">
              Frequently Asked
              <span>Questions</span>
            </p>
            <p className="def">How long does delivery take?</p>
            <p className="jiji">
              You Can Get Information By Contacting Our Support Team Have 24/7
              Service.What’s The Difference Between Free And Paid Plan ?
            </p>
            <hr />
            <p className="def">How Does It Work ?</p>
            <hr />
            <p className="def">How does your food delivery service work?</p>
            <hr />
            <p className="def">What payment options do you accept?</p>
            <hr />
            <p className="def">Do you offer discounts or promotions?</p>
            <hr />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allshop;
