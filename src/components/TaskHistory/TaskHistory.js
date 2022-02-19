import React from "react";
import CardFrontside from "../CardList/TaskCard/CardFrontside";
import "./TaskHistory.css";
import { TODAY } from "../../utils/variables";

function TaskHistory({ cards }) {
  console.log(cards);

  return (
    <div className="history">
      {cards.map((day) => (
        <div className="history-day" key={day.id}>
          <span className="history-day-date">
            {TODAY === day.id ? <span>Today</span> : ""}
            {day.id}
          </span>
          <ul className="history-card-list">
            {Object.values(day)
              .splice(-0, Object.values(day).length - 1)
              .map((card) => (
                <li className="carditem">
                  <CardFrontside card={card} />
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TaskHistory;
