import React from "react";
import "./AddTask.css";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

const addCardMachine = createMachine({
  id: "addCardMahcine",
  initial: "addcard",
  states: {
    addcard: {
      on: {
        START_CARD: "cardoptions",
      },
    },
    cardoptions: {
      on: {
        CANCEL: "addcard",
        ADD_CARD: "cardadded",
      },
    },
    cardadded: {},
  },
});

function AddTask() {
  return <div>AddTask</div>;
}

export default AddTask;
