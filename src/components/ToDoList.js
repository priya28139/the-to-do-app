import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    let count = 0;
    toDos.map((toDo) => {
      if (!toDo.complete) {
        count++;
      }
    });
    setActive(count);
  }, [toDos]);
  return (
    <>
      <ul className="todos">
        {toDos.map((toDo, index) => (
          <ToDo toDo={toDo} key={index} />
        ))}
      </ul>
      <div className="card stat">
        <p className="corner">
          <span id="items-left">{active}</span> items left
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
