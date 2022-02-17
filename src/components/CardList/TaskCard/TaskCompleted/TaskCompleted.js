import React from "react";
import "./TaskCompleted.css";

function TaskCompleted() {
  return (
    <div className="cardcomplete">
      <svg
        className="cardcomplete-circle-img"
        width="122"
        height="122"
        viewBox="0 0 122 122"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="61" cy="61" r="60" stroke="#FF8933" strokeDasharray="5 5" />
      </svg>
      <svg
        className="cardcomplete-welldone-img"
        width="67"
        height="51"
        viewBox="0 0 67 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.75 40.375L6 24.625L0.75 29.875L21.75 50.875L66.75 5.875L61.5 0.625L21.75 40.375Z"
          fill="#FF8933"
        />
      </svg>
      <p className="cardcomplete-text">Well done!</p>
      <p className="cardcomplete-points">You earned {reward} Help Coins! </p>
    </div>
  );
}

export default TaskCompleted;
