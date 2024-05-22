import React, { useState } from "react";
export default function TodoListApp(){
  let[task, setTask] = useState([]);
  let[newtask, setNewtask]= useState("");

  function handleinputvale(event){
    setNewtask(event.target.value)
  }
  function AddButton(){
    if(newtask.trim()!==""){
setTask(t=>[...task, newtask])
setNewtask("");
  }}

  function DeleteButton(index){
    let updatedTask=task.filter((task, i)=>i!==index);
setTask(updatedTask);
  }
  return(
    <div>
      <h1>todo-List-App</h1>
      <div>
        <input type="text" placeholder="Enter a Task..."
        value={newtask}
        onChange={ handleinputvale}
        />
        <button onClick={AddButton}>Add-Task</button>
      </div>
      <ol>
      {task.map((task, index)=>
      <li key={index}>
        <span>{task}</span>
        <button onClick={()=>DeleteButton(index)}>Delete</button>
      </li>
      )}
        
      </ol>
    </div>
  )
}


      