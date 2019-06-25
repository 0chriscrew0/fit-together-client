import * as React from "react";

import DefaultPic from "../../img/profile-pic.jpeg";

interface Props {
  title: string;
  creator: {
    image?: string;
    username: string;
  };
  saves: number;
  comments: number;
  description: string;
  duration: number;
  rating: number;
  intensity: number;
}

const WorkoutCard: React.FunctionComponent<Props> = ({
  title,
  creator,
  saves,
  comments,
  description,
  duration,
  rating,
  intensity
}) => {
  return (
    <div className="workout-card">
      <div className="header">
        <div className="creator">
          <img
            className="img-fluid"
            src={creator.image ? creator.image : DefaultPic}
            alt="User Profile"
          />
          <span>{creator.username}</span>
        </div>
        <div className="feedback">
          {saves} <i className="far fa-bookmark mr-2" />
          {comments} <i className="far fa-comment-alt" />
        </div>
      </div>
      <div className="body">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className="footer">
        <div className="labels">
          <div>
            <span>Duration</span>
          </div>
          <div>
            <span>Rating</span>
          </div>
          <div>
            <span>Intensity</span>
          </div>
        </div>
        <div className="values">
          <div className="border-right border-top">
            <span>{duration}</span>
          </div>
          <div className="border-top">
            <span>{rating}</span>
          </div>
          <div className="border-top border-left">
            <span>{intensity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
