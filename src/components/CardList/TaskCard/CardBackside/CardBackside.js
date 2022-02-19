import React from "react";
import "./CardBackside.css";
import { projectFirestore, timestamp } from "../../../../firebase/config";
import { doc, deleteDoc, collection, setDoc } from "firebase/firestore";
import { TODAY } from "../../../../utils/variables";
import nextId from "react-id-generator";

function CardBackside({ card, send, setIsFlipped }) {
  const { task, reward, id: taskId } = card;

  const moveToHistory = () => {
    const collectionRef = collection(projectFirestore, "task-history");
    const docRef = doc(collectionRef, TODAY);
    let taskHistoryId = nextId();
    setDoc(
      docRef,
      { [taskHistoryId]: { task, reward, timestamp } },
      { merge: true }
    );
  };

  const handleTaskDone = () => {
    send("FINISH_TASK");
    moveToHistory();
    setTimeout(() => {
      deleteDoc(doc(projectFirestore, "task-list", taskId));
    }, 3000);
  };

  return (
    <div className="backside">
      <p className="backside-text">did you {task}?</p>

      <div className="backside-btn-wrp">
        <button
          className="backside-btn backside-btn-notdone"
          onClick={() => {
            send("BACK_TO_TASK");
            setIsFlipped((state) => !state);
          }}
        >
          <svg
            className="backside-btn-svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.0834 4.55919L33.4409 0.916687L19 15.3575L4.55919 0.916687L0.916687 4.55919L15.3575 19L0.916687 33.4409L4.55919 37.0834L19 22.6425L33.4409 37.0834L37.0834 33.4409L22.6425 19L37.0834 4.55919Z" />
          </svg>
        </button>
        <button
          className="backside-btn backside-btn-done"
          onClick={() => {
            handleTaskDone();
          }}
        >
          <svg
            className="backside-btn-svg"
            width="36"
            height="27"
            viewBox="0 0 36 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.4L3.59999 13L0.799988 15.8L12 27L36 3.00001L33.2 0.200012L12 21.4Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CardBackside;
