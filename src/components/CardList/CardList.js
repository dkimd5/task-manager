import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import "./CardList.css";
import AddTask from "./AddTask";
import useFirestore from "../../hooks/useFirestore";
import { useParams } from "react-router";

function CardList() {
  const [collectionName, setCollectionName] = useState("task-list");
  const { cards } = useFirestore(collectionName);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCollectionName(id);
    }
  }, [id]);

  return (
    <div>
      {(id === undefined || id === "task-list") && (
        <ul className="cardlist">
          {cards.map((card) => (
            <TaskCard key={card.id} card={card} />
          ))}
          <AddTask />
        </ul>
      )}
    </div>
  );
}

export default CardList;
