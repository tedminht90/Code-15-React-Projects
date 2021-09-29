import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        {correct / questions.length >= 75 && <h2>Chúc mừng!</h2>}
        {correct / questions.length < 75 && <h2>Cố lên nào!</h2>}
        <p>
          Bạn đã trả lời đúng được{" "}
          {((correct / questions.length) * 100).toFixed(0)}% trên{" "}
          {questions.length} câu hỏi
        </p>
        <button className="close-btn" onClick={closeModal}>
          Lại nào
        </button>
      </div>
    </div>
  );
};

export default Modal;
