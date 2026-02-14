import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // 1. بارگذاری tasks از LocalStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // 2. همگام‌سازی tasks با LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // افزودن task جدید
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  // حذف task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // تغییر وضعیت completed
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My Todo List</h1>

        <TodoForm addTask={addTask} />

        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
    </div>
  );
}

export default App;
