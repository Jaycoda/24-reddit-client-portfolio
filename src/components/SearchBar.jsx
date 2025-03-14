import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/redditSlice";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
    const searchTerm = search.trim().toLowerCase(); // get the search term
    dispatch(setQuery(searchTerm)); // dispatch the search term
    setSearch("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Reddit"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
