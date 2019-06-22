import * as React from "react";
import Post from "./Post";

export default class Feed extends React.PureComponent {
  render() {
    return (
      <div className="feed">
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}
