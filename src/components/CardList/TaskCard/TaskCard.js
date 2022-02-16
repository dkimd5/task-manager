import React from "react";

function TaskCard() {
  return (
    <li className={`carditem ${cardColor()}`}>
      <div className="carditem-front">
        <div className="carditem-reward-wrp">
          <span className="carditem-reward">{reward}</span>
        </div>
        <p className="carditem-text">{task}</p>
      </div>
    </li>
  );
}

export default TaskCard;
