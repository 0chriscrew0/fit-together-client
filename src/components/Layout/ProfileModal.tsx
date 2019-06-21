import * as React from "react";

import ProfilePic from "../../img/profile-pic.jpeg";

export default class ProfileModal extends React.PureComponent {
  render() {
    return (
      <div
        className="modal right fade profile-modal"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Account Info
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="profile-image">
                <img
                  className="img-fluid"
                  src={ProfilePic}
                  alt="Your profile"
                />
                <p>
                  <strong>Username</strong>
                </p>
              </div>

              <div className="follows">
                <p className="following">
                  <strong>102</strong> Following
                </p>
                <p className="followers">
                  <strong>1999</strong> Followers
                </p>
              </div>

              <div className="links">
                <div>
                  <i className="fas fa-user" />
                  <p>Profile</p>
                </div>
                <div>
                  <i className="fas fa-dumbbell" />
                  <p>My Workouts</p>
                </div>
                <div>
                  <i className="fas fa-clock" />
                  <p>My Routines</p>
                </div>
                <div>
                  <i className="fas fa-utensils" />
                  <p>My Meals</p>
                </div>
                <hr />
                <div>
                  <i className="fas fa-cog" />
                  <p>Settings</p>
                </div>
                <div>
                  <i className="fas fa-question" />
                  <p>Help</p>
                </div>
                <hr />
                <div>
                  <i className="fas fa-sign-out-alt" />
                  <p>Log out</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
