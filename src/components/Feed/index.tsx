import * as React from "react";

import Post from "./Post";
import Suggestions from "./Suggestions";

export default class Feed extends React.PureComponent {
  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-8 main-feed">
              <div className="main-feed-header">
                <h5>Social Feed</h5>
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
            {/* <div className="col-md-4 suggestions">
              <Suggestions />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
