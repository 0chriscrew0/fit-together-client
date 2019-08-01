import * as React from "react";

import RoutinesMain from "./RoutinesMain";
import RoutinesFilter from "./RoutinesFilter";

export default class Routines extends React.PureComponent {
  render() {
    return (
      <div className="routines">
        <div className="container">
          <div className="row">
            <div className="col-md-8 px-0">
              <RoutinesMain />
            </div>
            <div className="col-md-4 px-0">
              <RoutinesFilter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
