import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEditTodoForm from "../src/components/AddEditTodoForm";
import useTodo from "../src/hooks/useTodo";
import TodoItem from "../src/components/TodoItem"; 
import TodoList from "../src/components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css"; 
// import styles from "./App.module.css"; // Import your CSS modules
const App = () => {
  const {
    todoItems,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoCompletion,
  } = useTodo();

  return (
    <div className="App">
      <AddEditTodoForm onSubmit={addTodo} isEditing={false} />
      <TodoList
        todoItems={todoItems}
        toggleTodo={toggleTodoCompletion}
        onEdit={updateTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
/* <Router>
        <Routes>
          <Route
            path="/"
            element={<TodoList todoItems={todoItems} toggleTodo={toggleTodoCompletion} />}
          />
          <Route
            path="/add"
            element={<AddEditTodoForm onSubmit={addTodo} isEditing={false} />}
          />
          <Route
            path="/edit/:id"
            element={<AddEditTodoForm onSubmit={updateTodo} isEditing={true} />}
          />
        </Routes>
      </Router> */