import React, { useEffect, useState } from "react";

const Form = ({ toDos, setToDos }) => {
  const [toDo, setToDo] = useState("");
  const addToDo = () => {
    if (toDo) {
      setToDos([...toDos, toDo]);
      setToDo("");
    }
  };

  useEffect(() => {
    console.log("toDos changed!", toDos);
  }, [toDos]);

  return (
    <main>
      <div className="card add">
        <div className="cb-container">
          <button id="add-btn" onClick={addToDo}>
            +
          </button>
        </div>
        <div className="txt-container">
          <label htmlFor="addt">Create todo</label>
          <input
            type="text"
            className="txt-input"
            placeholder="Create a new todo..."
            spellCheck="false"
            autoComplete="off"
            id="addt"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
};

export default Form;
