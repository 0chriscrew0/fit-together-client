import * as React from "react";
import { Link } from "react-router-dom";

export default class Join extends React.PureComponent {
  render() {
    return (
      <div className="join">
        <div className="container-fluid">
          <div className="row join-row">
            <div className="col-md-6 join-right">
              <div className="join-main">
                <div>
                  <i className="fas fa-dumbbell dumbell-icon" />
                </div>
                <h5>See what's happening in the world right now.</h5>

                <p className="join-text">Join FitTogether today.</p>

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
                    <p>Follow your interests.</p>
                  </div>
                  <div className="join-info-item">
                    <i className="fas fa-user-friends" />
                    <p>Hear what people are talking about.</p>
                  </div>
                  <div className="join-info-item">
                    <i className="fas fa-comment" />
                    <p>Join the conversation.</p>
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
