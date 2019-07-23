import * as React from "react";
import StarRatingComponent from "react-star-rating-component";

const WorkoutsFilter: React.FunctionComponent = () => (
  <div className="workouts-filter">
    <h4>Filter</h4>
    <div className="filters">
      <div className="rating">
        <h6>Rating</h6>
        <StarRatingComponent
          name="rating"
          editing={false}
          renderStarIcon={(index, value) => (
            <span>
              <i
                className={`${
                  index <= value ? "fas fa-star" : "far fa-star"
                } star`}
              />
            </span>
          )}
          renderStarIconHalf={() => (
            <span>
              <span>
                <i className="fas fa-star-half-alt star" />
              </span>
            </span>
          )}
          starCount={5}
          value={4}
        />
      </div>

      <div className="duration">
        <h6>Duration</h6>
        <div className="form-group">
          <select
            className="form-control form-control-sm"
            name="duration"
            id="duration"
          >
            <option value="0">less than</option>
            <option value="1">longer than</option>
          </select>
        </div>
        <div>
          <button className="btn btn-sm btn-outline-primary">10 min</button>
          <button className="btn btn-sm btn-outline-primary">20 min</button>
          <button className="btn btn-sm btn-outline-primary">30 min</button>
          <button className="btn btn-sm btn-outline-primary">45 min</button>
          <button className="btn btn-sm btn-outline-primary">1 hour</button>
        </div>
      </div>
      <div className="intensity">
        <h6>Intensity</h6>
        <div className="form-row">
          <div className="col form-group">
            <label htmlFor="min">Min</label>
            <select
              className="form-control form-control-sm"
              name="min"
              id="min"
              defaultValue="1"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="col form-group">
            <label htmlFor="max">Max</label>
            <select
              className="form-control form-control-sm"
              name="max"
              id="max"
              defaultValue="10"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WorkoutsFilter;
