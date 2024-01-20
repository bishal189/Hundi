import React from "react";

const ListHeader = ({ headerItems }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {headerItems.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default ListHeader;
