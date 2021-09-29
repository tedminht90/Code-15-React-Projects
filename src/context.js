import axios from "axios";
import React, { useState, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  general: 9,
  geography: 17,
  math: 19,
  computer: 18,
};
const type_table = {
  multiple: "multiple",
  truefalse: "boolean",
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

// const url = "";

// const tempUrl =
//   "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "general",
    difficulty: "easy",
    type: "multiple",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getQuestion = async (url) => {
    setIsLoading(true);
    setWaiting(false);
    const resp = await axios(url).catch((error) => console.log(error));
    if (resp) {
      const data = resp.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setIsLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      //console.log(index);
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const prevQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex - 1;
      //console.log(index);
      if (index < 0) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty, type } = quiz;
    //console.log(quiz);
    const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=${type_table[type]}`;
    getQuestion(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        isLoading,
        questions,
        index,
        correct,
        error,
        quiz,
        isModalOpen,
        setIsModalOpen,
        checkAnswer,
        nextQuestion,
        closeModal,
        handleChange,
        handleSubmit,
        prevQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
