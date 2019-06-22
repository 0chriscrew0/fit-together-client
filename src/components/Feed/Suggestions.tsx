import * as React from "react";
import SuggestionCard from "./SuggestionCard";

const Suggestions: React.FunctionComponent = props => (
  <div className="suggestions">
    <h5>Who to Follow</h5>
    <div className="suggestion-cards">
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </div>
  </div>
);

export default Suggestions;
