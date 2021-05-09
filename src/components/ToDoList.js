import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
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

  const handleClearCompleted = () => {
    let newToDos = toDos.filter((toDo) => {
      //console.log(toDo);
      if (!toDo.complete) {
        return toDo;
      }
    });

    setToDos(newToDos);
  };

  const handleDragEnd = (result) => {
    if (result.destination) {
      const newToDos = Array.from(toDos);
      const [reorderedItem] = newToDos.splice(result.source.index, 1);
      newToDos.splice(result.destination.index, 0, reorderedItem);

      setToDos(newToDos);
    }
  };
  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {toDos.map((toDo, index) => {
                if (bottomTab === "All") {
                  return (
                    <Draggable
                      key={index}
                      draggableId={"" + index}
                      index={index}
                    >
                      {(provided) => (
                        <ToDo
                          provided={provided}
                          innerRef={provided.innerRef}
                          toDo={toDo}
                          toDos={toDos}
                          setToDos={setToDos}
                          index={index}
                        />
                      )}
                    </Draggable>
                  );
                } else if (bottomTab === "Active" && !toDo.complete) {
                  return (
                    <Draggable
                      key={index}
                      draggableId={"" + index}
                      index={index}
                    >
                      {(provided) => (
                        <ToDo
                          provided={provided}
                          innerRef={provided.innerRef}
                          toDo={toDo}
                          toDos={toDos}
                          setToDos={setToDos}
                          index={index}
                        />
                      )}
                    </Draggable>
                  );
                } else if (bottomTab === "Completed" && toDo.complete) {
                  return (
                    <Draggable
                      key={index}
                      draggableId={"" + index}
                      index={index}
                    >
                      {(provided) => (
                        <ToDo
                          provided={provided}
                          innerRef={provided.innerRef}
                          toDo={toDo}
                          toDos={toDos}
                          setToDos={setToDos}
                          index={index}
                        />
                      )}
                    </Draggable>
                  );
                }
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
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
          <button id="clear-completed" onClick={handleClearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
