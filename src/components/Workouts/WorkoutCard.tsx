import * as React from "react";
import StarRatingComponent from "react-star-rating-component";
import moment from "moment";

import DefaultPic from "../../img/profile-pic.jpeg";
import getIntensity from "../../utils/getIntensity";
import getIntensityColor from "../../utils/getIntensityColor";

interface Props {
  title: string;
  creator: {
    image?: string;
    username: string;
  };
  date: string;
  saves: number;
  comments: number;
  description: string;
  duration: {
    hours: number;
    minutes: number;
  };
  rating: number;
  intensity: number;
}

const WorkoutCard: React.FunctionComponent<Props> = ({
  title,
  creator,
  date,
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
          <span className="date text-muted">
            {moment(date, "YYYYMMDDHH:mm:ss").fromNow()}
          </span>
        </div>

        <div className="feedback">
          <span>
            {saves} <i className="far fa-bookmark mr-2" />
          </span>
          <span>
            {comments} <i className="fas fa-comment" />
          </span>
        </div>
      </div>
      <div className="body">
        <div className="body-top">
          <h6>{title}</h6>
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
        </div>
        <p>{description}</p>
      </div>
      <div className="footer">
        <div
          className={`intensity text-green text-${getIntensityColor(
            intensity
          )}`}
        >
          {getIntensity(intensity)}
        </div>
        <div className="duration">
          <span>{`${duration.hours !== 0 ? duration.hours + "h" : ""} 
           ${duration.minutes !== 0 ? duration.minutes + "m" : ""}`}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
