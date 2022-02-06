import React from "react";
import "./App.css";
// passing props and complete and undo and removing
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div className='btn'>
          <button onClick={() => completeTodo(index)} className="complete-undo">{todo.isCompleted?<i className="fa fa-undo" aria-hidden="true"></i>:"completed"} </button>
          <button onClick={() => removeTodo(index)} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  );
}
//addtodo
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
//handle sumbit
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    //form and buttons
    <form onSubmit={handleSubmit}    className="form">
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter your tasks"
      />
      <button type='submit' className='add'>ADD</button>
    </form>
  );
}

function App() {
  //initial values
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
//add
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

//complete
  const completeTodo = index => {
    const newTodos = [...todos];

   
  if(newTodos[index].isCompleted){
    newTodos[index].isCompleted=false;
  }

  else{
    newTodos[index].isCompleted=true;
  }
    // newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

//remove
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
