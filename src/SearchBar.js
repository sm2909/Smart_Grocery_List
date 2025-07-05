import React from "react";

const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <form class="SearchBar">
      <input
        value={searchInput}
        placeholder="Search Item"
        role="searchbox"
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchBar;
