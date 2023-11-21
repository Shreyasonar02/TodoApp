import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEditTodoForm from "../src/components/AddEditTodoForm";
import useTodo from "../src/hooks/useTodo";
import TodoList from "../src/components/TodoList";
import Header from "../src/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const {
    todoItems,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodoCompletion,
  } = useTodo();

  return (
    <Router>
        <div className="App">

      <Routes>
        <Route path="/" element={<Header />} />
        </Routes>
       
              <AddEditTodoForm onSubmit={addTodo} isEditing={false} />
              <TodoList
                todoItems={todoItems}
                toggleTodo={toggleTodoCompletion}
                onEdit={updateTodo}
                onDelete={deleteTodo}
              />
            </div>
        
    
    </Router>
  );
};

export default App;
