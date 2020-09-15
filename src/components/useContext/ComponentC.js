import React, { useContext } from "react";
import { userContext } from "./ComponetA";

function ComponentC() {
  const userName = useContext(userContext);

  const handleIframe = () => {
    let pdfWindow = window.open("");
    pdfWindow.document.write(
      `<html>
            <iframe src="https://research.google.com/pubs/archive/44678.pdf"
     width="800px" height="600px" >
            </html>`
    );
  };

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
      <button onClick={handleIframe}>iframe</button>
    </div>
  );
}
export default ComponentC;
