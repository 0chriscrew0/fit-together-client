import * as React from "react";

const RoutinesFilter: React.FunctionComponent = () => (
  <div className="routines-filter">
    <div className="filter-header">
      <h5 className="d-none d-lg-block">Filter</h5>
      <button className="btn btn-sm btn-primary d-none d-lg-block">
        Apply
      </button>
    </div>
    <div className="filters">
      <div className="rating pt-lg-4">
        <h6>Rating</h6>
        <div className="form-group">
          <select
            className="form-control form-control-sm"
            name="rating"
            id="rating"
          >
            <option value="0">less than</option>
            <option value="1">greater than</option>
          </select>
        </div>
        <div className="star-buttons">
          <button className="btn btn-sm btn-outline-primary border-0">
            <i className="fas fa-star" />
          </button>
          <button className="btn btn-sm btn-outline-primary border-0">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </button>
          <button className="btn btn-sm btn-outline-primary border-0">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </button>
          <button className="btn btn-sm btn-outline-primary border-0">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </button>
          <button className="btn btn-sm btn-outline-primary border-0">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </button>
        </div>
      </div>

      <div className="days py-4">
        <h6>Days per week</h6>
        <div className="form-group">
          <select
            className="form-control form-control-sm"
            name="days-than"
            id="days-than"
          >
            <option value="0">less than</option>
            <option value="1">more than</option>
          </select>
        </div>
        <div className="form-group mb-0">
          <select
            className="form-control form-control-sm"
            name="days-value"
            id="days-value"
          >
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="4">4 days</option>
            <option value="5">5 days</option>
            <option value="6">6 days</option>
            <option value="7">7 days</option>
          </select>
        </div>
      </div>
      <div className="intensity pb-4">
        <h6>Intensity</h6>
        <div className="form-row">
          <div className="col form-group mb-0">
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
          <div className="col form-group mb-0">
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

export default RoutinesFilter;
