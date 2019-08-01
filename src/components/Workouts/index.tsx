import * as React from "react";

import WorkoutsMain from "./WorkoutsMain";
import WorkoutsFilter from "./WorkoutsFilter";

export default class Workouts extends React.PureComponent {
  render() {
    return (
      <div className="workouts">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 col-xl-8 px-0">
              <WorkoutsMain />
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 px-0">
              <WorkoutsFilter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
