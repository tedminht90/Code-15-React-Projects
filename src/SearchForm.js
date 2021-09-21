import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { setQuery } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchMovie = () => {
    setQuery(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        ref={searchValue}
        onChange={searchMovie}
      />
    </form>
  );
};

export default SearchForm;
