import { useState } from "react";
import "./styles.css";
import TaskList from "./Tasklist";
import NewTask from "./NewTask";

export default function App() {
  const [List, setList] = useState([]);
  // console.log(useState(0));
  const handleAddTask = (task) => {
    // setList(() => List.push("task4"));

    setList([...List, task]);
  };

  const handleDeleteTask = (task) => {
    // setList(() => List.push("task4"));

    setList([]);
  };

  console.log(List);
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <NewTask handleAddTask={handleAddTask} />
      <TaskList tasks={List} handleDeleteTask={handleDeleteTask} />
      {/* <button onClick={() => handleAddTask("task7")}>Test</button> */}
    </div>
  );
}
