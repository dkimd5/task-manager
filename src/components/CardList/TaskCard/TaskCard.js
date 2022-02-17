import React, { useState, useCallback } from "react";
import "./TaskCard.css";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import CardFrontside from "./CardFrontside";
import CardBackside from "./CardBackside";

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
  const [current, send] = useMachine(cardMachine);

  const [toggleClass, setToggleClass] = useState({ active: false });

  const changeToggleClass = () => {
    setToggleClass({ active: !toggleClass.active });
  };

  return (
    <li className={`carditem ${toggleClass.active ? "is-flipped" : null}`}>
      {current.matches("frontside") && (
        <CardFrontside
          reward={reward}
          task={task}
          send={send}
          changeToggleClass={changeToggleClass}
        />
      )}
      {current.matches("backside") && <CardBackside task={task} send={send} />}
    </li>
  );
}

export default TaskCard;
