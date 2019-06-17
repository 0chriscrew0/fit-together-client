import * as React from "react";

import Logo from "../../img/FitTogether-logo-v2.png";
import ProfilePic from "../../img/profile-pic.jpeg";

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand navbar-light bg-light px-0">
            <div className="row w-100 mx-auto">
              <div className="col-4 col-md-2 logo-wrapper">
                <a className="navbar-brand" href="#">
                  <img
                    className="img-fluid logo"
                    src={Logo}
                    alt="FitTogether Logo"
                  />
                </a>
              </div>

              <div className="col-12 col-md-8 order-12 order-md-2 main-wrapper">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fas fa-home" />{" "}
                        <span className="header-link">Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fas fa-dumbbell" />{" "}
                        <span className="header-link">Workouts</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fas fa-clock" />{" "}
                        <span className="header-link">Routines</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fas fa-utensils" />{" "}
                        <span className="header-link">Meal Plans</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-8 col-md-2 order-3 user-wrapper">
                <ul className="navbar-nav ml-auto nav-top">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Current User
                      <img
                        className="img-fluid profile-pic ml-3"
                        src={ProfilePic}
                        alt="Your Profile Picture"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
