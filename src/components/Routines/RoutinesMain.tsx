import * as React from "react";
import moment from "moment";

import RoutineCard from "./RoutineCard";

moment.relativeTimeRounding(Math.floor);

moment.relativeTimeThreshold("s", 60);
moment.relativeTimeThreshold("m", 60);
moment.relativeTimeThreshold("h", 24);
moment.relativeTimeThreshold("d", 31);
moment.relativeTimeThreshold("M", 12);

const dummyData = [
  {
    title: "Insane Routine",
    creator: {
      username: "Brad"
    },
    date: moment("2019080314:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 6,
    comments: 1,
    description:
      "Esse debitis unde sed saepe assumenda maxime ut fugit soluta blanditiis harum?",
    days: 7,
    rating: 4.5,
    intensity: 4
  },
  {
    title: "Awesome Routine",
    creator: {
      username: "Chris"
    },
    date: moment("2019080314:09:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 54,
    comments: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quaerat! Fugit perspiciatis assumenda temporibus aliquid autem cumque eveniet. Eos tempora aliquam vitae autem, delectus unde facere temporibus eius perferendis commodi ex quibusdam maxime dolorem cupiditate eligendi eum provident laudantium quidem adipisci reprehenderit repudiandae quae. Minus, eum facere. Dolorem veniam commodi ab aperiam ad, consequuntur suscipit illo sequi fuga molestias dolorum.",
    days: 5,
    rating: 5,
    intensity: 2
  },
  {
    title: "Easy Routine",
    creator: {
      username: "Brad"
    },
    date: moment("2018042009:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 17,
    comments: 2,
    description:
      "Atque saepe quo quia debitis amet est consequuntur asperiores ut, repudiandae ullam. Sint ratione cum corrupti accusantium dicta voluptatem delectus, fugit eveniet fugiat exercitationem? Est, placeat fuga. Laborum ipsam sit cupiditate eaque.",
    days: 5,
    rating: 4.7,
    intensity: 1
  },
  {
    title: "Great Routine",
    creator: {
      username: "Chad"
    },
    date: moment("2016011309:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 4,
    comments: 0,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur ipsam omnis?",
    days: 4,
    rating: 4.7,
    intensity: 3
  },
  {
    title: "Christmas Week Routine!!",
    creator: {
      username: "Chris"
    },
    date: moment("2015122509:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 1259,
    comments: 564,
    description: "Non assumenda quibusdam iusto doloribus aperiam?",
    days: 7,
    rating: 4.9,
    intensity: 2
  },
  {
    title: "My first workout routine!",
    creator: {
      username: "Brad"
    },
    date: moment("2013041910:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 2,
    comments: 5,
    description:
      "Nihil, odio magnam, aliquid quod sunt fugiat assumenda cumque repudiandae eligendi eum id nobis labore. Nesciunt minima veniam quis cum. Molestiae, culpa.",
    days: 3,
    rating: 0.5,
    intensity: 1
  }
];

const RoutinesMain: React.FunctionComponent = () => (
  <div className="routines-main">
    <div className="routines-main-header">
      <h5>Routines</h5>
      <button className="btn btn-sm btn-primary">
        New Routine
        <i className="fas fa-clock pl-2" />
        <i className="fas fa-plus plus-icon" />
      </button>
    </div>

    <RoutineCard {...dummyData[0]} />
    <RoutineCard {...dummyData[1]} />
    <RoutineCard {...dummyData[2]} />

    <RoutineCard {...dummyData[3]} />
    <RoutineCard {...dummyData[4]} />
    <RoutineCard {...dummyData[5]} />
  </div>
);

export default RoutinesMain;
