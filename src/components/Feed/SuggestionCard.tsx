import * as React from "react";

import DefaultPicture from "../../img/profile-pic.jpeg";

interface Props {
  profilePic?: string;
  username: string;
  followers: number;
}

const SuggestionCard: React.FunctionComponent<Props> = props => (
  <div className="suggestion-card">
    <div className="user">
      <img
        className="img-fluid"
        src={props.profilePic ? props.profilePic : DefaultPicture}
        alt="User Profile"
      />
      <div className="info">
        <h6>{props.username}</h6>
        <p>{props.followers} Followers</p>
      </div>
    </div>

    <button className="btn btn-sm btn-outline-secondary">Follow</button>
  </div>
);

export default SuggestionCard;
