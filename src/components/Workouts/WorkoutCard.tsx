import * as React from "react";
import StarRatingComponent from "react-star-rating-component";

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
          <div className="duration">
            <span>Duration</span>
          </div>
          <div className="rating">
            <span>Rating</span>
          </div>
          <div className="intensity">
            <span>Intensity</span>
          </div>
        </div>
        <div className="values">
          <div className="duration">
            <span>{duration}</span>
          </div>
          <div className="rating">
            <StarRatingComponent
              name="rating"
              editing={false}
              renderStarIcon={(index, value) => (
                <span>
                  <i
                    className={`${
                      index <= value ? "fas fa-star" : "far fa-star"
                    } star`}
                  />
                </span>
              )}
              renderStarIconHalf={() => (
                <span>
                  <span>
                    <i className="fas fa-star-half-alt star" />
                  </span>
                </span>
              )}
              starCount={5}
              value={rating}
            />
            <span className="ml-2 rating-value">{rating}</span>
          </div>
          <div className="intensity">
            <span>{intensity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
