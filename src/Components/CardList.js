import React from "react";
import Card from "./Card";
import "../DashboardBody.css";
const CardList = ({ list }) => {
  return (
    <>
      <div className="cardlist">
        {list.map((el) => (
          <Card el={el} />
        ))}
      </div>
    </>
  );
};

export default CardList;
