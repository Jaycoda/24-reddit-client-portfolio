import React, { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here
    console.log(search.trim().toLowerCase());
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
