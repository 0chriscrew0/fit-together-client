import * as React from "react";

import RoutinesMain from "./RoutinesMain";
import RoutinesSide from "./RoutinesSide";
import ComingSoon from "../Utils/ComingSoon";

export default class Routines extends React.PureComponent {
  render() {
    return (
      // <div className="workouts">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-8 px-0">
      //         <RoutinesMain />
      //       </div>
      //       <div className="col-md-4 px-0">
      //         <RoutinesSide />
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <ComingSoon
        feature="Workout Routines"
        description="Workout Routines are coming soon! Users can create a collection of their favorite workouts and assign them to days of the week--along with other great features--to create an easy to follow plan viewable by other users."
      />
    );
  }
}
