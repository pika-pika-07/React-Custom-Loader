import React from "react";

const Card = ({ el }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "15rem",
        height: "15rem",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      Item {el}
    </div>
  );
};

export default Card;
