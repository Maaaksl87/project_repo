import React from "react";
// import { useState } from "react";

function Mouse() {
  function handleMouseMove(event) {
    console.log(`Mouse position: (${event.clientX}, ${event.clientY})`);
  }
  return (
    <div className="h-100 w-200 bg-blue-500" onMouseMove={handleMouseMove}>
      Mouse
    </div>
  );
}

export default Mouse;
