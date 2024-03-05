import React from "react";
import "./cardSection.css";
import Card from "../cards/Card";

const cardSection = () => {
  return (
    <div className="card-container">
      <Card />
      <div className="mid-cards">
        <Card />
        <Card />
      </div>

      <Card />
    </div>
  );
};

export default cardSection;
