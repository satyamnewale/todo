const TodoInput = ({ inputValue, setInputValue, task, setTask }) => {
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;
    if (task.some((t) => t.name === inputValue.trim())) {
      return alert("Task already exists");
    }

    setTask((task) => [...task, { name: inputValue.trim(), completed: false }]);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleFromSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
