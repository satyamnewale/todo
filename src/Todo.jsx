import { useState, useEffect } from "react";
import "./app.css";
import TodoInput from "./components/TodoInput";
import TodoMap from "./components/TodoMap";
import TodoAllDelete from "./components/TodoAllDelete";

const Todo = () => {
  // lazy initializers
  const [inputValue, setInputValue] = useState(() => {
    {
      return JSON.parse(localStorage.getItem("inputValue") || '""');
  }
  });

  const [task, setTask] = useState(() => {
    {
      return JSON.parse(localStorage.getItem("task") || "[]");
    } 
  });

  // sync to localStorage
  useEffect(() => {
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>

      <section className="form">
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          task={task}
          setTask={setTask}
        />
      </section>

      <section className="todo-list">
        <TodoMap task={task} setTask={setTask} />
      </section>

      <section className="delete-all">
        <TodoAllDelete setTask={setTask} />
      </section>
    </section>
  );
};

export default Todo;
