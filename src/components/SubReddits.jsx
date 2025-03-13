import { subreddits } from "../data/subreddits";

import React from "react";
import { SubReddit } from "./SubReddit";

export const SubReddits = () => {
  return (
    <div className="subreddits">
      {subreddits.map((subreddit) => (
        <SubReddit key={subreddit.id} subreddit={subreddit} />
      ))}
    </div>
  );
};
