import * as React from "react";

import ProfilePicture from "../../img/profile-pic.jpeg";

interface Props {
  username: string;
  profilePic?: string;
  likes: number;
  comments: number;
  content: string;
}

const Post: React.FunctionComponent<Props> = props => {
  const { username, profilePic, likes, comments, content } = props;
  return (
    <div className="feed-post">
      <div className="header">
        <div className="user">
          <img
            className="img-fluid"
            src={profilePic ? profilePic : ProfilePicture}
            alt="User Profile"
          />
          <h6>{username}</h6>
        </div>
        <div className="feedback">
          <span className="likes">
            {likes} <i className="far fa-heart" />
          </span>
          <span className="comments">
            {comments} <i className="fas fa-comment" />
          </span>
        </div>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
