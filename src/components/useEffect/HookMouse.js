import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePositon = (e) => {
    console.log("useEffect");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePositon);
    return () => {
      console.log("component unmounting");
      window.addEventListener("mousemove", logMousePositon);
    };
  }, []);

  return (
    <div>
      Hook X -{x} Y-{y}
    </div>
  );
}

export default HookMouse;
