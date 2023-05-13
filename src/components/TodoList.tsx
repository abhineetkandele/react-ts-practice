import React from "react";
import { TodoItem } from "../model/TodoItem";
import "./TodoList.css";

const TodoList: React.FC<{
  todoList: TodoItem[];
  onDeleteTodo: (id: string) => void;
}> = ({ todoList, onDeleteTodo }) => {
  return (
    <ul>
      {todoList.map((todoItem) => (
        <li key={todoItem.id}>
          <span>{todoItem.title}</span>
          <button onClick={() => onDeleteTodo(todoItem.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
