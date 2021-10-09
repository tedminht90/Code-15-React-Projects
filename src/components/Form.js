import { useGlobalContext } from "../context";
const Form = () => {
  const { textInput, setTextInput, submitHandle, setStatus } =
    useGlobalContext();
  //console.log(todos);
  return (
    <form>
      <input
        value={textInput}
        type="text"
        className="todo-input"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button className="todo-button" type="submit" onClick={submitHandle}>
        <i className="fa fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
