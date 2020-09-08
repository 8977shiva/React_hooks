import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";
import MouseContainer from "./MouseContainer";

const Effect = () => {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");
  //every render
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  //   console.log(count);
  // });
  //*componentDidUpdate

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(name);
  }, [count]);

  return (
    <div>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setcount(count + 1)}>Click {count} times</button> */}
      {/* componentDidMount*/}
      {/* <HookMouse /> */}
      {/* componentWillUnmount */}
      {/* <MouseContainer /> */}
    </div>
  );
};

export default Effect;
