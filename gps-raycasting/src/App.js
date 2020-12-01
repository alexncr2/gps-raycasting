import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import RayCasting from "./components/RayCasting";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <RayCasting />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
