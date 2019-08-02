import * as React from "react";

import MealPlansMain from "./MealPlansMain";
import MealPlansFilter from "./MealPlansFilter";

export default class MealPlans extends React.PureComponent {
  render() {
    return (
      <div className="meal-plans">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 col-xl-8 px-0">
              <MealPlansMain />
            </div>
            <div className="col-md-6 col-lg-5 col-xl-4 px-0">
              <MealPlansFilter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
