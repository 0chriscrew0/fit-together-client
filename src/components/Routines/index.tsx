import * as React from "react";

import RoutinesMain from "./RoutinesMain";
import RoutinesFilter from "./RoutinesFilter";

export default class Routines extends React.PureComponent {
  render() {
    return (
      <div className="routines">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 col-xl-8 px-0">
              <RoutinesMain />
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 px-0">
              <RoutinesFilter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
