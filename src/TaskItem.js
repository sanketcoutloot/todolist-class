import { useState } from "react";

export default function TaskItem({ taskItem, handleDeleteTask }) {
  const [completed, setCompleted] = useState(true);
  const [buttonName1, setButtonName1] = useState("Pending");
  const [changeStyle, setChangeStyle] = useState({
    textDecorationLine: "none"
  });
  //useState should start with false don't know what is happening,

  //if we take pending first
  //click does not work
  //How to do without ifelse and state
  // how to do with ternery operator

  // backgroundColor: "ghostwhite",
  // paddingTop: "10px",
  // paddingBottom: "5px",
  // marginBottom: "2px",
  // borderBottom: "5px solid red"
  // textDecorationLine: "line-through"
  // textDecorationLine: "none"]
  const checkCompleted = () => {
    if (completed === true) {
      setChangeStyle({ textDecorationLine: "line-through" });
      setButtonName1("Completed");
    } else {
      setChangeStyle({ textDecorationLine: "none" });
      setButtonName1("Pending");
    }
  };

  return (
    <div style={changeStyle}>
      <button
        type="button"
        style={{ marginRight: "30px" }}
        onClick={() => {
          setCompleted(!completed);
          console.log({ completed });
          checkCompleted();
        }}
      >
        {buttonName1}
      </button>

      {taskItem}
      <button
        style={{ marginLeft: "30px" }}
        type="button"
        onClick={() => {
          handleDeleteTask("task2");
          // setTask(" ");
        }}
      >
        Delete Task
      </button>
    </div>
  );
}
