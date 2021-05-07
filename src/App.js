import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

const App = () => {
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form toDos={toDos} setToDos={setToDos} />
      <ToDoList toDos={toDos} />
      <Footer />
    </div>
  );
};

export default App;
