import { useGlobalContext } from "../context";
import Todo from "./Todo";
const Todolist = () => {
  const { filterTodos } = useGlobalContext();
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => {
          return <Todo {...todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default Todolist;
