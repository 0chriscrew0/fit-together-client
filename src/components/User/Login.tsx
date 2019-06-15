import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/FitTogether-logo-v2.png";

export default class Login extends React.PureComponent {
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <img
                className="img-fluid logo"
                src={Logo}
                alt="FitTogether Logo"
              />

              <h4>Log in to FitTogether</h4>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  id="password"
                />
              </div>

              <button className="btn btn-block btn-primary">Log in</button>

              <div className="login-links">
                <Link to="/forgot-password">Forgot Password?</Link>
                <span>&#183;</span>
                <Link to="/register">Create Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
