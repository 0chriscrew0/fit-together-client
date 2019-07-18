import React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";

import "./css/main.css";
import Join from "./components/User/Join";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Feed from "./components/Feed";
import Header from "./components/Layout/Header";
import Workouts from "./components/Workouts";
import Routines from "./components/Routines";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* Routes without header */}
          <Route exact path="/" component={Join} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          {/* Routes with header */}
          <Route
            path="/"
            render={() => (
              <>
                <Header />
                <div>
                  <Route path="/feed" component={Feed} />
                  <Route path="/workouts" component={Workouts} />
                  <Route path="/routines" component={Routines} />
                  <Route path="/meal-plans" component={Feed} />
                </div>
              </>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
