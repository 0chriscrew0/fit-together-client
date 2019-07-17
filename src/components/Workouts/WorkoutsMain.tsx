import * as React from "react";

import WorkoutCard from "./WorkoutCard";

const dummyData = {
  title: "Best Workout",
  creator: {
    username: "Brad"
  },
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
