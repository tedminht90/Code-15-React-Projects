const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: new Date().getTime().toString(),
      },
    ]);
    setInputText("");
  };
  const statusHandle = (e) => {
    //console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandle} name="totdos" className="filter-todo">
          <option value="all">Tất cả</option>
          <option value="completed">Đã hoàn thành</option>
          <option value="uncompleted">Chưa hoàn thành</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
