import { useState } from "react";
import "./Toggle.css";

export function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-wrapper">
      <button
        className={`toggle-btn ${isOn ? "isOn" : ""}`}
        onClick={() => {
          setIsOn(!isOn);
          console.log(setIsOn);
        }}
      >
        <div className="thumb"></div>
      </button>
      <span className={`${isOn ? "span-active" : "span-inactive"}`}>
        {isOn ? "Включено" : "Вимкнено"}
      </span>
    </div>
  );
}
