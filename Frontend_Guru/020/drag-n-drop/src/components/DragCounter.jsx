import React, { useState } from "react";

export default function DragAndDrop() {
  const [dragging, setDragging] = useState(false);
  const [dropZoneActive, setDropZoneActive] = useState(false);
  const [count, setCount] = useState(0);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDropZoneActive(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDropZoneActive(false);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: dragging ? "blue" : "grey",
          margin: "10px",
        }}
      >
        Drag Me
      </div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={() => setDropZoneActive(false)}
        style={{
          width: "200px",
          height: "200px",
          color: "black",
          backgroundColor: dropZoneActive ? "lightgreen" : "lightgrey",
          margin: "10px",
        }}
      >
        {count} Drop Zone
      </div>
    </div>
  );
}
