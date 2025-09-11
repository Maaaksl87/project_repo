import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Прибрати таймер" : <Timer />}
      </button>
      {show && <Timer />}
    </div>
  );
}

export default App;
