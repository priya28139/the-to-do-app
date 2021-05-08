import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [bottomTab, setBottomTab] = useState("All");
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className="App">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Form toDos={toDos} setToDos={setToDos} />
      <ToDoList
        toDos={toDos}
        setToDos={setToDos}
        bottomTab={bottomTab}
        setBottomTab={setBottomTab}
      />
      <Footer />
    </div>
  );
};

export default App;
