import React from "react";
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

  return (
    <li className="carditem">
      {current.matches("frontside") && (
        <CardFrontside reward={reward} task={task} />
      )}
      {current.matches("backside") && <CardBackside task={task} send={send} />}
    </li>
  );
}

export default TaskCard;
