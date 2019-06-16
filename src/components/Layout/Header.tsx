import * as React from "react";

import Logo from "../../img/FitTogether-logo-v2.png";

export default class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container">
            <div className="row">
              <div className="col-3 col-md-2 logo-wrapper">
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
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Link
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">
                        Disabled
                      </a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-3 col-md-2 order-3 user-wrapper">
                <ul className="navbar-nav ml-auto nav-top">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
