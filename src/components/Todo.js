import { useGlobalContext } from "../context";
const Todo = ({ text, completed, id }) => {
  const { completeHandle, trashHandle } = useGlobalContext();

  return (
    <div className="todo">
      <li className={`todo-item ${completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={() => completeHandle(id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => trashHandle(id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
