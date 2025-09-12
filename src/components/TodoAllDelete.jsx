const TodoAllDelete = ({setTask}) => {
  const handleDeleteAll = () => {
    setTask([]);
  };

  return (
    <div>
      <button className="todo-btn" onClick={handleDeleteAll}>
        Delete All
      </button>
    </div>
  );
};

export default TodoAllDelete;
