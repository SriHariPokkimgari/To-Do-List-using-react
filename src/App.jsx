import { useState } from "react";
import "./App.css";
import ToDOList from "./ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDOList />
    </>
  );
}

export default App;
