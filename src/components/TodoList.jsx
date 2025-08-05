import { useState } from "react";

const todoList = ["Do Homework", "Clean Room", "Take Out Chicken"];

function TodoList() {
    const [newTask, setNewTask] = useState("");

    function addTask() {

    }
    return <div>
              <h2> Todo List </h2>

              <input type="text" placeholder="New task..." onChange={(event) => setNewTask(event.targert.value)}/>
              <button> Add task </button>

              <ul>
                {todoList.map((task, key) => (
                    <li key={key}>{task}</li>
                ))}
              </ul>
              
          </div>
}

export default TodoList;
