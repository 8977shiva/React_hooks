import React, { useContext } from "react";
import { userContext } from "./ComponetA";

function ComponentC() {
  const userName = useContext(userContext);

  return (
    <div>
      <h1>using context hook</h1>
      <h3>{userName}</h3>
      <h1>using normal context</h1>
      <userContext.Consumer>
        {(user) => {
          return <h3>{user}</h3>;
        }}
      </userContext.Consumer>
    </div>
  );
}
export default ComponentC;
