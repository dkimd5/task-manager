import React from "react";
import TaskCard from "./TaskCard";
import "./CardList.css";

const initialCards = [
  { reward: 125, task: "Find dad's wallet" },
  { reward: 100, task: "Put away old toys to white boxes on the balkoney" },
  { reward: 75, task: "Wash the dishes" },
  { reward: 50, task: "Make your bed in the morning" },
  { reward: 50, task: "Fix the pillowcase" },
  { reward: 50, task: "Water plants" },
];

function CardList() {
  return (
    <ul className="cardslist">
      {initialCards.map((card, index) => (
        <TaskCard reward={card.reward} task={card.task} />
      ))}
    </ul>
  );
}

export default CardList;
