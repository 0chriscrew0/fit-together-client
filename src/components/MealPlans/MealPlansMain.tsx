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
    title: "Best Meal Plan",
    creator: {
      username: "Chris"
    },
    date: moment("2019080119:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 453,
    comments: 142,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    days: 3,
    rating: 4.9,
    price: 1
  },
  {
    title: "Vegan Meals!!",
    creator: {
      username: "Chad"
    },
    date: moment("2019073109:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 32,
    comments: 17,
    description:
      "Soluta, quaerat! Fugit perspiciatis assumenda temporibus aliquid autem cumque eveniet. Eos tempora aliquam vitae autem, delectus unde facere temporibus eius perferendis commodi ex quibusdam maxime dolorem cupiditate eligendi eum provident laudantium quidem adipisci reprehenderit repudiandae quae. Minus, eum facere. Dolorem veniam commodi ab aperiam ad, consequuntur suscipit illo sequi fuga molestias dolorum.",
    days: 7,
    rating: 4.2,
    price: 4
  },
  {
    title: "Cheap Plan",
    creator: {
      username: "Brad"
    },
    date: moment("2019042009:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 22,
    comments: 5,
    description:
      "Atque saepe quo quia debitis amet est consequuntur asperiores ut. Sint ratione cum corrupti accusantium dicta voluptatem delectus, fugit eveniet fugiat exercitationem? Est, placeat fuga. Laborum ipsam sit cupiditate eaque.",
    days: 6,
    rating: 3,
    price: 1
  },
  {
    title: "Great Meals",
    creator: {
      username: "Chris"
    },
    date: moment("2017011309:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 44,
    comments: 21,
    description: "Alias aspernatur ipsam omnis?",
    days: 4,
    rating: 5,
    price: 3
  },
  {
    title: "Christmas Diet!",
    creator: {
      username: "Chad"
    },
    date: moment("2015122509:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 679,
    comments: 102,
    description:
      "Consectetur adipisicing elit. Non assumenda quibusdam iusto doloribus aperiam?",
    days: 1,
    rating: 4.8,
    price: 3
  },
  {
    title: "My first meal plan!",
    creator: {
      username: "Brad"
    },
    date: moment("1994041910:48:54", "YYYYMMDDHH:mm:ss").format(),
    saves: 1,
    comments: 0,
    description:
      "Quos accusantium corrupti aliquid ipsum aspernatur. Minus voluptate magnam excepturi. Nihil, odio magnam, aliquid quod sunt fugiat assumenda cumque repudiandae eligendi eum id nobis labore. Nesciunt minima veniam quis cum. Molestiae, culpa.",
    days: 5,
    rating: 1,
    price: 4
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
