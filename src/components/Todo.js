const Todo = ({ text, completed, id, deleteHandle, completeHandler }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={() => completeHandler(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteHandle(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
