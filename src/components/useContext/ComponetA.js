import React from "react";
import ComponentB from "./ComponentB";

export const userContext = React.createContext();

function ComponetA() {
  return (
    <div>
      <userContext.Provider value={"shiva"}>
        <ComponentB />
      </userContext.Provider>
    </div>
  );
}

export default ComponetA;
