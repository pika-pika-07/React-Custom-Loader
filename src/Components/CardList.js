import React from "react";
import Card from "./Card";

const CardList = ({ list }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {list.map((el) => (
          <Card el={el} />
        ))}
      </div>
    </>
  );
};

export default CardList;
