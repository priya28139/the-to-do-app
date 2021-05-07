import React from "react";

const ToDo = ({ toDo }) => {
  return (
    <li className="card" draggable={true}>
      <div className="cb-container">
        <input className="cb-input" type="checkbox" />
        <span className="check"></span>
      </div>
      <p className="item">{toDo.task}</p>
      <button className="clear">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
};

export default ToDo;