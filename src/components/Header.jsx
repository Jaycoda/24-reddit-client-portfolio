import React from "react";
import { SearchBar } from "./SearchBar";
import { SubReddits } from "./SubReddits";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">Reddity</div>

      <SubReddits />

      <SearchBar />
    </div>
  );
};
