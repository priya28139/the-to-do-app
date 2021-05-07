import React from "react";

const ToDoList = () => {
  return (
    <>
      <ul className="todos"></ul>
      <div className="card stat">
        <p className="corner">
          <span id="items-left">0</span> items left
        </p>
        <div className="filter">
          <button id="all" className="on">
            All
          </button>
          <button id="active">Active</button>
          <button id="completed">Completed</button>
        </div>
        <div className="corner">
          <button id="clear-completed">Clear Completed</button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
