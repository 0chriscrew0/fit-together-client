import * as React from "react";

interface Props {
  feature: String;
  description: String;
}

export default class ComingSoon extends React.PureComponent<Props> {
  render() {
    return (
      <div className="coming-soon">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h2>Coming Soon</h2>
              <h5>{this.props.feature}</h5>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
