import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  const deleteHandle = (id) => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };

  const completeHandler = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed, //đổi giá trị của completed
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //useEffect  sẽ kiểm tra xem giá trị todo và status có thay đổi không, nếu thay đổi thì sẽ chạy lại hàm filterHandler

  useEffect(() => {
    // console.log("belo");
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo Lists</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        deleteHandle={deleteHandle}
        completeHandler={completeHandler}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
