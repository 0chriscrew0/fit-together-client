import * as React from "react";

import DefaultPicture from "../../img/profile-pic.jpeg";
import moment from "moment";

interface Props {
  username: string;
  profilePic?: string;
  date: string;
  likes: number;
  comments: number;
  content: string;
}

const Post: React.FunctionComponent<Props> = props => {
  const { username, profilePic, date, likes, comments, content } = props;
  return (
    <div className="feed-post">
      <div className="header">
        <div className="user">
          <img
            className="img-fluid"
            src={profilePic ? profilePic : DefaultPicture}
            alt="User Profile"
          />
          <span>{username}</span>
          <span className="date text-muted">
            {moment(date, "YYYYMMDDHH:mm:ss").fromNow()}
          </span>
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
