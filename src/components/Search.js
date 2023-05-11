import React, {useState} from "react";

function Search({ handleSearch }) {

  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(search);
  }

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
