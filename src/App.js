import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    correct,
    index,
    questions,
    checkAnswer,
    waiting,
    isLoading,
    nextQuestion,
    prevQuestion,
  } = useGlobalContext();
  //console.log(questions);

  if (waiting) {
    return <SetupForm />;
  }
  if (isLoading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  let answers = [...incorrect_answers]; // 3 cẩu hỏi sai
  //console.log(answers);
  //console.log(answers.length);
  if (answers.length > 2) {
    const tempIndex = Math.floor(Math.random() * 4); // Đặt random vị trí câu đúng
    //console.log(tempIndex);
    if (tempIndex === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
    }
  } else {
    const tempIndex = Math.floor(Math.random() * 2); // Đặt random vị trí câu đúng
    //console.log(tempIndex);
    if (tempIndex === 1) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
    }
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          Số câu đúng : {correct}/{index}
        </p>
      </section>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="btn-container">
          {answers.map((answer, index) => {
            return (
              <button
                key={index}
                className="answer-btn"
                onClick={() => checkAnswer(correct_answer === answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
      </article>

      <button className="next-question" onClick={nextQuestion}>
        Tiếp theo
      </button>
      <button className="prev-question" onClick={prevQuestion}>
        Lùi lại
      </button>
    </main>
  );
}

export default App;
