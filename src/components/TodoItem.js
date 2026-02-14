function TodoItem({ task, deleteTask, toggleTask }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span className="task-text">{task.text}</span>

      <div className="actions">
        <button
          className="check-btn"
          onClick={() => toggleTask(task.id)}
        >
          ✔
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          ✖
        </button>
      </div>
    </li>
  );
}

export default TodoItem;