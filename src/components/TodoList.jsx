import { useState } from "react";


function TodoList() {
    const [newTask, setNewTask] = useState("");
    const [todoList, setTodoList] = useState([
      { id:1, taskName: "Do Homework"},
      { id:2, taskName: "Clean Room"},
      { id:3, taskName: "Take Out Chicken"},
    ]);

    function addTask() {
      setTodoList([...todoList, newTask]);
      setNewTask("");
       

    }
    return (
          <div>
              <h2> Todo List </h2>

              <input type="text" placeholder="New task..." value={newTask} onChange={(event) => setNewTask(event.target.value)}/>
              <button onClick={addTask} disabled={!newTask}> Add task </button>

              <ul>
                {todoList.map((task, key) => (
                    <li key={key}>{task}</li>
                ))}
              </ul>
              
          </div>
    );
}

export default TodoList;
