import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import RayCasting from "./components/RayCasting";

function App() {
  document.title = "RayCasting";
  return (
    <Router>
      <Switch>
        <Route path="/gps-raycasting" exact={true}>
          <RayCasting />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
