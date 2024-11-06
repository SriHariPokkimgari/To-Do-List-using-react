import { useState } from "react";

function ToDOList() {
  const [tasks, setTasks] = useState([
    "Go to college",
    "write external exam",
    "pay college fee",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleAdd() {
    setNewTask("");
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    } else {
      alert("Enter your task first..!");
    }
  }

  function handleRemove(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="To-Do-List">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            value={newTask}
            placeholder="Enter tasks..."
            onChange={handleChange}
          />
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>

        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>

              <button
                className="remove-btn"
                onClick={() => handleRemove(index)}
              >
                Delete
              </button>
              <button className="move-btn" onClick={() => handleMoveUp(index)}>
                👆
              </button>
              <button
                className="move-btn"
                onClick={() => handleMoveDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDOList;
