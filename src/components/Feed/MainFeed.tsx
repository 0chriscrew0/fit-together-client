import * as React from "react";

import Post from "./Post";

const MainFeed: React.FunctionComponent = () => (
  <div className="main-feed">
    <div className="main-feed-header">
      <h5>Social Feed</h5>
      <button className="btn btn-sm btn-primary">
        New Post
        <i className="far fa-comment-alt pl-2" />
        <i className="fas fa-plus plus-icon" />
      </button>
    </div>
    <Post
      username="Brad"
      likes={5}
      comments={0}
      content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eaque minus atque unde, officia, officiis, veniam error vitae ipsa inventore nobis aut consectetur. Sequi quasi incidunt repellat, assumenda rerum vero accusantium praesentium libero laborum blanditiis maiores labore impedit odio. In."
    />
    <Post
      username="Chris"
      likes={1304}
      comments={572}
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, unde nobis exercitationem blanditiis ipsum ipsa!"
    />
    <Post
      username="Chad"
      likes={23}
      comments={4}
      content="Sequi quasi incidunt repellat, assumenda rerum vero accusantium praesentium libero laborum blanditiis maiores labore impedit odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, assumenda, commodi fugiat sed beatae eveniet qui facilis ut ex labore unde fuga officiis numquam eos!"
    />
  </div>
);

export default MainFeed;
