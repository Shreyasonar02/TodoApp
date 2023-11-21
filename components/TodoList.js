import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todoItems, toggleTodo, onEdit, onDelete }) => {
  console.log("Todo Items:", todoItems);

  return (
    <div className="list">
      <h1 className="mb-4">Your scheduled  Task</h1>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onToggle={toggleTodo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
