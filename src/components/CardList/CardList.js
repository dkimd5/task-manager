import React from "react";
import TaskCard from "./TaskCard";
import "./CardList.css";
import AddTask from "./AddTask";
import useFirestore from "../../hooks/useFirestore";

function CardList() {
  const { cards } = useFirestore("task-list");

  return (
    <ul className="cardslist">
      {cards.map(({ id, reward, task }) => (
        <TaskCard key={id} reward={reward} task={task} />
      ))}
      <AddTask />
    </ul>
  );
}

export default CardList;
