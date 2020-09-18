import React from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import UseState from "./components/useState/UseState";
import Effect from "./components/useEffect/UseEffect";
import Counter from "./components/useReducer/Counter";
import ComponetA from "./components/useContext/ComponetA";
import CounterMemo from "./components/useMemo/Counter";
import AutoFocus from "./components/useRef/AutoFocus";

function App() {
  return (
    <div id="App">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/useState" component={UseState} />
        <Route path="/useEffect" component={Effect} />
        <Route path="/useReducer" component={Counter} />
        <Route path="/useContext" component={ComponetA} />
        <Route path="/useMemo" component={CounterMemo} />
        <Route path="/useRef" component={AutoFocus} />
      </Switch>
    </div>
  );
}

export default App;
