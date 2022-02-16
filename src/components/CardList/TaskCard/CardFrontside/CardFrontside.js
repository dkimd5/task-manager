import React from "react";
import "./CardFrontside.css";

function CardFrontside({ reward, task }) {
  const cardColor = () => {
    if (reward >= 10 && reward < 75) {
      return "lowest-reward";
    } else if (reward < 100) {
      return "low-reward";
    } else if (reward < 125) {
      return "high-reward";
    } else if (reward >= 125) {
      return "highest-reward";
    } else {
      return "";
    }
  };

  return (
    <div className={`frontside ${cardColor()}`}>
      <div className="frontside-reward-wrp">
        <span className="frontside-reward">{reward}</span>
      </div>
      <p className="frontside-text">{task}</p>
    </div>
  );
}

export default CardFrontside;
