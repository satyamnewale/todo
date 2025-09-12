const TodoMap = ({ task, setTask }) => {
  const handleDeleteElem = (name) => {
    setTask((task) => task.filter((elemName) => elemName !== name));
  };

  const handleCheck = (name) => {
    setTask(task.map((elem) => elem.name===name ? {...elem, completed: !elem.completed}: elem));
  };

  return (
    <div>
      <ul>
        {task?.map(({name, completed}, index) => (
          <li key={index}>
            <span style={{ textDecoration: completed ? "line-through" : "none" }}>{name}</span>
            <button className="delete" onClick={() => handleDeleteElem(name)}>
              Delete
            </button>
            <button className="check" onClick={()=> handleCheck(name)}>
              {completed ? "Uncheck": "check"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoMap;
