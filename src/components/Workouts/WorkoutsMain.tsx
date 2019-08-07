import * as React from "react";
import moment from "moment";

import WorkoutCard from "./WorkoutCard";
import WorkoutsFilter from "./WorkoutsFilter";

moment.relativeTimeRounding(Math.floor);

moment.relativeTimeThreshold("s", 60);
moment.relativeTimeThreshold("m", 60);
moment.relativeTimeThreshold("h", 24);
moment.relativeTimeThreshold("d", 31);
moment.relativeTimeThreshold("M", 12);

const dummyData = [
  {
    title: "Best Workout",
    creator: {
      username: "Brad"
    },
    date: moment("2019072219:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 2,
    comments: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse debitis unde sed saepe assumenda maxime ut fugit soluta blanditiis harum?",
    duration: {
      hours: 1,
      minutes: 30
    },
    rating: 4,
    intensity: 0
  },
  {
    title: "Insane Workout",
    creator: {
      username: "Chris"
    },
    date: moment("2019072209:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 54,
    comments: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quaerat! Fugit perspiciatis assumenda temporibus aliquid autem cumque eveniet. Eos tempora aliquam vitae autem, delectus unde facere temporibus eius perferendis commodi ex quibusdam maxime dolorem cupiditate eligendi eum provident laudantium quidem adipisci reprehenderit repudiandae quae. Minus, eum facere. Dolorem veniam commodi ab aperiam ad, consequuntur suscipit illo sequi fuga molestias dolorum.",
    duration: {
      hours: 0,
      minutes: 45
    },
    rating: 5,
    intensity: 4
  },
  {
    title: "Easy Warmup",
    creator: {
      username: "Chad"
    },
    date: moment("2019042009:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 13,
    comments: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe quo quia debitis amet est consequuntur asperiores ut, repudiandae ullam. Sint ratione cum corrupti accusantium dicta voluptatem delectus, fugit eveniet fugiat exercitationem? Est, placeat fuga. Laborum ipsam sit cupiditate eaque.",
    duration: {
      hours: 0,
      minutes: 10
    },
    rating: 4.7,
    intensity: 3
  },
  {
    title: "Great Cooldown",
    creator: {
      username: "Brad"
    },
    date: moment("2018011309:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 4,
    comments: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur ipsam omnis?",
    duration: {
      hours: 0,
      minutes: 15
    },
    rating: 4.2,
    intensity: 1
  },
  {
    title: "Christmas Workout (Intense)",
    creator: {
      username: "Chris"
    },
    date: moment("2018122509:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 679,
    comments: 102,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non assumenda quibusdam iusto doloribus aperiam?",
    duration: {
      hours: 1,
      minutes: 15
    },
    rating: 4.8,
    intensity: 2
  },
  {
    title: "My first workout!",
    creator: {
      username: "Brad"
    },
    date: moment("2017041910:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 198,
    comments: 54,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusantium corrupti aliquid ipsum aspernatur. Minus voluptate magnam excepturi. Nihil, odio magnam, aliquid quod sunt fugiat assumenda cumque repudiandae eligendi eum id nobis labore. Nesciunt minima veniam quis cum. Molestiae, culpa.",
    duration: {
      hours: 1,
      minutes: 0
    },
    rating: 1.2,
    intensity: 0
  }
];

const WorkoutsMain: React.FunctionComponent = () => (
  <div className="workouts-main">
    <div className="workouts-main-header">
      <h5>Workouts</h5>
      <div>
        <button
          className="btn border-0 mr-2 p-1 d-lg-none"
          data-toggle="modal"
          data-target="#filterModal"
        >
          <i className="fas fa-sliders-h text-primary" />
        </button>
        <div
          className="modal fade"
          id="filterModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="filterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  Filters
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <WorkoutsFilter />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-primary">
          New Workout
          <i className="fas fa-dumbbell pl-2" />
          <i className="fas fa-plus plus-icon" />
        </button>
      </div>
    </div>

    <WorkoutCard {...dummyData[0]} />
    <WorkoutCard {...dummyData[1]} />
    <WorkoutCard {...dummyData[2]} />
    <WorkoutCard {...dummyData[3]} />
    <WorkoutCard {...dummyData[4]} />
    <WorkoutCard {...dummyData[5]} />
  </div>
);

export default WorkoutsMain;
