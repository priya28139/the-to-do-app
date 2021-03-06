import React, { useEffect, useState } from "react";

const ToDo = ({ toDo, toDos, setToDos, index, innerRef, provided }) => {
  const [checked, setChecked] = useState(toDo.complete);
  const handleChecked = () => {
    let newToDos = toDos.map((toDo, toDoIndex) => {
      if (toDoIndex === index) {
        toDo.complete = !toDo.complete;
        return toDo;
      }
      return toDo;
    });
    setToDos(newToDos);
    setChecked(!checked);
  };

  useEffect(() => {
    setChecked(toDo.complete);
  }, [toDos]);

  const handleClearToDo = () => {
    let newToDos = toDos.filter((toDo, toDoIndex) => {
      if (toDoIndex !== index) {
        return toDo;
      }
    });
    setToDos(newToDos);
  };
  return (
    <li
      className={checked ? "card checked" : "card"}
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="cb-container">
        <input
          className="cb-input"
          type="checkbox"
          onChange={handleChecked}
          checked={checked}
        />
        <span className="check"></span>
      </div>
      <p className="item">{toDo.task}</p>
      <button className="clear" onClick={handleClearToDo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
};

export default ToDo;
