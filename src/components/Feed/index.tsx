import * as React from "react";

import Suggestions from "./Suggestions";
import MainFeed from "./MainFeed";

export default class Feed extends React.PureComponent {
  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-8 px-0">
              <MainFeed />
            </div>
            <div className="col-md-4 px-0">
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
