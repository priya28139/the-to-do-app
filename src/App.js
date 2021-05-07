import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
const App = () => {
  const [toDos, setToDos] = useState([]);
  return (
    <div className="App">
      <Header />
      <Form toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
