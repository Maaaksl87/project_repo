import React from "react";

function EscapeKeyComponent() {
  const handleKeyDown = (event) => {
    event.key === "Escape" && alert("Ви натиснули клавішу Escape!");
  };
  return <div tabIndex="0" onKeyDown={handleKeyDown}>EscapeKeyComponent</div>;
}

export default EscapeKeyComponent;
