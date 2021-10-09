import React, { useState, useEffect, useContext, useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: textInput,
        completed: false,
        id: new Date().getTime().toString(),
      },
    ]);
    setTextInput("");
  };

  const trashHandle = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const completeHandle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed, //Nếu click thì set ngược lại giá trị của completed
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const filter = useCallback(() => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }, [status, todos]);
  const saveLocalTodos = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    filter();
    saveLocalTodos();
  }, [status, todos, filter, saveLocalTodos]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        textInput,
        setTextInput,
        submitHandle,
        completeHandle,
        trashHandle,
        setStatus,
        filterTodos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
