import React from "react";
import Task from "./Task";


function TaskList({tasks,removeTask}) {
  
  return (
    <div className="tasks">
      {tasks.map((task,index)=>{
        return <Task removeTask={removeTask} taskRm={task.id} key={index} text={task.text} category={task.category}/>
      }
      )}
    </div>
  );
}

export default TaskList;
