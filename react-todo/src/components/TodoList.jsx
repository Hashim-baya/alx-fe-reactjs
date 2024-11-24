import React, { useState } from "react";

// Todo Item Component
const TodoItem = ({ todo, onToggle, onDelete }) => (
  <div>
    <span
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
      }}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </div>
);

const TodoList = () => {
  // Initial state with some example todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false },
    { id: 3, text: "Build Todo App", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Add Todo Function
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setNewTodo(""); // Clear input field
  };

  // Toggle Todo Function
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo Function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Add Todo Form */}
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={() => addTodo(newTodo)}>Add Todo</button>
      </div>

      {/* Todo List */}
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
