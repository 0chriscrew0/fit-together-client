import * as React from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/FitTogether-logo-v2.png";

export default class Join extends React.PureComponent {
  render() {
    return (
      <div className="join">
        <div className="container-fluid">
          <div className="row join-row">
            <div className="col-md-6 join-right">
              <div className="join-main">
                <div>
                  <img
                    className="img-fluid logo"
                    src={Logo}
                    alt="FitTogether Logo"
                  />
                </div>
                <h5>The ultimate online fitness experience</h5>

                <p className="join-text">Join Fit Together today.</p>
                <p className="join-text">
                  Functionality coming soon. See a preview by clicking{" "}
                  <Link to="/feed">here.</Link>
                </p>

                <Link className="btn btn-block btn-primary" to="/register">
                  Sign up
                </Link>
                <Link className="btn btn-block btn-outline-primary" to="/login">
                  Log in
                </Link>
              </div>
            </div>

            <div className="col-md-6 join-left">
              <div className="join-info">
                <div className="join-info-inner">
                  <div className="join-info-item">
                    <i className="fas fa-search" />
                    <p>Search for the perfect routines.</p>
                  </div>
                  <div className="join-info-item">
                    <i className="fas fa-user-friends" />
                    <p>Follow the best workout creators.</p>
                  </div>
                  <div className="join-info-item">
                    <i className="fas fa-comment" />
                    <p>Share your thoughts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 join-buttons">
            <Link className="btn btn-primary" to="/register">
              Sign up
            </Link>

            <Link className="btn btn-outline-primary" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
