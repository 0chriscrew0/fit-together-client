import * as React from "react";
import SuggestionCard from "./SuggestionCard";

const Suggestions: React.FunctionComponent = props => (
  <div className="suggestions">
    <div className="suggestions-header">
      <h5>Who to Follow</h5>
      <button className="btn btn-sm btn-primary">See More</button>
    </div>

    <div className="suggestion-cards">
      <SuggestionCard username="Brad" followers={74} />
      <SuggestionCard username="Chad" followers={3} />
      <SuggestionCard username="Chris" followers={1999} />
    </div>
  </div>
);

export default Suggestions;
