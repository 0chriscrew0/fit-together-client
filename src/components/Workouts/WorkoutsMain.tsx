import * as React from "react";
import moment from "moment";

import WorkoutCard from "./WorkoutCard";

moment.relativeTimeRounding(Math.floor);

moment.relativeTimeThreshold("s", 60);
moment.relativeTimeThreshold("m", 60);
moment.relativeTimeThreshold("h", 24);
moment.relativeTimeThreshold("d", 31);
moment.relativeTimeThreshold("M", 12);

const dummyData = {
  title: "Best Workout",
  creator: {
    username: "Brad"
  },
  date: moment("2017011909:48:54", "YYYYMMDDHH:mm:ss").format(),
  saves: 2,
  comments: 4,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse debitis unde sed saepe assumenda maxime ut fugit soluta blanditiis harum?",
  duration: {
    hours: 1,
    minutes: 30
  },
  rating: 4,
  intensity: 7
};

const WorkoutsMain: React.FunctionComponent = () => (
  <div className="workouts-main">
    <div className="workouts-main-header">
      <h5>Workouts</h5>
      <button className="btn btn-sm btn-primary">
        New Workout
        <i className="fas fa-dumbbell pl-2" />
        <i className="fas fa-plus plus-icon" />
      </button>
    </div>

    <WorkoutCard {...dummyData} />
    <WorkoutCard {...dummyData} />
    <WorkoutCard {...dummyData} />

    <WorkoutCard {...dummyData} />
    <WorkoutCard {...dummyData} />
    <WorkoutCard {...dummyData} />
  </div>
);

export default WorkoutsMain;
