import { useState } from "react";

function TodoForm({ addTask }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;