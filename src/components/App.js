import React from "react";
import Header from "../Header";
import { Route, Switch } from "react-router-dom";
import UseState from "../useState/UseState";
function App() {
  return (
    <div id="App">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/usestate" component={UseState} />
      </Switch>
    </div>
  );
}

export default App;
