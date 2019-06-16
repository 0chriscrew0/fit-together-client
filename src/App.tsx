import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./css/main.css";
import Join from "./components/User/Join";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Feed from "./components/Feed";
import Header from "./components/Layout/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/feed" component={Feed} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
