import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const searchBtn = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter search term!", { position: "top right" });
      return;
    }
    onSearch(query);
    setQuery("");
    searchBtn.current.disabled = true;
  };

  const handleUserInput = (evt) => {
    const inputValue = evt.target.value.trim();
    setQuery(inputValue);
    searchBtn.current.disabled = inputValue === "" ? true : false;
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          value={query}
          onChange={handleUserInput}
        />
        <button
          className={css.searchBtn}
          ref={searchBtn}
          type="submit"
          disabled={!query}
        >
          <FaSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
