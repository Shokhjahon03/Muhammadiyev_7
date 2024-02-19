import React from "react";
import { Navigate } from "react-router-dom";

const Home = ({ User }) => {
  if (!User) {
    return <Navigate to="/login" replace />;
    console.log(User);
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="blog">
            <div className="text">
              <div className="t">
                <div className="line"></div>
                <p>OVER 1000 USERS</p>
              </div>
              <p className="big">
                Enjoy Foods All Over The <span>World</span>
              </p>
              <p className="lor">
                EatLy help you set saving goals, earn cash back offers, Go to
                disclaimer for more details and get paychecks up to two days
                early. Get a $20 bonus.
              </p>
              <a href="#" className="btn btn1">
                Get started
              </a>
            </div>
            <img src="hero.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="bg">
          <div className="container">
            <div className="blog2">
              <div className="textt">
                <p className="katta">10K+</p>
                <p className="kichik">
                  Satisfied Costumers All Great Over The World{" "}
                </p>
              </div>
              <div className="textt">
                <p className="katta">4M</p>
                <p className="kichik">
                  Healthy Dishes Sold Including Milk Shakes Smooth
                </p>
              </div>
              <div className="textt">
                <p className="katta">99.99%</p>
                <p className="kichik">
                  Reliable Customer Support We Provide Great Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="blogg">
            <img src="mobile.png" alt="" />
            <div className="teext">
              <p className="big">
                Premium <span>Quality</span> For Your Health
              </p>
              <ul>
                <li>
                  Premium quality food is made with ingredients that are packed
                  with essential vitamins, minerals.
                </li>
                <li>
                  These foods promote overall wellness by support healthy
                  digestion and boosting immunity
                </li>
              </ul>
              <a href="#" className="btn3">
                Download <img src="ong.png" alt="" />
              </a>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="orta">
            <img src="Resturent.png" alt="" />
            <p className="title">
              Our Top <span>Dishes</span>
            </p>
            <div className="cards">
              <div className="card">
                <img src="food.png" alt="" />
                <div className="text">
                  <div className="rang">
                    <p>Healthy</p>
                  </div>
                  <p className="name">Chicken Hell</p>
                  <div className="titlee">
                    <p className="r">24min •</p>
                    <img src="star.png" alt="" />
                    <p className="l">4.8</p>
                  </div>
                  <div className="prace">
                    <div className="k">
                      <p className="j">$12</p>
                      <p className="g">.99</p>
                    </div>
                    <img src="Add.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="food.png" alt="" />
                <div className="text">
                  <div className="rang">
                    <p>Healthy</p>
                  </div>
                  <p className="name">Chicken Hell</p>
                  <div className="titlee">
                    <p className="r">24min •</p>
                    <img src="star.png" alt="" />
                    <p className="l">4.8</p>
                  </div>
                  <div className="prace">
                    <div className="k">
                      <p className="j">$12</p>
                      <p className="g">.99</p>
                    </div>
                    <img src="Add.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="food.png" alt="" />
                <div className="text">
                  <div className="rang">
                    <p>Healthy</p>
                  </div>
                  <p className="name">Chicken Hell</p>
                  <div className="titlee">
                    <p className="r">24min •</p>
                    <img src="star.png" alt="" />
                    <p className="l">4.8</p>
                  </div>
                  <div className="prace">
                    <div className="k">
                      <p className="j">$12</p>
                      <p className="g">.99</p>
                    </div>
                    <img src="Add.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="food.png" alt="" />
                <div className="text">
                  <div className="rang">
                    <p>Healthy</p>
                  </div>
                  <p className="name">Chicken Hell</p>
                  <div className="titlee">
                    <p className="r">24min •</p>
                    <img src="star.png" alt="" />
                    <p className="l">4.8</p>
                  </div>
                  <div className="prace">
                    <div className="k">
                      <p className="j">$12</p>
                      <p className="g">.99</p>
                    </div>
                    <img src="Add.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="card">
                <img src="food.png" alt="" />
                <div className="text">
                  <div className="rang">
                    <p>Healthy</p>
                  </div>
                  <p className="name">Chicken Hell</p>
                  <div className="titlee">
                    <p className="r">24min •</p>
                    <img src="star.png" alt="" />
                    <p className="l">4.8</p>
                  </div>
                  <div className="prace">
                    <div className="k">
                      <p className="j">$12</p>
                      <p className="g">.99</p>
                    </div>
                    <img src="Add.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pd">
              <a className="past">View All --</a>
            </div>
            <hr />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <img src="control.png" alt="" className="imgg" />
        </div>
        <div className="container">
          <img src="rrrr.png" alt="" className="imgg" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="yu">
            <img src="sub.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
