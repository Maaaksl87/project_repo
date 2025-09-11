import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import FetchData from "./components/FetchData";

function App() {
  const [show, setShow] = useState(true);
  const [userId, setUserId] = useState(1);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>
        {show ? "Прибрати таймер" : <Timer />}
      </button>
      {show && <Timer />}
      <button onClick={() => setUserId((id) => id + 1)}>
        Завантажити наступного користувача
      </button>
      <FetchData userId={userId} />
    </div>
  );
}

export default App;
