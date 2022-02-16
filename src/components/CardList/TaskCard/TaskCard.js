import React from "react";
import "./TaskCard.css";
import { createMachine } from "xstate";

const cardMachine = createMachine({
  id: "cardMachine",
  initial: "frontside",
  states: {
    frontside: {
      on: {
        TOGGLE: "backside",
      },
    },
    backside: {
      on: {
        FINISH_TASK: "taskcomplite",
        BACK_TO_TASK: "frontside",
      },
    },
    taskcomplite: {},
  },
});

function TaskCard({ reward, task }) {
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
    <li className={`carditem ${cardColor()}`}>
      <div className="carditem-reward-wrp">
        <span className="carditem-reward">{reward}</span>
      </div>
      <p className="carditem-text">{task}</p>
    </li>
  );
}

export default TaskCard;
