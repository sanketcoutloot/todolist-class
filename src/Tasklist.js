import TaskItem from "./TaskItem";

export default function TaskList({ tasks, handleDeleteTask }) {
  // Don't Know how to show TaskLists at middle using CSS

  return (
    <div>
      <div
        style={{
          backgroundColor: "lightgreen",
          margin: "30px",
          paddingBottom: "10px",
          borderBottom: "5px solid red"
        }}
      >
        TASK LISTS
      </div>
      <div
        style={{
          height: "300px",
          margin: "30px",
          backgroundColor: "ghostwhite"
        }}
      >
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            taskItem={task}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
