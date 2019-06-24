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
  duration: 8.2,
  rating: 5,
  intensity: 9
};

export default class Workouts extends React.PureComponent {
  render() {
    return (
      <div className="workouts">
        <div className="popular">
          <h4>Popular</h4>
          <WorkoutCard {...dummyData} />
        </div>
        <div className="new">
          <h4>New</h4>
        </div>
      </div>
    );
  }
}
