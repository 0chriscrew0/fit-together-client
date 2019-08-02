import * as React from "react";
import moment from "moment";

import MealPlanCard from "./MealPlanCard";

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
    days: 5,
    rating: 4,
    price: 2
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
    days: 5,
    rating: 5,
    price: 3
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
    days: 5,
    rating: 4.7,
    price: 2
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
    days: 5,
    rating: 4.2,
    price: 2
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
    days: 5,
    rating: 4.8,
    price: 4
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
    days: 5,
    rating: 1.2,
    price: 3
  }
];

const MealPlansMain: React.FunctionComponent = () => (
  <div className="meal-plans-main">
    <div className="meal-plans-main-header">
      <h5>Meal Plans</h5>
      <button className="btn btn-sm btn-primary">
        New Meal Plan
        <i className="fas fa-utensils pl-2" />
        <i className="fas fa-plus plus-icon" />
      </button>
    </div>

    <MealPlanCard {...dummyData[0]} />
    <MealPlanCard {...dummyData[1]} />
    <MealPlanCard {...dummyData[2]} />

    <MealPlanCard {...dummyData[3]} />
    <MealPlanCard {...dummyData[4]} />
    <MealPlanCard {...dummyData[5]} />
  </div>
);

export default MealPlansMain;
