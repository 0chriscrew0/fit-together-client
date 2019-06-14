import * as React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.PureComponent {
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 register-info">
              <h4>Information</h4>
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
              <Link to="/login">I already have an account</Link>
            </div>
            <div className="col-md-6 register-form">
              <h2>Register Form</h2>

              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="firstName"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="lastName"
                />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                />
              </div>
              <div>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </label>
              </div>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
