import * as React from "react";

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
