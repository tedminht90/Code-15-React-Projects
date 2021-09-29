import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">Số câu hỏi</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">Chủ đề</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="general">Hiểu biết chung</option>
              <option value="math">Toán học</option>
              <option value="computer">Máy tính</option>
              <option value="sports">Thể thao</option>
              <option value="history">Lịch sử</option>
              <option value="geography">Địa lý</option>
            </select>
          </div>

          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">Độ khó</label>
            <select
              className="form-input"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Dễ</option>
              <option value="medium">Trung bình</option>
              <option value="hard">Khó</option>
            </select>
          </div>
          {/* Type Question  */}
          <div className="form-control">
            <label htmlFor="type">Dạng bài</label>
            <select
              className="form-input"
              name="type"
              id="type"
              value={quiz.type}
              onChange={handleChange}
            >
              <option value="multiple">Trắc nghiệm</option>
              <option value="truefalse">Đúng/Sai</option>
            </select>
          </div>

          {error && (
            <p className="error">
              Chưa có câu hỏi. Hãy chọn lại độ khó và loại câu hỏi
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Bắt đầu
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
