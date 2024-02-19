import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Allshop from "./Components/Pages/Allshop";
import Savatcha from "./Components/Pages/Savatcha";
import Detels from "./Components/Pages/Detels";
import Error from "./Components/Pages/Error";
import "./Sass/index.scss";

const App = () => {
  const [User, setUser] = useState("");
  const [Addcard, setAddcard] = useState([]);
  const [Count, setCount] = useState(0);
  const [Detels1, setDetels1] = useState([]);
  console.log(Detels1);
  let [x, setX] = useState(0);
  return (
    <div>
      <Router>
        {User ? (
          <Header setUser={setUser} Addcard={Addcard} Count={Count} x={x} />
        ) : null}
        <Routes>
          <Route path="home" element={<Home User={User} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route index element={<Register />} />
          <Route
            path="allshop"
            element={
              <Allshop
                User={User}
                setAddcard={setAddcard}
                Addcard={Addcard}
                x={x}
                setX={setX}
                setDetels1={setDetels1}
                Detels1={Detels1}
              />
            }
          />
          <Route
            path="savatcha"
            element={
              <Savatcha User={User} setCount={setCount} x={x} setX={setX} />
            }
          />
          <Route path="detels" element={<Detels Detels1={Detels1} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {User ? (
          <Footer setUser={setUser} Addcard={Addcard} Count={Count} x={x} />
        ) : null}
      </Router>
    </div>
  );
};

export default App;
