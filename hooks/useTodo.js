// useTodo.js
import { useState } from "react";

const useTodo = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (text, dueDate) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
      dueDate: dueDate || null,
    };
    setTodoItems((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateTodo = (id, text, dueDate) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: text, dueDate: dueDate || null } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompletion = (id) => {
    setTodoItems((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return {
    todoItems,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoCompletion,
  };
};

export default useTodo;
