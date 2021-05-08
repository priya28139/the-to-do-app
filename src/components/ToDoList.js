import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDos, setToDos, bottomTab, setBottomTab }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    let currentActive = 0;
    toDos.map((toDo) => {
      if (!toDo.complete) {
        currentActive++;
      }
    });
    setActive(currentActive);
  }, [toDos]);
  return (
    <>
      <ul className="todos">
        {toDos.map((toDo, index) => {
          if (bottomTab === "All") {
            return (
              <ToDo
                toDo={toDo}
                key={index}
                toDos={toDos}
                setToDos={setToDos}
                index={index}
              />
            );
          } else if (bottomTab === "Active" && !toDo.complete) {
            return (
              <ToDo
                toDo={toDo}
                key={index}
                toDos={toDos}
                setToDos={setToDos}
                index={index}
              />
            );
          } else if (bottomTab === "Completed" && toDo.complete) {
            return (
              <ToDo
                toDo={toDo}
                key={index}
                toDos={toDos}
                setToDos={setToDos}
                index={index}
              />
            );
          }
        })}
      </ul>
      <div className="card stat">
        <p className="corner">
          <span id="items-left">{active}</span> items left
        </p>
        <div className="filter">
          <button
            id="all"
            className={bottomTab === "All" ? "on" : ""}
            onClick={() => setBottomTab("All")}
          >
            All
          </button>
          <button
            id="active"
            className={bottomTab === "Active" ? "on" : ""}
            onClick={() => setBottomTab("Active")}
          >
            Active
          </button>
          <button
            id="completed"
            className={bottomTab === "Completed" ? "on" : ""}
            onClick={() => setBottomTab("Completed")}
          >
            Completed
          </button>
        </div>
        <div className="corner">
          <button id="clear-completed">Clear Completed</button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
