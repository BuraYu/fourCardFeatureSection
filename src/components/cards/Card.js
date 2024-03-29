import React from "react";
import "./Card.css";

const card = ({ title, description, logo, color, div }) => {
  return (
    <div className={`card ${div}`} style={{ borderTop: `4px solid ${color}` }}>
      <span className="card-title">{title}</span>
      <p className="card-description">{description}</p>
      <img src={logo} alt="" className="card-img" />
    </div>
  );
};

export default card;
