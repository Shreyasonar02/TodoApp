import React from "react";
import { useForm } from "react-hook-form";
import "./AddEditTodoForm.css";
// AddEditTodoForm.js

const AddEditTodoForm = ({ onSubmit, isEditing }) => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    if (typeof onSubmit === 'function') {
      onSubmit(data.text, data.dueDate); 
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="mb-3">
     

      <div className="input-group">
        <div>
        <label> Add new item to Cart</label>
        <input
         {...register('text', { required: true })}
          type="text"
          className="form-control"
          placeholder="Add a new Task..."/>
        </div>
        <label> Set Due date for Task.</label>
                  <input
          {...register('dueDate')}
          type="date"
          className="form-control"
          placeholder="Due Date"
           />
        
      </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update' : 'Add'}
        </button>
     
    </form>
  );
};

export default AddEditTodoForm;
