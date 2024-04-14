import React, { useState } from "react";

function ToDoList() {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInput(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        if(newTask === "") return;
        setTasks(t => [...t, newTask]);
        setNewTask("");
    }

    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input type="text" placeholder="Enter a task" onChange={handleInput} value={newTask} />
        <button className="add-button" onClick={handleAddTask}>Add</button>

        <ol>
            {tasks.map((task, index) => 
          <li key= {index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick= {() => handleDeleteTask(index)} >Delete</button>
            <button className="move-button" onClick= {() => moveTaskUp(index)} >Up👆</button>
            <button className="move-button" onClick= {() => moveTaskDown(index)} >Down👇</button>
          </li>)}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
