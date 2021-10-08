import Todo from "./Todo";
const TodoList = ({ todos, deleteHandle, completeHandler, filteredTodos }) => {
  //console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              {...todo}
              key={todo.id}
              deleteHandle={deleteHandle}
              completeHandler={completeHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
