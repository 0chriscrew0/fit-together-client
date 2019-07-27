import * as React from "react";

import Logo from "../../img/FitTogether-logo-v2.png";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="left col-md-3">
              <div className="logo">
                <img src={Logo} alt="FitTogether logo" className="img-fluid" />
                <h4>FitTogether</h4>
              </div>
              <div className="contact">
                <div className="phone">
                  <i className="fas fa-phone" />
                  <p>832-555-5555</p>
                </div>
                <div className="email">
                  <i className="fas fa-envelope" />
                  <p>support@fittogether.com</p>
                </div>
                <div className="address">
                  <i className="fas fa-map-marker-alt" />
                  <p>5467 Main St.</p>
                  <p>Houston, TX 77354</p>
                </div>
              </div>
            </div>
            <div className="center col-md-6">
              <div className="row">
                <div className="features col-md-4">Features</div>
                <div className="company col-md-4">Company</div>
                <div className="get-started col-md-4">Get Started</div>
              </div>
            </div>
            <div className="right col-md-3">
              <h4>Weekly Newsletter</h4>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Your Email" />
              <button className="btn btn-block btn-primary">Subscribe</button>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="copyright col-6">
                  &copy; All rights reserved
                </div>
                <div className="icons col-6">
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
        </div>
      </footer>
    );
  }
}
