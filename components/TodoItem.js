import React from "react";
import TodoList from "./TodoList";
import "./TodoItem.css";


const TodoItem = ({ item, onToggle, onEdit, onDelete }) => {
console.log("Todo Item:", item); 
  return (
    <div className="mb-2">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={`checkbox-${item.id}`}
          checked={item.completed}
          onChange={() => onToggle(item.id)}
        />
        <label className="form-check-label" htmlFor={`checkbox-${item.id}`}>
          {item.text}
        </label>
      </div>
      <p className="mb-0">
        <strong>Due Date:</strong>{" "}
        {item.dueDate ? item.dueDate : "Not set"} 
      </p>
      <button
        onClick={() => onEdit(item.id)}
        className="btn btn-sm btn-warning me-2"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(item.id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
