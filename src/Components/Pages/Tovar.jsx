import React, { useState } from "react";
const Tovar = ({ data }) => {
  let [Soni, setSoni] = useState(1);

  return (
    <div>
      
      {data.map((e, i) => (
        <div className="hell" key={i}>
          <div className="se">
            <img src="foodkids.png" alt="" />
            <div className="txt">
              <p className="namee">${e.name}</p>
              <p className="narxi">${e.prace}.00</p>
            </div>
          </div>
          <div className="we">
            <div className="divv">
              <button
                className="minus"
                onClick={() => (Soni > 1 ? setSoni(Soni - 1) : 1)}
              >
                -
              </button>
              <p className="count">{Soni}</p>
              <button className="plus" onClick={() => setSoni(Soni + 1)}>
                +
              </button>
            </div>
            <p className="narxx">${Soni * e.prace}.00</p>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default Tovar;
