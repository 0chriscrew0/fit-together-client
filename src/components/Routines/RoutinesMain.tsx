import * as React from "react";
import RoutineCard from "./RoutineCard";

const RoutinesMain: React.FunctionComponent = () => (
  <div className="routines-main">
    <div className="routines-main-header">
      <h5>Routines</h5>
      <button className="btn btn-sm btn-primary">
        New Routine
        <i className="fas fa-dumbbell pl-2" />
        <i className="fas fa-plus plus-icon" />
      </button>
    </div>

    <RoutineCard />
    <RoutineCard />
    <RoutineCard />

    <RoutineCard />
    <RoutineCard />
    <RoutineCard />
  </div>
);

export default RoutinesMain;
