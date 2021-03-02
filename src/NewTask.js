import { useState } from "react";

export default function NewTask({ handleAddTask }) {
  let [newTask, setTask] = useState("");
  const handleChange = (event) => {
    setTask(event.target.value.toUpperCase());
  };
  //Errors I got on I can't assign any value to newTask
  //required not working
  // type= Button attribute of button to avoid reload
  return (
    <div style={{ margin: "20px 30px " }}>
      <form>
        {/* <label>New Task</label> */}
        <input
          // required
          value={newTask}
          onChange={(event) => handleChange(event)}
          placeholder="e.g. Wash My Car"
        />
        <button
          type="button"
          onClick={() => {
            handleAddTask(newTask);
            setTask("");
          }}
        >
          Add New Task
        </button>
      </form>
    </div>
  );
}
