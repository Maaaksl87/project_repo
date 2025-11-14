import React from "react";

function CtrlDHotkeyComponent() {
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "d") {
      event.preventDefault();
      alert("Ви натиснули комбінацію клавіш Ctrl + D!");
    }
  };
  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>
      Press Ctrl + D
    </div>
  );
}

export default CtrlDHotkeyComponent;
