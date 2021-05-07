import React from "react";

const Form = () => {
  return (
    <main>
      <div className="card add">
        <div className="cb-container">
          <button id="add-btn">+</button>
        </div>
        <div className="txt-container">
          <label for="addt">Create todo</label>
          <input
            type="text"
            className="txt-input"
            placeholder="Create a new todo..."
            spellcheck="false"
            autocomplete="off"
            id="addt"
          />
        </div>
      </div>
    </main>
  );
};

export default Form;
