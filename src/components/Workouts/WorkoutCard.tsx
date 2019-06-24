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
          <img src={creator.image ? creator.image : DefaultPic} />
          <span>{creator.username}</span>
        </div>
        <div className="feedback">
          {saves} <i className="fas fa-bookmark" />
          {comments} <i className="fas fa-comment-alt" />
        </div>
      </div>
      <div className="body">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className="footer">
        <span>{duration}</span>
        <span>{rating}</span>
        <span>{intensity}</span>
      </div>
    </div>
  );
};

export default WorkoutCard;
