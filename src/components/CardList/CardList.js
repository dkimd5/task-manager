import React, { useState } from "react";
import TaskCard from "./TaskCard";
import "./CardList.css";
import AddTask from "./AddTask";
import useFirestore from "../../hooks/useFirestore";

function CardList() {
  const [collectionName, setCollectionName] = useState("task-list");
  const { cards } = useFirestore(collectionName);

  return (
    <ul className="cardslist">
      {cards.map(({ id, reward, text }) => (
        <TaskCard
          key={id}
          reward={reward}
          task={text}
          collectionName={collectionName}
          taskId={id}
        />
      ))}
      <AddTask />
    </ul>
  );
}

export default CardList;
