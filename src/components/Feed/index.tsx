import * as React from "react";

import Post from "./Post";
import ProfilePicture from "../../img/profile-pic.jpeg";

export default class Feed extends React.PureComponent {
  render() {
    return (
      <div className="feed">
        <Post
          username="Brad"
          profilePic={ProfilePicture}
          likes={5}
          comments={0}
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eaque minus atque unde, officia, officiis, veniam error vitae ipsa inventore nobis aut consectetur. Sequi quasi incidunt repellat, assumenda rerum vero accusantium praesentium libero laborum blanditiis maiores labore impedit odio. In."
        />
        <Post
          username="Chris"
          profilePic={ProfilePicture}
          likes={1304}
          comments={572}
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, unde nobis exercitationem blanditiis ipsum ipsa!"
        />
        <Post
          username="Chad"
          profilePic={ProfilePicture}
          likes={23}
          comments={4}
          content="Sequi quasi incidunt repellat, assumenda rerum vero accusantium praesentium libero laborum blanditiis maiores labore impedit odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, assumenda, commodi fugiat sed beatae eveniet qui facilis ut ex labore unde fuga officiis numquam eos!"
        />
      </div>
    );
  }
}
