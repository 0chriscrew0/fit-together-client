import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./css/main.css";
import Join from "./components/User/Join";
import Register from "./components/User/Register";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
