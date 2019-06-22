import * as React from "react";

import ProfilePicture from "../../img/profile-pic.jpeg";

export default class Post extends React.PureComponent {
  render() {
    return (
      <div className="feed-post">
        <div className="header">
          <div className="user">
            <img
              className="img-fluid"
              src={ProfilePicture}
              alt="User Profile"
            />
            <h6>Username</h6>
          </div>
          <div className="feedback">
            <span className="likes">
              123 <i className="far fa-heart" />
            </span>
            <span className="comments">
              8 <i className="fas fa-comment" />
            </span>
          </div>
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            soluta inventore quia obcaecati at, modi blanditiis accusamus
            quaerat fugit non!
          </p>
        </div>
      </div>
    );
  }
}
