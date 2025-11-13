import React, { useState } from "react"; // 1. Потрібно імпортувати useState

function Sensor() {
  const [touchCount, setTouchCount] = useState(0);

  const handleTouchStart = () => {
    console.log("Element touched!");
    setTouchCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="bg-yellow-300 h-100" onTouchStart={handleTouchStart}>
      Sensor touched {touchCount} times
    </div>
  );
}

export default Sensor;
