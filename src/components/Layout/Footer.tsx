import * as React from "react";

import Logo from "../../img/FitTogether-logo-v2.png";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="site-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="left col-md-3">
              <div className="logo">
                <img src={Logo} alt="FitTogether logo" className="img-fluid" />
                <h6>FitTogether</h6>
              </div>
              <div className="contact">
                <div className="phone">
                  <i className="fas fa-phone" />
                  <p>832-555-5555</p>
                </div>
                <div className="email">
                  <i className="fas fa-envelope" />
                  <p>support@test.com</p>
                </div>
                <div className="address d-flex align-items-center">
                  <i className="fas fa-map-marker-alt" />
                  <p className="mb-0">
                    5467 Main St.
                    <br />
                    Houston, TX 77355
                  </p>
                </div>
              </div>
            </div>
            <div className="center col-md-6">
              <div className="row">
                <div className="features col-md-4">
                  <h6>Features</h6>
                  <a href="/">Pricing</a>
                  <a href="/">Education</a>
                  <a href="/">Refer a Friend</a>
                  <a href="/">Updates</a>
                  <a href="/">Beta</a>
                </div>
                <div className="company col-md-4">
                  <h6>Company</h6>
                  <a href="/">Design</a>
                  <a href="/">Prototype</a>
                  <a href="/">Collaborate</a>
                  <a href="/">Sketch</a>
                  <a href="/">Photoshop</a>
                </div>
                <div className="get-started col-md-4">
                  <h6>Get Started</h6>
                  <a href="/">Tutorials</a>
                  <a href="/">Resources</a>
                  <a href="/">Guides</a>
                  <a href="/">Examples</a>
                  <a href="/">Docs</a>
                </div>
              </div>
            </div>
            <div className="right col-md-3">
              <h6>Weekly Newsletter</h6>
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <button className="btn btn-block btn-white">Subscribe</button>
            </div>
            <div className="bottom">
              <div className="copyright">
                &copy; FitTogether. All rights reserved
              </div>
              <div className="icons">
                <i className="fab fa-facebook" />
                <i className="fab fa-twitter" />
                <i className="fab fa-instagram" />
                <i className="fab fa-youtube" />
                <i className="fab fa-google-plus" />
                <i className="fab fa-pinterest" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
