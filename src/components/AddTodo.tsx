import React, { useRef } from "react";
import "./AddTodo.css";

const AddTodo: React.FC<{ onAddTodo: (title: string) => void }> = ({
  onAddTodo,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoTitle = inputRef.current!.value;
    onAddTodo(todoTitle);
    inputRef.current!.value = "";
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-title">Title</label>
        <input type="text" id="todo-title" ref={inputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
