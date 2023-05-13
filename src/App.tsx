import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoItem } from "./model/TodoItem";

const App: React.FC = () => {
  const [todoList, seTodoList] = useState<TodoItem[]>([]);
  const onAddTodo = (todoTitle: string) => {
    if (!todoTitle) return;

    seTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: Math.random().toString(), title: todoTitle },
    ]);
  };

  const onDeleteTodo = (id: string) => {
    seTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => todoItem.id !== id)
    );
  };
  return (
    <>
      <AddTodo onAddTodo={onAddTodo} />
      <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} />
    </>
  );
};

export default App;
