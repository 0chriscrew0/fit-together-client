import * as React from "react";

import WorkoutsMain from "./WorkoutsMain";
import WorkoutsSide from "./WorkoutsSide";

export default class Workouts extends React.PureComponent {
  render() {
    return (
      <div className="workouts">
        <div className="container">
          <div className="row">
            <div className="col-md-8 px-0">
              <WorkoutsMain />
            </div>
            <div className="col-md-4 px-0">
              <WorkoutsSide />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
