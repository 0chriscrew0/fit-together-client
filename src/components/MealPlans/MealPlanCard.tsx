import * as React from "react";
import StarRatingComponent from "react-star-rating-component";
import moment from "moment";

import DefaultPic from "../../img/profile-pic.jpeg";

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
  days: number;
  rating: number;
  price: number;
}

const MealPlanCard: React.FunctionComponent<Props> = ({
  title,
  creator,
  date,
  saves,
  comments,
  description,
  days,
  rating,
  price
}) => {
  return (
    <div className="routine-card">
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
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className="footer">
        <div className="labels">
          <div className="days">
            <span>Days</span>
          </div>
          <div className="rating">
            <span>Rating</span>
          </div>
          <div className="intensity">
            <span>Price</span>
          </div>
        </div>
        <div className="values">
          <div className="days">
            <span>{days}/7</span>
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
          <div className="price">
            <span>{`${price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanCard;
