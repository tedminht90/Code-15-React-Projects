import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Movie from "./SingleMovie";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movies/:id">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
