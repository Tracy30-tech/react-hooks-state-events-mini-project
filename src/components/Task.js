import React from "react";

function Task({category, text,removeTask,taskRm}) {
  function handleDelete(){
    removeTask(taskRm) 
    
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
