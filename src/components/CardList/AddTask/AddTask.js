import React, { useState } from "react";
import "./AddTask.css";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
import { projectFirestore } from "../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const addTaskMachine = createMachine({
  id: "addTaskMahcine",
  initial: "addtask",
  states: {
    addtask: {
      on: {
        ADD_TASK: "taskoptions",
      },
    },
    taskoptions: {
      on: {
        CANCEL: "addtask",
        CREATE_TASK: "addtask",
      },
    },
  },
});

function AddTask() {
  const [current, send] = useMachine(addTaskMachine);
  const [text, setText] = useState("");
  const [reward, setReward] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeReward = (e) => {
    setReward(e.target.value);
  };

  const handleAddTask = (taskText, taskReward) => {
    const collectionRef = collection(projectFirestore, "task-list");
    addDoc(collectionRef, { text: taskText, reward: taskReward });
    setText("");
    setReward("");
  };

  return (
    <>
      {current.matches("addtask") && (
        <li
          className="addTask"
          onClick={() => {
            send("ADD_TASK");
          }}
        ></li>
      )}
      {current.matches("taskoptions") && (
        <li className="task-options">
          <div className="task-options-wrp">
            <h3>New housework task</h3>
            <form>
              <label htmlFor="taskText">Title</label>
              <input
                value={text}
                id="taskText"
                type="text"
                onChange={handleChangeText}
              ></input>
              <label htmlFor="taskReward">Reward</label>
              <input
                value={reward}
                id="taskReward"
                type="text"
                onChange={handleChangeReward}
              ></input>
            </form>
          </div>
          <button onClick={() => send("CANCEL")}>Cancel</button>
          <button
            onClick={() => {
              handleAddTask(text, reward);
              send("CREATE_TASK");
            }}
          >
            Create
          </button>
        </li>
      )}
    </>
  );
}

export default AddTask;
