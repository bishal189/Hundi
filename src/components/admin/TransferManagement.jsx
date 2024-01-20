import React from "react";

const TransferManagement = ({ count }) => {
  const oddStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#EDEDED",
    padding: "10px",
  };

  const evenStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "10px",
    height: "50px",
  };
  return (
    <div style={count % 2 == 1 ? oddStyle : evenStyle}>
      <p style={{ letterSpacing: ".9px" }}>Martine James</p>
      <p style={{ letterSpacing: ".9px" }}>22000213</p>
      <p style={{ letterSpacing: ".9px" }}>Mike Tom</p>
      <p style={{ letterSpacing: ".9px" }}>985647293</p>
      <p style={{ letterSpacing: ".9px" }}>500</p>
      <p style={{ letterSpacing: ".9px" }}>James Shrestha</p>
      <p style={{ letterSpacing: ".9px" }}>Jhon Cena</p>
      <p style={{ letterSpacing: ".9px" }}>On going</p>
      <div style={{ display: "flex" }}>
        <button
          style={{
            background: "#53449F",
            color: "#ffffff",
            border: 0,
            width: "80px",
            height: "25px",
          }}
        >
          Accept
        </button>
        <button
          style={{
            background: "#FB896B",
            color: "#ffffff",
            border: 0,
            marginLeft: "3px",
            width: "80px",
            height: "25px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TransferManagement;
