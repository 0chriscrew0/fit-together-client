import * as React from "react";
import { Link } from "react-router-dom";

export default class Join extends React.PureComponent {
  render() {
    return (
      <div>
        <div>logo</div>
        <h2>See what's happening in the world right now.</h2>

        <p>Join FitTogether today.</p>
        <div>
          <Link to="/register">Sign up</Link>
        </div>
        <div>
          <Link to="/login">Log in</Link>
        </div>

        <div>
          <div>
            <span>icon</span>
            <p>Follow your interests.</p>
          </div>
          <div>
            <span>icon</span>
            <p>Hear what people are talking about.</p>
          </div>
          <div>
            <span>icon</span>
            <p>Join the conversation.</p>
          </div>
        </div>

        <div>
          <span>
            <Link to="/register">Sign up</Link>
          </span>
          <span>
            <Link to="/login">Log in</Link>
          </span>
        </div>
      </div>
    );
  }
}
