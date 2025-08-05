const todoList = ["Do Homework", "Clean Room", "Take Out Chicken"];

function TodoList() {
    return <div>
              <h2> Todo List </h2>

              <input type="text" placeholder="New task..."/>
              <button> Add task </button>

              <ul>
                {todoList.map((task, key) => (
                    <li key={key}>{task}</li>
                ))}
              </ul>
              
          </div>
}

export default TodoList;
