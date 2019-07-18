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
  rating: number;
  intensity: number;
}

const RoutineCard: React.FunctionComponent = () => {
  return <div className="routine-card">routine card</div>;
};

export default RoutineCard;
