import * as React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.PureComponent {
  render() {
    return (
      <div className="register">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 register-form">
              <h2>Register Form</h2>

              <div className="form-row">
                <div className="col form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    id="firstName"
                  />
                </div>
                <div className="col form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    id="lastName"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="form-row">
                <div className="col form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="col form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                  />
                </div>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the{" "}
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </label>
              </div>
              <button className="btn btn-primary px-4">Register</button>
            </div>
            <div className="col-md-6 register-info">
              <h2>Information</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                amet in sunt impedit laborum blanditiis, beatae voluptates
                voluptatibus laboriosam perspiciatis nostrum ut, illo quis dolor
                voluptate dolores sequi, eum quibusdam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                placeat dolore provident et? Voluptates perspiciatis
                repellendus, dolores consequatur libero numquam!
              </p>
              <Link className="btn btn-white" to="/login">
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
