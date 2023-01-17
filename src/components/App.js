import React from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const myArray=TASKS.map((task,index)=>{
   return {...task,id:index}
  })
  
  const [category,setCategory]=useState("All") 
  const [tasks,setTasks]=useState(myArray)

  function addTask(newTask){
     return (
      
      setTasks([newTask,...tasks])
     )
  }

  function removeTask(taskRm){
   let visibleTasks=tasks.filter(task=>{
    if (task.id===taskRm){
      return false
    } else{
      return true
    }
   })
   setTasks(visibleTasks)
  }
  
  const displayedTask= tasks.filter((task)=>{
    
      if (category==="All"){
        return true 
      }else{
        return category===task.category
      }
    
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectCategory={setCategory} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES}/>
      <TaskList removeTask={removeTask} tasks={displayedTask}/>
    </div>
  );
}

export default App;
