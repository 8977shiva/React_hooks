import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1> Counter</h1>
      <h3> Count-{count}</h3>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decremnet")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default Counter;
