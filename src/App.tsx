import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Join from "./components/User/Join";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Join} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
